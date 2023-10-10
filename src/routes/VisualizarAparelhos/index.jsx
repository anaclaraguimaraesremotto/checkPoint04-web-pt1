import React from "react";
import { Link, useParams } from "react-router-dom";
import { listaAparelhos } from "../../components/listaAparelhos";

const modeloParaImagem = {
  'S6 Lite': 'samsung-s6-lite.jpg',
  'iPhone 13': 'apple-iphone-13.jpg',
  'Fire': 'amazon-fire.jpg',
  'Moto E22': 'motorola-moto-e22.jpg',
  'iPad Pro 11': 'apple-ipad-pro.jpg',
  'Galaxy M54': 'samsung-m54 (4).jpg'
};

export default function VisualizarAparelhos() {
  const { marca, modelo } = useParams();

  const aparelho = listaAparelhos.find(
    (aparelho) => aparelho.marca === marca && aparelho.modelo === modelo
  );

  if (!aparelho) {
    return <div>Produto não encontrado</div>;
  }

  const imagem = modeloParaImagem[aparelho.modelo];

  return (
    <main>
      <div className="visualizar">
        <div className="grid-container-visualizar">
          <div>
            <div className="grid-visu1">
              <h1> {aparelho.marca} {aparelho.modelo}</h1>
            </div>
            <div key={aparelho.modelo} className="grid-visu2">
              <img src={`/public/${imagem}`} alt={`Imagem do ${aparelho.modelo}`} />
            </div>
              <div className="grid-visu3">
                <p>Marca: {aparelho.marca}</p>
                <p>Modelo: {aparelho.modelo}</p>
                <p>Descrição: {aparelho.descricao}</p>
                <p>Preço: R$ {aparelho.preco}</p>
                <Link className="link" to="/">Voltar à lista</Link>
              
              
            </div>
          </div>
        </div>
      </div>
      <h1>Visualizar Produto</h1>
      
    </main>
  );
}
