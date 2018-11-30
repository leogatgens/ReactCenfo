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
    
    if(resultado > 0){
       return resultado * 0.15;
    }

    return 0;
}

function flujoRentaPorColaborador(props,estadoColaborador){  
    const TipoCambioVenta = obtieneTipoDeCambio();
    
    let colaboradoresActivos = props.data.filter(colaborador =>  colaborador.isActive  === estadoColaborador);   

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
            usuariopresionoboton : true,                             
            ListaColaboradores : []
        };
       this.handleClick = this.handleClick.bind(this);
      }
    render(){
            return (
                <>
                    <h1>Renta colaboradores activos 2018</h1>
                    <button onClick={this.handleClick}> { (this.state.usuariopresionoboton) ? "Mostrar renta activos" : "Mostrar renta inactivos"}</button>
                    { this.state.ListaColaboradores.map((usuario,i) => {                    
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
    
        if( this.state.usuariopresionoboton){
            this.setState({
              usuariopresionoboton : false,
              ListaColaboradores: flujoRentaPorColaborador(this.props.data,this.state.usuariopresionoboton)
               
            })
        } else {
            this.setState({                      
              usuariopresionoboton : true ,
              ListaColaboradores: flujoRentaPorColaborador(this.props.data,this.state.usuariopresionoboton)  
              
            })
        }
       
    }   
      
     componentDidMount() {
      fetch("https://dog.ceo/api/breeds/list/all")
        .then(res => res.json())
        .then(
          (result) => {          
             this.setState({              
             //ListaColaboradores: flujoRentaPorColaborador(this.props.data,this.state.usuariopresionoboton)
            });
          }
      
        )
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
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
        <ListarColaboradores data = {this.props}></ListarColaboradores>        
        <ListarColaboradores data = {this.props}></ListarColaboradores>     
      </div>
    )
  }
}

export default AppSalary;