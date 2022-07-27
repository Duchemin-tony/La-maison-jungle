import '../styles/Cart.css' 

function Cart() {
    const plantes = [ "Un monstera", "Un lierre", "Un bouquet de fleurs"]
    const priceMonstera = 8;
    const priceLierre = 10;
    const priceBouquet = 15;
    const priceTotal =  priceMonstera + priceLierre + priceBouquet;
    return (
        <div className='lmj-cart'>
            <h2>Panier</h2>
            <ul>
                <li>{plantes[0] + ' au prix de ' + priceMonstera + '€'}</li>
                <li>{plantes[1] + ' au prix de ' + priceLierre + '€'}</li>
                <li>{plantes[2] + ' au prix de ' + priceBouquet + '€'}</li>
            </ul>
            <p>Ce qui nous fait un total de {priceTotal}€</p>

        </div>
    )
}

export default Cart