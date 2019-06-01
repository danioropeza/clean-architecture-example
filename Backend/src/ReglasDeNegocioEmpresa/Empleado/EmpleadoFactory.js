var CalculadoraSalarioFactory = require('./CalculadorasSalario/CalculadoraSalarioFactory').CalculadoraSalarioFactory;
var ClasificadorFechaFactory = require('./ClasificadoresFechaDePago/ClasificadorFechaFactory').ClasificadorFechaFactory;
var MetodoPagoFactory = require('./MetodosPago/MetodoPagoFactory').MetodoPagoFactory;
var MetodosNotificacionFactory = require('./MetodosNotificacion/MetodosNotificacionFactory').MetodosNotificacionFactory;
var Empleado = require('./Empleado').Empleado;

class EmpleadoFactory {
    constructor(datosEmpleado) {
        let calculadoraSalario=new CalculadoraSalarioFactory(datosEmpleado.tipo,datosEmpleado);
        let clasificadorFecha = new ClasificadorFechaFactory(datosEmpleado.tipo);
        let metodoDePago = new MetodoPagoFactory(datosEmpleado.tipo);
        let empleado = new Empleado(datosEmpleado.nombre, datosEmpleado.ci, calculadoraSalario, clasificadorFecha, metodoDePago);
        this.datosEmpleado.metodosDeNotificacion.forEach((metodoNotificacion) => {
                empleado = new MetodosNotificacionFactory(metodoNotificacion,empleado);
        });
    }
}

module.exports= { EmpleadoFactory };
