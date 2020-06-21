const jumboAvailableAds = [
    {
        title:'Install App',
        desc:'No more googling to find the the CGPA Calculator, install the app in your device (Available on Mobile & Laptops)',
        logo:'https://files.rajchandra.me/images/logos/cgpa-calculator.png',
        link:'',
        type:'download',
        cta_text:'Install Now'
    },
    {
        title:'Play Color Tile Game',
        desc:'Are you bored studying, check out easy to play color game, all you need is a correct guess!',
        logo:'https://files.rajchandra.me/images/logos/color-tile.png',
        link:'https://rajchandra.me/r/0biYgwkl4?s=jumbotron-ad&m=cgpa-calculator',
        type:'link',
        cta_text:'Play Now'
    },
    {
        title:'',
        desc:'',
        logo:'',
        link:'',
        type:'',
        cta_text:'Install Now'
    }
]

const jumboAd = jumboAvailableAds[0];
let getAds = ()=>{ //typeOfAd
    let ads = [
        {
            type : `g`,
            body : `Check coronavirus updates`,
            link : `https://rajchandra.me/r/PoPmqT9pi?s=card_cta_ad&m=cgpa-calculator`,
            linkText : `Check Now`
        },
        {
            type : `e`,
            body : `Stay Home, Save Lives!`,
            link : `https://rajchandra.me/r/PoPmqT9pi?s=card_cta_ad&m=cgpa-calculator`,
            linkText : `View Now`
        },
        {
            type : `tw`,
            body : `Stay Indoor, Play Color Game`,
            link : `https://rajchandra.me/r/0biYgwkl4?s=card_cta_ad&m=cgpa-calculator`,
            linkText : `Play Now`
        },
        {
            type : `tf`,
            body : `I challenge you to win 5 games in a row, can you?`,
            link : `https://rajchandra.me/r/0biYgwkl4?s=card_cta_ad&m=cgpa-calculator`,
            linkText : `Challenge Accepted?`
        },
        {
            type : `ts`,
            body : `Aren't you bored yet? Huh, I am, I play color tile do you?`,
            link : `https://rajchandra.me/r/0biYgwkl4?s=card_cta_ad&m=cgpa-calculator`,
            linkText : `Play Color Tile`
        },
        {
            type : `i`,
            body : `Checking my cgpa all the time is no fun, you know what is fun, THE COLOR GAME`,
            link : `https://rajchandra.me/r/0biYgwkl4?s=card_cta_ad&m=cgpa-calculator`,
            linkText : `Let's play`
        }
    ]

    let AdNumber = Math.floor(Math.random()*(ads.length));
    ad = ads[AdNumber];
    let templates = [
            `<div class="custom-ads" style="
                margin : 15px;
                border-radius : 5px;
                border : 0.5px solid #007bff;
                padding : 8px 8px 8px 8px;
                text-align : center;">
                <p style="
                    font-size : 10;
                    font-style: monospace;
                    font-weight : normal;">${ad.body}</p>
                    <a
                        class="btn btn-success btn-lg badge-pill badge-success"
                        href="${ad.link}"
                        target="_blank"
                        role="button">
                        ${ad.linkText}
                    </a>
            </div>`
    ]
    let templateNumber = Math.floor(Math.random()*(templates.length));
    return templates[templateNumber];
}
