import { NavLink as Link } from 'react-router-dom';

function Button() {
    return (
      <Link to="/services">
        <div className='explore-button'>
        <button>Explore</button>
        </div>
      </Link>
    );
  }
  
  export default Button;