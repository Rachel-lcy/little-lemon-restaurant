import logo from './assets/logo.jpg';

function Header(){
    return(
      <header class="header">
        <img src={logo} alt="Little Lemon Logo" class="image"/>
        <nav >
          <ul class="ul">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Reservation</a></li>
            <li><a href="#">Order Online</a></li>
            <li><a href="#">Login</a></li>
          </ul>
        </nav>
      </header>
    );
}
export default Header;