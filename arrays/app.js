const employeesRecords = [
  {
    id: 101,
    name: "Vamsi Krishna",
    department: "Frontend",
    designation: "React Developer",
    salary: 65000,
    experience: 2,
    city: "Hyderabad",
    isActive: true
  },
  {
    id: 102,
    name: "Rahul Sharma",
    department: "Backend",
    designation: "Node.js Developer",
    salary: 80000,
    experience: 4,
    city: "Bangalore",
    isActive: true
  },
  {
    id: 103,
    name: "Anjali Reddy",
    department: "Testing",
    designation: "QA Engineer",
    salary: 55000,
    experience: 3,
    city: "Chennai",
    isActive: false
  },
  {
    id: 104,
    name: "Kiran Kumar",
    department: "Frontend",
    designation: "UI Developer",
    salary: 60000,
    experience: 2,
    city: "Hyderabad",
    isActive: true
  },
  {
    id: 105,
    name: "Sneha Patel",
    department: "DevOps",
    designation: "Cloud Engineer",
    salary: 95000,
    experience: 5,
    city: "Pune",
    isActive: true
  }
];
console.log(employeesRecords[0]);
console.log(employeesRecords[0].name);
console.log(employeesRecords.length);
if (employeesRecords.length > 0) {
   console.log("we have employees to display.");
} else { 
    console.log("No employees found.");
}
console.log(Array.isArray(employeesRecords));
console.log(Array.isArray(employeesRecords[0]));
function safelyCountEmployees(data) {
  if (Array.isArray(data)) {
    return data.length;
  }
  return 0;
}

console.log(safelyCountEmployees(employeesRecords));
 employeesRecords.push(
    {
    id: 106,
  name: "Divya Menon",
  department: "HR",
  designation: "HR Executive",
  salary: 50000,
  experience: 1,
  city: "Kochi",
  isActive: true
    },
// {
//     id: 107,
//     name: "Temp Employee",
//     department: "Temp",
//     designation: "Temp",
//     salary: 0,
//     experience: 0,
//     city: "NA",
//     isActive: false
// }
  
 );
 console.log(employeesRecords.length);
 console.log(employeesRecords[employeesRecords.length-1].name);
const newLength = employeesRecords.push({
  id: 107,
  name: "Temp Employee",
  department: "Temp",
  designation: "Temp",
  salary: 0,
  experience: 0,
  city: "NA",
  isActive: false
});
console.log(newLength);
const removedEmployee = employeesRecords.pop();

console.log(removedEmployee.name);
console.log(employeesRecords.length);
employeesRecords.unshift({
  id: 100,
  name: "Temp First",
  department: "Temp",
  designation: "Temp",
  salary: 0,
  experience: 0,
  city: "NA",
  isActive: false
});
const removedFirstEmployee = employeesRecords.shift();
console.log(removedFirstEmployee.name);
console.log(employeesRecords[0].name);
employeesRecords.unshift({
  id: 99,
  name: "Founder Employee",
  department: "Management",
  designation: "CTO",
  salary: 200000,
  experience: 10,
  city: "Hyderabad",
  isActive: true
});

console.log(employeesRecords[0].name);
console.log(employeesRecords.length);

const FrontendTeamonly = employeesRecords.slice(0,2);
console.log(FrontendTeamonly);
console.log(employeesRecords.length);
const topThreeEmployees = employeesRecords.slice(0, 3);
console.log(topThreeEmployees.length);
console.log(employeesRecords.slice(-2).map(emp => emp.name));
employeesRecords.splice(2, 2, {
  id: 103,
  name: "Anjali Reddy",
  department: "Testing",
  designation: "QA Engineer",
  salary: 55000,
  experience: 3,
  city: "Chennai",
  isActive: false
});

console.log(employeesRecords.length);
const departmentNames = employeesRecords.map(emp => emp.department);
console.log(departmentNames.includes("Frontend"));
console.log(departmentNames.includes("marketing"));
console.log(departmentNames.indexOf("Frontend"));
console.log(departmentNames.indexOf("marketing"));
console.log(departmentNames.lastIndexOf("Frontend"));
const foundEmployee = employeesRecords.find(emp => emp.department === "Backend");
console.log(foundEmployee);
const notfoundEmployee = employeesRecords.find(emp => emp.department === "sales");
console.log(notfoundEmployee);
const foundIndex = employeesRecords.findIndex(emp => emp.name === "Kiran Kumar");

