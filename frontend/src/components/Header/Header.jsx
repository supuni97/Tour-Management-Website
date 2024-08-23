import React,{useRef,useEffect,useContext } from 'react';
import { Container, Row, Button } from 'reactstrap';
import { NavLink, Link , useNavigate} from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import './header.css';
import { AuthContext } from '../../context/AuthContext';

const nav__links = [
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '/about',
    display: 'About'
  },
  {
    path: '/tours',
    display: 'Tours'
  }
];

const Header = () => {

const headerRef = useRef(null);
const navigate = useNavigate();
const {user, dispatch} = useContext(AuthContext);

const logout = ()=>{
  dispatch({type:'LOGOUT'})
  navigate('/')
}

const stickyHeaderFUnc = () => {
window.addEventListener('scroll',()=>{
  if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
    headerRef.current.classList.add('sticky__header')
  }else{
    headerRef.current.classList.remove('sticky__header')

  }
})
}

useEffect(()=>{
  stickyHeaderFUnc()

  return window.removeEventListener('scroll',stickyHeaderFUnc)
})

  return (
    <header className='header' ref={headerRef}>
      <Container>
        <Row>
          <div className='nav__wrapper d-flex align-items-center justify-content-between'>
            {/* logo start */}
            <div className='logo'>
              <img src={logo} alt='' />
            </div>
            {/* logo end */}

            {/* menu start */}
            <div className='navigation'>
              <ul className='menu d-flex align-items-center gap-5'>
                {nav__links.map((item, index) => (
                  <li className='nav__item' key={index}>
                    <NavLink to={item.path} className={navclass => 
                    navclass.isActive ? "active__link":""}>{item.display}</NavLink>
                  </li>
                ))}
              </ul>
            </div>
            {/* menu end */}

            {/* buttons start */}
            <div className='nav__right d-flex align-items-center gap-4'>
              <div className='nav__btns d-flex align-items-center gap-4'>
              
              {
                user? (<>
                  <h5 className='mb-0'>{user.username}</h5>
                  <Button className='btn btn-dark' onClick={logout}>Logout</Button>
                </>) : (<>
                <Button className='btn secondary__btn'>
                  <Link to='/login' style={{ color: 'inherit', textDecoration: 'none' }}>Login</Link>
                </Button>
                <Button className='btn primary__btn'>
                  <Link to='/register' style={{ color: 'inherit', textDecoration: 'none' }}>Register</Link>
                </Button>
                </>
                )}
              
              </div>
              <span className='mobile__menu'>
                <i className="ri-menu-line"></i>
              </span>
            </div>
            {/* buttons end */}
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
