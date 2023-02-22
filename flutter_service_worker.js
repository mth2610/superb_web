'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "e02c8a60b9dbd31369d99793792ca89b",
"index.html": "c15b2e6bc2bad318eb3ed4f81538f00c",
"/": "c15b2e6bc2bad318eb3ed4f81538f00c",
"main.dart.js": "6c90f3c26da96fb8dc563247760d855b",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d3e8be9819697c196251e6e977053336",
".git/config": "c93461da24098c6733947e40403753d2",
".git/objects/0d/af26a480d24cf011cd8dd56e3f594f98515277": "3fbbc6f8e5eea84ad2e3ee2a54d4cc82",
".git/objects/59/61b229259de3b6d27194d07927b1a39207d6b0": "0bd351bc5552684a48f92827ca80bf61",
".git/objects/50/59dd57e4698c44a7f905c43bffe25e918c9293": "0b7555525761b72ee12442b471c71a23",
".git/objects/03/3bcf2c4aac6cfc87d7667c889da34dc6f73d01": "60df40d6011a6e22812801a9235d9e31",
".git/objects/35/78b927b654d33e5daf0e6882f687e3aa2ec5dd": "6cbe7ea3e17a90f3b523de1cc96844fb",
".git/objects/69/f7a3a8781cf31f400e5b27f96675c721c756df": "ce3684ceabc6ca2bf64b0f779e323d6e",
".git/objects/3c/484f4d92e6009999c056e1d7fdff17caf85437": "83c0940394c2688e5bbee2602f878031",
".git/objects/56/79692f371caa0200d0fb137bf6d035aeb96987": "5208ce5ac02f9149deca159b30b0daf1",
".git/objects/51/102cbf22f2ad4f37b082dd058a2bd7372945b4": "98b9595614772f4dfb20d4a0bb913206",
".git/objects/58/598181b971aa29ba3e5e932ce19ad71cc7258e": "1aec29391df849c55779704e3dec74a1",
".git/objects/93/8144b2e35f0ec3ead79ba14a173cc6849bf08c": "93bebd925e90f5abd90d5248829a5544",
".git/objects/0e/ec639242b965c6cb74756c04ba8a8ef33b2ed6": "231a30678e32048cba36cf4cd77c53dd",
".git/objects/34/065c857b706758f75922bce7c486347ade6968": "09418e600b142e0e3328ab412988caf5",
".git/objects/33/d4326ab1e52ecbeed333c26cde5cf828435106": "e701ad71448252fede29620bf90570ec",
".git/objects/9c/339ee0bf04d3bd31f6c8d56e0fc87b510bfb0f": "bb760ad0f6e540d216de1be3b201f802",
".git/objects/a4/3475bdd20c95617d81ff63112644a612cda6ef": "5dcd4a2d318afc5a80e0e1b06527ba9d",
".git/objects/b5/c5c3b1a63aad50ef0189f276edf4cf92f8f378": "cefe370f2d964a9c87f88b1ce4012599",
".git/objects/b5/cb1b1e1e39e30a8a8e2597a25ee780ca28157e": "b32df373f29e008f1346ea9ee210f463",
".git/objects/bd/22efedfb046c7940b46ee6908aacf8c571396b": "8ea74cd4e5eb2dfd925fed64d4e679d5",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c0/54c0727351e71fe3548e70a0546e8a96d66d99": "955814150432ccd52f690ed5e8329fd8",
".git/objects/c9/5c82411bf02c764bc33021728fb31dfe1cd2db": "9a34d75e3d6832c23b9c6f051b66ecc9",
".git/objects/cf/e79c378fd9e4a50f0bbd559fecc501d055479c": "c8c6a5e0ef282e1b2487614727535d8e",
".git/objects/27/84578de1eed507d1c94286585564222339e72c": "ba0a131816f7699c2313c0823059f2b9",
".git/objects/27/e7366532a71701aab4a84c0988d8cdf2fd7c9a": "eb5f18aa75097cce1863bab53b195366",
".git/objects/7d/25af2e40464ef5274321b8610573f9757109fd": "a732631eb1a1bd678fb8f273e62acf0c",
".git/objects/7d/7a7fd4c031d23d44c37eff48ddf34d0e3e9c6a": "aed18dee4265e5c47ee391b1a7c78b9d",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/73/d6ccf26c0a9987515efc82fed7af87941aea98": "1a9c0d1739feada7a2711365f0b8f02b",
".git/objects/87/80f9437428ee28b62b16adbcf98d1fd29f7484": "2e2cb52c6f96a2e470b7253836fd5334",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/28/a01d7a3554a98fee28de7429d937e5f964c6c9": "d5d4212908f9e0d7245f2ae1e5cb77e0",
".git/objects/17/2ca8256ec7c7d4519f5c1628825d2fa3bf1519": "55bc8f0d3e173de23ad84fcef05fd9fb",
".git/objects/8f/7bc844693565f22a6ac240fdc2d2e6522c340c": "907aba38263219a0d9b7925b12645cc2",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/68ce4d9ae9ea996363d59cd9233c9a70339bb6": "76ea66a187ab17421c53980123886508",
".git/objects/75/7e21ee3aacb98b80dc23ecede5673e92cd6688": "a5ce478ab98405b51bde734c9b693030",
".git/objects/2a/c088bc7e94c8feff46311be0ce6c1cec8b772d": "cad7eec43cb798afd16b0d0fb670beb9",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/455d9529aa398b08b65fdf9fbf64493821ea89": "f8f8bfb0f335b29dd900c0085337e364",
".git/objects/38/83fbd31e3a18075fda658715d43b63affd1520": "29b2231c5f9b8646ce53d76a5faf0fab",
".git/objects/9a/27a18f5717dfdaf11b27ae5a166d29d4fd51c7": "9c8c320883074f7252c95ddc97ae108e",
".git/objects/36/0c109fdf7ef3a45a27e2bad3e065256b1c8fd7": "e44a354dfd1533ec0d9acdbc6cbe25d3",
".git/objects/91/6ddda7cea4294aeddac52d53c649e5e419761e": "2b8886b1960017f4eebdf41b9c1e7391",
".git/objects/65/755465a2e09982867069afe6fb2af9ef602278": "097bcef64541156469d698863447fcb7",
".git/objects/65/ab3eefec7e9118e71b78d22e55ff9bef7a4775": "ace51e05bcd569d8e3df2a09d060e201",
".git/objects/65/41e9d87e656f7b341c853abb4ced9a6397ef39": "e73ebf51faff6dfce005f934b38c2ed4",
".git/objects/3f/89e19818474288906545c069969d125a54cae3": "4891938b3fdbc6627398a1f889b2aa59",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/5e/4bb7ca0b96ceea18df97a618bdbc838e9ed926": "73113a1cbbefcff7c07bbc569c909cc1",
".git/objects/08/3f86ce0f5a4b049b032c530f6c3a90922e4e31": "6851ad49483674181353bd3fa93ec400",
".git/objects/39/29092431b590c84b9a5436a006a4140f4097d7": "b81cb9584016ad2995c85866a9f84825",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/64/25d99ac10156ade3036a7652c624daca037fce": "1fc275ed779b9f8aece31fe42259be00",
".git/objects/90/099092b1ec1620b6e2559c953a341048679dbe": "f2aeb6853c74a6c9d114e1a217b8a6bd",
".git/objects/d4/54d1aee12b14b1705c929825370b536646f047": "e305991da5062295ed04782d5a019e3c",
".git/objects/a7/dbd260ea08bf7542d9e1bf19200881900ee3cd": "832fd1dad03a5bb4dbff72906e775a6a",
".git/objects/a7/4deae4d35cd61ca646f0e5d5a66c535dc53790": "c8bc3dea53b4dc0688045175cc6e3c91",
".git/objects/b8/f9099746cc24f13622184bf90f8e012e179841": "9459bcd66346804a15f985206b15e981",
".git/objects/b1/1cb0a9a1f5a015847c1f9812e98dee2d3ebce6": "220c9e31ee75cf9a3c1dacded3ba5b5d",
".git/objects/dc/121e45c468db9f989045fb05461c51fc45fe7c": "da35b6e27705377b2d8c375b6b227022",
".git/objects/af/85861aa674ede1a0a4465c7be5c29a96af6bae": "949c106ad9a63d43136efdd70569345c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/a6/e619acd78660d1d178cf359e02065bb9ce31a4": "be2bf3e86a89e6d811e56a78ae9aea06",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/56d813c8a397d7ed06840bdb78b0814c5195cf": "0962b9188afe4ba188daff8ea5dca344",
".git/objects/a1/9c12a5a4a223e998f7b22149b70f1c103b8ee9": "8e0ccbc903d767fa933d6f3d1ed65601",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/f9/29c28d3c7b83bc54fb011db03dd038cccbd523": "125ed82ba57c019efbf069a910e667be",
".git/objects/c2/daa283d5a1550cb410db70f2d147d5364e6651": "ef58c79e118d66011038f0b0f195d327",
".git/objects/e7/fd20a290940a795ed66392fdc12d6b99769005": "aa433299df6a9c3bd776e403530a887f",
".git/objects/cb/aa44912dcc32a64a9d0f8fd71b70572efd33a9": "4cc8aef2c032241bbb9980ce3bc7b831",
".git/objects/f8/4770103a50dcdd91474cef10c0e73188d4d106": "751365b7ce052e129cdb77e9486b627f",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/030aa007e81af69cbeb7d1d5d915bbca79a053": "527f33bb9587b646f5bac9544d8557f1",
".git/objects/48/863f4c70f7b67b8444537bb3bf8542530f98b0": "a27b8def0fdfaf4a6c152f1dd9dc780f",
".git/objects/1e/45f8bd3cef53e0d62d5d86ea0a5bfd14799b4b": "4cec51b0d4a95397b390c975c2b00192",
".git/objects/15/abbfa9930104b6968631631fecb1441e73a6a1": "2bb751218bd9cb41ae4a5a16bed34c49",
".git/objects/8c/e3ac577bf109f4a92f1d9a7eadae555ebdd547": "e2ecdf698e63c68a114a3f66f203f72d",
".git/objects/8c/a434426e55228f4d836b0a6561626f1794687d": "dd7ed260e696d528f48886a1c82eab3c",
".git/objects/85/dcd801fdb8799e72aac225779c3582f1517e9c": "807bc0685161c877e45df7ebc6da00a2",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "64a4ac1f53d1df7fd63841fa1435968c",
".git/logs/refs/heads/master": "63e4358cd20f3885e67b3ca97d616511",
".git/logs/refs/remotes/origin/master": "aebcaf7a02b99a685e06b3812eb6f1c4",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "a77cee50923cd463a6b9783c346354e1",
".git/refs/remotes/origin/master": "a77cee50923cd463a6b9783c346354e1",
".git/index": "bbbbaa040b24e5bf3e748d62b11e39d1",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/FETCH_HEAD": "ead11b9687710b976ad2c6e802cb9153",
"assets/AssetManifest.json": "06d0b3c9bf48b9f9a22120cd26bfddcc",
"assets/NOTICES": "e381e004652f85eeae79cbfc80e581b3",
"assets/FontManifest.json": "202bfb5144bfc3359dc068bcf44cba82",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "01a8d1fad313b20250acb9a1a6cea5f6",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/music/Mr_Smith-Sunday_Solitude.mp3": "5fb1f2fbf4314eb5df35b62706942698",
"assets/assets/music/README.md": "035041cfb2070f794172dedb2aa709b6",
"assets/assets/music/Mr_Smith-Sonorus.mp3": "9353b7bb732002062e2c9107a95f3d2a",
"assets/assets/music/Mr_Smith-Azul.mp3": "9463595498dc48b3d3d6805fb7c19dc7",
"assets/assets/Permanent_Marker/PermanentMarker-Regular.ttf": "c863f8028c2505f92540e0ba7c379002",
"assets/assets/images/3x/settings.png": "21ff2cc135a762f74ed1a80aac6502bb",
"assets/assets/images/3x/restart.png": "429270ce832c881b80fbd592e5ff1e0e",
"assets/assets/images/3x/back.png": "88a977a654df5a490037340f90a5a19e",
"assets/assets/images/settings.png": "840fd7e3337c743046bf992ef18a10b8",
"assets/assets/images/restart.png": "d3d2e3f3b2f6cb1e1a69b8b2529096f7",
"assets/assets/images/finger_math_lefthand/60.png": "124ecd8521e2c1f905515a5964c22aad",
"assets/assets/images/finger_math_lefthand/70.png": "c07432c01dec71281722186720fbdf62",
"assets/assets/images/finger_math_lefthand/10.png": "e5476789f8d19cbc356abb5ca6720e9f",
"assets/assets/images/finger_math_lefthand/20.png": "be45e1b4f8e1a7e5e7954397a167baf1",
"assets/assets/images/finger_math_lefthand/30.png": "3c4f3a8bf9518efc3c919fe2b58db54b",
"assets/assets/images/finger_math_lefthand/80.png": "1fef093343a425af7dfe6bdc59c3365b",
"assets/assets/images/finger_math_lefthand/40.png": "2d95f89e31103d21e703849f854bed89",
"assets/assets/images/finger_math_lefthand/50.png": "eb8974ebf033f4bd9970fe0937839e92",
"assets/assets/images/finger_math_lefthand/90.png": "2b26136d1e7e5e601c0222a2a2217dfb",
"assets/assets/images/finger_math_righthand/8.png": "204694da6f6a039c1ccc4b14f6ac6c89",
"assets/assets/images/finger_math_righthand/9.png": "fdddca56d4107b4eaf8dd1f32d92e8f8",
"assets/assets/images/finger_math_righthand/4.png": "a7e54d287a3ec190d61a8b184fbfd20c",
"assets/assets/images/finger_math_righthand/5.png": "a0233f650e618d409d0121707c7b412d",
"assets/assets/images/finger_math_righthand/7.png": "93bdd9ba3bcddc7351d628d620bbd381",
"assets/assets/images/finger_math_righthand/6.png": "4b18fc38fd055ecad1ae7840a67139d0",
"assets/assets/images/finger_math_righthand/2.png": "edb4afcd4735ac618a4b443cc8d7895b",
"assets/assets/images/finger_math_righthand/3.png": "fa085cb77d6d836d7f4e1a149ebf8719",
"assets/assets/images/finger_math_righthand/1.png": "f737d25a8d16db782d2d0c09d0bfc407",
"assets/assets/images/finger_math_righthand/0.png": "bae12d4ae3d99de3bc1d1d2edb410e1b",
"assets/assets/images/2x/settings.png": "8404e18c68ba99ca0b181bd96ace0376",
"assets/assets/images/2x/restart.png": "83aea4677055df9b0d8171f5315f2a60",
"assets/assets/images/2x/back.png": "85cda8f41a13153d6f3fb1c403f272ea",
"assets/assets/images/back.png": "3c82301693d5c4140786184a06c23f7e",
"assets/assets/images/3.5x/settings.png": "c977a1e6c59e8cfd5cd88a0c973928fc",
"assets/assets/images/3.5x/restart.png": "583169ac365d9515fc12f29e3b530de0",
"assets/assets/images/3.5x/back.png": "85db134e26410547037485447f659277",
"assets/assets/sfx/kss1.mp3": "fd0664b62bb9205c1ba6868d2d185897",
"assets/assets/sfx/spsh1.mp3": "2e1354f39a5988afabb2fdd27cba63e1",
"assets/assets/sfx/fwfwfwfw1.mp3": "d0f7ee0256d1f0d40d77a1264f23342b",
"assets/assets/sfx/fwfwfwfwfw1.mp3": "46355605b43594b67a39170f89141dc1",
"assets/assets/sfx/ohno.mp3": "396d258be56634136bf73d4e022963f0",
"assets/assets/sfx/sh1.mp3": "f695db540ae0ea850ecbb341a825a47b",
"assets/assets/sfx/hh1.mp3": "fab21158730b078ce90568ce2055db07",
"assets/assets/sfx/p1.mp3": "ad28c0d29ac9e8adf9a91a46bfbfac82",
"assets/assets/sfx/sh2.mp3": "e3212b9a7d1456ecda26fdc263ddd3d0",
"assets/assets/sfx/hh2.mp3": "4d39e7365b89c74db536c32dfe35580b",
"assets/assets/sfx/kch1.mp3": "a832ed0c8798b4ec95c929a5b0cabd3f",
"assets/assets/sfx/oo1.mp3": "94b9149911d0f2de8f3880c524b93683",
"assets/assets/sfx/lalala1.mp3": "b0b85bf59814b014ff48d6d79275ecfd",
"assets/assets/sfx/p2.mp3": "ab829255f1ef20fbd4340a7c9e5157ad",
"assets/assets/sfx/hash3.mp3": "38aad045fbbf951bf5e4ca882b56245e",
"assets/assets/sfx/hash2.mp3": "d26cb7676c3c0d13a78799b3ccac4103",
"assets/assets/sfx/wssh1.mp3": "cf92e8d8483097569e3278c82ac9f871",
"assets/assets/sfx/dsht1.mp3": "c99ece72f0957a9eaf52ade494465946",
"assets/assets/sfx/hash1.mp3": "f444469cd7a5a27062580ecd2b481770",
"assets/assets/sfx/wssh2.mp3": "255c455d9692c697400696cbb28511cc",
"assets/assets/sfx/README.md": "33033a0943d1325f78116fcf4b8a96ec",
"assets/assets/sfx/yay1.mp3": "8d3b940e33ccfec612d06a41ae616f71",
"assets/assets/sfx/k2.mp3": "8ec44723c33a1e41f9a96d6bbecde6b9",
"assets/assets/sfx/k1.mp3": "37ffb6f8c0435298b0a02e4e302e5b1f",
"assets/assets/sfx/haw1.mp3": "00db66b69283acb63a887136dfe7a73c",
"assets/assets/sfx/ehehee1.mp3": "52f5042736fa3f4d4198b97fe50ce7f3",
"assets/assets/sfx/ws1.mp3": "5cfa8fda1ee940e65a19391ddef4d477",
"assets/assets/sfx/wehee1.mp3": "5a986231104c9f084104e5ee1c564bc4",
"assets/assets/sfx/goodjob.mp3": "5d92f0ebe36ecebc8fa53989430d0302",
"assets/assets/sfx/swishswish1.mp3": "219b0f5c2deec2eda0a9e0e941894cb6",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
