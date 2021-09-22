import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { apiAxios } from "../../config/axios";
import { useHistory } from "react-router-dom";
import Navegacion from "./Navegacion";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
}));

const Notificaciones = () => {
    const classes = useStyles();
	let history = useHistory();

    const usernameSesion = localStorage.getItem("usuario");
	//Si el usuario no esta logueado no puede entrar a la pagina
	if (usernameSesion === "" || usernameSesion === undefined){
		history.push("/signin");
	}

    const [notifLikes, setNotifLikes] = useState([]);
    const [notifFollowers, setFollowers] = useState([]);

    const fetchApi = async () => {
		const notifLikes = await apiAxios.get("http://localhost:8080/likes");
		setNotifLikes(notifLikes.data);

		const notifFollowers = await apiAxios.get("http://localhost:8080/getFollowers");
		setFollowers(notifFollowers.data);

	};

    useEffect(() => {
		fetchApi();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

    return(
<div className={classes.root}>
			<Container maxWidth="md">
				<Grid container spacing={3}>
					<Grid item xs={12}>
						<h1 className={classes.paper}>lista notis</h1>
					</Grid>
					<Grid item xs={12}>
						<Grid
							container
							direction="column"
							justifyContent="space-between"
							alignItems="center"
						>
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</div>
    );

};

export default Notificaciones;