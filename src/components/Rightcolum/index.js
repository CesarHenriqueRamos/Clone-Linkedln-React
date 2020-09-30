import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import './style.css';
class RightColum extends React.Component{
   render(){
       return(
           <div className="right">
                <div className="fixed">
                    <div className="container-right">
                        <h2>Asuntos mais Discutidos</h2>
                        <ul>
                            <li><span className="bullet"></span><a href="#">React</a><span className="ref">Ha um dia</span></li>
                            <li><span className="bullet"></span><a href="#">React Native</a><span className="ref">Ha um dia</span></li>
                            <li><span className="bullet"></span><a href="#">Angular</a><span className="ref">Ha um dia</span></li>
                            <li><span className="bullet"></span><a href="#">Node.js</a><span className="ref">Ha um dia</span></li>
                        </ul>
                </div>
                <div className="container-right" id="propaganda">
                    <img src="https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg" />
                </div>
               </div>
           </div>
       )
   }
}
export default RightColum;