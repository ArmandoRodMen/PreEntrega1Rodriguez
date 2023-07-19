/*
PreEntrega1Rodriguez
*/

//Importar componentes de otras carpetas
import CarWidget from "../CarWidget/CarWidget";
import Logo from "./media/logo.svg";

const NavBar = () =>{
    return(
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <a class="navbar-item">
                <img src={Logo} width="112" height="28" alt="Logo"/>
            </a>
            <div class="navbar-menu">
                <div class="navbar-start">
                    <a class="navbar-item">
                    Celulares
                    </a>
                    <a class="navbar-item">
                    Tablets
                    </a>
                    <a class="navbar-item">
                    PC
                    </a>
                </div>
            
                <div class="navbar-end">
                    <div class="navbar-item">
                        <div class="shoppingCart">
                            <CarWidget/>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )

}

export default NavBar

/*
<a class="navbar-item">
                        <img src={Logo} width="112"  height="112" alt="Logo"/>
                    </a>
                    */