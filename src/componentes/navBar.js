import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
    return <>
        <main className="container">
            <nav>
                <div className="Navbar">
                    <div className='name'>
                        <Link to="/"><h1>Shop On Line</h1></Link>
                        <header>
                            <Link to='/'></Link>
                        </header>
                    </div>
                    <div className="navbar-container">
                        <ul className="Nav-list">
                            <li>
                                <Link to='category/1'><p className='women'>Woman</p></Link>
                            </li>
                            <li>
                                <Link to='category/2'><p className='men'>Men</p></Link>
                            </li>
                            <li>
                                <Link to='category/3'><p className='unisex'>Unisex</p></Link>
                            </li>
                            <li>
                                <a href='./index.html' className='log'>LOGIN</a>
                            </li>
                        </ul>
                    </div>
                    <CartWidget />
                </div>
            </nav>
        </main>
    </>
}



export default NavBar;