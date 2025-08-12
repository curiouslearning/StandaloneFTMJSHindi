package org.curiouslearning.ftmjsarabic;
import android.content.Context;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.webkit.WebResourceRequest;
import android.webkit.WebResourceResponse;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import androidx.appcompat.app.AppCompatActivity;
import androidx.webkit.WebViewAssetLoader;

import org.curiouslearning.ftmjsarabic.R;

import java.math.BigInteger;
import java.security.SecureRandom;
import java.util.Calendar;
import java.util.Date;

public class MainActivity extends AppCompatActivity {

    private WebView webView;
    private SharedPreferences cachedPseudo;
    private static final String SHARED_PREFS_NAME = "appCached";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        cachePseudoId();
        webView = findViewById(R.id.webview); // Ensure you have a WebView in this layout

//        webView = findViewById(R.id.web_app);  // Make sure your layout has a WebView with this ID
        webView.setOverScrollMode(WebView.OVER_SCROLL_NEVER);
        webView.setHorizontalScrollBarEnabled(false);

        // Enable required settings
        WebSettings settings = webView.getSettings();
        settings.setJavaScriptEnabled(true);
        settings.setDomStorageEnabled(true);
        settings.setMixedContentMode(WebSettings.MIXED_CONTENT_ALWAYS_ALLOW);
        settings.setCacheMode(WebSettings.LOAD_CACHE_ELSE_NETWORK);
        cachedPseudo =getSharedPreferences(SHARED_PREFS_NAME,MODE_PRIVATE);
        // Use WebViewAssetLoader for local assets
        WebViewAssetLoader assetLoader = new WebViewAssetLoader.Builder()
                .addPathHandler("/assets/", new WebViewAssetLoader.AssetsPathHandler(this))
                .build();
        String pseudoId = cachedPseudo.getString("pseudoId","");
        System.out.println("pseudoID>> "+pseudoId);
        webView.setWebViewClient(new WebViewClient() {
            @Override
            public WebResourceResponse shouldInterceptRequest(WebView view, WebResourceRequest request) {
                return assetLoader.shouldInterceptRequest(request.getUrl());
            }
        });

        // Load the asset-based URL
        String appUrl = "https://appassets.androidplatform.net/assets/FeedTheMonsterJS/index.html?cr_lang=hindi&cr_user_id="+pseudoId;
        webView.loadUrl(appUrl);
    }
    private void cachePseudoId() {
        Date now = new Date();
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(now);
        cachedPseudo = getApplicationContext().getSharedPreferences(SHARED_PREFS_NAME, Context.MODE_PRIVATE);
        SharedPreferences.Editor editor = cachedPseudo.edit();
        if (!cachedPseudo.contains("pseudoId")) {
            editor.putString("pseudoId",
                    generatePseudoId() + calendar.get(Calendar.YEAR) + (calendar.get(Calendar.MONTH) + 1) +
                            calendar.get(Calendar.DAY_OF_MONTH) + calendar.get(Calendar.HOUR_OF_DAY)
                            + calendar.get(Calendar.MINUTE) + calendar.get(Calendar.SECOND));
            editor.commit();
        }
    }
    private String generatePseudoId() {
        SecureRandom random = new SecureRandom();
        String pseudoId = new BigInteger(130, random).toString(32);
        System.out.println(pseudoId);
        return pseudoId;
    }

}
