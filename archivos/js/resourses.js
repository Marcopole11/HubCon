function cargado (){
    let cadena=""; 
    elm.recursos.forEach((el,i)=>{
        cadena += 
        '<div class="card"(`+i+`)>'+
             '<div id="nres">'+el.reservas+'</div>'+
             '<div id="descres">'+el.descripcion+'</div>'+
             '<div id="restyp">'+el.tipo+'</div>'+
             '</div>';
    });
    document.getElementById("recursosmain").innerHTML=cadena;

}
