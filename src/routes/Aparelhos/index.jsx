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
        <main >
          <div className="aparelhos">
            <div className="grid-container-aparelho">
              <div>
                <div className="grid-aprl1">
                  <h1>Aparelhos</h1>
                </div>
                <div className="grid-aprl2">
                  {listaAparelhos.map((aparelho, index) => (
                    <div key={aparelho.modelo} className="grid-aprl3">
                      <Link className="link" to={`/aparelhos/visualizar/${aparelho.marca}/${aparelho.modelo}`}>
                        <img src={imagens[index]} alt={`Imagem do ${aparelho.modelo}`} />
                      </Link>
                      <Link className="link" to={`/aparelhos/visualizar/${aparelho.marca}/${aparelho.modelo}`}>
                        <p>{aparelho.descricao}</p>
                      </Link>
                      <button onClick={() => handleItemClick(index)}> 
                        <Link className="link" to={`/aparelhos/visualizar/${aparelho.marca}/${aparelho.modelo}`}>
                          Detalhes
                        </Link>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      )
}