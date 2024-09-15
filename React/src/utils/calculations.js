export function adjustUserSalary(primaryMedianIncome, secondaryMedianIncome, primaryActualIncome) {
    let percentDifference = calculatePercentDifference(primaryMedianIncome, primaryActualIncome);

    let resultingSalary = (percentDifference * secondaryMedianIncome) + secondaryMedianIncome;
    return resultingSalary;
}

export function calculatePercentDifference(originalValue, observedValue) {
    // let percentDifference = (originalValue - observedValue) / ((originalValue + observedValue) / 2);
    let percentDifference = (observedValue - originalValue) / observedValue
    return percentDifference;
}