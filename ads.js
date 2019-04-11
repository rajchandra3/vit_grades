
// Ads
// let eventsInCodePark = '';
// axios.get('https://www.codepark.in/events')
//   .then(function (response) {
//     // handle success
//     eventsInCodePark = response.data.eventData;
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
let getAds = ()=>{ //typeOfAd
    let ads = [
        {
            type : `g`,
            body : `Learn as you code !`,
            link : `https://www.codepark.in`,
            linkText : `Visit CodePark`
        },
        {
            type : `e`,
            body : `Start with a <b>win</b> at <b>CodePark.in</b>`,
            link : `https://www.codepark.in/events`,
            linkText : `View Events`
        },
        {
            type : `tw`,
            body : `Learn to Code at CodePark`,
            link : `https://www.codepark.in`,
            linkText : `Learn More`
        },
        {
            type : `tf`,
            body : `Want to learn to Code? Join CodePark today !`,
            link : `https://www.codepark.in`,
            linkText : `Take me there`
        },
        {
            type : `ts`,
            body : `Take your Coding skills to next level at CodePark`,
            link : `https://www.codepark.in`,
            linkText : `Help Others Learn`
        },
        {
            type : `i`,
            body : `Prepare for Interview at CodePark`,
            link : `https://www.codepark.in`,
            linkText : `Show me more`
        }
    ]

    let AdNumber = Math.floor(Math.random()*(ads.length));
    ad = ads[AdNumber];
    let templates = [
            `<div class="custom-ads" style="
                margin : 15px;
                border-radius : 5px;
                border : 0.5px solid #00b389;
                padding : 2px 2px 10px 2px;
                text-align : center;">
                <p style="
                    font-size : 10;
                    font-style: monospace;
                    font-weight : normal;">${ad.body}</p>
                    <a
                        class="btn btn-codepark btn-lg badge-pill badge-codepark"
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
