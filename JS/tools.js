function mostrar(id){
    id.style.display = "initial";
}
function ocultar(id){
    id.style.display = "none";
}
function mostrar_features(){
    ocultar(comments);
    ocultar(questions);
    ocultar(videos);
    mostrar(features);
}

function toc(){
    console.log("Hola");
}

function mostrar_comments(){
    ocultar(features);
    ocultar(questions);
    ocultar(videos);
    mostrar(comments);
}

function mostrar_videos(){
    ocultar(features);
    ocultar(questions);
    ocultar(comments);
    mostrar(videos);
}

function mostrar_questions(){
    ocultar(features);
    ocultar(comments);
    ocultar(videos);
    mostrar(questions);
}


function continuar(id){
    var div_cest = document.getElementById('cest');
    var div_shipment_directions = document.getElementById('shipment-directions');
    var div_delivery_options = document.getElementById('delivery-options');
    var div_payment = document.getElementById('payment');
    var div_resume = document.getElementById('resume');

    const arrayIds = [div_cest, div_shipment_directions, div_delivery_options, div_payment, div_resume];
    arrayIds.forEach(ocultar);

    if(id == 'shipment-directions'){
        div_shipment_directions.style.display = "inline-flex"
    }
    else if(id == 'resume'){
        div_resume.style.display = "inline-flex"
    }
    else{
        mostrar(document.getElementById(id));
    }
    
}

