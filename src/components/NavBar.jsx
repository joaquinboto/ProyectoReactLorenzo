import React from 'react';
import 'nes.css/css/nes.min.css';
import './css/nav.css';
import logo from './assets/LOGO.png';
import question from './assets/question.png';
import { Link } from 'react-router-dom';

const NavBar = () => {
	const btn = document.getElementsByClassName('nes-btn');

	function handleClick() {
		for (let i = 0; i < btn.length; i++) {
			btn[i].addEventListener('mouseover', function () {
				this.classList.add('nes-btn', 'is-warning');
			});
			btn[i].addEventListener('mouseleave', function () {
				this.classList.remove('is-warning');
			});
		}
	}

	handleClick();

	return (
		<div className="divPrincipal">
			<div className="navLogo">
				<Link to="/home">
					<img src={logo} alt="" />
				</Link>
			</div>
			<div className="divListas">
				<ul className="ulNav">
					<li onMouseOver={handleClick}>
						<Link to="/" className="nes-btn">
							Home
						</Link>
					</li>
					<li onMouseOver={handleClick}>
						<Link to="/whoiam" className="nes-btn">
							Who I am?
						</Link>
					</li>
					<li onMouseOver={handleClick}>
						<Link to="/functions" className="nes-btn">
							Functions
						</Link>
					</li>
					<li onMouseOver={handleClick}>
						<Link to="/docs" className="nes-btn">
							Docs
						</Link>
					</li>
					<li onMouseOver={handleClick}>
						<Link to="/contact" className="nes-btn">
							Contact
						</Link>
					</li>
				</ul>
			</div>
			<div className="navRedes">
				<div className='redesHover1'></div>
				<div className='redesHover2'></div>
				<div className='redesHover3'></div>
			</div>
			<div className="navFooter">
				<img className="question" src={question} alt="" />
				<div style={{display: "flex" }}>
					<div className='hoverWpp'></div>
					<div className='hoverTll'></div>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
