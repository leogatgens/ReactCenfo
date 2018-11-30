import React from 'react';

const TopeInferiorNivel1 = 799000;
const TopeInferiorSuperiorNivel1 = 1199000;
const TopeInferiorNivel2 = 1199000;


function obtieneTipoDeCambio(){
    return 584;
}

function calculaMontoEnColones(salario,tipoDeCambio){
    return tipoDeCambio * salario;
}

function calculaRentaNivel1(salarioColones){
    const montoMaximoACargar = TopeInferiorSuperiorNivel1 - TopeInferiorNivel1 ;
    let resultado = salarioColones - TopeInferiorNivel1;
    
    
    if(resultado > 0){
        if(resultado >= montoMaximoACargar ){
        
            return montoMaximoACargar * 0.10;
        }else{
            return resultado * 0.10;
        }       
     } 
     return 0;
    
}
function calculaRentaNivel2(salarioColones){
    let resultado = salarioColones - TopeInferiorNivel2;
    console.log(resultado);
    if(resultado > 0){
       return resultado * 0.15;
    }

    return 0;
}

function flujoRentaPorColaboradorActivo(datos){  
    const TipoCambioVenta = obtieneTipoDeCambio();

    let colaboradoresActivos = datos.filter(colaborador =>  colaborador.isActive  === true);   

    let nuevosSalarios =  colaboradoresActivos.map(colaborador => {
        let nuevoColabordor = {};
        nuevoColabordor.nombre = colaborador.name.first + " " + colaborador.name.last;
        nuevoColabordor.Salario =  calculaMontoEnColones(colaborador.salaryInDolars,TipoCambioVenta);      
        let rentaNivel1 =   calculaRentaNivel1( nuevoColabordor.Salario);
        let rentaNivel2=  calculaRentaNivel2( nuevoColabordor.Salario);
        nuevoColabordor.Renta =   rentaNivel1 + rentaNivel2;

        return nuevoColabordor;     
    });

    return nuevosSalarios; 
}

function ListarColaboradores(props){  
   let colaboradoresActivos = flujoRentaPorColaboradorActivo(props.data);
    return (
        <>
             <h1>Renta colaboradores activos 2018</h1>
             {colaboradoresActivos.map((usuario,i) => {
                 return (

                     <DetalleColaborador className="" key={i} nombre = {usuario.nombre} 
                     salarioEnColones = {usuario.Salario}  
                     Renta = {usuario.Renta} />
                 );
             })}
        </>      
    );
}
function DetalleColaborador(props){
    const {nombre,salarioEnColones,Renta}  = props;  
    return (  
    <article className="detallerenta">
        <ul>
        <li><span>Nombre: </span>{nombre}</li>
        <li><span>Salario: </span>{salarioEnColones}</li>
        <li><span>Renta: </span>{new Intl.NumberFormat("es-CR", {style: "currency", currency: "CRC"}).format(Renta)}</li>        
        </ul>
    </article>
    );
}

export default ListarColaboradores;