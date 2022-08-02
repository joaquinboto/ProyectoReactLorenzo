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
		<nav className="divPrincipal">
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
				<a href='https://github.com/lorenzoreyes'>
					<div className='redesHover1'></div>
				</a>
				<a href="mailto:lreyes@udesa.edu.ar">
					<div className='redesHover2'></div>
				</a>
				<a href="https://www.linkedin.com/in/lorenzo-reyes-77717b96/">
					<div className='redesHover3'></div>
				</a>
			</div>
			<div className="navFooter">
				<img className="question" src={question} alt="" />
				<div style={{display: "flex" }}>
					<a href="https://wa.me/5492477562603">
						<div className='hoverWpp'></div>
					</a>
					<a href="https://t.me/quanvas">
						<div className='hoverTll'></div>
					</a>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
