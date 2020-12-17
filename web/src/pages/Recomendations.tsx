import { useHistory } from "react-router-dom";
import neoApi from "../services/neoApi";
import "../styles/pages/recomendations.css";
import {useEffect, useState} from 'react';




export default function Recomendations(){
  const history = useHistory();

  const [films, setFilms] = useState([]);
  const username = history.location.state;

  async function dale(){
    //recupera os filmes recomendados
    const recomendation = await neoApi.get(`/neo4j/${username}`);/*.then( res =>{
      setFilms(res.data.filmes)
    });*/
    const teste = recomendation.data.filmes;

    if (teste[0] != null){
      console.log("tem", teste);
      setFilms(teste);
    }else{
      console.log("nao tem", teste);
      const planob = await neoApi.get("/neo4j/recomendados");
      setFilms(planob.data.filmes);
    }

    //console.log(teste);

    //se não tiver filmes recomendados retorna os recomendados defaults
    /*if (films[0] != null){
      console.log("teste",films);
    }else{
      const teste2 = await neoApi.get("/neo4j/recomendados");
      console.log("teste2", teste2);
      setFilms(teste2.data.filmes);
    }*/
    
  }

  useEffect(() =>{
    dale()
  }, [])

  console.log(username);

  return(
    <div id="recomendation">
        <h1>Recomendações</h1>
      <div className="rec-menu">

        <ul>{films.map((film) => <li>{film}</li>)}</ul>

      </div>

    </div>
  )
}