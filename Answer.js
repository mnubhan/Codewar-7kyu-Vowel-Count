function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
}

function getCount(str) {
  return str.match(/[aeiou]/g) == null ? 0 : str.match(/[aeiou]/g).length;
}
