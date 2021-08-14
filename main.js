const initialPrice = document.querySelector("#initail-price");
const numberOfStocks = document.querySelector("#number-of-stocks");
const currentPrice = document.querySelector("#current-price");
const submitBtn = document.querySelector("#submit-btn");
const outputE1 = document.querySelector("#output");
const mainBackground = document.querySelector("#output-img");
mainBackground.src = './Images/stock.jpg';

function calculateProfitAndLoss(initial,quantity,current){
    if(initial > current){
        const loss = ((initial - current) * quantity).toFixed(2);
        const lossPercent = ((loss / initial) * 100).toFixed(2);
        showMessage(`hey the loss is ${loss} and the percent is ${lossPercent}%`,1);
        mainBackground.src = './Images/loss.jpg';
    }else if(current > initial){
        const profit = ((current - initial) * quantity).toFixed(2);
        const profitPercent = ((profit / initial) * 100).toFixed(2);

        showMessage(`Hey, Congratulations! your profit is ${profit} and the profit percent is ${profitPercent}%`,2);
        mainBackground.src = './Images/profit.jpg';
    }else{
        showMessage(`No pain no gain and no gain no pain`);
        mainBackground.src = './Images/nopain.jpg';
    }
}

function tellmeProfitOrLoss(){
    if(initialPrice.value && numberOfStocks.value && currentPrice.value){
        calculateProfitAndLoss(Number(initialPrice.value), Number(numberOfStocks.value), Number(currentPrice.value));
    }else{
        showMessage(`O oh!, All the fields are mandatory, please enter all the values!!🙄`);
        mainBackground.src = './Images/error.jpg';
    }
}

submitBtn.addEventListener("click", tellmeProfitOrLoss);

function showMessage(message,status){
    outputE1.innerText = message;
    if(status == 1){
        outputE1.style.color = "red";
    }else if( status == 2){
        outputE1.style.color = "green";
    }else{
        outputE1.style.color = "black";
    }

}
