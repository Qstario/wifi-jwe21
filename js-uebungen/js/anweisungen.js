//operator == true or false
if (typeof "Apfel" == "string") {

}
//true
if (1 > 0) {

}
if (0 < 1) {

}

if (1 == 1) {

}
//<= entweder kleiner oder gleich dann true
if (0 <= 1) {

}
//false
if (0 >= 1) {

}
//true
if (!(0 == 1)) {

}

if (!0 == 1) {

}
//wenn beide stimmen gibt es true aus
if ((1 < 5) && (9 == 14)) {

}
//ist einer der Operanden true wird true ausgegeben
if ((1 < 5) || (9 == 14)) {

}
// wenn einer der operanden stimmt wird true ausgegeben
if (1 == 1 || (2 > 1 && 4 == 6)) {

}
//wenn beide operanden gleich sind wird true ausgegeben
if (2 == 2 && 3 == 3) {

}
//false
if (2 == 2 && 3 == 2 || 1 == 1) {

}
// Strings vergleiche folgen...
//
//
//false
if ("Name" == "Name2") {

}
//false
if ("Name".length < 4) {

}
// = 4 , daher true
if ("Name".length > 3) {

}
//true
if ("jasmin".indexOf("a") == 1) {

}

let vorname = "Roland";

//
switch (vorname) {
    case "Roland":
        console.log("Ich bin Netflix-Fan");
        break;

    case "Qendrim":
        console.log("Ich habe coding für mich entdeckt!");
        break;

    default:
        console.log("alles halb so wild :-D");
}