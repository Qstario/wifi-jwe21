//so selektiert man mit jquery
//$('body').html('<div id="js-element"></div>');

//ist das gleiche nur mt jquery
//document.getElementsByTagName('body').innerHTML ='<div id="neues-js-element"></div>';

console.log('die Seite ist geladen');

//gibt im log aus das der button geklickt wurde
$('#calc').click(
    function(){
        console.log('button clicked');
        //gibt aus was im input eingegeben wird
        //console.log($('#input').val());

        
        //console.log(eval($('#input').val()));

        let eingabe =$('#input').val();
        let result = eval(eingabe);
        console.log(result);

        $('#result').val(result);
    }
);

