import React from 'react';
import './Checkout.css';
import { useStateValue } from '../StateProvider';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout() {
	const [ { basket }, dispatch ] = useStateValue();

	return (
		<div className="checkout">
			<div className="checkout__left">
				{basket && basket.length === 0 ? (
					<div>
						<h2>Your Shopping basket is empty</h2>
						<p>
							You have no items in your basket.To buy one or more items, click 'Add to basket' next to the
							item
						</p>
					</div>
				) : (
					<div>
						<h2 className="checkout__title">Your Shopping basket </h2>
						<div>
							{basket.map((item) => (
								<CheckoutProduct
									id={item.id}
									title={item.title}
									image={item.image}
									price={item.price}
									rating={item.rating}
								/>
							))}
						</div>
					</div>
				)}
			</div>
			{basket.length > 0 && (
				<div className="checkbox__right">
					<Subtotal />
				</div>
			)}
		</div>
	);
}

export default Checkout;
