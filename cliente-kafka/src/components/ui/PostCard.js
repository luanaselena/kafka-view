import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
	root: {
		width: 800,
		marginBottom: 5,
	},
});

const PostCard = (props) => {
	const classes = useStyles();
	let history = useHistory();

	const { title, text, username, image } = props;

	const handleClick = e => {
		//Llamada a la api
	}

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
					height="350"
					image={image}
					title={title}
				/>
			</CardContent>

			{history.location.pathname === "/misposts" ? null : (
				<CardActions>
					<Button size="small" color="primary" onClick={e => handleClick(e)}>
						Like
					</Button>
				</CardActions>
			)}
		</Card>
	);
};

export default PostCard;
