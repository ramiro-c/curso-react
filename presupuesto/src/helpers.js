export const revisarPresupuesto = (presupuesto, restante) => {
    if ((presupuesto / 4) > restante) {
        // 25% o menos restante
        return "alert alert-danger";
    }
    if ((presupuesto / 2) > restante) {
        // 50% o menos restante
        return "alert alert-warning";
    }
    // Mas del 50% restante
    return "alert alert-success";
}