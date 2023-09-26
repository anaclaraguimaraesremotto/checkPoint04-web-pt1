import { Link } from "react-router-dom"
import {listaAparelhos} from "../../components/listaAparelhos"

export default function Aparelhos(){
    
    const imagens = [
        'samsung-s6-lite.jpg',
        'apple-iphone-13.jpg',
        'amazon-fire.jpg',
        'motorola-moto-e22.jpg',
        'apple-ipad-pro.jpg',
        'samsung-m54 (4).jpg'
      ]
      
      return (
        <main>
          <h1>Aparelhos</h1>
          {listaAparelhos.map((aparelho, index) => (
            <div className="aparelhos" key={aparelho.modelo}>
              <img src={imagens[index]} alt={`Imagem do ${aparelho.modelo}`} />
              <Link to={`/aparelhos/visualizar/${aparelho.marca}/${aparelho.modelo}`}>
                {aparelho.modelo}
              </Link>
              <button onClick={() => handleItemClick(index)}>Detalhes</button>
            </div>
          ))}
        </main>
      )
}