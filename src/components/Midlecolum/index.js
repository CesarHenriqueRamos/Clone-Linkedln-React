import React from 'react';
import ConteudoButton from '../ConteudoButton';

import './style.css';

class Midlecolum extends React.Component{
   render(){
       return(
           <div className="midle">
               <h2 className="h2-topo">Continue seu crescimento  Conte com a experiência da Pós FGV para continuar a se destacar no mercado.</h2>
               <div className="topo">
                    <form>
                        <input type="text" placeholder="Começar uma Publicação"/>
                        <button><svg className="camera" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" width="24" height="24" focusable="false">
  <path d="M21 6h-3l-1.5-3h-9L6 6H3a1 1 0 00-1 1v12a1 1 0 001 1h18a1 1 0 001-1V7a1 1 0 00-1-1zM7.36 8l1.5-3h6.28l1.5 3H20v2h-3.42a5 5 0 00-9.16 0H4V8h3.36zm7.76 4A3.13 3.13 0 1112 8.88 3.13 3.13 0 0115.13 12zM4 18v-7h3.1a5 5 0 109.8 0H20v7H4z"></path>
</svg><p>Foto</p></button>
                        <button><svg className="video" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" width="24" height="24" focusable="false">
  <path d="M21 5.92a1 1 0 00-.57.18L17 8.5V7a1 1 0 00-1-1H3a1 1 0 00-1 1v10a1 1 0 001 1h13a1 1 0 001-1v-1.5l3.43 2.4a1 1 0 00.57.18 1 1 0 001-1V6.92a1 1 0 00-1-1zM15 16H4V8h11v8zm2-5.21l3-2.1v6.62l-3-2.1v-2.42z"></path>
</svg><p>Vídeo</p></button>
                        <button><svg className="evento" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" width="24" height="24" focusable="false">
  <path d="M21 3h-3V1h-2v2H8V1H6v2H3a1 1 0 00-1 1v16a1 1 0 001 1h13.12L22 15.13V4a1 1 0 00-1-1zM4 5h2v2h2V5h8v2h2V5h2v3H4V5zm11 9v5H4V9h16v5h-5z"></path>
</svg><p>Evento</p></button>
                        <button><svg className="artigo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" width="24" height="24" focusable="false">
  <path d="M21 4H3a1 1 0 00-1 1v14a1 1 0 001 1h18a1 1 0 001-1V5a1 1 0 00-1-1zm-1 14H4V6h16v12zm-7-7H6v5h7v-5zm-1 4H7v-3h5v3zm2-2h4v1h-4v-1zm0 2h4v1h-4v-1zm0-4h4v1h-4v-1zm4-1H6V8h12v2z"></path>
</svg><p>Escrever Artigo</p></button>
<div className="clear"></div>
                    </form>
               </div>
               <div className="conteudo">
                   <h3>Cesar Henrique Ramos</h3>
                   <hr />
                   <div className="imagem">
                   <img src="https://media-exp1.licdn.com/dms/image/C5103AQHXQm7dR-4NDg/profile-displayphoto-shrink_100_100/0?e=1606953600&v=beta&t=jY6f6CoTIAPL0d-ZkphOIT-ziuM8lZTFlIqiTgCFU4E" />
                   </div>
                   <div className="peaple">
                       <h4>Cesar Henrique Ramos</h4>
                       <p>Programador Full Stack</p>
                   </div>
                   <div className="clear"></div>
                   <div className="public">
                       <img src="./img/exemplo.png" alt="Imagem Desiner Aplicativo de Comida" />
                   </div> 
                     <ConteudoButton/>                
               </div>
               <div className="conteudo">
                   <h3>Cesar Henrique Ramos</h3>
                   <hr />
                   <div className="imagem">
                   <img src="https://media-exp1.licdn.com/dms/image/C5103AQHXQm7dR-4NDg/profile-displayphoto-shrink_100_100/0?e=1606953600&v=beta&t=jY6f6CoTIAPL0d-ZkphOIT-ziuM8lZTFlIqiTgCFU4E" />
                   </div>
                   <div className="peaple">
                       <h4>Cesar Henrique Ramos</h4>
                       <p>Programador Full Stack</p>
                   </div>
                   <div className="clear"></div>
                   <div className="public">
                       <img src="./img/front-end.jpg" alt="Imagem Desiner Aplicativo de Comida" />
                   </div>
                    <ConteudoButton/>
                   
               </div>
           </div>
           
       )
   }
}
export default Midlecolum;