import React, {useState, useEffect} from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ListaPosts from "./ListaPosts";
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

const PostsPropios = () => {
	const classes = useStyles();

	const username = localStorage.getItem("usuario");
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
						<ListaPosts 
              posts={posts}
							tipo="propios"
            />
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};

export default PostsPropios;
