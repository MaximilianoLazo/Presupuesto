const ingresos = [
    new Ingreso('Salario',2000.00),
    new Ingreso('Venta mancuernas', 2800.00)

];

const egresos = [
    new Egreso('Carton', 1090.00),
    new Egreso('Pintura', 900.00)


];

let cargarAPP = () =>{
    cargarCabecero();
    cargarIngresos();
    cargarEgresos();
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

const cargarIngresos = () =>{
    let ingresosHTML = '';
    for(let ingreso of ingresos){

        ingresosHTML += crearIngresoHTML(ingreso);

    }
    document.getElementById('lista-ingresos').innerHTML = ingresosHTML;

}
const cargarEgresos = () =>{

    let egresosHTML = '';

    for(let egreso of egresos){

        egresosHTML += crearEgresoHTML (egreso);
    }
    document.getElementById('lista_egresos').innerHTML = egresosHTML;
}

const crearEgresoHTML = (egreso) =>{
    let egresoHTML = ` 
    <div class="elemento limpiarEstilos">
                    <div class="elemento_descripcion">${egreso.descripcion}</div>
                    <div class="derecha limpiarEstilos">
                        <div class="elemento_valor">${formatoMoneda(egreso.valor)}</div>
                        <div class="elemento_porcentaje">${formatoPorcentaje(egreso.valor/totalEgresos())}</div>
                        <div class="elemento_eliminar">
                            <button class="elemento_eliminar-btn">
                                <ion-icon name="close-circle-outline"></ion-icon>
                            </button>
                        </div>
                    </div>
                </div>
    
    `
    ;
    return egresoHTML;

}
const crearIngresoHTML = (ingreso) => {

    let ingresoHTML = `
    <div class="elemento limpiarEstilos">
    <div class="elemento_descripcion">${ingreso.descripcion}</div>
    <div class="derecha limpiarEstilos">
        <div class="elemento_valor">${formatoMoneda(ingreso.valor)}</div>
        <div class="elemento_eliminar">
            <button class="elemento_eliminar-btn">
                <ion-icon name="close-circle-outline"></ion-icon>
            </button>
        </div>
    </div>
</div>
    
    `
    ;
    return ingresoHTML;
}