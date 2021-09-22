import React from "react";
import Grid from "@material-ui/core/Grid";
import PostCard from "./PostCard";

const ListaPosts = (props) => {
	const { posts, tipo } = props;

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
				posts.map((item) => (
					<PostCard
						key={item.post.id}
						id={item.post.id}
						title={item.post.title}
						text={item.post.text}
						username={item.post.username}
						image={item.post.image}
						likedUsers={item.likedsUsers}
					/>
					
				))
			)}
		</Grid>
	);
};

export default ListaPosts;
