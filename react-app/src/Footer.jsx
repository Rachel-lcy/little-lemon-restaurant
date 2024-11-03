import logo from './assets/logo-footer.png';

function Footer(){
  return(
  <footer class="footer">
    <img src={logo} alt="footer logo" class="footer-image"/>
    <div class="footer-information">
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
    <p class="copyright" >&copy; {new Date().getFullYear()} Little Lemon Website</p>
  </footer>
  );
}
export default Footer;
