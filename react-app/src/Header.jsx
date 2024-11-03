import logo from './assets/logo.jpg';

function Header(){
    return(
      <header>
        <img src={logo} alt="Little Lemon Logo" />
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Reservation</a></li>
            <li><a href="#">Order Online</a></li>
            <li><a href="#">Login</a></li>
          </ul>
        </nav>
        <hr />
      </header>
    );
}
export default Header;