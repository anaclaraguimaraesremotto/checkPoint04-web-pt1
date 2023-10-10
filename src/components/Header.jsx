import { Link } from 'react-router-dom'
import Logo from '../../public/Logo_ecommerce.png'

export default function Header() {
    return (
        <header>
            <div className='logo_titulo'>
                <span>
                    <Link to = '/'>
                        <img src={Logo} alt="logo" />
                    </Link>
                </span>
                <span>
                    <h1>Smart Sell</h1>
                </span>
            </div>
            <ul>
                <li className='item_menu'><Link to ='/'>Home</Link></li>
                <li className='item_menu'><Link to = '/aparelhos'>Aparelhos</Link></li>
            </ul>
        </header>
    )
}