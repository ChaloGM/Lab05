import { css } from '@emotion/css'
import {Container} from './style'

export function Catalogo() {
    return(
    <div className={css`padding-top: 10%; height:300px` }>
    <Container>
    <div className="catalogo col-md-10" id="catalogo">
        <div id="product1" className="card col-sm-5 col-md-3 producto">
          <img src="polo.png" className="card-img-top" alt="polo" />
          <div className="card-body">
            <p className="card-text">Polo</p>
            <h6 className="card-title"><b>S/50.00</b></h6>
            <button className="btn btn-light" id="button1"
              onclick="obtenerId('product1','vendido1','button1')">Buy</button>
          </div>
        </div>

        <div id="product2" className="card col-sm-5 col-md-3 producto">
          <img src="pantalon.jpg" className="card-img-top" alt="pantalon" />
          <div className="card-body">
            <p className="card-text">Pantalon</p>
            <h6 className="card-title"><b>S/ 40.00</b></h6>
            <button className="btn btn-light" id="button2"
              onclick="obtenerId('product2','vendido2','button2')">Buy</button>
          </div>
        </div>
      </div>    
      </Container>
  </div>
  )
}
