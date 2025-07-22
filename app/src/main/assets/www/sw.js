importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js"
);
workbox.precaching.precacheAndRoute([{"revision":"c5977ce9c754b5132685edd57010bd0a","url":"assets/audios/are-you-sure.mp3"},{"revision":"ec214e1eef89105b484900ac15d92649","url":"assets/audios/ButtonClick.mp3"},{"revision":"502d2c741145a1cae081c73a9a31adc8","url":"assets/audios/Cheering-01.mp3"},{"revision":"53a8bfd7392adf8910b433ce13ab4af0","url":"assets/audios/Cheering-02.mp3"},{"revision":"5197225d0e79a19d50e75000128fd3d2","url":"assets/audios/Cheering-03.mp3"},{"revision":"9d98684dcd9532f8631cce867fff0c13","url":"assets/audios/CorrectStoneFinal.mp3"},{"revision":"2431a6bb00bfeecfb2d5404bdd087b24","url":"assets/audios/Disapointed-05.mp3"},{"revision":"5ef47da84396ad9a4b83235b87211c04","url":"assets/audios/Eat.mp3"},{"revision":"21a9071743deb5ef58f5a44ced6ec3ac","url":"assets/audios/intro.mp3"},{"revision":"6136d62b03b9a373e45219606edbb877","url":"assets/audios/LevelLoseFanfare.mp3"},{"revision":"7c86597b8546ae3274789bf8bc1ed9a0","url":"assets/audios/LevelWinFanfare.mp3"},{"revision":"227040add97b1daecd5c21c2623e480a","url":"assets/audios/Monster Spits wrong stones-01.mp3"},{"revision":"3a43e7af253731c3e6e9d4f7c91ed7e2","url":"assets/audios/monster_discovered_fanfare.mp3"},{"revision":"64830c03d736574fe43a586e13474647","url":"assets/audios/monster_evolve.mp3"},{"revision":"227040add97b1daecd5c21c2623e480a","url":"assets/audios/MonsterSpit.mp3"},{"revision":"cf0c6919347cc45bc20028d6155aa5d7","url":"assets/audios/onDrag.mp3"},{"revision":"828da03d5334d4d2a5ef162941982807","url":"assets/audios/PointsAdd.wav"},{"revision":"3c3549c2dc141e1c08f5ccba6b3294f1","url":"assets/audios/star_whoosh_and_poof.mp3"},{"revision":"685da4a6886babc85061d0ab8224a0cf","url":"assets/audios/timeout.mp3"},{"revision":"55824fa039c80272153e42d7fd419d32","url":"assets/images/audio_icon.png"},{"revision":"7fe5017810edcafd41d12bd23c0046d6","url":"assets/images/Autumn_bg_v01.webp"},{"revision":"c1faadf17b183089038d2a6a359a67fc","url":"assets/images/Autumn_fence_v01.png"},{"revision":"862c295effcb72aac9f1a9826d3baae8","url":"assets/images/Autumn_fence_v01.webp"},{"revision":"86393c975f42233b8548e6dcb844c0c7","url":"assets/images/Autumn_FG_v01.png"},{"revision":"2c8c0d05efda1d7c0d8c4b4c2dfdca06","url":"assets/images/Autumn_hill.webp"},{"revision":"f3187610fd203a4e83f1a6ca42b92701","url":"assets/images/Autumn_sign_v01.png"},{"revision":"7432f4abb9a3a9a0270c45581f7ed2a8","url":"assets/images/Autumn_sign_v01.webp"},{"revision":"149366182632906a4427aac25a26b448","url":"assets/images/back_btn.svg"},{"revision":"012db69330eca06e028a176a01e7e207","url":"assets/images/bar_empty_v01.svg"},{"revision":"9fd813b25451ed712b39bb19ecd942c8","url":"assets/images/bar_full_v01.svg"},{"revision":"8392633b41bc6a1c95d29c9f2ddb845f","url":"assets/images/bg_v01.webp"},{"revision":"231844adeb1dbba897e2e30d6f657e90","url":"assets/images/close_btn.svg"},{"revision":"93324625f6b250c840a4c845d6a4d195","url":"assets/images/cloud_01.png"},{"revision":"0208ccae7af055011d300e720b03a0ed","url":"assets/images/cloud_02.png"},{"revision":"2d17eefbe310cc0c68f15942e8fc2b7c","url":"assets/images/cloud_03.png"},{"revision":"58d8b3a59a93b57f4f0f9281cd9f97e2","url":"assets/images/confirm_btn.svg"},{"revision":"862d49036360e77e5086a4c1e1a5b12b","url":"assets/images/drag11.png"},{"revision":"ce98c9e785191b4b5dec43d9c42a1943","url":"assets/images/drag12.png"},{"revision":"3242e6a9486af3aa13d11fc56aa396a5","url":"assets/images/drag13.png"},{"revision":"6577a2f8480fd3c9e5907aad8078367c","url":"assets/images/drag14.png"},{"revision":"b653a7ca1a76b27b9f648b2595997691","url":"assets/images/eat11.png"},{"revision":"c48c407dcd6d835af787f78676125925","url":"assets/images/eat12.png"},{"revision":"eccaa95cdb97eda5fa1c019f18d616cc","url":"assets/images/eat13.png"},{"revision":"83a2679d95f81b6c55597b68a178c611","url":"assets/images/eat14.png"},{"revision":"34660bc9a2ac6065804aa1a68e80fc3b","url":"assets/images/favicon.png"},{"revision":"08c13cf2d001c34a061bc50569aa9a70","url":"assets/images/fence_v01.webp"},{"revision":"a267e28cb011391c1df9d59f8f2b5795","url":"assets/images/FG_a_v01.png"},{"revision":"d6ac191de224ec4be62cd9b639b17e9e","url":"assets/images/ftm_bonus_level_monsters.png"},{"revision":"88191ea3184553a3c61342be81a3de4e","url":"assets/images/happy11.png"},{"revision":"a4d0ffff34fa52231965cedff12b7719","url":"assets/images/happy12.png"},{"revision":"110844874baac6a2ba2b814e11f46a2a","url":"assets/images/happy13.png"},{"revision":"f9e96cc182dc3d2b4df737eff3f6b75f","url":"assets/images/happy14.png"},{"revision":"b8e4926547b8f91bf991ba9d202bf97f","url":"assets/images/hill.webp"},{"revision":"63beece149302bc8ce50401afb098811","url":"assets/images/idle11.png"},{"revision":"1347d43e37481de1101b574ed3892fe6","url":"assets/images/idle12.png"},{"revision":"c9885ccbfd7600374a41dea8605b216f","url":"assets/images/idle13.png"},{"revision":"31d4bea6474f82d2939d48e319e27337","url":"assets/images/idle14.png"},{"revision":"d3316f6e45930df8cdb01f0dbe2aa26c","url":"assets/images/idle4.png"},{"revision":"3f7a3e104df6cfbd2f40ebcc8fa124df","url":"assets/images/levels_v01.svg"},{"revision":"38e43cd7b492b624fc3da67dea7b0433","url":"assets/images/loadingImg.gif"},{"revision":"29235ccc2e6f38bfdc4e8ee0fa48d59a","url":"assets/images/map_btn.svg"},{"revision":"1e1b92917545e87ccf9fb8faa7d02044","url":"assets/images/map_icon_monster_level_v01.png"},{"revision":"e708d01e8794e06d918c1408e69feff5","url":"assets/images/map_icon_monster_level_v01.webp"},{"revision":"76f43b471d06617a870d3334cc555aa4","url":"assets/images/map.webp"},{"revision":"74c001286f2df47d9be71f85799da028","url":"assets/images/mapIcon.png"},{"revision":"d6ee4e553124d0746460e54ec2f540d5","url":"assets/images/mapIcon.webp"},{"revision":"c312ed45360c23d5302c7eca60acaf2d","url":"assets/images/mapLock.png"},{"revision":"aadabeedb05b52faeddeae142e84505c","url":"assets/images/mapLock.webp"},{"revision":"a32ee1c74c16bc98a6b467990984bdfb","url":"assets/images/next_btn.svg"},{"revision":"efe6052a8772b59f1b8df144ae54ede8","url":"assets/images/Pause_Button.svg"},{"revision":"178ab1569622719b2d1fa7677f64bcf6","url":"assets/images/phaseBackground_1.webp"},{"revision":"7c428669e49bf5200127be6463b97cfe","url":"assets/images/phaseBackground_2.webp"},{"revision":"d7b6ae972a2793da95d5b955a8d9e04c","url":"assets/images/phaseBackground_3.webp"},{"revision":"d41634fb17b2125c697992b2ed9b6e75","url":"assets/images/phaseBackground_4.webp"},{"revision":"ba881075a1d7a2e39b4ec0b1d8cdc5d0","url":"assets/images/Pink_Stone.svg"},{"revision":"27aace8500cbd5edd7d5695fb1c94cf0","url":"assets/images/pinStar1.svg"},{"revision":"908084c485a4c43bab1a7e99a9773e70","url":"assets/images/pinStar2.svg"},{"revision":"48510ecc390ae19223d1feeddb9f93cd","url":"assets/images/pinStar3.svg"},{"revision":"77ac50f247916fe7f08bf5271e051a7b","url":"assets/images/Play_button.svg"},{"revision":"ae67f0900ae7aced372244ee69853cb7","url":"assets/images/popup_bg_v01.svg"},{"revision":"dc1ad264fb93f4551fabc9afb8c0f705","url":"assets/images/Prompt_Text_BG.svg"},{"revision":"07208f75d6caa1e1dddf65d7d3dd5088","url":"assets/images/promptPlayButton.png"},{"revision":"618714f510d475a8f1e66e62cccfb874","url":"assets/images/promptPlayButton.webp"},{"revision":"3a63488c385154bd537b889d4496543f","url":"assets/images/retry_btn.svg"},{"revision":"e7d070072a84c81493d34fbcb9d56a05","url":"assets/images/sad11.png"},{"revision":"562dd11921b6ef4883f72e0965dbd271","url":"assets/images/sad12.png"},{"revision":"43b013bf5367385326d1f0d1729bde50","url":"assets/images/sad13.png"},{"revision":"a6f030e270350c7d3528887091713904","url":"assets/images/sad14.png"},{"revision":"6736c9d8a52dc1a2d9eb69bdf79d3c96","url":"assets/images/score_v01.png"},{"revision":"82a054d2def94b7313fe16acd1d1aaa1","url":"assets/images/spit11.png"},{"revision":"0208212ec260f5a4a259ccb5c8fe9d85","url":"assets/images/spit12.png"},{"revision":"bd4e366359de6d4c847672ef20b9b5f6","url":"assets/images/spit13.png"},{"revision":"ee6e8131c5146107bd00f74cec3d1954","url":"assets/images/spit14.png"},{"revision":"ad3037a2f54a38e25b216512a523f6bc","url":"assets/images/star.png"},{"revision":"3dca5c6ea60282fae30e617f761e131a","url":"assets/images/star.webp"},{"revision":"80e3f39ff0fdd17298b7871fbf7456a2","url":"assets/images/stone_pink_v02.png"},{"revision":"a125a16dfe040421e67c7bb41a14f698","url":"assets/images/stone_pink.webp"},{"revision":"c8678ceb056bdf8ff3d61a4ad24a4289","url":"assets/images/timer_emptynew.svg"},{"revision":"a0daffbd1cf6fd94e7c761bf442ca029","url":"assets/images/timer_emptynew.webp"},{"revision":"9170815a5ed09f4c3bcfde9497710d5b","url":"assets/images/timer_new.svg"},{"revision":"64a325ee680c6b13a4b6864fa08720b6","url":"assets/images/Totem_v02_v01.webp"},{"revision":"9c97f903ac3866d1519faa3a6ca63b6f","url":"assets/images/tree-log.svg"},{"revision":"8b779c7507a2d179dbddd9bb0979467b","url":"assets/images/tutorial_hand.png"},{"revision":"1f595b4536690a11a733a73563c9974a","url":"assets/images/tutorial_hand.webp"},{"revision":"658f5531c9ebe5b76c50588fa7af3c67","url":"assets/images/WIN_screen_bg.webp"},{"revision":"cb57cbdf0504c38b0ac08890c13a8e8a","url":"assets/images/Winter_bg_01.webp"},{"revision":"fed8afe3c6d3b19c839d9c5211b93b3c","url":"assets/images/Winter_fence_v01.webp"},{"revision":"9aecfbcf79160ce6d50860feda240fdf","url":"assets/images/Winter_FG_v01.png"},{"revision":"7610e39767c77cc156fbaa8817a5423b","url":"assets/images/Winter_hill.webp"},{"revision":"9cb87e28c648d10bb283b5aa73a05ce8","url":"assets/images/Winter_sign_v01.webp"},{"revision":"a419b114bf4d42e07060d39074a13088","url":"assets/rive/adultmonster.riv"},{"revision":"b146d46035fbf115ea91b4c3ea0571a6","url":"assets/rive/eggmonster.riv"},{"revision":"fed09e47a0620a71a140e89217a1c876","url":"assets/rive/ftm_monster_evolve1-2.riv"},{"revision":"247c6dab1526e6d4f31dc65dc0e55c92","url":"assets/rive/ftm_monster_evolve2-3.riv"},{"revision":"bf3d7a221523b3ef44d063334c1f95d8","url":"assets/rive/ftm_monster_evolve2-4.riv"},{"revision":"2c7734dba78692f2853ade5cd1184ac7","url":"assets/rive/ftm_monster_evolve3-4.riv"},{"revision":"5de1ad8ffa83a36333a033f93c2a286e","url":"assets/rive/hatchedmonster.riv"},{"revision":"ed7ced36ec6a9c8833ef35255b3d3f6a","url":"assets/rive/phase1Monster.riv"},{"revision":"d2c9cbb13b6e5eaf4f5e1a5d0d070c3e","url":"assets/rive/phase2Monster.riv"},{"revision":"d02da42a0bf571ee1d93aed1858416c8","url":"assets/rive/phase4Monster.riv"},{"revision":"af65cbfff13f8031ee1563c2cb40b340","url":"assets/rive/rive.wasm"},{"revision":"ca97a1cba6356a316056752a348097f6","url":"assets/rive/youngmonster.riv"},{"revision":"d7d97c3f3a8ca17dfc13ec82e22b25c8","url":"feedTheMonster.js"},{"revision":"0aa2c4a8138e7e346a4ee3acfb7f7992","url":"index.css"},{"revision":"7b86de2b98e7c0938ec227d5deb755fe","url":"index.html"},{"revision":"b0d433f5b41b717460c677da1994abdd","url":"lang/afrikaans/ftm_afrikaans.json"},{"revision":"4c4b5858befdc1b28ef4c67574beafa4","url":"lang/amharic/ftm_amharic.json"},{"revision":"e5c9c0fd1319ccb3288d8bdc490b723f","url":"lang/arabic/ftm_arabic.json"},{"revision":"2b24a6b70240dc23cfefbf97bc34a7c4","url":"lang/australianenglish/ftm_australianenglish.json"},{"revision":"17e184abfad696f749359fbb5a870ffc","url":"lang/azerbaijani/ftm_azerbaijani.json"},{"revision":"d8f734b67a3be8d2bd4efb67dea96305","url":"lang/bangla/ftm_bangla.json"},{"revision":"aed23e95dfa9e50748e0967ee1466760","url":"lang/brazilianportuguese/ftm_brazilianportuguese.json"},{"revision":"a195a5d6e6ba4e174da4c2ce91bb09b1","url":"lang/caboverdecreole/ftm_caboverdecreole.json"},{"revision":"7bdd02da4f57311a23275230df9dde27","url":"lang/caboverdeportuguese/ftm_caboverdeportuguese.json"},{"revision":"30dc47676d62c7950a59aa052197b1b9","url":"lang/english/ftm_english.json"},{"revision":"949500ee0784e647f7630659bc19947c","url":"lang/englishwestafrican/ftm_englishwestafrican.json"},{"revision":"133e123dd5fe2c175270a159332d1495","url":"lang/farsi/ftm_farsi.json"},{"revision":"019f1e4acdb21d38ff5e1f347d75060a","url":"lang/french/ftm_french.json"},{"revision":"7690f722ab29c00aafd999808cf17fb0","url":"lang/georgian/ftm_georgian.json"},{"revision":"3c3b34b52c02691c9104d2a3176f5394","url":"lang/gujarati/ftm_gujarati.json"},{"revision":"a0be319ed5d6358ec7f78681525644c3","url":"lang/haitiancreole/ftm_haitiancreole.json"},{"revision":"a0743f849fe83ad641b88bde6a5b298e","url":"lang/hausa/ftm_hausa.json"},{"revision":"bd9103fe2d0bcddebcbc4c98b9d3d599","url":"lang/hindi/ftm_hindi.json"},{"revision":"d8d6f048fbb7f64e619df617a63b7f4c","url":"lang/igbo/ftm_igbo.json"},{"revision":"043cbae6caf9925f03ccacbae59ed79e","url":"lang/indianenglish/ftm_indianenglish.json"},{"revision":"5dd1a29383def5bd4a2ba88d2bfb55f1","url":"lang/isixhosa/ftm_isixhosa.json"},{"revision":"3e615bc55be027e66c1a848ad92e1a5b","url":"lang/javanese/ftm_javanese.json"},{"revision":"25aefb5153d156f1d6f76025b34d31ac","url":"lang/kannada/ftm_kannada.json"},{"revision":"b9139d28b3a4f6c85e5e6b98f5898451","url":"lang/kinyarwanda/ftm_kinyarwanda.json"},{"revision":"e45567e9278bbe337f8e2f66eb1ebdee","url":"lang/kirundi/ftm_kirundi.json"},{"revision":"c371f09d63235f38a6a0cf98b6b0d44b","url":"lang/kurdish/ftm_kurdish.json"},{"revision":"dea6bc87764fc8f6e5e6e91830518dfb","url":"lang/lugandan/ftm_lugandan.json"},{"revision":"1627f7cbc4027107f60d07405cd6eca4","url":"lang/malay/ftm_malay.json"},{"revision":"8454f89feb41354347eb7afc1e549f11","url":"lang/malgache/ftm_malgache.json"},{"revision":"36ab849243de47956a96445344be02cc","url":"lang/marathi/ftm_marathi.json"},{"revision":"f34727d69f42de30fa22cdae05219a17","url":"lang/mixe/ftm_mixe.json"},{"revision":"ccce1962f187dbd80ef2c4354c456d2f","url":"lang/ndebele/ftm_ndebele.json"},{"revision":"e576907c034c9adaaf59d7379fc9a4d8","url":"lang/nepali/ftm_nepali.json"},{"revision":"893beac1c67a02854d1b9b2e8142ba58","url":"lang/oromo/ftm_oromo.json"},{"revision":"3aefbaa7f5f2d999a226c296034e11f6","url":"lang/pashto/ftm_pashto.json"},{"revision":"0e7a8f6894dd993d1c8a927265270395","url":"lang/punjabi/ftm_punjabi.json"},{"revision":"26d4abd82ba43b8f0ca4f66974b217a0","url":"lang/sepedi/ftm_sepedi.json"},{"revision":"ff39a3c7a56ba4b393eb1aedcee07090","url":"lang/sesotho/ftm_sesotho.json"},{"revision":"47a125727a4fc4fdb4099ebc5a2e2807","url":"lang/shona/ftm_shona.json"},{"revision":"601558517df609a69bcc83524f2fe6bd","url":"lang/siswati/ftm_siswati.json"},{"revision":"03d335e76e656287797f01d813f71664","url":"lang/somali/ftm_somali.json"},{"revision":"ef6ec6cf2175ca7fc02444551fa9d5ec","url":"lang/southafricanenglish/ftm_southafricanenglish.json"},{"revision":"f1ebfe0def7be2d5f47175977f7100b3","url":"lang/spanish/ftm_spanish.json"},{"revision":"0013a49c9c1bd84ddb18b2d4bd316270","url":"lang/swahili/ftm_swahili.json"},{"revision":"35f9e44840a9eec78b20536449d0434d","url":"lang/tagalog/ftm_tagalog.json"},{"revision":"4084827d1213bd6f9285e80216ef24e3","url":"lang/tajik/ftm_tajik.json"},{"revision":"1f8c18f2a3c268fa6f7dc5d9f0e5f071","url":"lang/tamil/ftm_tamil.json"},{"revision":"f4d73fdd557ab39c12bc248b6df63b59","url":"lang/telugu/ftm_telugu.json"},{"revision":"dcdc2ea95d6af569acdd5735058a3cc6","url":"lang/thai/ftm_thai.json"},{"revision":"3c51b75c0609ff0776f968176ba5beaa","url":"lang/tigragna/ftm_tigragna.json"},{"revision":"c4f14ba8ec9dd2c1fbed5ce71e71281b","url":"lang/tsonga/ftm_tsonga.json"},{"revision":"18f5f80c6b21babd863c869474fb9cf3","url":"lang/tswana/ftm_tswana.json"},{"revision":"c74eea9181e7d2ccdb7b72b712ecf06e","url":"lang/turkish/ftm_turkish.json"},{"revision":"6b00e8842dd95d843cfa27a547821b81","url":"lang/twi/ftm_twi.json"},{"revision":"1e15e5c087b7adca9347b31eefd7d45d","url":"lang/ukrainian/ftm_ukrainian.json"},{"revision":"c3cec59e7ae85123ff3684942f1ccc9a","url":"lang/venda/ftm_venda.json"},{"revision":"cae50f38ba765eee32b0932adc8da1a0","url":"lang/vietnamese/ftm_vietnamese.json"},{"revision":"5633a1c513e1a55aa51d01346a5933cb","url":"lang/wolof/ftm_wolof.json"},{"revision":"be588abbc6c7a5f5381f35de80e8115d","url":"lang/yoruba/ftm_yoruba.json"},{"revision":"8c3277d7fc9759623c9d3506b1ebe088","url":"lang/zulu/ftm_zulu.json"},{"revision":"6d95fdfe59085b9fab44517841338494","url":"manifest.json"}], {
  ignoreURLParametersMatching: [/^cr_/],
  exclude: [/^lang\//],
});
var number = 0;
var version = 1.26;
// self.addEventListener('activate', function(e) {
//     console.log("activated");
//
// });

self.addEventListener("install", async function (e) {
  self.skipWaiting();
  e.waitUntil(preloadAdditionalAssets()); // Preload specific assets during the install event
});
const channel = new BroadcastChannel("my-channel");
self.addEventListener("activate", function (event) {
  event.waitUntil(self.clients.claim());
});
channel.addEventListener("message", async function (event) {
  if (event.data.command === "Cache") {
    number = 0;
    await getCacheName(event.data.data);
  }
  if (event.data.command === "CacheUpdate") {
    caches.delete(workbox.core.cacheNames.precache + event.data.data);
    await getCacheName(event.data.data);
  }
});

self.registration.addEventListener("updatefound", function (e) {
  caches.keys().then((cacheNames) => {
    cacheNames.forEach((cacheName) => {
      if (cacheName == workbox.core.cacheNames.precache) {
        // caches.delete(cacheName);
        self.clients.matchAll().then((clients) => {
          clients.forEach((client) =>
            client.postMessage({ msg: "Update Found" })
          );
        });
      }
    });
  });
});

// Preload additional assets
async function preloadAdditionalAssets() {
  const assetsToCache = [
    "/assets/rive/ftm_monster_evolve1-2.riv",
    "/assets/rive/ftm_monster_evolve2-3.riv",
    "/assets/rive/ftm_monster_evolve3-4.riv",
    "/assets/rive/eggmonster.riv",
    "/assets/rive/hatchedmonster.riv",
    "/assets/rive/youngmonster.riv",
    "/assets/rive/adultmonster.riv",
    "/assets/rive/rive.wasm",
  ];
  const cache = await caches.open("dynamic-cache");

  try {
    await Promise.all(
      assetsToCache.map(async (url) => {
        const response = await fetch(url);
        if (response.ok) {
          await cache.put(url, response.clone());
          console.log("Cached additional asset:", url);
        } else {
          console.error("Failed to fetch additional asset:", url);
        }
      })
    );
    console.log("All additional assets preloaded successfully.");
  } catch (error) {
    console.error("Error preloading additional assets:", error);
  }
}

async function cacheLangAssets(file, cacheName) {
  const cache = await caches.open(cacheName);
  const cachedResponse = await cache.match(file);

  if (!cachedResponse) {
    await cache.add(file);
    console.log('Cached File:', file);
  } else {
    console.log('File already cached, skipping:', file);
  }
}
async function getCacheName(language) {
  await caches.keys().then((cacheNames) => {
    cacheNames.forEach(async (cacheName) => {
      await getALLAudioUrls(cacheName, language);
    });
  });
}

async function getALLAudioUrls(cacheName, language) {
  let audioList = new Set(); // Use Set to filter duplicates
  let testURL = "https://globallit-aws-s3-static-webapp-test-us-east-2.s3.us-west-2.amazonaws.com/feed-the-monster";
  // let testURL = "http://127.0.0.1:5500";
  audioList.add(`/lang/${language}/ftm_${language}.json`);
  fetch(`./lang/${language}/ftm_${language}.json`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) =>
    res.json().then(async (data) => {
      await cacheFeedBackAudio(data.FeedbackAudios, language);

      for (const level of data.Levels) {
        for (const puzzle of level.Puzzles) {
          let file = puzzle.prompt.PromptAudio;

          audioList.add(
            self.location.href.includes("https://feedthemonsterdev.curiouscontent.org")
              ? file.slice(0, file.indexOf("/feedthemonster") + "/feedthemonster".length) +
              "dev" + file.slice(file.indexOf("/feedthemonster") + "/feedthemonster".length)
              : self.location.href.includes(testURL)
                ? file.replace("https://feedthemonster.curiouscontent.org", testURL)
                : file
          );
        }
      }
      if (self.location.href.includes(testURL)) {
        audioList.add(`${testURL}/lang/${language}/ftm_${language}.json`);
      }
      cacheAudiosFiles(Array.from(audioList), language); // Convert Set back to array
    })
  );
}

