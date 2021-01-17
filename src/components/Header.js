import React, { Fragment } from 'react';
import { Navbar, NavbarBrand, NavLink } from 'reactstrap';

const Header = (props) => {
	return (
		<Fragment>			
			<Navbar dark fixed="top">
				<div className="container">
					<NavbarBrand href="/home">REACTGIT</NavbarBrand>
					<NavLink href="/commits">Commits</NavLink>
				</div>
			</Navbar>
		</Fragment>
	);
}

export default Header
