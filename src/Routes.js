import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Pages/Home';
import Filme from './Pages/Filme';
import Erro from './Pages/Erro';
import Header from "./Componets/Header";
import Footer from "./Componets/Footer";
import Favoritos from './Pages/Favoritos';


const Routes = () => {
     return(
         <BrowserRouter>
            <Header/>
            <Switch>
               <Route  exact path = "/" component = {Home}/> 
               <Route  exact path = "/filme/:id" component = {Filme}/>
               <Route  exact path= '/favoritos' component={Favoritos}/>
               <Route path = "*" component = {Erro}/> 
            </Switch>
            <Footer/>
         </BrowserRouter>
     );
}

export default Routes;