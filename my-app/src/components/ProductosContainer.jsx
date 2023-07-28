import { useEffect, useState } from "react";

import ProductosDatos from  '../data/Productos.json';

const getMockProductosAsync = new Promise((resolve, reject) => { 
  setTimeout(() => {
    if (ProductosDatos.length === 0){
      reject("Upss... Algo salio mal");
    }

    resolve(ProductosDatos);
  }, 4000);
});

function ProductosContainer() {
  const [Productos, setProductos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getMockProductosAsync
    .then(response => {
      setProductos(response);
    }).catch(err => {
      console.log(err);
      setError(err);
    }).finally(() => {
      setIsLoading(false);
    });
  }, []);

    if (isLoading) {
    return <div>Loading...</div>
    }


  return (
    <div style={{ padding: 100 }}>
      Cantidad de Productos: {Productos.length}

      {Productos.map(Productos => (
        <div>{Productos.tipo} $ {Productos.precio}</div>
      ))}
    </div>
  )
}

export default ProductosContainer;