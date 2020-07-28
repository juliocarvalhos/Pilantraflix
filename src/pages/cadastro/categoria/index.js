import React from 'react' 
import { Link } from 'react-router-dom'
import PageDefault from '../../../componentes/PageDefault'

function CadastroCategoria() {
    return (
      <PageDefault>
        <h1>Página de Cadastro de Categoria </h1>
        
        <form>

          <label>
            Nome da Categoria:
            <input type="text" />
          </label>

          <button>
            Cadastar
          </button>

        </form>

        <Link to="/">
          
          ir para home
        </Link>
      </PageDefault>
      )
  }
  
  export default CadastroCategoria