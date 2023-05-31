// Domaci:

function protectUser(email) {
  const indexUnderline = email.indexof("_");
  const indexDot = email.indexof(".");
  const indexSymbol = indexUnderline === -1 ? indexDot : indexUnderline;
  const indexEt = email.indexof("@");
  const surname = email.slica(indexSymbol, indexEt);
  return email.replace(surname, "...");
}

console.log(protectUser("robin_singh@example.com"));
console.log(protectUser("robin.singh@example.com"));
