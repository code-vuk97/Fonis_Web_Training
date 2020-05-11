function getPropsLongerThan5(obj) {
  const niz = [];
  for (const variable in obj) {
    if (variable.length > 5) {
      niz.push(variable);
    }
  }
  return niz;
}

export default getPropsLongerThan5;
