import React, { useEffect } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from 'react-router-dom';
import {BiMenu} from 'react-icons/bi'

const refresh = () =>{
  useEffect(() => {
    const timer = setTimeout(() => console.log(''), 1000);
  }, []);
  }

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);


  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="text-2xl m-0 absolute cursor-pointer" style={{left:"30px"}}>
        <BiMenu />
      </div>
      
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
          <Link to="/" onClick={refresh}>  <h1 style={{width:"20px"}}>SHOP</h1></Link>
      </div>
      
      
      <ul className="md:flex hidden list-none flex-row justify-between items-center flex-initial">
          <li className="mx-4 flex" style={{border:"1px solid #000"}}>
          <AiOutlineSearch className="m-2 " fontSize={18} />
              <input className="out" style={{width:"450px"}} type="text" autoComplete="false"/>
          </li>

          <li className="nav-color mx-4 cursor-pointer">
          <Link to="/useradmin/item/add">Add</Link>
          </li>
          <li className="nav-color mx-4 cursor-pointer">
          <Link to="/add" onClick={refresh} >Posts</Link>
          </li>
          <li className="nav-color mx-4 cursor-pointer">
          <Link to="/add" onClick={refresh} >-</Link>
          </li>
          <li className="nav-color mx-4 cursor-pointer">
          <Link to="/add" onClick={refresh} >-</Link>
          </li>
       
       
        <li className="py-2 pl-20 mx-4 rounded-full cursor-pointer nav-color-two">
          <Link to="/login" onClick={refresh} >Log in</Link>
        </li>
        {/* <li className="py-2 pr-7 mx-4 rounded-full cursor-pointer nav-color-two">
          <Link to="/register" onClick={refresh} >Sign up</Link>
        </li> */}
      </ul>
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4 fontSize={28} className="text-black md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <AiOutlineClose fontSize={28} className="text-black md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-black animate-slide-in"
          >
            <li className="text-xl w-full my-2"><AiOutlineClose onClick={() => setToggleMenu(false)} /></li>
            {["Blog", "Courses", "Career","Services"].map(
              (item, index) => <NavBarItem key={item + index} title={item} classprops="my-2 text-lg" />,
            )}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default NavBar;