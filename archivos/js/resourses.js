function elgmejora (i){
    document.getElementById("ventanamejora").style.display="block";
    document.getElementById("upgtag").innerHTML=elm.mejora[i].titulo;
    document.getElementById("upgdesc").innerHTML=elm.mejora[i].desc;
    document.getElementById("upgneed").innerHTML=elm.mejora[i].req;
}
function cargado (){
    let cadena="";
    elm.recursos.forEach((el,i)=>{
        cadena += '<li onclick="elgmejora('+i+')">'+el.nombre+'</li>';
    });
    document.getElementById("card").innerHTML=cadena;
}