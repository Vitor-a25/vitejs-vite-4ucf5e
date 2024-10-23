import './App.css';
import Header from './components/Header';

function App() {
  return (
    <>
      <h1>Planalto Super Mercados</h1>
      <h1>Carnes na promoção</h1>
      <Header
        texto="Bisteca suina"
        image="https://tdc01z.vteximg.com.br/arquivos/ids/159348-1000-1000/16944-bisteca-suina-congelada-kg.png?v=637897728292070000"
      />
      <h1>R$19,99</h1>

      <Header
        texto="Linguiça toscana"
        image="https://hortifruti.com.br/media/catalog/product/cache/90a67334732b2408839e146d4f241496/1/1/112625-linguica-toscana-resfriada-seara-unidade.jpg"
      />
      <h1>29,99</h1>
      <Header
        texto="Picanha"
        image="https://cdn.sistemawbuy.com.br/arquivos/aa0543e6e28970c84ad7321d40710790/produtos/6414a30c284ca/picanha-fresca-644da1b95ddc6.jpg"
      />
      <h1>59,99</h1>
    </>
  );
}

export default App;
