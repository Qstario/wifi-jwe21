//variablen gelten grunsätzlich global
var ganzZahl;
//console.log(ganzZahl);
ganzZahl = 5;
//console.log(ganzZahl);
ganzZahl = 5 + 4;
//console.log(ganzZahl);

ganzZahl = 4 + ganzZahl * 2, 5;
//console.log(ganzZahl);


var aufsteigendeZahl = 1;
//console.log(aufsteigendeZahl);
aufsteigendeZahl++;
//console.log(aufsteigendeZahl);

var abssteigendeZahl = 10;
abssteigendeZahl--;
//console.log(abssteigendeZahl);

var zahlAlsText = "3";

//console.log(zahlAlsText);
/*parsentint liest zahl im text aus*/
zahlAlsText = parseInt(zahlAlsText);
//console.log(zahlAlsText);
//console.log(typeof zahlAlsText);

var number1 = 2;
var number2 = 7;

//console.log(number1 * number2);

var spruch = "Hallo, ";
//console.log(spruch);

spruch = spruch + "Welt!";
//console.log(spruch);

spruch = "-=[" + spruch + "]=-";
//console.log(spruch);

var inputFeld1 = '<input type="text" value="test">';
//so geht es auch 
var inputFeld2 = "<input type=\"text\" value=\"test\">";

//console.log(inputFeld1, inputFeld2);
//ist ein alert, wird selten verwendet und sollte nicht verwendet werden
//window.alert(inputFeld1);


//document.write("hallo");
//document.write(" <br>ich bin eine neue Code-Zeile");

//arrays sind mehrere zusammengefasste Variablen
var farben = ["rot", "geld", "grün"];
//console.log(farben[2]);
//damit holt man sich alle werte und setzt sie hintereinander
var farbenAlsText = farben.join(" / ");
//console.log(katalog);


//array lassen sich in arrays verschateln
var katalog = [
    "Inhaltsverzeichnis", ["Absatz 1", "Absatz 2"],
    "Kapitel 2",
];
//löscht sachen raus
katalog.pop();
//damit fügt man was hinzu
katalog.push("Kapitel 5");
//console.log(katalog);

//(farben[0]) so greift man af einzele daten zu)
//console.log(katalog[1][0]);

var neuesArray = [];

//console.log(neuesArray[0])
// so überschreibt man einen array oder fügt etwas neues hinzu
katalog[0] = "Inhaltsverzeichnis Neu";
//console.log(katalog);

var speicherplatzzugriffsname = "groesse";


// eine var vom typ objekt
var ich = {
    vorname: "Manuel",
    nachname: "Obermoser",
    groesse: "180cm",
    alter: 33,

    kopf: {
        augen: "braun-grün",
        haare: "dunkelbraun"
    }
};

//console.log("Hallo,ich bin" + ich.vorname + "!");
//console.log("Aktuell bin ich" + ich.alter + "Jahre alt");
//console.log("Meine Augen habern die Farbe" + ich.kopf.augen + "");
//console.log(ich[speicherplatzzugriffsname]);


//mit const sorgt man dafür das bestimmte sachen nicht überchrieben werden
const USER_NAME = "manuel";
console.log(USER_NAME);

//anstatt var sollte man let verwenden 
// let ist ein  geschützter bereich
var example1 = "hui!"

{
    let neueVariable = "Loopy!";
    console.log(example1);
}


//console.log(neueVariable);