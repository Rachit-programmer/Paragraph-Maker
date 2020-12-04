function getpara1(){
var inputs= [];
for (var index = 1; index <= 6 ; index++) {
    inputs.push(document.getElementById("par_input_" + index).value);
    document.getElementById("showPar1").innerHTML = inputs.join(". ");
};

};

function getpara2(){
    var inputs2= [];
    for (var i = 1; i <= 6 ; i++) {
        inputs2.push(document.getElementById("par2_input_" + index).value);
        document.getElementById("showPar2").innerHTML = inputs2.join(". ");
    };
    
    };