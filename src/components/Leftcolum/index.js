import React from 'react';

import './style.css';
class LeftColum extends React.Component{
   render(){
       return(
           <div className="left">
                   <div className="container-left">
                       <div className="div1">
                       <div className="blue"></div>
                       <div className="imagem-perfil">
                            <img src="https://media-exp1.licdn.com/dms/image/C5103AQHXQm7dR-4NDg/profile-displayphoto-shrink_100_100/0?e=1606953600&v=beta&t=jY6f6CoTIAPL0d-ZkphOIT-ziuM8lZTFlIqiTgCFU4E" alt="imagem de perfil"/>
                       </div>
                       <div className="dados-perfil">
                           <h2>Cesar Henrique Ramos</h2>
                           <p>OutSystems Developer | Java Developer | PHP Developer | JavaScript Developer | Developer Front-End</p>
                       </div>
                       <div className="visualisacao">
                           <h3>Quem Viu seu Perfil:</h3><p>43</p>
                           <h3>Quem Viu seu Video:</h3><p>43</p>
                       </div>
                       <div className="item-salvos">
                           <h4>Itens Salvos</h4>
                       </div>
                       </div>
                   </div>
                   <div className="container-left marge-top">
                    <div className="lista">
                        <h2>Recentes</h2>
                      <ul>
                          <li># React</li>
                          <li># React Native</li>
                          <li># React</li>
                          <li># React Native</li>
                          <li># React</li>
                          <li># React Native</li>
                          <li># React</li>
                          <li># React Native</li>
                      </ul>
                    </div>                       
                   </div>
           </div>
       )
   }
}
export default LeftColum;