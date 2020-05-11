function removeFalsyValues(niz) {
  const noviNiz = niz.filter(Boolean);
  return noviNiz;
}

export default removeFalsyValues;
