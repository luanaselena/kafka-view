import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

const Navegacion = () => {
	return (
			<Navbar bg="dark" variant="dark" className="mb-2">
				<Container>
					<Navbar.Brand>
						<Link to="/">Home</Link>
					</Navbar.Brand>
					<Nav className="me-auto">
						<Nav.Link>
							<Link to="/">Home</Link>
						</Nav.Link>
            <Nav.Link>
							<Link to="/posts">Posts</Link>
						</Nav.Link>
						<Nav.Link>
							<Link to="/misposts">Mis Posts</Link>
						</Nav.Link>
					</Nav>
				</Container>
			</Navbar>  
	);
};

export default Navegacion;
