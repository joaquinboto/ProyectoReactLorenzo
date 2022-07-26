import React from 'react';
import './css/functions.css';
import cardImg from './assets/cards-functions.svg';
import cardImg1 from './assets/img1-functions.svg';
import cardImg2 from './assets/img2-functions.svg';
import cardImg3 from './assets/img3-functions.svg';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
const Functions = () => {
	const variants = {
		initial: {
			opacity: 0,
			x: '-100vw',
			scale: 0.8,
		},
		in: {
			opacity: 1,
			x: 0,
			scale: 1,
		},
		out: {
			opacity: 0,
			x: '-100vw',
			scale: 1.2,
		},
	};

	const pageTransition = {
		duration: 0.5,
	};
	return (
		<motion.div variants={variants} initial="initial" animate="in" exit="out" transition={pageTransition} className="docs">
			<div>
				<h1 className="h1Docs">Functions</h1>
				<p className="pDocs">My software is designed to serve for all daily tasks related to finance. From to know how the market is performing right now and its metric to rebalance a portfolio under a specific criteria.</p>
				<p className="pDocs">It adds value as it helps you to take a decision with more information.</p>
			</div>
			<div cardContent>
				<div className="cardFunction">
					<img src={cardImg} alt="card img" />
					<img src={cardImg1} alt="img 1" className="img1" />
					<h1 className="cardTitulo1">QUANVAS</h1>
					<p className="cardParrafo1">Prepare some Quanvas to invest, monitor or rebalance them</p>
					<Link to={'/contact'} className="cardLink1">
						Request Demo
					</Link>
				</div>
				<div className="cardFunction">
					<img src={cardImg} alt="card img" />
					<img src={cardImg2} alt="img 2" className="img1" />
					<h1 className="cardTitulo2">TRADING BOTS BINANCE</h1>
					<p className="cardParrafo1">Or even check how your trading bots Binance are performing</p>
					<Link to={'/contact'} className="cardLink1">
						Request Demo
					</Link>
				</div>
				<div className="cardFunction">
					<img src={cardImg} alt="card img" />
					<img src={cardImg3} alt="img 3" className="img1" />
					<h1 className="cardTitulo3">ARG. FOREX WATCH</h1>
					<p className="cardParrafo1">You can start your day, run Argentina Forex Watch to acknowledge about the market</p>
					<Link to={'/contact'} className="cardLink1">
						Request Demo
					</Link>
				</div>
			</div>
			<div>
				<div className="footerWho">
					<p className="pDocs pFunctions">I give you what you need, the decision is up to you of what you want to do...</p>
				</div>
			</div>
		</motion.div>
	);
};

export default Functions;
