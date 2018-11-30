import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Salary from './Salarycomponent';
import ComentariosControl from './comentarios';
import MensajeComponente from './mensaje';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
/* 
const user = {
    name : "leonardo",
    apellido : "melendez gatgens"
}

const  formatname = (user) => {    
    return  user.name.toUpperCase() + " " + user.apellido.toUpperCase();
}

let bienvenida = usuario => {
    if(usuario ){
        return <> 
        <h1>Hola, {formatname(user)}!!!!</h1>
        <p>Gracias por regresar</p>
        </>
      
    }
    return <>
     <h1>Hola soplas</h1>
     <h3>Le dije que se logueara</h3>
     <a  target="_blank" href="https://www.w3schools.com">Visit W3Schools</a>
    </>
}
 */
/*  function tick() {
     const element = (<div>
        <h1>Hola mundo</h1>
        <h2>it is {new Date().toLocaleString()}</h2>
     </div>)
  ReactDOM.render(element, document.getElementById('root'));
}
setInterval(tick,1000); */

// const Welcome = (props) => {
//     return <h1>Hello, {props.name}</h1>
// }

// function Welcome(props){
//     return <h1>Hello, {props.name}</h1>;
// }

// function MainComponent(){
//     return (
//         <div>
//             <Welcome name = "Sara"/>
//             <Welcome name = "Leo"/>
//             <Welcome name = "Cahal"/>
//         </div>
//     )
// }
// ReactDOM.render(<MainComponent />, document.getElementById('root')); 







/*    const comentarios = [
    {
      "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eleifend risus ex, porta accumsan justo varius ultrices. Nam ante nunc, porta at erat eu, posuere congue mauris. Praesent laoreet, arcu non fermentum lacinia, tellus augue maximus metus, non condimentum lorem orci ac massa. Curabitur maximus gravida mi ut pretium. Mauris vel lectus nec lorem mattis pellentesque a a lacus. Mauris orci est, lobortis et justo vel, vulputate consequat sapien.",
      "title": "My comment 1",
      "date": "12/12/2012",
      "author": {
        "avatarUrl": "https://placekitten.com/g/64/64",
        "name": "Fulano"
      }
    },
    {
        "text": "Esto es para la practica del curso de react.",
        "title": "Liga Cempeon 2018 ",
        "date": "12/12/2016",
        "author": {
          "avatarUrl": "https://placekitten.com/g/64/64",
          "name": "leogatgens"
        }
      }
  ];

  ///Practica
  ReactDOM.render(
    <ComentariosControl data={comentarios} />,
    document.getElementById('root'));
 */
// function tick() {
//      const element = (<div>
//         <h1>Hola mundo</h1>
//         <h2>it is {new Date().toLocaleString()}</h2>
//      </div>)
//   ReactDOM.render(element, document.getElementById('root'));
// }

/* 
 class Clock extends React.Component{
   constructor(props){
      super(props);
      this.state = {
        date : new Date(),
        mostrar : true
      };  
      this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount(){
      this.timerID = setInterval( 
        () => this.tick(),
        1000
        );

    }
  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  componentDidUpdate(){
    console.log(this.state.date);
  }

tick(){
  this.setState(
    {
      date:new Date()
      
    });
   
}


handleClick(){
  
if( this.state.mostrar){
  this.setState({   
         
    mostrar : false   
    }

 )
}else{
  this.setState({   
         
    mostrar : true   
    }

 )
}
 
}
  render(){
    return (
      <div>
         <h1>Hola mundo cruel {this.props.usuario}</h1>
         <h2>{this.state.date.toLocaleTimeString()}</h2>
         <button onClick={this.handleClick}>{ (this.state.mostrar) ? "Mostrar" : "Ocultar"}</button>
         <p>{ (this.state.mostrar) ? "" : <MensajeComponente mensaje = "NOs vamos ya carajo" />} </p>
      </div>
    );
  }
}


ReactDOM.render(<Clock usuario = 'Leo' /> , document.getElementById('root')); */


  
ReactDOM.render(<Salary /> , document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
