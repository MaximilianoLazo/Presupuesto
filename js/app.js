const ingresos = [
    new Ingreso('Salario',2100.00),
    new Ingreso('Venta mancuernas', 2800.00)

];

const egresos = [
    new Egreso('Cemento', 1090.00),
    new Egreso('Pintura',980.00)


];

let cargarAPP = () =>{
    cargarCabecero();
}

let totalIngresos = () =>{
    let totalIngreso = 0;
    for(let ingreso of ingresos){
        totalIngreso += ingreso.valor;
    }
    return totalIngreso;

}

let totalEgresos = () => {
 let totalEgreso = 0;
 for(let egreso of egresos){
     totalEgreso += egreso.valor;
 }
 return totalEgreso;

}

let cargarCabecero = () => {
    let presupuesto = totalIngresos() - totalEgresos();
    let porcentajeEgreso = totalEgresos()/totalIngresos();
    document.getElementById('presupuesto').innerHTML = formatoMoneda(presupuesto);
    document.getElementById('porcentaje').innerHTML = formatoPorcentaje(porcentajeEgreso);
    document.getElementById('ingresos').innerHTML = formatoMoneda (totalIngresos());
    document.getElementById('egresos').innerHTML = formatoMoneda (totalEgresos());
}

const formatoMoneda = (valor) =>{
    return valor.toLocaleString('en-US',{style:'currency',currency:'USD',minimumFractionDigits:2});
    


}
const formatoPorcentaje = (valor) =>{
    return valor.toLocaleString('en-US',{style:'percent', minimumFractionDigits:2});

}