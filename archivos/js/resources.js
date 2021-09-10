function reservas (i){
    document.getElementById("nres").innerHTML=elm.recursos[i].reservas;
    document.getElementById("resdesc").innerHTML=elm.recursos[i].descripcion;
    document.getElementById("restyp").innerHTML=elm.recursos[i].tipo;
}
function cargado (){
    let cadena="";
    elm.recursos.forEach((el,i)=>{
        cadena += '<div ('+i+')">'+el.reservas+<br></br>+el.descripcion+<br></br>+el.tipo'</div>';
    });
    document.getElementById("recursosmain").innerHTML=cadena;
}