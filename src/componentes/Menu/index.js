import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/imagem/Logo.png';
import './Menu.css';
import Button from '../Button';
//import ButtonLink from "./componentes/ButtonLink"

function Menu() {
    return (
        <nav className="Menu" >
            <Link to="/">
                <img className="Logo" src={Logo} alt="Pilantraflix logo" /> 
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo Video
            </Button>
        </nav>
    );

}
export default Menu;