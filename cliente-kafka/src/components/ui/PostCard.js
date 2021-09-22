import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";
import { apiAxios } from "../../config/axios";

const useStyles = makeStyles({
	root: {
		width: 800,
		marginBottom: 5,
	},
});

const PostCard = (props) => {
	const classes = useStyles();
	let history = useHistory();

	const { id, title, text, username, image, likedUsers } = props;

	const usernameSesion = localStorage.getItem("usuario");

	//Buscar si el usuario de la sesion esta en la lista de usuarios likeados del post.
	//Si esta se le pone "Likeado"
	let esLikeado;
	if (history.location.pathname === "/posts") {
		esLikeado = likedUsers.filter((u) => u.username === usernameSesion);
	}

	const handleClick = async (e) => {
		e.preventDefault();

		//Llamada a la api
		const result = await apiAxios.post("http://localhost:8080/like", null, {
			params: { username: usernameSesion, post_id: id },
		});

		console.log(result);

		//Refresca pagina
		window.location.replace("");
	};

	return (
		<Card className={classes.root}>
			<CardContent>
				<Typography gutterBottom variant="h5" component="h2">
					{title}
				</Typography>
				<Typography variant="subtitle1" gutterBottom>
					Por: {username}
				</Typography>
				<Typography variant="body2" color="textSecondary" component="p">
					{text}
				</Typography>
				<CardMedia
					component="img"
					alt={title}
					height="250"
					image={image}
					title={title}
				/>
			</CardContent>

			{history.location.pathname === "/misposts" ? (
				<CardActions>
					<Button size="small" color="primary">
						{likedUsers.length} likes
					</Button>
				</CardActions>
			) : (
				<CardActions>
					{esLikeado.length === 0 ? (
						<Button
							size="small"
							color="primary"
							onClick={(e) => handleClick(e)}
						>
							{likedUsers.length} likes - Dar like
						</Button>
					) : (
						<Button size="small" color="primary">
							{likedUsers.length} likes - Likeado
						</Button>
					)}
				</CardActions>
			)}
		</Card>
	);
};

export default PostCard;
