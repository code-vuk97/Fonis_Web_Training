funkcija prima objekat i vraca niz koji sadrzi sve property-je tog objekta koji su duzi od 5 karaktera

primer 
obj = {
  ime: 'vuk',
  prezime: 'stefanovic',
  godiste: 97
}

getPropsLongerThan5(obj) treba da vrati niz ['prezime', 'godiste']
ne vraca 'ime' zato sto je propery ime kraci od 5 karaktera

koristiti for in
ili for of
ili object.keys
ili jos bolje uradite na sva 3 nacina nacina!


https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of


