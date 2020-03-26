export function obtenerDiferenciaYear(year){
    return (new Date()).getFullYear() - year;
}

export function calcularMarca(marca){
    if(marca === 'europeo')
        return 1.3;
    if(marca === 'americano')
        return 1.15;
    if(marca === 'asiatico')
        return 1.05;
    return null; // error
}

export function calcularPlan(plan){
    if(plan === 'basico')
        return 1.2;
    if(plan === 'completo')
        return 1.5;
    return null; // error
}