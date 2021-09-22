import React, {useState, useEffect} from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import PostCard from "./PostCard";
import { apiAxios } from "../../config/axios";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: "center",
		color: theme.palette.text.secondary,
	},
}));

const PostsPropios = () => {
	const classes = useStyles();
	let history = useHistory();

	const username = localStorage.getItem("usuario");
	
	//Si el usuario no esta logueado no puede entrar a la pagina
	if (username === "" || username === undefined){
		history.push("/signin");
	}


	const [posts, setposts] = useState([]);

	const fetchPosts = async (username) => {
		const result = await apiAxios.get("http://localhost:8080/own-posts", {
			params: { username: username },
		});
		setposts(result.data);
	};

	useEffect(() => {
		fetchPosts(username);
	}, [username]);

	console.log(posts);


	return (
		<div className={classes.root}>
			<Container maxWidth="md">
				<Grid container spacing={3}>
					<Grid item xs={12}>
						<h1 className={classes.paper}>MIS POSTS</h1>
					</Grid>
					<Grid item xs={12}>
					<Grid
			container
			direction="column"
			justifyContent="space-between"
			alignItems="center"
		>
			{posts === undefined || posts.length === 0? (
				<p>No hay posts</p>
			) : (
				posts.map((item) => (
					<PostCard
						key={item.id}
						id={item.id}
						title={item.title}
						text={item.text}
						username={item.username}
						image={item.image}
					/>
					
				))
			)}
		</Grid>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};

export default PostsPropios;
