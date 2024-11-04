import aboutPicture from './assets/about.jpg';
import restaurantPicture from './assets/restaurant1.jpg'

function About(){
  return(
    <div>
      <div>
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in. </p>
      </div>
      <div>
        <img src={aboutPicture} alt="" />
        <img src={restaurantPicture} alt="" />
      </div>
    </div>
  );
}

export default About;