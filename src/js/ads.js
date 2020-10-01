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

let getAds = ()=>{ //typeOfAd
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
