import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <div className='logo_titulo'>
                <span>
                    <Link to = '/'>
                        <img src="img/Logo_ecommerce.png" alt="" />
                    </Link>
                </span>
                <span>
                    <h1>Smart Sell</h1>
                </span>
            </div>
            <ul>
                <li className='item_menu'><Link to ='/'></Link>Home</li>
                <li className='item_menu'><Link to = '/aparelhos'>Aparelhos</Link></li>
            </ul>
        </header>
    )
}