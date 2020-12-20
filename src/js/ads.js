// const jumboAvailableAds = [
//     {
//         title:'Install App',
//         desc:'No more googling to find the the CGPA Calculator, install the app in your device (Available on Mobile & Laptops)',
//         logo:'https://files.rajchandra.me/images/logos/cgpa-calculator.png',
//         link:'',
//         type:'download',
//         cta_text:'Install Now'
//     },
//     {
//         title:'Play Color Tile Game',
//         desc:'Are you bored studying, check out easy to play color game, all you need is a correct guess!',
//         logo:'https://files.rajchandra.me/images/logos/color-tile.png',
//         link:'https://rajchandra.me/r/0biYgwkl4?s=jumbotron-ad&m=cgpa-calculator',
//         type:'link',
//         cta_text:'Play Now'
//     },
//     {
//         title:'',
//         desc:'',
//         logo:'',
//         link:'',
//         type:'',
//         cta_text:'Install Now'
//     }
// ]

// const jumboAd = jumboAvailableAds[0];

// document.querySelector('.ad-1-title').innerHTML=jumboAd.title;
// document.querySelector('.ad-1-description').innerHTML=jumboAd.desc; 
// document.querySelector('.ad-1-logo').innerHTML=`
// <a href="${jumboAd.link}" target="_blank">
// <img src="${jumboAd.logo}" height="100" class="rounded p-2">
// </a>
// `;
// document.querySelector('.ad-1-link').href = jumboAd.link;
// switch(jumboAd.cta_type){
//     case 'link':
//         document.querySelector('cta').innerHTML = `
//             <a href=${jumboAd.link} target="_blank" class="ad-1-link">
//                 <div class="btn btn-success ad-1-cta">${jumboAd.cta_text}</div>
//             </a>
//         `;
//     break;
//     case 'download':
//         document.querySelector('cta').innerHTML = `
//             <div class="btn btn-success ad-1-cta ">${jumboAd.cta_text}</div>
//         `;
//     break;

// }
// document.querySelector('.ad-1-cta').innerHTML = jumboAd.cta_text;
const affliateLinks = [
    `<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ac&ref=qf_sp_asin_til&ad_type=product_link&tracking_id=craj0318g-21&marketplace=amazon&region=IN&placement=9351772071&asins=9351772071&linkId=d92a1fe57fdeaa05ae50e96d2133c1c6&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff">
    </iframe>`,
    `<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ac&ref=qf_sp_asin_til&ad_type=product_link&tracking_id=craj0318g-21&marketplace=amazon&region=IN&placement=9389432014&asins=9389432014&linkId=85e2439b8ac678839b4f6dac0da9d39e&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff">
    </iframe>`,
    `<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ac&ref=tf_til&ad_type=product_link&tracking_id=craj0318g-21&marketplace=amazon&region=IN&placement=1612680194&asins=1612680194&linkId=5562283e459a6e93c301c9c7df61e21c&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff">
    </iframe>`,
    `<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ac&ref=qf_sp_asin_til&ad_type=product_link&tracking_id=craj0318g-21&marketplace=amazon&region=IN&placement=B0869855B8&asins=B0869855B8&linkId=7f331ec4907b75ba93ff62e005b81d31&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff">
    </iframe>`,
    `<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ac&ref=qf_sp_asin_til&ad_type=product_link&tracking_id=craj0318g-21&marketplace=amazon&region=IN&placement=B086CSGV2N&asins=B086CSGV2N&linkId=ad5801e10e49f33ffcb7e473dba11c98&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff">
    </iframe>`,
    `<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ac&ref=qf_sp_asin_til&ad_type=product_link&tracking_id=craj0318g-21&marketplace=amazon&region=IN&placement=B08CVMXPGY&asins=B08CVMXPGY&linkId=91a288d6fc4d447ca527de0ceb23db14&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff">
    </iframe>`,
    `<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ac&ref=qf_sp_asin_til&ad_type=product_link&tracking_id=craj0318g-21&marketplace=amazon&region=IN&placement=B08CVMVW3X&asins=B08CVMVW3X&linkId=dafb690e25f34337d966e1a97fffd817&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff">
    </iframe>`,
    `<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ac&ref=tf_til&ad_type=product_link&tracking_id=craj0318g-21&marketplace=amazon&region=IN&placement=0008386595&asins=0008386595&linkId=0b7bffa49a418cfa2d75ed80fcd04578&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff">
    </iframe>`,
    `<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ac&ref=tf_til&ad_type=product_link&tracking_id=craj0318g-21&marketplace=amazon&region=IN&placement=1612680194&asins=1612680194&linkId=bbf387aa8331862f39ee7dabb6217da7&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff">
    </iframe>`,
    `<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ac&ref=qf_sp_asin_til&ad_type=product_link&tracking_id=craj0318g-21&marketplace=amazon&region=IN&placement=B07LDH32ZP&asins=B07LDH32ZP&linkId=344ddb2eea0426526ffe2923d896b2f3&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff">
    </iframe>`,
    `<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ac&ref=qf_sp_asin_til&ad_type=product_link&tracking_id=craj0318g-21&marketplace=amazon&region=IN&placement=B085J19V4P&asins=B085J19V4P&linkId=12b0858a69d2a74e8f3e4dc371361c41&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff">
    </iframe>`,
    `<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ac&ref=qf_sp_asin_til&ad_type=product_link&tracking_id=craj0318g-21&marketplace=amazon&region=IN&placement=B07M67W1PH&asins=B07M67W1PH&linkId=b31ea751b788fe2d7f6a74ffa9b5a9f4&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff">
    </iframe>`,
    `<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ac&ref=qf_sp_asin_til&ad_type=product_link&tracking_id=craj0318g-21&marketplace=amazon&region=IN&placement=B08CVMVW3X&asins=B08CVMVW3X&linkId=e2328851b3f64dcf8053e67746bbb436&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff">
    </iframe>`,
    `<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ac&ref=qf_sp_asin_til&ad_type=product_link&tracking_id=craj0318g-21&marketplace=amazon&region=IN&placement=B08HV83HL3&asins=B08HV83HL3&linkId=6dfdc564010c383c952b4c73a933eebc&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff">
    </iframe>`,
    `<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ac&ref=qf_sp_asin_til&ad_type=product_link&tracking_id=craj0318g-21&marketplace=amazon&region=IN&placement=B08HVJCW95&asins=B08HVJCW95&linkId=359729964effc95446455edb6a49f5a2&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff">
    </iframe>`,
    `<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ac&ref=qf_sp_asin_til&ad_type=product_link&tracking_id=craj0318g-21&marketplace=amazon&region=IN&placement=B08HVL8QN3&asins=B08HVL8QN3&linkId=27d187ba8a5d3ee67642fb67ce24c382&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff">
    </iframe>`,
    `<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ac&ref=qf_sp_asin_til&ad_type=product_link&tracking_id=craj0318g-21&marketplace=amazon&region=IN&placement=B073NTCT4Q&asins=B073NTCT4Q&linkId=8f55b827d0c8877d74b8f335d76bd7e8&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff">
    </iframe>`
]

