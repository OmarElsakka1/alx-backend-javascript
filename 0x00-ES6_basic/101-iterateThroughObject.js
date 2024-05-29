export default function iterateThroughObject(reportWithIterator) {
  const employeeArray = [];

  for (const employee of reportWithIterator) {
    employeeArray.push(employee);
  }

  return employeeArray.join(' | ');
}
