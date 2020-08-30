import React from 'react';
import './CheckoutProduct.css';
import StarRateIcon from '@material-ui/icons/StarRate';
import { useStateValue } from '../StateProvider';
import Button from '@material-ui/core/Button';

function CheckoutProduct({ id, title, image, price, rating }) {
	const rate_star = Array(rating).fill().map((_) => (
		<p>
			<StarRateIcon className="starIcon" />
		</p>
	));
	const [ {}, dispatch ] = useStateValue();
	const removeFromBasket = () => {
		dispatch({
			type: 'REMOVE_FROM_BASKET',
			id: id
		});
	};

	return (
		<div className="checkoutProduct">
			<img className="checkoutProduct__img" src={image} alt="img" />
			<div className="checkoutProduct__info">
				<p className="checkoutProduct__title">{title}</p>
				<p className="checkoutProduct__price">
					<small>₹</small>
					<strong>{price}</strong>
				</p>
				<div className="checkoutProduct__rating">{rate_star}</div>
				<button className="checkoutProduct__button" onClick={removeFromBasket}>
					Remove from basket
				</button>
			</div>
		</div>
	);
}

export default CheckoutProduct;
