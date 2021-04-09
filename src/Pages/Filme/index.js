import { useState, useEffect } from 'react';
import './filme.css';
import {Link,useParams,useHistory} from 'react-router-dom';
import api from '../../services/api';
import { toast } from 'react-toastify';

export default function Filme(){
    const { id } = useParams();
    const history = useHistory();
    const [loading, setLoading] = useState(true);
    const [filmes, setFilmes] = useState([]);

    useEffect(()=>{

     async function buscaFilme(){
        
        const response  = await api.get(`/r-api/?api=filmes/${id}`)
        
        if(response.data.length === 0){
            history.replace('/');
            return;
        }
        setFilmes(response.data);
        console.log(response.data);
        setLoading(false);
     }


     buscaFilme();


    }, [history, id]);
    
    if(loading){
        return(
            <div>
                <h3>Carregando...</h3>
            </div>
        );
    }
    
    function salvaFilmes(){
        const listafilmes = localStorage.getItem('filmes');

        const filmeSalvo = JSON.parse(listafilmes) || [];

        const hasFilme = filmeSalvo.some((item)=> item.id === filmes.id);

        if(hasFilme){
            toast.error('Esse filme ja foi salvo!');
            return;
        }
        filmeSalvo.push(filmes);
        localStorage.setItem('filmes',JSON.stringify(filmeSalvo));
        toast.success("Adicionado com sucesso!");
    }

        return(
            <div className = 'container-filme'>
               <h1>{filmes.nome}</h1>
               <img src={filmes.foto}></img>

             
               {filmes.length !== 0 &&
                <div className = 'container-filme'>
                <Link to ="/">Voltar</Link>
                <div className='menuFilme'>
                <Link  onClick={ salvaFilmes}>Salvar</Link>
                <a target='blank' href={`https://www.youtube.com/results?search_query=${filmes.nome} trailer`}>Trailer</a>
                </div>
                <h3>Sinopse</h3>
                 </div>
                 }
               {filmes.sinopse}
            </div>
        );
    }


