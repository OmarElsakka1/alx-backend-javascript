export default function iterateThroughObject(reportWithIterator) {
  let str = '';
  const lastName = reportWithIterator[reportWithIterator.length - 1];
  for (const name of reportWithIterator) {
    str += name;
    if (name !== lastName) {
      str += ' | ';
    }
  }
  return str;
}
