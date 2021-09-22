import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useHistory } from "react-router-dom";
import { apiAxios } from "../../config/axios";

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: "100%", // Fix IE 11 issue.
		marginTop: theme.spacing(3),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

export default function SignUp() {
	const classes = useStyles();
	let history = useHistory();

	const [name, setname] = useState("");
	const [username, setusername] = useState("");
	const [password, setpassword] = useState("");

	//Si el usuario esta logueado no puede entrar a la pagina
	if (localStorage.getItem("usuario") !== ""){
		history.push("/posts");
	}
	
	const handleSubmit = async (e) => {
		e.preventDefault();

		//Postear usuario en la bd (y validar que no exista un usuario con el mismo username)
		const nuevoUsuario = { username: username, name: name, password: password };
    let res = await apiAxios.post("http://localhost:8080/newUser", nuevoUsuario);

		if (res.data === true) {
			//Si no existe guardar en localStorage y entrar
			localStorage.setItem("usuario", username);
			history.push("/posts");
			
			//Refresca pagina
			window.location.replace('');
		} else {
			//Si existe tira error por consola
			console.log(`El usuario ${username} no pudo ser creado.`);
		}
	};

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Sign up
				</Typography>
				<form className={classes.form} noValidate>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TextField
								name="name"
								variant="outlined"
								required
								fullWidth
								id="name"
								label="Name"
								autoFocus
								value={name}
								onChange={(e) => setname(e.target.value)}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="username"
								label="Username"
								name="username"
								value={username}
								onChange={(e) => setusername(e.target.value)}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								name="password"
								label="Password"
								type="password"
								id="password"
								value={password}
								onChange={(e) => setpassword(e.target.value)}
							/>
						</Grid>
					</Grid>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
						onClick={(e) => handleSubmit(e)}
					>
						Sign Up
					</Button>
					<Grid container justifyContent="flex-end">
						<Grid item>
							<Link href="/signin" variant="body2">
								Already have an account? Sign in
							</Link>
						</Grid>
					</Grid>
				</form>
			</div>
		</Container>
	);
}
