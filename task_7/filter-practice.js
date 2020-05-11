function filterPractice(niz) {
  const noviNiz = niz.filter((v, i) => niz.indexOf(v)==i);
  return noviNiz;
}

export default filterPractice;
