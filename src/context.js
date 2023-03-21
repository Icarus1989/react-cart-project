import React, { useState, useContext, useReducer, useEffect } from "react";
import cartItems from "./data";
import reducer from "./reducer";

const url = "https://course-api.com/react-useReducer-cart-project";
const AppContext = React.createContext();

const initialState = {
	loading: false,
	cart: cartItems,
	total: 0,
	amount: 0
};

const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	function clearCart() {
		dispatch({ type: "CLEAR_CART" });
	}

	function remove(id) {
		dispatch({ type: "REMOVE", payload: id });
	}

	function increase(id) {
		dispatch({ type: "INCREASE", payload: id });
	}

	function decrease(id) {
		dispatch({ type: "DECREASE", payload: id });
	}

	async function fetchData() {
		dispatch({ type: "LOADING" });
		const response = await fetch(url);
		const cart = await response.json();
		dispatch({ type: "DISPLAY_ITEMS", payload: cart });
	}

	function toggleAmount(id, type) {
		dispatch({ type: "TOGGLE_AMOUNT", payload: { id, type } });
	}

	useEffect(() => {
		fetchData();
	}, []);

	useEffect(() => {
		dispatch({ type: "GET_TOTALS" });
	}, [state.cart]);

	return (
		<AppContext.Provider
			value={{ ...state, clearCart, remove, increase, decrease, toggleAmount }}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