console.log(foundIndex);
employeesRecords.forEach((emp, index) => {
  console.log(`${index + 1}. ${emp.name} - ${emp.department}`);
});
const employeeNames = employeesRecords.map(emp => emp.name);
console.log(employeeNames);

const formattedSalaries = employeesRecords.map(emp => `₹${emp.salary.toLocaleString("en-IN")}`);
console.log(formattedSalaries);

const activeEmployees = employeesRecords.filter(emp => emp.isActive === true);
console.log(activeEmployees.map(emp => emp.name));
console.log(employeesRecords.length);

const highEarners = employeesRecords.filter(emp => emp.salary > 60000);
console.log(highEarners.map(emp => emp.name));

const noMatch = employeesRecords.filter(emp => emp.department === "Sales");
console.log(noMatch);

const totalSalary = employeesRecords.reduce((total, emp) => total + emp.salary, 0);
console.log(totalSalary);

const averageSalary = totalSalary / employeesRecords.length;
console.log(averageSalary);

const employeesByDepartment = employeesRecords.reduce((groups, emp) => {
  if (!groups[emp.department]) {
    groups[emp.department] = [];
  }
  groups[emp.department].push(emp.name);
  return groups;
}, {});
console.log(employeesByDepartment);

const hasInactiveEmployee = employeesRecords.some(emp => emp.isActive === false);
console.log(hasInactiveEmployee);

const allEmployeesActive = employeesRecords.every(emp => emp.isActive === true);
console.log(allEmployeesActive);

const allHaveSalaryAboveZero = employeesRecords.every(emp => emp.salary > 0);
console.log(allHaveSalaryAboveZero);

const sortedBySalaryAsc = [...employeesRecords].sort((a, b) => a.salary - b.salary);
console.log(sortedBySalaryAsc.map(emp => `${emp.name}: ${emp.salary}`));

const sortedBySalaryDesc = [...employeesRecords].sort((a, b) => b.salary - a.salary);
console.log(sortedBySalaryDesc.map(emp => emp.name));

const sortedByName = [...employeesRecords].sort((a, b) => a.name.localeCompare(b.name));
console.log(sortedByName.map(emp => emp.name));

console.log([100, 25, 3].sort());
console.log([100, 25, 3].sort((a, b) => a - b));

const reversedOrder = [...employeesRecords].reverse();
console.log(reversedOrder.map(emp => emp.name));
console.log(employeesRecords.map(emp => emp.name));

const newHires = [
  {
    id: 108,
    name: "Arjun Verma",
    department: "Backend",
    designation: "Backend Intern",
    salary: 30000,
    experience: 0,
    city: "Delhi",
    isActive: true
  }
];

const updatedTeam = employeesRecords.concat(newHires);
console.log(updatedTeam.length);
console.log(employeesRecords.length);

const updatedTeamWithSpread = [...employeesRecords, ...newHires];
console.log(updatedTeamWithSpread.length);

const employeeRecordsCopy = [...employeesRecords];
console.log(employeeRecordsCopy.length === employeesRecords.length);

console.log([...employeesRecords.slice(0, 2), { id: 999, name: "Guest" }]);

const namesOnly = employeesRecords.map(emp => emp.name);
console.log(namesOnly.join(", "));
console.log(namesOnly.join(" | "));

const departmentSummary = [...new Set(employeesRecords.map(emp => emp.department))].join(", ");
console.log(departmentSummary);

console.log(Array.from("Vamsi"));

const uniqueDepartmentsSet = new Set(employeesRecords.map(emp => emp.department));
const uniqueDepartmentsArray = Array.from(uniqueDepartmentsSet);
console.log(uniqueDepartmentsArray);

const employeeIdsPlusOne = Array.from(employeesRecords, emp => emp.id + 1);
console.log(employeeIdsPlusOne);