let userNameFromDataBase = "Minus";

function sayMyName(name) {

    if (checkMyInput(name) == true) {
        console.log("Your name is " + name);
    }


    //console.log("Your name is " + name);
}

sayMyName("fettbauch barry");
sayMyName("Nikitta chilla");
sayMyName("Plötze");
sayMyName(userNameFromDataBase);

function checkMyInput(input) {
    //prüft ob es ein string ist und gibt es gegebenfalls aus
    if (typeof input == "string") {
        //console.log("yes it is a string");
        return true;
    } else {
        //console.log("Your input is not a Name (or a String)");
        return false;
    }
}
//damit speichert man das ergbnis der ChmyIn funktion
//um es für eine weiterverarbeitung zu nutzen
//let ergebnisMeinerFunktion = checkMyInput("Minus");