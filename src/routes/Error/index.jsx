import { Link } from "react-router-dom"

export default function Error(){

    return(
        <body className='body'>
            <div className="error">
                <div className="grid-container">
                    <div className="grid-error1">
                    <h1>Error 404 - Página não encontrada.</h1>

                    </div>
                    <div className="grid-error2">
                        <button> <Link className="link" to='/'>Voltar para a página principal</Link></button>
                    </div>
                </div>
            </div>
        </body>
    )
}