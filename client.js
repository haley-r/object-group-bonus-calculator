const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

function ratingBonus(employee){
  let bonusPercentage = 0;
  if (employee.reviewRating=3){
    bonusPercentage = 4;
  }
  else if (employee.reviewRating = 4){
    bonusPercentage = 6;
  }
  else if (employee.reviewRating = 5) {
    bonusPercentage = 10;
  }
  return bonusPercentage;
}

function tenYearBonus(employee){
  let tenYearBonus = 0;
  if (employee.employeeNumber.length=4){
    tenYearBonus = 5;
  }
  return tenYearBonus;
}

function incomeAdjustment(employee){
  let bonusAdjustment = 0;
  if (Number(employee.annualSalary)>65000){
    bonusAdjustment = -1;
  }
  return bonusAdjustment;
}

function totalBonusPercentage (employee){
  return ratingBonus(employee)+tenYearBonus(employee)+incomeAdjustment(employee);
}

function totalBonus(employee){
  return totalBonusPercentage(employee)/100*employee.annualSalary;
}

function totalCompensation(employee){
  return totalBonus(employee)+Number(employee.annualSalary);
}
// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( employees );
console.log(ratingBonus(employees[0]));
console.log(tenYearBonus(employees[0]));
console.log(incomeAdjustment(employees[0]));
console.log(totalBonusPercentage(employees[0]));
console.log(totalBonus(employees[0]));
console.log(totalCompensation(employees[0]));

//go through original array, make new Array

function createBonusArray ( employeeArray ){
  let newBonusArray = [];
  for ( employeeObject of employeeArray){
    let bonusObject = {
      name: employeeObject.name,
      bonusPercentage: totalBonusPercentage(employeeObject),
      totalCompensation: totalCompensation(employeeObject),
      totalBonus: totalBonus(employeeObject)
    }//end bonusObject
    newBonusArray.push(bonusObject);
  }
  return(newBonusArray);
}

console.log(createBonusArray(employees));
