import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { apiAxios } from "../../config/axios";

const useStyles = makeStyles({
	root: {
		maxWidth: 275,
	},
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
});

export default function UsuarioCard({ user, usuariosSeguidos }) {
	const classes = useStyles();

	const { id, username, name, userPosts } = user;

	const usuarioSesion = localStorage.getItem("usuario");

  //Ver si es usuario de la card es el usuario de sesion. Si es no se lo muestra.
  if(username === usuarioSesion){
    return null;
  }

	//Buscar si el usuario de la card esta en la lista de usuarios seguidos. Si esta se le saca el boton de "Seguir"
	const esSeguido = usuariosSeguidos.filter((u) => u.id === id);

	const handleClick = async (e) => {
		e.preventDefault();

		const result = await apiAxios.post("http://localhost:8080/follow", null, {
			params: { followingId: id, followerUsername: usuarioSesion },
		});

		console.log(result);
	};

	return (
		<Card className={classes.root} variant="outlined">
			<CardContent>
				<Typography variant="h5" component="h2">
					{username}
				</Typography>
				<Typography className={classes.pos} color="textSecondary">
					{name}
				</Typography>
				<Typography variant="body2" component="p">
					{userPosts.length} Posts
				</Typography>
			</CardContent>
			{esSeguido.length === 0 ? (
				<CardActions>
					<Button size="small" onClick={(e) => handleClick(e)}>
						Seguir
					</Button>
				</CardActions>
			) : (
				<CardActions>
					<Button size="small">Seguido</Button>
				</CardActions>
			)}
		</Card>
	);
}
