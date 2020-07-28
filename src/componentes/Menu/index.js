import React from 'react';
import Logo from '../../assets/imagem/Logo.png';
import './Menu.css';
import Button from '../Button';
//import ButtonLink from "./componentes/ButtonLink"

function Menu() {
    return (
        <nav className="Menu" >
            <a href="/">
                <img className="Logo" src={Logo} alt="Pilantraflix logo" /> 
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Novo Video
            </Button>
        </nav>
    );

}
export default Menu;