function cargado (){
    let cadena="";
    elm.recursos.forEach((el,i)=>{
        cadena += '<li('+i+')">'+el.reservas+'</li>';
    });
    document.getElementById("card").innerHTML=cadena;
}