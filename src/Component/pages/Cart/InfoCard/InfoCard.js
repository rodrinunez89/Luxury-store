import React from 'react'

export const InfoCard = () => {
  return (
    <div> 
        <h1>- Carrito -</h1> 
    <div className="listproduct-description">
          
        <img className="logocarrito" alt="logoenvio" src="/img/entrega.png"/>
        <h2>ENVÍOS A TODO EL PAIS</h2>
        <p>Recibí tu pedido de 3 a 5 días hábiles</p>
        

        <img className="logocarrito" alt="logocambio" src="/img/regreso.png"/>
        <h2>CAMBIOS</h2>
        <p>Hasta 30 dias</p>
        
        <img className="logocarrito" alt="logotarjeta" src="/img/tarjeta.png"/>
        <h2>CUOTAS SIN INTERÉS</h2>
        <p>Ahora 3 Y 6</p>

    </div>
</div>
  )
}
