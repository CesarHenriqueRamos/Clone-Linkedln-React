import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons'

import './style.css';

library.add(fab);
class Header extends React.Component{
   render(){
       return(
           <div className="header">
               <div className="container">
                    <div className="logo-form">
                    <svg aria-hidden="true" class="global-nav__logo" xmlns="http://www.w3.org/2000/svg" width="34" height="34" data-supported-dps="34x34" focusable="false">
                            <g transform="scale(.7083)" fill="none" fill-rule="evenodd">
                                <rect class="bug-text-color" fill="#FFF" x="1" y="1" width="46" height="46" rx="4"></rect>
                                <path d="M0 4.01A4.01 4.01 0 014.01 0h39.98A4.01 4.01 0 0148 4.01v39.98A4.01 4.01 0 0143.99 48H4.01A4.01 4.01 0 010 43.99V4.01zM19 18.3h6.5v3.266C26.437 19.688 28.838 18 32.445 18 39.359 18 41 21.738 41 28.597V41.3h-7V30.159c0-3.906-.937-6.109-3.32-6.109-3.305 0-4.68 2.375-4.68 6.109V41.3h-7v-23zM7 41h7V18H7v23zm8-30.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" class="background" fill="#0077B5"></path>
                            </g>
                            </svg>                   
                    </div>
                    <form id="form-header">
                        <input type="text" placeholder="Pesquisar"/>    
                    </form> 
                    <div className="elementos">
                        <a href="#"><img src="./img/home.svg" className="branco" /><p>Inicio</p></a>
                        <a href="#"><img src="./img/employees.svg" className="branco" /><p>Minha Rede</p></a>
                        <a href="#"><img src="./img/portfolio.svg" className="branco" /><p>Vaga</p></a>
                        <a href="#"><img src="./img/chat.svg" className="branco" /><p>Mensagens</p></a>
                        <a href="#"><img src="./img/notification.svg" className="branco" /><p>Notificações</p></a>
                    </div>
                    <div className="imagem-header">
                        <img src="https://media-exp1.licdn.com/dms/image/C5103AQHXQm7dR-4NDg/profile-displayphoto-shrink_100_100/0?e=1606953600&v=beta&t=jY6f6CoTIAPL0d-ZkphOIT-ziuM8lZTFlIqiTgCFU4E" />
                   </div>
                   
                   <p id="user">Eu</p>
                   <div className="clear"></div>
               </div>
           </div>
       )
   }
}
export default Header;