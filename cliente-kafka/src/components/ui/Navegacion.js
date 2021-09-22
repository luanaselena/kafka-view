import React from "react";
import { Link, useHistory } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import "./nav.css";

const Navegacion = () => {
	let history = useHistory();

	const handleLogOut = (e) => {
		e.preventDefault();

		localStorage.setItem("usuario", "");
		history.push("/signin");

		//Refresca pagina
		window.location.replace('');
	};

	const username = localStorage.getItem("usuario");

	return (
		<Navbar bg="dark" variant="dark" className="mb-2">
			<Container>
				<Navbar.Brand>
					<Link to="/posts" className="link">
						Home
					</Link>
				</Navbar.Brand>
				<Nav className="me-auto">
					<Nav.Link>
						<Link to="/subirpost" className="link">
							Subir Post
						</Link>
					</Nav.Link>
					<Nav.Link>
						<Link to="/misposts" className="link">
							Mis Posts
						</Link>
					</Nav.Link>
					<Nav.Link>
						<Link to="/busquedausuarios" className="link">
							Buscar usuarios
						</Link>
					</Nav.Link>
				</Nav>

				<Nav className="mr-auto">
					{username === "" ? (
						<>
							<Nav.Link>
								<Link to="/signin" className="link">
									SignIn
								</Link>
							</Nav.Link>
							<Nav.Link>
								<Link to="/signup" className="link">
									SignUp
								</Link>
							</Nav.Link>
						</>
					) : (
						<>
							<Nav.Link className="link">Hola {username}!</Nav.Link>

							<Nav.Link>
								<Link className="link" onClick={(e) => handleLogOut(e)}>
									Log Out
								</Link>
							</Nav.Link>
						</>
					)}
				</Nav>
			</Container>
		</Navbar>
	);
};

export default Navegacion;
