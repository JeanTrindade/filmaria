import { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import api from '../../services/api';
import "./home.css";

export default function Home(){
 const [loading, setLoading] =useState(true);
 const [filmes, setFilmes] = useState([]);


    useEffect(()=>{
        
         async function loadFimes(){
            //url api = https//:sujeitoprogramador.com/r-api/?api=filmes
         const response  = await api.get('/r-api/?api=filmes')
                setFilmes(response.data);
                setLoading(false);

        }
        loadFimes();

    },[]);

    if(loading){
        return(
            <div>
                <h3>Carregando...</h3>
            </div>
        );
    }
        return(
            <div className = "container">
                <div className = "itens-filme">
                {filmes.map((filme)=>{
                    return(
                        <article className='filmes' key = {filme.id}>
                            <strong>{filme.nome}</strong>
                            <img src={filme.foto}></img>
                            <Link to={`/filme/${filme.id}`}>Acessar</Link>
                        </article>
                    );
                })}
                </div>
            </div>
        );
    }