let getAds = ()=>{
    return '';
    `
        <div class="google-ads pb-2">
            <div class="ad-container">
                <div class="ad-head">Advertisement</div>
                    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
                    <!-- 360x90_horizontal_ads -->
                    <ins class="adsbygoogle"
                        style="display:inline-block;width:360px;height:90px"
                        data-ad-client="ca-pub-8598751574376549"
                        data-ad-slot="3230015020"></ins>
                    <script>
                        (adsbygoogle = window.adsbygoogle || []).push({});
                    </script>
                </div>
            </div>
        </div>`;
    // return `<div>${affliateLinks[Math.floor(Math.random()*(affliateLinks.length))]} ${affliateLinks[Math.floor(Math.random()*(affliateLinks.length))]}</div>`;
}

let getAdsManual = ()=>{ //typeOfAd
    let ads = [
        {
            type : `tw`,
            title: `Color Tile`,
            logo: `https://color-tile.rajchandra.me/src/images/icons/icon-512x512.png`,
            body : `Stay Indoor, Play Color Tile`,
            link : `https://rajchandra.me/r/0biYgwkl4?s=card_cta_ad&m=cgpa-calculator`,
            linkText : `Play Now`
        },
        {
            type : `tf`,
            title: `Color Tile`,
            logo: `https://color-tile.rajchandra.me/src/images/icons/icon-512x512.png`,
            body : `I challenge you to win 5 games in a row, can you?`,
            link : `https://rajchandra.me/r/0biYgwkl4?s=card_cta_ad&m=cgpa-calculator`,
            linkText : `Challenge Accepted?`
        },
        {
            type : `ts`,
            title: `Color Tile`,
            logo: `https://color-tile.rajchandra.me/src/images/icons/icon-512x512.png`,
            body : `Aren't you bored yet? Huh, I am, I play color tile do you?`,
            link : `https://rajchandra.me/r/0biYgwkl4?s=card_cta_ad&m=cgpa-calculator`,
            linkText : `Play Color Tile`
        },
        {
            type : `i`,
            title: `Color Tile`,
            logo: `https://color-tile.rajchandra.me/src/images/icons/icon-512x512.png`,
            body : `Checking my cgpa all the time is no fun, you know what is fun, THE COLOR GAME`,
            link : `https://rajchandra.me/r/0biYgwkl4?s=card_cta_ad&m=cgpa-calculator`,
            linkText : `Let's play`
        }
    ]

    let AdNumber = Math.floor(Math.random()*(ads.length));
    ad = ads[AdNumber];
    let templates = [
            `
            <div class="custom-ads" style="
                font-family: Verdana, Geneva, Tahoma, sans-serif;
                width: 100%;
                margin : 0;
                border-radius : 5px;
                border : 0.5px dashed #000;
                text-align : left;"
                >
                <div class="d-flex">
                    <div style="width: 25%;">
                        <img width="100%" height="100%" src="${ad.logo}" alt="">
                    </div>
                    <div style="width: 75%; padding: 0.5rem;">
                        <h4 class="font-weight-bolder">${ad.title}</h4>
                        <span class="text-small text-secondary">${ad.body}</span>
                        <a 
                            href="${ad.link}"
                            target="_blank"
                            class="btn btn-secondary" 
                            style="
                                width: 100%; 
                                margin-top: 1rem;
                            "
                        >
                            ${ad.linkText}
                        </a>
                    </div>
                </div>
            </div>
            `
    ]
    let templateNumber = Math.floor(Math.random()*(templates.length));
    return templates[templateNumber];
}