async function cacheAudiosFiles(audioList, language) {
  const uniqueAudioURLs = [...new Set(audioList)]; // Ensuring the audioList has only unique values
  const percentageInterval = 10;
  const partSize = Math.ceil(uniqueAudioURLs.length / percentageInterval);
  const delayBetweenRequests = 800;
  const timeoutMultiplier = 0.6; // Adjust multiplier based on device performance
  const timeoutValue = 3000; // Adjust timeout value as needed (in milliseconds)

  for (let i = 0; i < percentageInterval; i++) {
    const startIndex = i * partSize;
    let endIndex = startIndex + partSize;
    if (i == percentageInterval - 1) {
      endIndex = uniqueAudioURLs.length;
    }
    const part = uniqueAudioURLs.slice(startIndex, endIndex);

    try {
      const cache = await caches.open(language);
      const timeoutPromises = part.map(async (url) => {
        try {
          const timeoutPromise = new Promise((resolve, reject) => {
            const timeoutId = setTimeout(() => {
              clearTimeout(timeoutId);
              reject(new Error("Timeout while caching audio: " + url));
            }, timeoutValue * timeoutMultiplier);
          });
          console.log('Cached Audio files:', url);
          return Promise.race([timeoutPromise, cache.add(url)]);
        } catch (error) {
          console.error('Error caching audio:', url, error);
        }
      });

      await Promise.all(timeoutPromises);
    } catch (error) {
      console.error('Could not add audios:', error);
    } finally {
      await channel.postMessage({
        msg: "Loading",
        data: Math.min((i + 1) * percentageInterval, 100),
      });
    }

    await new Promise(resolve => setTimeout(resolve, delayBetweenRequests));
  }
}


