import { Link } from 'react-router-dom'

export default function Home(){

    return(
        <main>
            <div className="home">
                <h1>Smart Sell - A sua loja de dispositivos móveis</h1>
                <div className="fundo_home">
                    <p>
                        Bem-vindo à Smart Sell!<br></br>
                        Na Smart Sell, você encontra os eletrônicos mais modernos e inovadores. De smartphones a tablets e acessórios, oferecemos as melhores opções para você ficar sempre conectado e atualizado. Navegue em nosso catálogo e descubra as últimas tendências em tecnologia. Faça da Smart Sell o seu destino para eletrônicos de qualidade!
                    </p>
                </div>
                <div className="botao_aparelhos">
                    <Link to='/aparelhos'>Quero conhecer os aparelhos</Link>
                </div>
                <aside className="propaganda">
                    <h2>Ofertas imperdíveis</h2>
                    <div>
                        <Link to='/aparelhos/visualizar/Apple/iPhone%2013'>
                            <img src="public/apple-iphone-13.jpg" alt="iPhone 13"/>
                            <p>iPhone 13 Apple 128GB Estelar Tela de 6,1”, Câmera Dupla de 12MP</p>
                            <p>De: <s>R$ 4.799,00</s><br/>Por: <b>R$ 4.099,00</b></p>
                        </Link>
                    </div>
                    <div>
                        <Link to='http://localhost:5173/aparelhos/visualizar/Apple/iPad%20Pro%2011'>
                            <img src="public/apple-ipad-pro.jpg" alt="iPad Pro"/>
                            <p>Apple iPad Pro 11" 3ª geração (M1, Wi-Fi + Cellular, 2T) Prateado</p>
                            <p>De: <s>R$ 9.799,00</s><br/>Por: <b>R$ 8.623,12</b></p>
                        </Link>
                    </div>
                </aside>
            </div>
        </main>
    )
}