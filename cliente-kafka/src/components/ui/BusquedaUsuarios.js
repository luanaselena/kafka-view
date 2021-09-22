import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import UsuarioCard from "./UsuarioCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { apiAxios } from "../../config/axios";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
}));

const BusquedaUsuarios = () => {
	const classes = useStyles();
	let history = useHistory();

	const usernameSesion = localStorage.getItem("usuario");
	//Si el usuario no esta logueado no puede entrar a la pagina
	if (usernameSesion === ""){
		history.push("/signin");
	}

	const [busqueda, setbusqueda] = useState("");
	const [usuarios, setusuarios] = useState([]);
	const [usuariosseguidos, setusuariosseguidos] = useState([]);

	const fetchApi = async () => {
		const resultUsers = await apiAxios.get("http://localhost:8080/getUsers");
		setusuarios(resultUsers.data);

		const resultSeguidos = await apiAxios.get("http://localhost:8080/getFollowingUsers", {params: {
			username: usernameSesion
		}});
		setusuariosseguidos(resultSeguidos.data);
	};

	useEffect(() => {
		fetchApi();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleBuscar = (e) => {
		e.preventDefault();
	};

	//console.log(usuariosseguidos);

	return (
		<div className={classes.root}>
			<Container maxWidth="md">
				<Grid container spacing={3}>
					<Grid item xs={8}>
						<TextField
							id="outlined-basic"
							variant="outlined"
							fullWidth
							type="search"
							value={busqueda}
							onChange={(e) => setbusqueda(e)}
						/>
					</Grid>
					<Grid item xs={4}>
						<Button
							variant="contained"
							color="primary"
							size="large"
							onClick={(e) => handleBuscar(e)}
						>
							Buscar
						</Button>
					</Grid>
					<Grid item xs={12}>
						<Row xs={1} md={3} className="g-4">
							{usuarios.map(user => (
								<Col>
									<UsuarioCard 
										key={user.id}
										user={user}
										usuariosSeguidos={usuariosseguidos}
									/>
								</Col>
							))}
						</Row>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};

export default BusquedaUsuarios;
