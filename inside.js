document.getElementById('deposit-button').addEventListener('click', function () {
    const depositField = document.getElementById('deposit-field');
    const depositFieldString = depositField.value;
    const newDepositAmount = parseFloat(depositFieldString);

    const depositTotalElement = document.getElementById('deposit-total');
    const depositTotalString = depositTotalElement.innerText;
    const depositTotal = parseFloat(depositTotalString);

    const currentDeposit = newDepositAmount + depositTotal;
    depositTotalElement.innerText = currentDeposit;

    depositField.value = '';
    // ------------------------total balance------------------------------
    const totalBalanceElement = document.getElementById('total-balance');
    const totalBalanceString = totalBalanceElement.innerText;
    const totalBalance = parseFloat(totalBalanceString);

    const currentTotalBalance = totalBalance + newDepositAmount;
    totalBalanceElement.innerText = currentTotalBalance;
})

// ------------------------------deposit---------------------------
document.getElementById('withdraw-button').addEventListener('click', function(){
    console.log('withdraw click');
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawFieldString = withdrawField.value;
    const newWithdrawAmount = parseFloat(withdrawFieldString);
  

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const withdrawTotalString = withdrawTotalElement.innerText;
    const withdrawTotal = parseFloat(withdrawTotalString);

    const currentWithdraw = withdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdraw;

    withdrawField.value = '';

        // ------------------------total balance------------------------------
   
    const totalBalanceAmountElement = document.getElementById('total-balance');
    const totalBalanceString = totalBalanceAmountElement.innerText;
    const totalBalanceAmount = parseFloat(totalBalanceString);

    const finalBalance = totalBalanceAmount - newWithdrawAmount;
    totalBalanceAmountElement.innerText = finalBalance;

    
})