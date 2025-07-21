package org.curiouslearning.ftmjshindi;

import android.content.res.AssetManager;
import android.os.Bundle;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import androidx.appcompat.app.AppCompatActivity;
import android.view.View;

import fi.iki.elonen.NanoHTTPD;
import fi.iki.elonen.NanoHTTPD.IHTTPSession;
import fi.iki.elonen.NanoHTTPD.Response;
import fi.iki.elonen.NanoHTTPD.Response.Status;

import java.io.*;

public class MainActivity extends AppCompatActivity {

    private WebView webView;
    private LocalServer localServer;
    private static final int PORT = 8080;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        WebView.setWebContentsDebuggingEnabled(true);

        setContentView(R.layout.activity_main);
        webView = findViewById(R.id.webview);

        webView.getSettings().setJavaScriptEnabled(true);
        webView.getSettings().setDomStorageEnabled(true);
        webView.setLayerType(View.LAYER_TYPE_HARDWARE, null);
        webView.getSettings().setAllowFileAccess(true);

        webView.setWebViewClient(new WebViewClient());

        File wwwDir = new File(getFilesDir(), "www");
        if (!wwwDir.exists()) wwwDir.mkdirs();

        // Copy assets preserving folder structure
        copyAssetsToStorage("www", wwwDir);

        File indexFile = new File(wwwDir, "index.html");
        System.out.println("📄 index.html exists: " + indexFile.exists() + " at " + indexFile.getAbsolutePath());

        try {
            localServer = new LocalServer(PORT, wwwDir);
            System.out.println("✅ NanoHTTPD started at http://localhost:" + PORT);
        } catch (IOException e) {
            e.printStackTrace();
        }

        webView.loadUrl("http://localhost:" + PORT + "/");
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        if (localServer != null) {
            localServer.stop();
        }
    }

    private void copyAssetsToStorage(String assetPath, File targetDir) {
        AssetManager assetManager = getAssets();
        try {
            String[] assets = assetManager.list(assetPath);
            if (assets == null || assets.length == 0) {
                // It's a file, copy it
                InputStream in = assetManager.open(assetPath);

                // Compute relative path under "www"
                String relativePath = assetPath.substring("www/".length());
                File outFile = new File(targetDir, relativePath);

                // Ensure parent directories exist
                File parent = outFile.getParentFile();
                if (parent != null && !parent.exists()) {
                    parent.mkdirs();
                }

                FileOutputStream out = new FileOutputStream(outFile);
                byte[] buffer = new byte[1024];
                int read;
                while ((read = in.read(buffer)) != -1) {
                    out.write(buffer, 0, read);
                }
                in.close();
                out.flush();
                out.close();
                System.out.println("✅ Copied file: " + outFile.getAbsolutePath());
            } else {
                // It's a directory, recurse into each child
                for (String asset : assets) {
                    copyAssetsToStorage(assetPath + "/" + asset, targetDir);
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static class LocalServer extends NanoHTTPD {
        private File rootDir;

        public LocalServer(int port, File wwwRoot) throws IOException {
            super(port);
            this.rootDir = wwwRoot;
            start(SOCKET_READ_TIMEOUT, false);
        }

        @Override
        public Response serve(IHTTPSession session) {
            String uri = session.getUri();
            if (uri.equals("/")) uri = "/index.html";

            File file = new File(rootDir, uri);
            System.out.println("🌐 Requested URI: " + session.getUri());
            System.out.println("📂 Looking for file: " + file.getAbsolutePath());

            if (!file.exists()) {
                System.out.println("❌ File not found: " + file.getAbsolutePath());
                return NanoHTTPD.newFixedLengthResponse(Status.NOT_FOUND, "text/plain", "404 Not Found");
            }

            try {
                FileInputStream fis = new FileInputStream(file);
                String mime = getMimeTypeForFile(uri);
                return NanoHTTPD.newChunkedResponse(Status.OK, mime, fis);
            } catch (IOException e) {
                return NanoHTTPD.newFixedLengthResponse(Status.INTERNAL_ERROR, "text/plain", "500 Internal Server Error");
            }
        }
    }
}
