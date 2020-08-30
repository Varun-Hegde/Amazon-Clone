import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue } from '../StateProvider';
import { auth } from '../firebase';

function Header() {
	const [ { basket, user }, dispatch ] = useStateValue();
	const login = () => {
		if (user) {
			auth.signOut();
		}
	};
	return (
		<nav className="header">
			<Link to="/">
				<img
					className="header__logo"
					src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
					alt="Amazon Logo"
				/>
			</Link>
			<div className="header__search">
				<input className="header__searchInput" type="text" />
				<SearchIcon className="header__searchIcon" />
			</div>
			<div className="header__nav">
				<Link className="header__link" to={!user && '/login'}>
					<div onClick={login} className="header__option">
						<span className="header__optionLineOne">Hello {user ? user.email : 'Sign In'},</span>
						<span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
					</div>
				</Link>
				<Link className="header__link" to="/">
					<div className="header__option">
						<span className="header__optionLineOne">Returns &</span>
						<span className="header__optionLineTwo">Orders</span>
					</div>
				</Link>
				<Link className="header__link" to="">
					<div className="header__option">
						<span className="header__optionLineOne">Your</span>
						<span className="header__optionLineTwo">Prime</span>
					</div>
				</Link>
				<Link className="header__link" to="/checkout">
					<div className="header__optionBasket">
						<ShoppingCartIcon />
						<span className="header__optionLineTwo headerBasketCount">{basket && basket.length}</span>
					</div>
				</Link>
			</div>
		</nav>
	);
}

export default Header;
