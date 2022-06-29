"use strict";
function addNumbers(x, y) {
    return x + y;
}
console.log(addNumbers(3, 6));
let x; //* Explicitly declares x as a number type
let y = 1; //* Implicitly declares y as a number type
let z; //* Declares z without initializing it
//x = "one";
var ContractStatus;
(function (ContractStatus) {
    ContractStatus[ContractStatus["Permanent"] = 1] = "Permanent";
    ContractStatus[ContractStatus["Temp"] = 2] = "Temp";
    ContractStatus[ContractStatus["Apprentice"] = 3] = "Apprentice";
})(ContractStatus || (ContractStatus = {}));
let employeeStatus = ContractStatus.Temp;
console.log(employeeStatus);
let multiType;
multiType = 20; //* Valid
multiType = true; //* Valid
let newManager = {
    employeeID: 12345,
    age: 34,
    stockPlan: true,
};
let myResult;
myResult = "incomplete"; //* Valid
myResult = "pass"; //* Valid
//myResult = "failure";       //* Invalid
let person1 = ['Marcia', 35];
console.log(person1);
