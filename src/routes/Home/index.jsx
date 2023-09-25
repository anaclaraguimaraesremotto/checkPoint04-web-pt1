import { Link } from "react-router-dom"

export default function Home(){

    return(
        <main>
            <h1>Home</h1>
            <Link to={'/aparelhos'}>Aparelhos</Link>
            <span> | </span>
            <Link to={'/aparelhos/visualizar/apple/ipad-pro'}>ve ipad</Link>
        </main>
    )
}