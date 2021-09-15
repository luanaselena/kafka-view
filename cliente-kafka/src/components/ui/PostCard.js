import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
	root: {
		maxWidth: 800,
    marginBottom: 5
	},
});

const PostCard = (props) => {
	const classes = useStyles();

  const {titulo, contenido, usuario, imagen} = props;

	return (
		<Card className={classes.root}>
			<CardContent>
				<CardActionArea>
					<Typography gutterBottom variant="h5" component="h2">
						{titulo}
					</Typography>
          <Typography variant="subtitle1" gutterBottom>
						Por: {usuario}
					</Typography>
				</CardActionArea>
				<Typography variant="body2" color="textSecondary" component="p">
					{contenido}
				</Typography>
				<CardMedia
					component="img"
					alt="Contemplative Reptile"
					height="350"
					image={imagen}
					title="Contemplative Reptile"
				/>
			</CardContent>

			<CardActions>
				<Button size="small" color="primary">
					Like
				</Button>
			</CardActions>
		</Card>
	);
}

export default PostCard;