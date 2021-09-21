import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ListaPosts from "./ListaPosts";
import { useHistory } from "react-router-dom";
import { apiAxios } from "../../config/axios";

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

const Posts = () => {
	const classes = useStyles();
	let history = useHistory();

	//Si el usuario no esta logueado no puede entrar a la pagina
	if (localStorage.getItem("usuario") === ""){
		history.push("/signin");
	}

	const username = localStorage.getItem("usuario");
	const [posts, setposts] = useState([]);

	const fetchPosts = async (username) => {
		const result = await apiAxios.get("http://localhost:8080/followers-post", {
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
						<h1 className={classes.paper}>POSTS</h1>
					</Grid>
					<Grid item xs={12}>
						<ListaPosts 
							posts={posts}
						/>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};

export default Posts;
