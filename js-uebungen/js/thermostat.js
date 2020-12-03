/*

Die Funktion ermittel mit den Eingabewerten,
ob die Temperatur innerhalb der Vorgaben liegt

curreTemp: aktuelle Temperatur
minTemp:   die mindest Temperatur
maxTemp:   die Maximaltemperatur

Rückgabewert:(string): Text mit der Meldung innerhalb der Vorgaben

*/

function termo(curreTemp,minTemp,maxTemp){
    if(curreTemp >= minTemp && curreTemp <= maxTemp){
        //temperatur OK
        //schalteHeizungAus();
        return "OK";

    } else if(curreTemp > maxTemp){
        //temperatur zu hoch
        //schalteHeizungAus();
        //alternativ schalteKlimaEin();
        return "HOT";

    }else if(curreTemp < minTemp){
        //temperatur zu niedrig
        //schalteKlimaAus();
        //schalteKlimaEin();
        return "COLD";
    }
}