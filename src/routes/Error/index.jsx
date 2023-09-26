import { Link } from 'react-router-dom'

export default function Error(){

    return(
        <main>
            <h1>Error 404 - Página não encontrada.</h1>
            <Link to = '/'><button>Voltar para a página principal</button></Link>
        </main>
    )
}