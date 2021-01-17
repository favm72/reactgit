import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, NavbarBrand } from 'reactstrap';

const Header = (props) => {
	return (
		<Fragment>			
			<Navbar dark fixed="top">
				<div className="container mybar">
					<NavbarBrand>REACTGIT</NavbarBrand>
					<NavLink to="/home">Home</NavLink>
					<NavLink to="/commits">Commits</NavLink>
				</div>
			</Navbar>
		</Fragment>
	);
}

export default Header
