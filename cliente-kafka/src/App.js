import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SignIn from "./components/ui/SignIn";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import SignUp from "./components/ui/SignUp";
import BusquedaUsuarios from "./components/ui/BusquedaUsuarios";

function App() {
	return (
		<Router>
			<div>
				<Navbar bg="dark" variant="dark">
					<Container>
						<Navbar.Brand><Link to="/">Home</Link></Navbar.Brand>
						<Nav className="me-auto">
							<Nav.Link>
								<Link to="/">Home</Link>
							</Nav.Link>
							<Nav.Link href="#features">Features</Nav.Link>
							<Nav.Link href="#pricing">Pricing</Nav.Link>
						</Nav>
					</Container>
				</Navbar>

				{/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
				<Switch>
					<Route path="/signin">
						<SignIn />
					</Route>
          <Route path="/signup">
						<SignUp />
					</Route>
          <Route path="/busquedausuarios">
						<BusquedaUsuarios />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
