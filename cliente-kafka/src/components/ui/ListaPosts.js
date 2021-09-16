import React from "react";
import Grid from "@material-ui/core/Grid";
import PostCard from "./PostCard";
import { useHistory } from "react-router-dom";

const ListaPosts = (props) => {
	const { posts } = props;
  let history = useHistory();

  //Si el usuario no esta logueado no puede entrar a la pagina
  if (localStorage.getItem("usuario") === null){
    //history.push("/signin");
  }

	return (
		<Grid
			container
			direction="column"
			justifyContent="space-between"
			alignItems="center"
		>
			{posts === undefined || posts.length === 0? (
				<p>No hay posts</p>
			) : (
				posts.map((p) => (
					<PostCard
						key={p.id}
						titulo={p.title}
						contenido={p.content}
						usuario={p.usuario}
						imagen={p.image}
					/>
				))
			)}
		</Grid>
	);
};

export default ListaPosts;
