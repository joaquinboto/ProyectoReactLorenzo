import './App.css';
import Contact from './components/Contact';
import NavBar from './components/NavBar';
import WhoIAm from './components/WhoIAm';
import Functions from './components/Functions';
import Docs from './components/Docs';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/home" element={<Home />} />
					<Route path="/whoiam" element={<WhoIAm />} />
					<Route path="/functions" element={<Functions />} />
					<Route path="/docs" element={<Docs />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="*" element={<h1 style={{ textAlign: 'center', fontSize: 150, marginTop: '200px' }}>NOT FOUND 404</h1>} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
