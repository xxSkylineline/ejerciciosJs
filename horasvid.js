//nuevo archivo de horas

const result = document.querySelector("#calcular");
const horasArrys = [];
const minsArrys = [];
const segsArrys = [];
let horasSum = 0;
let minsSum = 0;
let segsSum = 0;

result.onclick = function() {
    const horasDvid = Number(document.querySelector('#horasVid').value);
    const minutosDvid =Number(document.querySelector('#minutosVid').value);
    const segundosDvid = Number(document.querySelector('#segundosVid').value);
    //const cantvids = document.querySelector('#videostotal').value;

    
    horasArrys.push(horasDvid);
    minsArrys.push(minutosDvid);
    segsArrys.push(segundosDvid);

    
    for (let i = 0; i < horasArrys.length-1; i++) {
        horasSum += horasArrys[i];
        
    }        
    

    let minsSum = 0;
    for (let i = 0; i < minsArrys.length -1 ; i++) {
        minsSum  += minsArrys[i];
        
    }
    

    let segsSum = 0;
    for (let i = 0; i < segsArrys.length-1; i++) {
        segsSum += segsArrys[i];
        
    }
    
    

    
 
    document.querySelector('#mostrarTiempo').innerText=horasSum+ " HORAS " +minsSum+" MINUTOS "+ segsSum+ "SEGUNDOS";
    return false;
}
