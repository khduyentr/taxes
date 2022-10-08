
const SELF_DECREASED = 11000000;
const RELATIVES = 4400000;

var LIMITS = [5, 10, 18, 32, 52, 80];

function toMillions(value) {
    return value * 1000000;
}

function calculatePersonalIncomeTax(amount, relativesNumber) {
    if (amount < toMillions(11)) {
        return 0;
    } 

    var taxedIncome = amount - SELF_DECREASED - relativesNumber * RELATIVES;

    if (taxedIncome < 0)
        return 0;

    var percent = 0.05
    var temp = taxedIncome < toMillions(LIMITS[0]) ? taxedIncome : toMillions(LIMITS[0]);
    var tax = toMillions(5) * percent;
    console.log(`FIRST TAX: ${tax}`);
    var index = 0;

    while (taxedIncome > toMillions(LIMITS[index])) {
        console.log(`START: ${index}`);
        var temp = taxedIncome < toMillions(LIMITS[index + 1]) ? taxedIncome : toMillions(LIMITS[index + 1]);

        percent += 0.05;
        console.log(`CALCULATION: ${temp} - ${toMillions(LIMITS[index])} * ${percent}`)
        tax += (temp - toMillions(LIMITS[index]) ) * (percent);

        console.log(`${index + 1} TAX: ${tax}`);

        index++;
        console.log(`END: ${index}`);

        if (index === LIMITS.length - 1)
            break;
    }

    if (taxedIncome > toMillions(LIMITS[LIMITS.length - 1])) {
        tax += (taxedIncome - toMillions(LIMITS[LIMITS.length - 1]) ) * (percent + 0.05);
    }

    return tax;
}


export default calculatePersonalIncomeTax;