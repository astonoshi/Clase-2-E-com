import CartWidget from "./CartWidget";

const NavBar =()=>{
    return ( <header className="navBar">
    <h2>Buy Smart</h2>
    <nav>
      <ul>
        <li>Home</li>
        <li>Products</li>
        <li>Prices</li>
        <li>Contact</li>
        <CartWidget/>
      </ul>
        
        
    </nav>
    
    <div className="btn">
      <button>Login</button>
    </div>
  </header> 
      
    );
  }

  
export default NavBar;