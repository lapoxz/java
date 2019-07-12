/**NAN 1*/
function xnumbox1(){
    alert('Firts Input is  not a NUMBER');
}
function xnumbox10(){
    alert('First Input not a NNUMBER and Second Input is EMPTY');
}
function numbox(){
    alert(' DILI NUMERO IMONG GIPANG BUTANG!!');
}


/**EMPTY 0*/
function xnumbox01(){
    alert(' First Input is EMPTY');
}
function xnumbox011(){
    alert(' First Input is EMPTY and Second is not a NUMBER');
}
function empty(){
    alert('BUTANGI KUNO NAH !!!');
}
/**VALUE 00*/
function xnumbox001(){
    alert('Second Input is not a NUMBER');
}
function xnumbox000(){
    alert('Second Input is EMPTY');
}


function plus(){
    var x = document.getElementById('box1').value;
    var y = document.getElementById('box2').value;

    /**NAN 1*/
    if      (isNaN(x) && isNaN(y) ){
            numbox();
    }
    else if (isNaN(x) && y==''){
            xnumbox10();
    }
    else if (isNaN(x) && (y)){
            xnumbox1();
    }

    /**EMPTY 0*/
    else if(x=="" && y==""){
            empty();
    }
    else if (x=='' && isNaN(y)){
            xnumbox011();
    }
    else if (x=='' && y){
            xnumbox01();
    }

    /**VALUE 00 */
    else if (x && isNaN(y)){
            xnumbox001();
    }
    else if (x && y==''){
            xnumbox000();
    }
    else{
        var sum = Number(x) + Number(y);
        alert('The SUM is: ' + sum);
    }

}



function minus(){
    var x = document.getElementById('box1').value;
    var y = document.getElementById('box2').value;

    /**NAN 1*/
    if      (isNaN(x) && isNaN(y) ){
        numbox();
    }

    else if (isNaN(x) && y==''){
            xnumbox10();
    }
    else if (isNaN(x)&& (y)){
            xnumbox1();
    }

    /**EMPTY 0*/
    else if(x=="" && y==""){
            empty();
    }
    else if (x=='' && isNaN(y)){
            xnumbox011();
    }
    else if (x=='' && y){
            xnumbox01();
    }

    /**VALUE 00 */
    else if (x && isNaN(y)){
            xnumbox001();
    }
    else if (x && y==''){
            xnumbox000();
    }
    else {
        var diff = Number(x) - Number(y);
        alert('The DIFFERENCE is: ' + diff);
    }
   
}



function times(){
    var x = document.getElementById('box1').value;
    var y = document.getElementById('box2').value;
    /**NAN 1*/
    if      (isNaN(x) && isNaN(y) ){
        numbox();
    }

    else if (isNaN(x) && y==''){
        xnumbox10();
    }
    else if (isNaN(x)&& (y)){
        xnumbox1();
    }

    /**EMPTY 0*/
    else if(x=="" && y==""){
            empty();
    }
    else if (x=='' && isNaN(y)){
            xnumbox011();
    }
    else if (x=='' && y){
            xnumbox01();
    }

    /**VALUE 00 */
    else if (x && isNaN(y)){
            xnumbox001();
    }
    else if (x && y==''){
            xnumbox000();
    }
    else {
    var product = Number(x) * Number(y);
    alert('The PRODUCT is: ' + product);
    }
}



function divide(){
    var x = document.getElementById('box1').value;
    var y = document.getElementById('box2').value;
    /**NAN 1*/
    if      (isNaN(x) && isNaN(y) ){
             numbox();
    }

    else if (isNaN(x) && y==''){
            xnumbox10();
    }
    else if (isNaN(x)&& (y)){
             xnumbox1();
    }

    /**EMPTY 0*/
    else if(x=="" && y==""){
            empty();
    }
    else if (x=='' && isNaN(y)){
            xnumbox011();
    }
    else if (x=='' && y){
            xnumbox01();
    }

    /**VALUE 00 */
    else if (x && isNaN(y)){
            xnumbox001();
    }
    else if (x && y==''){
            xnumbox000();
    }
    else {
            var quotient = Number(x) / Number(y);
            alert('The QUOTIENT is: ' + quotient);
        }

}