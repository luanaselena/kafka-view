import React from "react";
import Grid from "@material-ui/core/Grid";
import PostCard from "./PostCard";

const ListaPosts = (props) => {
	const { posts } = props;

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
						title={p.title}
						text={p.text}
						username={p.username}
						image={p.image}
					/>
				))
			)}
		</Grid>
	);
};

export default ListaPosts;
