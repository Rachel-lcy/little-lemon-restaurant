import greekSalad from './assets/greek-salad.jpg';
import bruchetta from './assets/bruchetta.jpg';
import lemonDessert from './assets/lemon-dessert.jpg';
import order from './assets/order.png'


function Specials(){
  return(
    <div >
      <div className='topInformation'>
        <h2>This Weeks Specials!</h2>
        <button className='menuBtn'>Online Menu</button>
      </div>
      <div className='foods'>
        <div className='greekSalad'>
          <img src={greekSalad} alt="Greek Salad" />
          <h3>Greek Salad</h3>
          <h3>$12.99</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p className='order-delivery'>Order & Delivery <img src={order} alt="Order icon" style={{ width: '16px', height: '16px', verticalAlign: 'middle', className:'order-icon'}}/></p>
        </div>

        <div className='bruchetta'>
          <img src={bruchetta} alt="Bruchetta" />
          <h3> Bruchetta</h3>
          <h3>$12.99</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p>Order & Delivery <img src={order} alt="Order icon" style={{ width: '16px', height: '16px', verticalAlign: 'middle' }}/></p>
        </div>

        <div className='lemonDessert'>
          <img src={lemonDessert} alt="Lemon Dessert" />
          <h3> Lemon Dessert</h3>
          <h3>$5.99</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p>Order & Delivery <img src={order} alt="Order icon" style={{ width: '16px', height: '16px', verticalAlign: 'middle' }}/></p>
        </div>
      </div>
    </div>
  );
}

export default Specials;