function cargado (){
    let cadena=""; 
    elm.recursos.forEach((el,i)=>{
        cadena += 
        '<div class="card"(`+i+`)>'+
             '<div class="nres" txt="'+el.reservas+'">'+
             '<div class="datos">'+
             '<div class="descres">'+el.descripcion+'</div>'+
             '<div class="restyp">'+el.tipo+'</div>'+
             '</div></div></div>';

    });
    document.getElementById("recursosmain").innerHTML=cadena;

}
