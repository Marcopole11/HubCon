function cargado (){
    let cadena=""; 
    elm.recursos.forEach((el,i)=>{
        cadena += '<div class="card"('+i+')>'+el.reservas+'</div>';
    });
    document.getElementById("recursosmain").innerHTML=cadena;

}
