import { NavLink as Link } from 'react-router-dom';

function Button() {
    return (
      <Link to="/reach_us">
        <div className='explore-button'>
        <button>Contact Us</button>
        </div>
      </Link>
    );
  }
  
  export default Button;