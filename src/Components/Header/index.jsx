import './styles.css'
const Header = () => { 
    return (
        <div className='header'>
            <figure className='logo'>
                <img src='' alt='logo'/>
            </figure>
            <div className='user-data'>
                <p>
                    <span>Sales</span>
                    <span>Products</span>
                </p>
                <figure>
                    <img clasName='user' src='src/assets/usuario-white.png' alt='user' />
                    <img className='cart-icon' src='src/assets/carrito-white.png' alt='cart' />

                </figure>
            </div>
        </div>
    )
}

export default Header