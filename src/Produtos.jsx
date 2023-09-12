import {} from 'react'
import './App.css'; 

function Produtos() {
  return (
    <div className="produtos-container">
      <h1 className="produtos-title">Produtos</h1>
      <div className="produtos-item">
        <h2>Iphone</h2>
        <img src="../img/celular1.jfif" alt="Iphone" />
      </div>
      <div className="produtos-item">
        <h2>Samsung</h2>
        <img src="../img/celular2.jfif" alt="Samsung" />
      </div>
      <div className="produtos-item">
        <h2>Huawei</h2>
        <img src="../img/celular3.webp" alt="Huawei" />
      </div>
      <div className="produtos-item">
        <h2>Multilaser</h2>
        <img src="../img/celular4.webp" alt="Multilaser" />
      </div>
    </div>
  );
}

export default Produtos;



