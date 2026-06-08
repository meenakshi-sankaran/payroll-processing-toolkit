// Step 2: Employee Array (4 employees with different hour scenarios)
let employees = [
    { name: "Alice Smith", hourlyRate: 25, hoursWorked: 35 },  // No overtime
    { name: "Bob Jones", hourlyRate: 30, hoursWorked: 48 },    // 8 hours overtime
    { name: "Charlie Brown", hourlyRate: 20, hoursWorked: 40 },// Exactly 40 hours
    { name: "Diana Prince", hourlyRate: 40, hoursWorked: 45 }  // 5 hours overtime
];

// Step 3: Calculate Base Pay (Max 40 hours)
function calculateBasePay(rate, hours) {
    // If they worked more than 40 hours, they only get base pay for 40 hours.
    if (hours > 40) {
        return rate * 40;
    } else {
        return rate * hours;
    }
}

// Step 4: Calculate Overtime Pay (1.5x rate for hours over 40)
function calculateOvertimePay(rate, hours) {
    if (hours > 40) {
        let overtimeHours = hours - 40;
        return overtimeHours * (rate * 1.5);
    } else {
        return 0; // No overtime worked
    }
}

// Step 5: Calculate Tax Deductions (15%)
function calculateTaxes(grossPay) {
    return grossPay * 0.15;
}
