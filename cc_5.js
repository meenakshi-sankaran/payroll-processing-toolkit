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

// Step 6: Process Payroll for an individual employee
function processPayroll(employee) {
    // Call our helper functions using the employee's data
    let basePay = calculateBasePay(employee.hourlyRate, employee.hoursWorked);
    let overtimePay = calculateOvertimePay(employee.hourlyRate, employee.hoursWorked);
    
    let grossPay = basePay + overtimePay;
    let taxDeduction = calculateTaxes(grossPay);
    let netPay = grossPay - taxDeduction;

    // Return a beautiful combined payroll object
    return {
        name: employee.name,
        basePay: basePay,
        overtimePay: overtimePay,
        grossPay: grossPay,
        netPay: netPay
    };
}

// Step 7: Loop through the employee array and log the full payroll records
console.log("--- FINAL PAYROLL REPORT ---");
for (let employee of employees) {
    let payrollRecord = processPayroll(employee);
    console.log(`Employee: ${payrollRecord.name}`);
    console.log(`  Base Pay: $${payrollRecord.basePay.toFixed(2)}`);
    console.log(`  Overtime Pay: $${payrollRecord.overtimePay.toFixed(2)}`);
    console.log(`  Gross Pay: $${payrollRecord.grossPay.toFixed(2)}`);
    console.log(`  Net Pay (After 15% Tax): $${payrollRecord.netPay.toFixed(2)}`);
    console.log("-----------------------------");
}
