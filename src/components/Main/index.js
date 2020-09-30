import React from 'react';

import LeftColum from '../Leftcolum';
import MidleColum from '../Midlecolum';
import RightColum from '../Rightcolum';
import Header from '../header';

import './style.css';

class Main extends React.Component{
   render(){
       return(
           <>
           <Header/>
           <div className="container">
           
               <LeftColum />
               <MidleColum />
               <RightColum />
               <div className="clear"></div>
           </div>
           </>
       )
   }
}
export default Main;