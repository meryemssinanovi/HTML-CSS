const first = () => {
  const a = +prompt("Unesite prvu potencijalni stranicu pravougaonika:");
  const b = +prompt("Unesite drugu potencijalni stranicu pravougaonika:");
  const c = +prompt("Unesite trecu potencijalni stranicu pravougaonika:");
  if (
    ((a === b) === c) === d ||
    (a === b && c === d) ||
    (a === c && b === d) ||
    (a === d && b === c)
  ) {
    return "Moguce je formirati pravougaonik.";
  } else {
    return "Nije moguce formirati pravougaonik.";
  }
};

// 2.zadatak

const second = () => {
  const brojSekundi = +prompt("Unesite broj sekundi:");
  const sati = Math.floor(brojSekundi / 3600);
  const minuti = Math.floor((brojSekundi % 3600) / 60);
  const sekundi = brojSekundi % 60;
  return `${sati}h ${minuti}m ${sekunde}s`;
};
console.log(second());
