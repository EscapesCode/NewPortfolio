import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';
import { useState, useEffect } from 'react';


const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  return (
    <nav className={`${styles.paddindX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='flex items-center justify-between w-full mx-auto max-w-7xl'>
        <Link to='/' className='flex items-center gap-2' onClick={() => { setActive(""); window.scrollTo(0, 0) }}>
          <img src={logo} alt='logo' className='object-contain w-9 h-9' />
          <p className='font-bold text-white cursor-pointer text-[18px]'>Eh Mas Fiq &nbsp; </p>
        </Link>
        <ul className='flex-row justify-end flex-grow hidden gap-10 list-none sm:flex'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${active === link.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className='flex items-center justify-end flex-1 sm:hidden'>
          <img src={toggle ? close : menu} alt="menu" className="w-[28px] h-[28px] object-contain cursor-pointer" onClick={() => setToggle(!toggle)} />
          
          <div className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className='flex flex-col items-start justify-end gap-4 list-none'>
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${active === link.title ? "text-white" : "text-secondary"
                    }font-poppins font-medium cursor-pointer  text-[16px]`}
                  onClick={() => setToggle(!toggle) &&setActive(link.title)}>
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar