import React from 'react';
import './header.css'

let Header = (props) => 
{
    const { changeScreen, currentScreen } = props;
    const screens = ['Home','About','Contact'];
     return(

    <header className="Header-container">
        <div className="Header-logo">React</div>
        <ul className="Header-container-ul">
          {screens.map((screen, index) => <li key={index} onClick={() => changeScreen(screen)} className={currentScreen === screen ? 'Header-li-active' : ''}>{screen}</li>)}
        </ul>
    </header>

      /* 
      <div className="header">
           <ul className="header-ul">
              {screens.map((screen,index) => <li key={index} onClick={() => changeScreen(screen)} className={currentScreen === screen ? 'Header-li-active' : ''}>{screen}</li>)}
           </ul>
       </div> 
       */
   );
    
}

export default Header;