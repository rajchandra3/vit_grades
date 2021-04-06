const getExpectedAmount = ()=>{
    let amountInvested = document.querySelector('#amount-invested').value;
    let stocksOwned = document.querySelector('#stocks-owned').value;
    let currentPrice = document.querySelector('#expected-average').value;
    let amountRequiredToInvest = (amountInvested * stocksOwned) + (currentPrice )
}