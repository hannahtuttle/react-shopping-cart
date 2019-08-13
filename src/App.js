import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import {ProductContext} from './contexts/ProductContext.js'
import {CartContext} from './contexts/CartContext.js'

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		setCart([...cart, item]);
	};
	
	const removeItem = (remItem) => {
		const items = cart.filter((item) => {
				return item.id !== remItem	
		})
		console.log('items', items)
			setCart([...items])
			// console.log('item', item)
			//console.log(cart)
	
	}

	return (
		<ProductContext.Provider value={{ products, addItem }}>
			<CartContext.Provider value={{cart, removeItem}}>
		<div className="App">
			<Navigation />

			{/* Routes */}
			<Route exact path="/" component={Products} />
			

			<Route
				path="/cart" component={ShoppingCart}/>}
			/>
		</div>
		</CartContext.Provider>
		</ProductContext.Provider>
	);
}

export default App;
