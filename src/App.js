import React from "react";
import { motion } from "framer-motion";
import { useGlobalContext } from "./context";

import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";

const svgVariants = {
	hidden: { rotate: 360 },
	visible: {
		rotate: 0,
		transition: {
			repeat: 4,
			delay: 0.8,
			duration: 2
		}
	}
};

const pathVariants = {
	hidden: {
		opacity: 0.1,
		pathLength: 0
	},
	visible: {
		opacity: 1,
		pathLength: 1,
		transition: {
			repeat: 4,
			repeatType: "reverse",
			delay: 0.8,
			duration: 2,
			ease: "easeInOut"
		}
	}
};

function App() {
	const { loading } = useGlobalContext();
	if (loading) {
		return (
			<div className="loading">
				<h1>Loading</h1>
				<motion.svg
					className="pizza-svg"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 512 512"
					variants={svgVariants}
					initial="hidden"
					animate="visible"
				>
					<motion.path
						fill="none"
						d="M109.7 160H160c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V64C0 46.3 14.3 32 32 32s32 14.3 32 32v51.2L81.6 97.6c87.5-87.5 229.3-87.5 316.8 0s87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3s-163.8-62.5-226.3 0L109.7 160z"
						variants={pathVariants}
					/>
				</motion.svg>
			</div>
		);
	}
	return (
		<main>
			<Navbar />
			<CartContainer />
		</main>
	);
}

export default App;
