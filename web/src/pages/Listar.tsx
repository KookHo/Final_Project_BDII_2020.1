import { useHistory } from "react-router-dom";
import {useState, useEffect} from 'react';
import mongoApi from "../services/mongoApi";
import neoApi from "../services/neoApi";


import "../styles/pages/listar.css";

export default function Listar(){

  const history = useHistory();
  const username = history.location.state;

  console.log(username);

  const [filmes, setFilmes] = useState([]);
  
  async function populate() {
    const dados = await neoApi.get(`/neo4j/${username}/filmes`).then(res =>{
      setFilmes(res.data.filmes)
    });
  }

  useEffect(() =>{
    populate();
  },[]);

  console.log(filmes);
  
  async function handleDelete(film:String) {
    console.log(film);
    const delData = {
      data:{
        "name":username,
        "film":film
      }
    };

    const res = await neoApi.delete("/neo4j", delData)
    alert("Descurtido com sucesso!");
    history.push({pathname:"/dashboard", state:username});
  }
  

  return(
    <div id="likelist">
        <h1>Filmes Curtidos</h1>
      <div className="like-menu">

        <h2>Whose? Yours</h2>

      
        <table className="lista">
          <tr><th>Filme</th><th>Ações</th></tr>
          {filmes.map((film) => 
                <tr>
                  <td>{film}</td>
                  <td>
                    <button className="delBtn"
                      onClick={(event) => handleDelete(film)}>
                      Descurtir
                    </button>
                    </td>
                  </tr>
                )}
        </table>


      </div>

    </div>
  )
}