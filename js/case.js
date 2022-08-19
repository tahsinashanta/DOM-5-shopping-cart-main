/* 1. add event listener to the  case plus button
2. get the value inside the case number input field
3. convert the string value to an integar
4. calculate the new case number and update it to the case number field
5.   */

function updateCaseNumber(isIncrease) {
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);

    // let newCaseNumber = previousCaseNumber + 1;
    let newCaseNumber;

    if (isIncrease) {
        newCaseNumber = previousCaseNumber + 1;
    }
    else {
        newCaseNumber = previousCaseNumber - 1;
    }


    caseNumberField.value = newCaseNumber;
    return newCaseNumber;

}

function updateCaseTotalPrice (newCaseNumber){

    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotalPrice;
}




document.getElementById('btn-case-plus').addEventListener('click', function () {
   const newCaseNumber = updateCaseNumber(true);

    updateCaseTotalPrice(newCaseNumber);
  
});


document.getElementById("btn-case-minus").addEventListener('click', function () {
   const newCaseNumber= updateCaseNumber(false);

   updateCaseTotalPrice(newCaseNumber);

})