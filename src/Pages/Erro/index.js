import './erro.css';
import { Link } from 'react-router-dom';



export default function Error(){
        return(
            <div className="erro-cont">
                <h1>Pagina de erro!</h1>
                <strong>Ops, pagina não encontrada.</strong><br/>
                <Link to="/">Home</Link>
            </div>
        );
    }


