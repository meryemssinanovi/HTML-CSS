// STRINGOVI //
// Stringovi su immutable vrenosti.
// Stringovi su primtitivnog (osnovnog) tipa podataka.
// Samo prazan string daje  false vrednsot.

// Za dobijanje duyinenstringa koristimo length metofu:
let a = "string";
duzina = a.length;

// String mozemo zapisati na nekoliko nacina:

// 1. nacin
// koristeci duple navodnike :
("Danas je bilo promenljivo vreme");
// 2.nacin
// koristeci obicne navodnkie:
("Danas je bilo promenljivo vreme"); //nece da rade zbog prettier-a
// 3.nacin
// Template Literals(Back-Tics sintaksa)
`Danas je bilo promenljivo vreme.`;

// Dupli navodnici:
("Danas je bilo 'promenljivo' vreme.");
('Danas je bilo "promenljivo"vreme.');

// Obicni navodnici:
('Danas je bilo "promenljivo" vreme.');
("Danas je bilo 'promenljivo'vreme.");
