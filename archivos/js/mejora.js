function elgmejora (i){
document.getElementById("upgtag").innerHTML=elm.mejora[i].titulo;
}
function cargado (){
let cadena="";
elm.mejora.forEach((el,i)=>{
    cadena += '<li onclick="elgmejora('+i+')">'+el.nombre+'</li>';
});
document.getElementById("mejoras").innerHTML=cadena;
}