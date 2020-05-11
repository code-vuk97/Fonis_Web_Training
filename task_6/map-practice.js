function mapPractice(niz) {
  const novNiz = niz.map(function(item, index, array) {
    const a = item - index;
    return a;
  });
  return novNiz;
}

export default mapPractice;
