$(document).ready(function() {

    /*
        Get the input elements values
        Convert them to cents
        Do the mathematical operations(subtraction and modulus)(amountPaid > amountDue)
        Store Results in variables [or an object]
        Populate the html with the results
        Also create a clear all fields button to reset the values [text input to "" and numbers 0]
    */


    $('#button').on("click", function() {


        //get the input values
        var amountDue = $('#amountDueInputElement').val();
        var amountPaid = $('#amountPaidInputElement').val();

        //convert them to pennies/cents in order to avoid unprecise floating decimal 
        var amountDueInCents = amountDue * 100;
        var amountPaidInCents = amountPaid * 100;

        //do Change Calculator mathematical operations(subtraction yay!)
        var changeResultsInCents = amountPaidInCents - amountDueInCents;

        //Use changeResultsInCents to get the Quotient and the Remainder for each type of change(dollars, quarters, dimes, nickels, pennies)
        //(step 2)do division with Math.floor to get quotient and modulus to get remainder
        //user remainder and repeat step 2 until pennies are reached
        //if any remainders equal zero then the rest quotients will equal zero as well
        //use tenary operators to set values to zero in case no more change in available

        //use a custom function to check if a remainder is equal to zero
        var isVariableZero = function(variableBeingChecked) {
            return variableBeingChecked === 0
        };

        //dollars math
        var dollarQuotient = Math.floor(changeResultsInCents / 100); //100 pennies = $1, so divide by 100; Math.floor will only get the integer
        var dollarDivisionRemainder = changeResultsInCents % 100;

        console.log(`Dollars change = ${dollarQuotient} and Cents remaining = ${dollarDivisionRemainder}`);

        //quarters math
        var quartersQuotient = isVariableZero(dollarDivisionRemainder) ? 0 : Math.floor(dollarDivisionRemainder / 25);
        var quartersDivisionRemainder = dollarDivisionRemainder % 25;

        console.log(`Quarters change = ${quartersQuotient} and Cents remaining = ${quartersDivisionRemainder}`);

        //dimes math

        var dimesQuotient = isVariableZero(quartersDivisionRemainder) ? 0 : Math.floor(quartersDivisionRemainder / 10);
        var dimesDivisionRemainder = quartersDivisionRemainder % 10;

        console.log(`Dimes change = ${dimesQuotient} and Cents remaining = ${dimesDivisionRemainder}`);

        //nickels math

        var nickelsQuotient = isVariableZero(dimesDivisionRemainder) ? 0 : Math.floor(dimesDivisionRemainder / 5);
        var nickelsDivisionRemainder = dimesDivisionRemainder % 5;

        console.log(`Nickels change = ${nickelsQuotient} and Cents remaining = ${nickelsDivisionRemainder}`);

        //pennies math
        var penniesQuotient = isVariableZero(nickelsDivisionRemainder) ? 0 : Math.floor(nickelsDivisionRemainder / 1);
        var penniesDivisionRemainder = nickelsDivisionRemainder % 1;

        console.log(`Pennies change = ${penniesQuotient} and Cents remaining = ${penniesDivisionRemainder}`);


        $('#dollarsChangeResultParagraph').text(dollarQuotient);
        $('#quartersChangeResultParagraph').text(quartersQuotient);
        $('#dimesChangeResultParagraph').text(dimesQuotient);
        $('#nickelsChangeResultParagraph').text(nickelsQuotient);
        $('#penniesChangeResultParagraph').text(penniesQuotient);



    });






















}); // End of ready function
