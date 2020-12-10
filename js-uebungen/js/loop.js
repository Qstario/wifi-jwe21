
let namen = [
    'Robert',
    'Jasmin',
    'Ulvi'
];

/* Fix definierte Anzahl an loops mit einer Laufzeitvariable (i)*/ 
for(let i=0; i<3; i++){
    //console.log("hey:"  +i);

    //let html ='<img src="https://placehold.it/300x200?text=' + namen[i] + '">';
    //console.log(html);

    //gibt 10 placeholder aus im html
    //document.getElementById('gallery').innerHTML +=html;


}

//nimm diesen array und geh über diese imgs und füge die namen ein und gib sie aus
namen.forEach(elm =>{
    console.log(elm);

    let html ='<img src="https://placehold.it/300x200?text=' + elm + '"class="bild-'+i+'">';

    document.getElementById('gallery').innerHTML+= html;

});


//namen.forEach(elm =>{

    //function(elm,i){
        //console.log(elm);

        //let html ='<img src="https://placehold.it/300x200?text=' + elm + '"class="bild-'+i+'">';

        //document.getElementById('gallery').innerHTML+= html;
    //}

//});