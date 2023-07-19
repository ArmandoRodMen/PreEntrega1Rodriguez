/*
PreEntrega1Rodriguez
*/

//Importar imágenes de otras carpetas
import CartIcon from "./media/shoppingCart.svg";

const CarWidget=()=>{
    return(
        <div>
            <span class="button  is-medium is-link">
                <img src={CartIcon} width="30" alt="Icono Carrito"/>
                <span class="button is-static is-rounded is-small">0</span>
            </span>
        </div>
    )
}

export default CarWidget;