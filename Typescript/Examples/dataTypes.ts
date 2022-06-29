function addNumbers(x: number, y: number) {
  return x + y;
}
console.log(addNumbers(3, 6));

let x: number; //* Explicitly declares x as a number type
let y = 1; //* Implicitly declares y as a number type
let z; //* Declares z without initializing it
//x = "one";

enum ContractStatus {
  Permanent = 1,
  Temp,
  Apprentice,
}

let employeeStatus: ContractStatus = ContractStatus.Temp;
console.log(employeeStatus);

let multiType: number | boolean;
multiType = 20; //* Valid
multiType = true; //* Valid
//multiType = "twenty";   //* Invalid

interface Employee {
  employeeID: number;
  age: number;
}
interface Manager {
  stockPlan: boolean;
}
type ManagementEmployee = Employee & Manager;
let newManager: ManagementEmployee = {
  employeeID: 12345,
  age: 34,
  stockPlan: true,
};

type testResult = "pass" | "fail" | "incomplete";
let myResult: testResult;
myResult = "incomplete";    //* Valid
myResult = "pass";          //* Valid
//myResult = "failure";       //* Invalid

let person1: [string, number] = ['Marcia', 35];
console.log(person1);