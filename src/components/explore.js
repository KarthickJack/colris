import { NavLink as Link } from 'react-router-dom';

function Button() {
    return (
      <a href={`#more`}>
        <div className='explore-button'>
        <button>Explore</button>
        </div>
        </a>
    );
  }
  
  export default Button;