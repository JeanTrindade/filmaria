import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './favoritos.css';
import { toast } from 'react-toastify';



export default function Favoritos(){

const [filme, setFilme] = useState([]);

useEffect(()=>{
    const minhaLista = localStorage.getItem('filmes');
    setFilme(JSON.parse(minhaLista));
}, []);

function excluir(id){
    const filtro = filme.filter((item)=>{
        return(item.id !== id);
    })
    setFilme(filtro);
    localStorage.setItem('filmes', JSON.stringify(filtro));
    toast.success('Filme excluido com sucesso!');
}

    return(
       
        <div>
            <h1>Pagina de filmes favoritos</h1>
            {filme.length === 0 && <span>Você não possui nenhum filme salvo!!</span>}
            {filme.map((item)=>{
                return(
                    
                        <li className= 'container-favoritos' key={item.id}>
                            <img className='img-favoritos' src={item.foto}/>
                            <span>{item.nome}</span><br/>
                            <div className='acces'>
                            <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
                            <button onClick={()=>excluir(item.id)}>Excluir</button>
                            </div>
                        </li>
                      
                 
                    
                );
            })}
        </div>
    );
}