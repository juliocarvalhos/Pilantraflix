import React from 'react' 
import { Link } from 'react-router-dom'
import PageDefault from '../../../componentes/PageDefault'

function CadastroVideo() {
    return (
      <PageDefault>
        <h1>Página de Cadastro de video</h1>
        
        <Link to="/cadastro/categoria">
          Cadastrar categoria
        </Link>
      </PageDefault>
      )
  }
  
  export default CadastroVideo