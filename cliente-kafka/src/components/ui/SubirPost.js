import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
//import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import { useHistory } from "react-router-dom";
import { apiAxios } from "../../config/axios";

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(3),
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	form: {
		width: "100%", // Fix IE 11 issue.
		marginTop: theme.spacing(3),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
	label: {
		fontSize: "20px",
	},
}));

const SubirPost = () => {
	const classes = useStyles();

	const [titulo, settitulo] = useState("");
	const [contenido, setcontenido] = useState("");
	const [imagen, setimagen] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

    //Si titulo o contenido esta vacio tirar exception

		//Subir post a la API 

    //Que aparezca "Post Subido" en consola o pantalla
	};

	return (
		<Container component="main" maxWidth="md">
			<CssBaseline />
			<div className={classes.paper}>
				<Typography component="h1" variant="h5">
					Nuevo post
				</Typography>

				<Form className={classes.form} onSubmit={(e) => handleSubmit(e)}>
					<Form.Group className="mb-3">
						<Form.Label className={classes.label}>Titulo</Form.Label>
						<Form.Control
							type="text"
							value={titulo}
							onChange={(e) => settitulo(e.target.value)}
						/>
					</Form.Group>

					<Form.Group className="mb-3">
						<Form.Label className={classes.label}>Contenido</Form.Label>
						<FloatingLabel controlId="floatingTextarea2">
							<Form.Control
								as="textarea"
								style={{ height: "150px" }}
								value={contenido}
								onChange={(e) => setcontenido(e.target.value)}
							/>
						</FloatingLabel>
					</Form.Group>

					<Form.Group className="mb-3">
						<Form.Label className={classes.label}>Imagen</Form.Label>
						<Form.Control
							type="password"
							placeholder="Copia aqui una URL de una imagen de internet"
							value={imagen}
							onChange={(e) => setimagen(e.target.value)}
						/>
					</Form.Group>

					<Button variant="primary" type="submit">
						Publicar post
					</Button>
				</Form>
			</div>
		</Container>
	);
};

export default SubirPost;
