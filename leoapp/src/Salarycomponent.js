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

function flujoRentaPorColaboradorActivo(datos,estadoColaborador){  
    const TipoCambioVenta = obtieneTipoDeCambio();

    let colaboradoresActivos = datos.filter(colaborador =>  colaborador.isActive  === estadoColaborador);   

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

class ListarColaboradores extends React.Component  {
    constructor(props){
        super(props);
        this.state = {     
            estadoColaborador : true,     
            colaboradoresActivos :   []
        };
       this.handleClick = this.handleClick.bind(this);
      }


    render(){
            return (
                <>
                    <h1>Renta colaboradores activos 2018</h1>
                    <button onClick={this.handleClick}> { (this.state.estadoColaborador) ? "Mostrar renta activos" : "Mostrar renta inactivos"}</button>
                    { this.state.colaboradoresActivos.map((usuario,i) => {                    
                            return (

                                <DetalleColaborador className="" key={i} nombre = {usuario.nombre} 
                                salarioEnColones = {usuario.Salario}  
                                Renta = {usuario.Renta} />
                            
                            );
                        
                    
                    })}
                </>      
            );
     }
     handleClick(){

        if( this.state.estadoColaborador){
            this.setState({
                estadoColaborador : false,
                         colaboradoresActivos :flujoRentaPorColaboradorActivo( [
                            {
                              "_id": "5bfc88f8bc18d43d261b9064",
                              "isActive": false,
                              "salaryInDolars": "1754.91",
                              "name": {
                                "first": "Aimee",
                                "last": "Craft"
                              }
                            },
                            {
                              "_id": "5bfc88f8a0db24557c54ea16",
                              "isActive": false,
                              "salaryInDolars": "1083.28",
                              "name": {
                                "first": "Lacey",
                                "last": "Bryan"
                              }
                            },
                            {
                              "_id": "5bfc88f82517f008113ef56a",
                              "isActive": true,
                              "salaryInDolars": "3540.36",
                              "name": {
                                "first": "Andrews",
                                "last": "Morgan"
                              }
                            },
                            {
                              "_id": "5bfc88f8c9f862a08af24446",
                              "isActive": false,
                              "salaryInDolars": "3393.95",
                              "name": {
                                "first": "Hood",
                                "last": "Mcbride"
                              }
                            },
                            {
                              "_id": "5bfc88f80d5ca4126f7cf6c1",
                              "isActive": true,
                              "salaryInDolars": "1997.30",
                              "name": {
                                "first": "Autumn",
                                "last": "Holland"
                              }
                            },
                            {
                              "_id": "5bfc88f838da94457ebf3901",
                              "isActive": false,
                              "salaryInDolars": "2571.57",
                              "name": {
                                "first": "Olive",
                                "last": "Stokes"
                              }
                            },
                            {
                              "_id": "5bfc88f84635a89a5420c2d9",
                              "isActive": false,
                              "salaryInDolars": "1169.31",
                              "name": {
                                "first": "Colleen",
                                "last": "Zamora"
                              }
                            }
                          ],this.state.estadoColaborador)
            })
        } else {
            this.setState({                      
                estadoColaborador : true   ,
                colaboradoresActivos : flujoRentaPorColaboradorActivo([
                    {
                      "_id": "5bfc88f8bc18d43d261b9064",
                      "isActive": false,
                      "salaryInDolars": "1754.91",
                      "name": {
                        "first": "Aimee",
                        "last": "Craft"
                      }
                    },
                    {
                      "_id": "5bfc88f8a0db24557c54ea16",
                      "isActive": false,
                      "salaryInDolars": "1083.28",
                      "name": {
                        "first": "Lacey",
                        "last": "Bryan"
                      }
                    },
                    {
                      "_id": "5bfc88f82517f008113ef56a",
                      "isActive": true,
                      "salaryInDolars": "3540.36",
                      "name": {
                        "first": "Andrews",
                        "last": "Morgan"
                      }
                    },
                    {
                      "_id": "5bfc88f8c9f862a08af24446",
                      "isActive": false,
                      "salaryInDolars": "3393.95",
                      "name": {
                        "first": "Hood",
                        "last": "Mcbride"
                      }
                    },
                    {
                      "_id": "5bfc88f80d5ca4126f7cf6c1",
                      "isActive": true,
                      "salaryInDolars": "1997.30",
                      "name": {
                        "first": "Autumn",
                        "last": "Holland"
                      }
                    },
                    {
                      "_id": "5bfc88f838da94457ebf3901",
                      "isActive": false,
                      "salaryInDolars": "2571.57",
                      "name": {
                        "first": "Olive",
                        "last": "Stokes"
                      }
                    },
                    {
                      "_id": "5bfc88f84635a89a5420c2d9",
                      "isActive": false,
                      "salaryInDolars": "1169.31",
                      "name": {
                        "first": "Colleen",
                        "last": "Zamora"
                      }
                    }
                  ],this.state.estadoColaborador)
            })
        }
       
    }   
       
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

class AppSalary extends React.Component{
  render(){
    return (
      <div>
        <ListarColaboradores></ListarColaboradores>        
        <ListarColaboradores></ListarColaboradores>     
      </div>
    )
  }
}

export default AppSalary;