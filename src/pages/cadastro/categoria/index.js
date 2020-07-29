import React, {useState} from 'react' 
import { Link } from 'react-router-dom'
import PageDefault from '../../../componentes/PageDefault'
import FormField from '../../../componentes/FormField'

function CadastroCategoria() {
  const valoresIniciais ={
    nome: ' ',
    descricao: ' ',
    cor: ' ',
  }
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);
  

  function setValue(chave, valor){
    setValues({
      ...values,
      [chave]: valor,

    })
  }

  function handleChange(infosEvento){
    // setNomeDaCategoria(infosEvento.target.value);
    //const { getAttribute, value } = infosEvento.target;
    setValue(
      infosEvento.target.getAttribute('name'),
      infosEvento.target.value
      );
 }

  return (
    <PageDefault>
        <h1>Cadastro da categoria: {values.nome} </h1>
        
        <form onSubmit={function handleSubmit(infosEvento){
          infosEvento.preventDefault();
          setCategorias([ 
            ...categorias,
            values
          ]);

          setValues(valoresIniciais)
        }}>

          <FormField 
            label="Nome da categoria: "
            type="text"
            name="nome"
            value={values.nome}
            onChange={handleChange}
          />

          <FormField 
            label="Descrição: "
            type="text"
            name="descricao"
            value={values.descricao}
            onChange={handleChange}
          />

          <FormField 
            label="Cor: "
            type="color"
            name="cor"
            value={values.cor}
            onChange={handleChange}
          />


    {/*       <div>
            <label>
              Descrição:
              <textarea
                type="text"
                value={values.descricao}
                name="descricao"
                onChange={handleChange}
              />
            </label>
          </div>*/}


          {/* <div>
            <label>
              Cor:
              <input
                type="color"
                value={values.cor}
                name="cor"
                onChange={handleChange}
              />
            </label>
          </div> */}

          <button>
            Cadastar
          </button>

        </form>

        <ul>
          {categorias.map((categoria, indice) => {
            return(
              <li key={`${categoria}${indice}`}> 
                {categoria.nome}
              </li>
            )
          })}
        </ul>

        <Link to="/">
          
          ir para home
        </Link>
      </PageDefault>
      )
  }
  
  export default CadastroCategoria