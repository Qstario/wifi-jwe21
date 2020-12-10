let farben =[
    'yellow',
    'brwon',
    'deepred',
    'green',
    'orange'

];



//Zahlengenerator
function randomColor(){

    let zufallszahl = Math.floor( Math.random() * farben.length);

    return farben[zufallszahl];
}

$('button.random').click(function(){
    //console.log('butten clicked');

    $('#farbe').css({
        'background-color' : randomColor()
    });
    
});