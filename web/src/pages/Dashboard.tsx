import { render } from "@testing-library/react";
import { useHistory } from "react-router-dom";
import api from "../services/api";
import "../styles/pages/dashboard.css";

import neoApi from "../services/neoApi";



export default function Dashboard(){
  const history = useHistory();

  const teste = history.location;
  const username = teste.state;
  console.log(username);

  function goToLikear(){
    history.push({pathname:"/likear", state:username})
  }

  function goToRecomendation(){
    history.push({pathname:"/recomendations", state:username})
  }

  function goToList(){
    history.push({pathname:"/movielist", state:username})
  }

  return(
    <div id="dashboard">
      <div className="dashboard-menu">

        <main>

          <div>
            <button 
              className="registerBtn" 
              onClick={goToLikear}>
              <span className="laike">Likear</span>
            </button>
          </div>

          <div>
            <button 
              className="recomendationBtn" 
              onClick={goToRecomendation}>
              <span className="gimme">Recomendai-me</span>
            </button>
          </div>

          <div>
            <button 
              className="moviesBtn" 
              onClick={goToList}>
              <span className="movies">Filmes Curtidos</span>
            </button>
          </div>
          
        </main>

      </div>
    </div>
  )
}