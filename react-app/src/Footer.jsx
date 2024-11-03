import logo from './assets/logo-footer.png';

function Footer(){
  return(
  <footer>
    <img src={logo} alt="footer logo" />
    <div>
      <h4>Doormat Navigation</h4>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Reservations</li>
          <li>Order Online</li>
          <li>Login</li>
        </ul>
      <h4>Contact</h4>
        <ul>
          <li>Address</li>
          <li>Phone number</li>
          <li>Email</li>
        </ul>
      <h4>Social Media Links</h4>
        <ul>
          <li>Address</li>
          <li>Phone number</li>
          <li>Email</li>
        </ul>
    </div>
    <p>&copy; Little Lemon Website</p>
  </footer>
  );
}
export default Footer;
