let student = {
  ime: "Meryem",
  prezime: "Sinanovic",
  brojIndeksa: "5476486",
  ocene: [9, 9, 8, 7, 10],
  prosekOcena: function () {
    let ukupnoOcena = this.ocene.length;
    if (ukupnoOcena === 0) {
      return 0;
    }
    let sumaOcena = this.ocene.reduce((acc, ocena) => acc + ocena, 0);
    return sumaOcena / ukupnoOcena;
  },
};
console.log("Ime:", student.ime);
console.log("Prezime:", student.prezime);
console.log("Broj indeksa:", student.brojIndeksa);
console.log("Ocene:", student.ocene);
console.log("Prosek ocena:", student.prosekOcena());
