import React from 'react';
import './Product.css';
import StarRateIcon from '@material-ui/icons/StarRate';
import { useStateValue } from '../StateProvider';
import CurrencyFormat from 'react-currency-format';

function Product({ id, title, image, price, rating }) {
	const rate_star = Array(rating).fill().map((_) => (
		<p>
			<StarRateIcon className="starIcon" />
		</p>
	));

	const [ {}, dispatch ] = useStateValue();

	const addToBasket = () => {
		dispatch({
			type: 'ADD_TO_BASKET',
			item: {
				id: id,
				title: title,
				image: image,
				price: price,
				rating: rating
			}
		});
	};

	return (
		<div className="product">
			 <CurrencyFormat 
            renderText = {(value) => (
                <>
                
		<div className="product__info">
				<p>{title}</p>
				<p className="product__price">
					
					<strong>{value}</strong>
				</p>
				<div className="product__rating">{rate_star}</div>
		</div>
		</>
                
            )}
              decimalScale={2}
              value={price}
              displayType={'text'}
              thousandSpacing={'2s'}
              thousandSeparator={true}
              prefix={'₹'}  
            />




			<img src={image} alt={title} />
			<button onClick={addToBasket}>Add to basket</button>
		</div>
	);
}

export default Product;
