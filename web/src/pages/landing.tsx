import React from 'react';
import {FiArrowRight} from 'react-icons/fi';
import {Link} from 'react-router-dom';

import '../styles/pages/landing.css';
import logoImg from '../images/logo.svg'

function Landing(){
  return(
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImg} alt="Happy"/>

        <main>
          <h1>Leve mais sims para o mundo </h1>
          <p>SIM</p>
        </main>

        <div className="location">
          <strong>Cidade do Fim do Mundo</strong>
          <span>Rôrãima</span>
        </div>
         
        <Link to="/app" className="enter-app">
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)"/>
        </Link>
      </div>  
    </div>
  );
}

export default Landing;