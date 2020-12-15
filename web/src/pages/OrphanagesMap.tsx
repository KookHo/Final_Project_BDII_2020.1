import React, {useEffect, useState} from 'react';

import {Link} from 'react-router-dom';
import {FiPlus, FiArrowRight} from 'react-icons/fi';
import {Map, TileLayer, Marker, Popup} from 'react-leaflet';

import '../styles/pages/orphanages-map.css';

import mapMarkerImg from '../images/map-marker.svg';
import mapIcon from '../utils/mapIcon';
import api from '../services/api';


interface Orphanage{
  id: number;
  latitude: number;
  longitude: number;
  name: string;
}


function OrphanagesMap(){
  
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

  console.log(orphanages);

  useEffect(()=> {
    api.get("orphanages").then((response) => {
      setOrphanages(response.data);
    });
  }, []);


  return(
    <div id="page-map">

      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy"/>
          <h2>Choose yer destiny</h2>
          <p>Something</p>
        </header>

        <footer>
          <strong>Cidade no Fim do Mundo</strong>
          <span>Rôrãima</span>
        </footer>
      </aside>

    <Map
      center={[2.8155652,-60.686593]}
      zoom={15}
      style={{width: '100%', height: '100%'}}
    >
    
   {/*<TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>*/}
   <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}/>

    {orphanages.map((orphanage) => {
      return(
        <Marker 
        icon={mapIcon} 
        position={[orphanage.latitude,orphanage.longitude]} 
        key={orphanage.id}
        >
          <Popup closeButton={false} minWidth={230} maxWidth={200} className="map-popup"> 
            {orphanage.name}
            <Link to={`/orphanages/${orphanage.id}`}>
              <FiArrowRight size={20} color="#fff"/>
            </Link>
          </Popup>
        </Marker>
      )
    })}  

    </Map>

    <Link to="/orphanages/create" className="create-orphanage">
      <FiPlus size={32} color="#FFF"/>
    </Link>

    </div>
  );
}

export default OrphanagesMap;