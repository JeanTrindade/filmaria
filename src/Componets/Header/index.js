import "./header.css";
import {Link} from "react-router-dom";

export default function Header(){
        return(
            <div className = "header">
               <Link className='filmaria' to="/">Filmaria</Link>
               <Link className='favoritos' to="/favoritos">Salvos</Link>
            </div>
        );
    }