async function cacheCommonAssets(language) {
  const assetUrls = [
    `./lang/${language}/audios/fantastic.WAV`,
    `./lang/${language}/audios/great.wav`,
    `./lang/${language}/images/fantastic_01.png`,
    `./lang/${language}/images/great_01.png`,
    `./lang/${language}/images/title.png`,
  ];

  const timeoutMultiplier = 1; // Adjust multiplier based on device performance
  const timeoutValue = 4000; // Adjust timeout value as needed (in milliseconds)

  try {
    const cacheName = language;
    const cache = await caches.open(cacheName);

    const timeoutPromises = assetUrls.map((url) => {
      return new Promise((resolve, reject) => {
        const timeoutId = setTimeout(() => {
          reject(new Error("Timeout while caching audio: " + url));
        }, timeoutValue * timeoutMultiplier);
        console.log('Cached Asset:', url);
        cache.add(url)
          .then(() => {
            clearTimeout(timeoutId);
            resolve();
          })
          .catch((error) => {
            clearTimeout(timeoutId);
            reject(error);
          });
      });
    });

    await Promise.all(timeoutPromises);
  } catch (e) {
    console.log('Could not open cache:', e);
  }
}

async function cacheFeedBackAudio(feedBackAudios, language) {
  let testURL = "globallit-aws-s3-static-webapp-test-us-east-2.s3.us-west-2.amazonaws.com";
  // let testURL = "127.0.0.1:5500"
  const audioUrls = [...new Set(feedBackAudios.map(audio => {
    if (self.location.href.includes("feedthemonsterdev")) {
      return audio.replace("/feedthemonster", "/feedthemonsterdev");
    } else if (self.location.href.includes(testURL)) {
      return audio.replace("https://feedthemonster.curiouscontent.org", "https://globallit-aws-s3-static-webapp-test-us-east-2.s3.us-west-2.amazonaws.com/feed-the-monster");
      // return audio.replace("https://feedthemonster.curiouscontent.org", "http://127.0.0.1:5500"); 
    } else {
      return audio;
    }
  }))];

  const timeoutMultiplier = 0.6; // Adjust multiplier based on device performance
  const timeoutValue = 3000; // Adjust timeout value as needed (in milliseconds)

  try {
    const cacheName = language;
    const cache = await caches.open(cacheName);

    await Promise.all(audioUrls.map(async (url) => {
      try {
        const timeoutPromise = new Promise((resolve, reject) => {
          const timeoutId = setTimeout(() => {
            clearTimeout(timeoutId);
            reject(new Error("Timeout while caching audio: " + url));
          }, timeoutValue * timeoutMultiplier);
        });

        await Promise.race([timeoutPromise, cache.add(url)]);
        console.log('Cached Feedback audio:', url);
      } catch (e) {
        console.log('Error caching audio:', url, e);
      }
    }));
  } catch (e) {
    console.log('Could not open cache:', e);
  }
}


self.addEventListener("fetch", function (event) {
  const requestUrl = new URL(event.request.url);
  if (requestUrl.searchParams.has('cache-bust')) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        return response;
      }

      return fetch(event.request).catch(function () {
        // If the fetch fails (like when offline), return a fallback response
        return new Response('Network unavailable in sw', { status: 503 });
      });;
    })
  );
});

