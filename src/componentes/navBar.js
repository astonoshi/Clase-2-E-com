const NavBar =()=>{
    return ( <header className="navBar">
    <h2>Buy Smart</h2>
    <div>
            <h5>Welcome</h5>
            <p>to our store</p>
        </div>
    <nav>
      <ul>
        <li>Home</li>
        <li>Products</li>
        <li>Prices</li>
        <li>Contact</li>
        </ul>
    </nav>
    <div className="icon">
        <ion-icon name="cart-outline"></ion-icon >
    </div>
    <div className="quantity">4</div>
    <div className="btn">
      <button>Login</button>
    </div>
        
    </header>
    );
}
export default NavBar;