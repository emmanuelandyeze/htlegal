import { NavLink, Outlet } from "react-router-dom";
import React,{useState} from 'react';
import {FiAlignRight,FiXCircle,FiChevronDown } from "react-icons/fi";
import "./Nav.css";

const Nav = () => {
	const [isMenu, setisMenu] = useState(false);
  const [isResponsiveclose, setResponsiveclose] = useState(false);
  const toggleClass = () => {
    setisMenu(isMenu === false ? true : false);
    setResponsiveclose(isResponsiveclose === false ? true : false);
  };
  let boxClass = ["nav__container"];
  if(isMenu) {
    boxClass.push('responsive__nav__show');
  }else{
    boxClass.push('');
  }
  const [isMenuSubMenu, setMenuSubMenu] = useState(false);
  const toggleSubmenu = () => {
    setMenuSubMenu(isMenuSubMenu === false ? true : false);
  };
  let boxClassSubMenu = ["sub__menus"];
  if(isMenuSubMenu) {
    boxClassSubMenu.push('sub__menus__Active');
  }else {
    boxClassSubMenu.push('');
  }
  return (
		<div className="nav">
			<img
				src="/htlogo.png"
				height={100}
				width={100}
				alt=""
			/>
			{isResponsiveclose === true ? (
				<>
					<span
						className="menubar__button"
						style={{ display: 'none' }}
						onClick={toggleClass}
					>
						{' '}
						<FiXCircle />{' '}
					</span>
				</>
			) : (
				<>
					<span
						className="menubar__button"
						style={{ display: 'none' }}
						onClick={toggleClass}
					>
						{' '}
						<FiAlignRight />{' '}
					</span>
				</>
			)}
			<ul className={boxClass.join(' ')}>
				{/* Approach #1 --- Active  */}
				<li>
					<NavLink
						onClick={toggleClass}
						className={({ isActive }) =>
							isActive ? 'active' : ''
						}
						to="/"
					>
						Home
					</NavLink>
				</li>

				{/* Approach #2 --- Active  */}
				<li>
					<NavLink
						onClick={toggleClass}
						style={({ isActive }) => {
							return {
								color: isActive ? 'active' : '',
							};
						}}
						to="/about"
					>
						About Us
					</NavLink>
				</li>
				<li>
					<NavLink
						onClick={toggleClass}
						style={({ isActive }) => {
							return {
								color: isActive ? 'active' : '',
							};
						}}
						to="/services"
					>
						Our Services
					</NavLink>
				</li>
				<li>
					<NavLink
						onClick={toggleClass}
						className={({ isActive }) =>
							isActive ? 'active' : ''
						}
						to="/blog"
					>
						Blog
					</NavLink>
				</li>
				<li>
					<NavLink
						onClick={toggleClass}
						className={({ isActive }) =>
							isActive ? 'active' : ''
						}
						to="/contact"
					>
						Contact Us
					</NavLink>
				</li>

				<li>
					<a
						// onClick={toggleClass}
						// className={({ isActive }) =>
						// 	isActive ? 'active' : ''
						// }
						href="https://wa.me/2348161353700"
						style={{
							backgroundColor: '#800000',
							color: '#fff',
							padding: '.5rem 1rem',
							borderRadius: '5px',
						}}
					>
						{' '}
						Book an Appointment{' '}
					</a>
				</li>
				<Outlet />
			</ul>
			{/* <div>
        <a href="/" className="appointBtn">Book an Appointment</a>
      </div> */}
		</div>
	);
};

export default Nav;
