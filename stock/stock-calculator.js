
const getLocalString = (num)=>{
    return num.toLocaleString("en-IN");
}

const findAmountFromAvg = ()=>{
    const amountInvested = Number(document.querySelector('#fafa-amount-invested').value);
    const sharesOwned = Number(document.querySelector('#fafa-stocks-owned').value)
    const currentPricePerShare = Number((amountInvested / sharesOwned).toFixed(6));
    const expectedAverage = Number(document.querySelector('#fafa-expected-average').value);
    const newPricePerShare = Number(document.querySelector('#fafa-buy-price').value);
    const numberOfSharesToBuy = Number(((sharesOwned * (currentPricePerShare - expectedAverage)) / (expectedAverage - newPricePerShare)).toFixed(2));
    const amountRequiredToInvest = Number((numberOfSharesToBuy * newPricePerShare).toFixed(2));
    const totalShares = Number(numberOfSharesToBuy+sharesOwned);
    document.querySelector('#fafa-result').innerHTML = `You need to Invest <b>${getLocalString(amountRequiredToInvest)}</b> on <b>${getLocalString(numberOfSharesToBuy)}</b> shares, making a total of <b>${getLocalString(totalShares)}</b> shares`;
    localStorage.setItem("fafa",JSON.stringify({
        amountInvested, sharesOwned, expectedAverage, newPricePerShare
    }))
}

const getNewPortfolioOnBuy = ()=>{
    const newPPS = Number(document.querySelector("#gnp-buy-current-mp").value);
    const currentPortfolio = {
        investment: Number(document.querySelector("#gnp-buy-amount-invested").value),
        pps: Number(document.querySelector("#gnp-buy-average-pps").value)
    }
    currentPortfolio["totalShares"] = currentPortfolio.investment / currentPortfolio.pps;
    currentPortfolio["value"] = currentPortfolio.totalShares * newPPS;

    const newInvestment = Number(document.querySelector("#gnp-buy-new-investment").value);
    const numberOfSharesBought = Number(currentPortfolio.totalShares + (newInvestment / newPPS));
    const newPortfolio = {
        investment: currentPortfolio.investment + newInvestment,
        totalShares: numberOfSharesBought,
    }
    newPortfolio["pps"] = Number((newPortfolio.investment / newPortfolio.totalShares).toFixed(4))
    newPortfolio["value"] = Number(newPortfolio.totalShares * newPPS)
    document.querySelector("#gnp-buy-result").innerHTML = `
    <table class="table table-bordered">
        <thead>
            <tr>
            <th scope="col">🤑</th>
            <th scope="col">New</th>
            <th scope="col">Old</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th scope="row">Investment</th>
            <td>${getLocalString(newPortfolio.investment)}</td>
            <td>${getLocalString(currentPortfolio.investment)}</td>
            </tr>
            <tr>
            <th scope="row">Avg. PPS</th>
            <td>${newPortfolio.pps}</td>
            <td>${currentPortfolio.pps}</td>
            </tr>
            <tr>
            <th scope="row">Holdings</th>
            <td>${getLocalString(newPortfolio.totalShares)}</td>
            <td>${getLocalString(currentPortfolio.totalShares)}</td>
            </tr>
            <tr>
            <th scope="row">Portfolio Value</th>
            <td>${getLocalString(newPortfolio.value)}</td>
            <td>${getLocalString(currentPortfolio.value)}</td>
            </tr>
        </tbody>
        </table>
    `;
}

const getNewPortfolioOnSell = ()=>{
    let amountToSell = Number(document.querySelector("#gnp-sell-amount").value);
    let numberOfSharesToSell = Number(document.querySelector("#gnp-sell-shares").value);
    let newPPS = Number(document.querySelector("#gnp-sell-current-mp").value);
    const currentPortfolio = {
        investment: Number(document.querySelector("#gnp-sell-amount-invested").value),
        pps: Number(document.querySelector("#gnp-sell-average-pps").value)
    }
    currentPortfolio["totalShares"] = currentPortfolio.investment / currentPortfolio.pps;
    currentPortfolio["value"] = currentPortfolio.totalShares * newPPS;
    let newPortfolio = {};
    if(amountToSell){
        numberOfSharesToSell = currentPortfolio.totalShares - (amountToSell / newPPS);
    }else if(numberOfSharesToSell){
        amountToSell = numberOfSharesToSell * newPPS;
    }else{
        console.log("error");
    }
    newPortfolio = {
        investment: currentPortfolio.value - amountToSell,
        totalShares: numberOfSharesToSell,
    }
    newPortfolio["pps"] = Number((newPortfolio.investment / newPortfolio.totalShares).toFixed(6));
    newPortfolio["value"] = Number((newPortfolio.totalShares * newPortfolio.pps).toFixed(2))

    document.querySelector("#gnp-sell-result").innerHTML = `
    <table class="table table-bordered">
        <thead>
            <tr>
            <th scope="col">🤑</th>
            <th scope="col">New</th>
            <th scope="col">Old</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th scope="row">Investment</th>
            <td>${getLocalString(newPortfolio.investment)}</td>
            <td>${getLocalString(currentPortfolio.investment)}</td>
            </tr>
            <tr>
            <th scope="row">Avg. PPS</th>
            <td>${newPortfolio.pps}</td>
            <td>${currentPortfolio.pps}</td>
            </tr>
            <tr>
            <th scope="row">Holdings</th>
            <td>${getLocalString(newPortfolio.totalShares)}</td>
            <td>${getLocalString(currentPortfolio.totalShares)}</td>
            </tr>
            <tr>
            <th scope="row">Portfolio Value</th>
            <td>${getLocalString(newPortfolio.value)}</td>
            <td>${getLocalString(currentPortfolio.value)}</td>
            </tr>
        </tbody>
        </table>
    `;
}



