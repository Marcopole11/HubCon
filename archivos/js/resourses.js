function cargado (){
    let cadena=""; 
    elm.recursos.forEach((el,i)=>{
        cadena += '<div class="card"('+i+')>'+el.reservas+"<br>"+el.descripcion+"<br>"+el.tipo+'</div>';
    });
    document.getElementById("recursosmain").innerHTML=cadena;

}
