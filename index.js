let valorPorHora;
let carroTipo;
let horas;
let descuento;
let valorInicial;
let valorTotal;

document.getElementById("montos").style.display="none";
document.getElementById("btnImprime").style.display="none";

function calcular(){

    horas = Number(document.getElementById("salida").value);
    tipo = (document.getElementById("tipo").value).toLowerCase();

    if(horas == 0){
        alert("Datos Incorrectos");
    }else {

        
        valor = valorServicio(horas);
        descuento = porcentaje(tipo, valor);
        
        valorTotal = valor - descuento;
        
        document.getElementById("valor").value = valor;
        document.getElementById("descuento").value = descuento;
        document.getElementById("total").value = valorTotal;
        
        document.getElementById("montos").style.display="block";
        document.getElementById("btnImprime").style.display="block";
    }

}


function valorServicio(h){

    if(h > 0 && h <= 2){
        valorPorHora = 5000;
        valorInicial = (h * valorPorHora);
    }else if(h >= 3 && h <=5){
        valorPorHora = 4000;
        valorInicial = (2 * 5000) + ((h - 2) * valorPorHora);
    }else if(h > 5 && h <= 10){
        valorPorHora = 3000;
        valorInicial = (2 * 5000) +  (3 * 4000) + ((h - 5) * valorPorHora);
    }else if(h > 10){
        valorPorHora = 2000;
        valorInicial = (2 * 5000) +  (3 * 4000) + (5 * 3000) + ((h - 10) * valorPorHora);
    }

    return valorInicial; 

}

function porcentaje(tipo, valor){

    switch(tipo){
        case "carro":
            descuento = valor * 0.10;
            break;
        case "moto":
            descuento = valor * 0.15;
            break;
        default:
        break;    
    }

    return descuento;
}