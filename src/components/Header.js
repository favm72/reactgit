import React, { Fragment } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

const Header = (props) => {
	return (
		<Fragment>			
			<Navbar dark fixed="top">
				<div className="container">
					<NavbarBrand href="#">REACTGIT</NavbarBrand>
				</div>
			</Navbar>
		</Fragment>
	);
}

export default Header
