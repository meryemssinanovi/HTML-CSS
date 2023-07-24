let person = {
  firstName: "Meryem",
  lastName: "Sinanovic",
  language: ["Serbian", "English"],
};
person.addLanguage = function (lang) {
  this.language.push(lang);
};
person.addLanguage("German");

person.removeLanguage = function (lang) {
  //   const position = this.language.indexOf(lang);
  //   if (position !== -1) {
  //     this.language.splice(position, 1);
  //   }
  const newArr = this.language.filter((language) => language !== lang);
  this.language = newArr;
};
person.removeLanguage();
person.setNickname = function () {
  let prvi = this.firstName.slice(0, 2).toLowerCase();
  let drugi = this.lastName.slice(0, 2).toLowerCase();
  let treci;
};
