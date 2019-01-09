import React from 'react';
function Componenteimagen(props){   
    return (  
        <div className="imgColaborador">
            <img src={props.ruta} alt="Smiley face" height="42" width="42"/>
            </div>
        );
}

function ComponenteUsuario(props){
   
    return (  
        <h2>{props.usuario}</h2>    
    );
}

function ComponenteTitulo(props){
   
    return (  
        <h1>{props.titulo}</h1>    
    );
}

function ComponenteComentario(props){
   
    return (  
        <h1>{props.texto}</h1>    
    );
}


function UserControl(props){

    return (
        <>    
        <h1>Comentarios sobre el cruso de REact</h1> 
        <p>Estos son comentarios de estudiantes del bccr del 2018 parakjdfalsda lksdf asldkfjasdjf alksdjfl kasdfl jasdlkfjalks djf alksdjf laksdjflkajdsf adf</p>       
        <section className="comentarios">
             {props.data.map((comentario,i) => {
                 return (
                   
                        <article key= {i}>
                    { <div className="usuario">
                            <Componenteimagen key={comentario.author.name }   
                                ruta = {comentario.author.avatarUrl} />
                            <ComponenteUsuario key={comentario.id} 
                            usuario = {comentario.author.name} />
                        </div> } 
                      { <div className="detalle">
                            <ComponenteTitulo 
                            titulo = {comentario.title} />
                            <ComponenteComentario key={comentario.text} 
                            texto = {comentario.text} />
                         </div> }
                     </article>
                   
                 );
             })}
              </section>
        </>      

    );
}

export default UserControl;