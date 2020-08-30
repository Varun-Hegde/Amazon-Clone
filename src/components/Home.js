import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
	return (
		<div className="home">
			<img
				className="home__image"
				src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
				alt="Banner"
			/>
			<div className="home__row">
				<Product
					id="1"
					title="Echo Dot (3rd Gen) – New and improved smart speaker with Alexa (Black)"
					price={2999}
					rating={4}
					image="https://m.media-amazon.com/images/I/61EXU8BuGZL._AC_UY327_FMwebp_QL65_.jpg"
				/>
				<Product
					id="2"
					title="OnePlus 8 Pro (Onyx Black 8GB RAM+128GB Storage)"
					price={54999}
					rating={5}
					image="https://images-na.ssl-images-amazon.com/images/I/61YSMhOd5EL._SX425_.jpg"
				/>
			</div>
			<div className="home__row ">
				<Product
					id="3"
					title="New Apple iPad Pro (11-inch, Wi-Fi + Cellular, 512GB) - Silver (2nd Generation)"
					price={112900}
					rating={4}
					image="https://images-na.ssl-images-amazon.com/images/I/81gEWsabIYL._SL1500_.jpg"
				/>
				<Product
					id="4"
					title="Skullcandy Crusher Over Ear headphones wireless (Black) "
					price={9487}
					rating={4}
					image="https://images-na.ssl-images-amazon.com/images/I/712Q-VFtTmL._SL1500_.jpg"
				/>
				<Product
					id="12321341"
					title="Logitech G502 Hero High Performance Wired Gaming Mouse"
					price={4595}
					rating={5}
					image="https://images-na.ssl-images-amazon.com/images/I/51IOmsWQVAL._SX425_.jpg"
				/>
			</div>
			<div className="home__row">
				<Product
					id="6"
					title="Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage, 2.6GHz 9th Gen Intel Core i7) - Silver"
					price={199900}
					rating={5}
					image="https://images-na.ssl-images-amazon.com/images/I/71y%2BlIHVdAL._SL1500_.jpg"
				/>
			</div>
		</div>
	);
}

export default Home;
