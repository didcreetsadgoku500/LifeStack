export function adjustUserSalary(annualIncome, new_annualIncome, userIncomeInput) {
    let percentDifference = calculatePercentDifference(annualIncome, userIncomeInput);

    let resultingSalary = (percentDifference * new_annualIncome) + new_annualIncome;
    return resultingSalary;
}

export function calculatePercentDifference(originalValue, observedValue) {
    let percentDifference = (originalValue - observedValue) / ((originalValue + observedValue) / 2);
    return percentDifference;
}