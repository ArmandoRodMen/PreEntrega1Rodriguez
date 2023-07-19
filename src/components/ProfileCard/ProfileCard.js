/*
PreEntrega1Rodriguez
*/

function ProfileCard({titulo, handle, img, texto}){
    function handleClick(e){
        console.log("Añadir a carrito");
        console.log(e.target);
    }
    
    
    return(
        <div>
            <div class="card">
                <div class="card-image">
                    <figure class="image is-square">
                        <img src={img} alt="producto"/>
                    </figure>
                </div>
                <div class="card-content">
                    <div class="media-content">
                        <p class="title is-4">{titulo}</p>
                        <p class="subtitle is-6">{handle}</p>
                    </div>

                    <div class="content">
                        <p>{texto}</p>
                        <button onClick={handleClick} class="button is-info">Comprar {titulo}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard;