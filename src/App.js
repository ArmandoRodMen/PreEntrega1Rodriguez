/*
PreEntrega1Rodriguez
*/

//Importar componentes de otras carpetas
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ProfileCard from "./components/ProfileCard/ProfileCard";

//Importar imágenes de otras carpetas
import XtremePCImg from "./img/XtremePC.png";
import CorsairImg from "./img/Corsair.png";
import LenovoImg from "./img/Lenovo.png";

//Importar librería de estilos
import "bulma/css/bulma.css";

function App(){
    return(
        <div>
            <section className="hero is-small is-info">
                <div className="hero-body">
                    <NavBar/> 
                </div>
            </section>

            <ItemListContainer greeting={'Bienvenidos'}/>

            <div className="container">
                <div className="section">
                    <div className="columns">
                        <div className="column is-4">
                            <ProfileCard titulo="Xtreme PC" handle="@XtremePC" img={XtremePCImg} texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris."/>
                        </div>

                        <div className="column is-4">
                            <ProfileCard titulo="Corsair" handle="@Corsair" img={CorsairImg} texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris."/>
                        </div>

                        <div className="column is-4">
                            <ProfileCard titulo="Lenovo" handle="@Lenovo" img={LenovoImg} texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris."/>
                        </div> 

                        
                    </div>
                </div>
            </div>
        </div>
    )
}


export default App;