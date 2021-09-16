import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ListaPosts from "./ListaPosts";

const listaPosteosPropios = [
	{
    id: 1,
		usuario: "Carlos90099",
		title: "Un buen carlos",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras venenatis lorem nec justo malesuada consequat. In hac habitasse platea dictumst. Donec finibus odio ut erat placerat faucibus. Nullam faucibus, nibh eget consequat consequat, ligula risus gravida dolor, et mollis tortor nibh quis mauris. Fusce imperdiet laoreet quam, eget vehicula dolor finibus non. Suspendisse aliquam ante enim, porttitor luctus justo gravida id. Morbi in commodo massa. Mauris ornare ante eu velit convallis auctor. Vestibulum nec nibh urna. Vivamus ac augue elit. Proin pellentesque ante ac purus congue vehicula. Praesent ac ex convallis, dictum lectus sit amet, eleifend nisl. Etiam congue leo ac nibh pellentesque, et facilisis urna sollicitudin. Quisque convallis, lectus ac pretium tristique, libero dui mollis nibh, vitae venenatis enim augue a ex. Morbi urna ligula, lobortis eu mauris eu, mollis tincidunt nisi. Nullam sit amet ipsum in turpis sollicitudin cursus. Integer sit amet tristique ligula, at sagittis magna. Fusce sollicitudin dolor justo, vel placerat libero mattis sagittis. Proin commodo nec nibh quis luctus. Mauris eleifend scelerisque augue a mollis. Nunc quis massa ut augue dictum laoreet. Maecenas vel dui tristique, sodales libero sit amet, hendrerit dui. Sed nunc magna, tincidunt sed quam ut, fringilla scelerisque quam. Cras efficitur consequat mauris at imperdiet. In hac habitasse platea dictumst. Quisque finibus nunc varius, ultrices lectus et, semper ante. Proin euismod, nunc et consequat malesuada, ipsum quam ornare elit, eu faucibus urna odio vel eros.",
      image: "https://as01.epimg.net/argentina/imagenes/2021/09/10/futbol/1631239414_038436_1631239545_noticia_normal_recorte1.jpg"
	},
  {
    id: 2,
		usuario: "Juancin",
		title: "Un buen carssss",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras venenatis lorem nec justo malesuada consequat. In hac habitasse platea dictumst. Donec finibus odio ut erat placerat faucibus. Nullam faucibus, nibh eget consequat consequat, ligula risus gravida dolor, et mollis tortor nibh quis mauris. Fusce imperdiet laoreet quam, eget vehicula dolor finibus non. Suspendisse aliquam ante enim, porttitor luctus justo gravida id. Morbi in commodo massa. Mauris ornare ante eu velit convallis auctor. Vestibulum nec nibh urna. Vivamus ac augue elit. Proin pellentesque ante ac purus congue vehicula. Praesent ac ex convallis, dictum lectus sit amet, eleifend nisl. Etiam congue leo ac nibh pellentesque, et facilisis urna sollicitudin. Quisque convallis, lectus ac pretium tristique, libero dui mollis nibh, vitae venenatis enim augue a ex. Morbi urna ligula, lobortis eu mauris eu, mollis tincidunt nisi. Nullam sit amet ipsum in turpis sollicitudin cursus. Integer sit amet tristique ligula, at sagittis magna. Fusce sollicitudin dolor justo, vel placerat libero mattis sagittis. Proin commodo nec nibh quis luctus. Mauris eleifend scelerisque augue a mollis. Nunc quis massa ut augue dictum laoreet. Maecenas vel dui tristique, sodales libero sit amet, hendrerit dui.",
      image: "https://resizer.glanacion.com/resizer/7CSXwO_DqVDdFJ9Cd5E9Wn4HG4U=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/7WDRRFWI5NAZZGVY5644GLV5XM.JPG"
	},
  {
    id: 3,
		usuario: "Messi aaa",
		title: "El goleador del PSG",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras venenatis lorem nec justo malesuada consequat. In hac habitasse platea dictumst. Donec finibus odio ut erat placerat faucibus. Nullam faucibus, nibh eget consequat consequat, ligula risus gravida dolor, et mollis tortor nibh quis mauris. Fusce imperdiet laoreet quam, eget vehicula dolor finibus non. Suspendisse aliquam ante enim, porttitor luctus justo gravida id. Morbi in commodo massa. Mauris ornare ante eu velit convallis auctor. Vestibulum nec nibh urna. Vivamus ac augue elit.",
      image: "https://phantom-marca.unidadeditorial.es/0bd9871a39a0f24c38bbf1eb1a6d092f/resize/1320/f/jpg/assets/multimedia/imagenes/2021/09/14/16316460402131.jpg"
	},
  {
    id: 4,
		usuario: "Miguel90099",
		title: "Un buen migue",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras venenatis lorem nec justo malesuada consequat. In hac habitasse platea dictumst. Donec finibus odio ut erat placerat faucibus. Nullam faucibus, nibh eget consequat consequat, ligula risus gravida dolor, et mollis tortor nibh quis mauris. Fusce imperdiet laoreet quam, eget vehicula dolor finibus non. Suspendisse aliquam ante enim, porttitor luctus justo gravida id. Morbi in commodo massa. Mauris ornare ante eu velit convallis auctor. Vestibulum nec nibh urna. Vivamus ac augue elit. Proin pellentesque ante ac purus congue vehicula. Praesent ac ex convallis, dictum lectus sit amet, eleifend nisl. Etiam congue leo ac nibh pellentesque, et facilisis urna sollicitudin. Quisque convallis, lectus ac pretium tristique, libero dui mollis nibh, vitae venenatis enim augue a ex. Morbi urna ligula, lobortis eu mauris eu, mollis tincidunt nisi. Nullam sit amet ipsum in turpis sollicitudin cursus. Integer sit amet tristique ligula, at sagittis magna. Fusce sollicitudin dolor justo, vel placerat libero mattis sagittis.",
      image: "https://phantom-marca.unidadeditorial.es/0bd9871a39a0f24c38bbf1eb1a6d092f/resize/1320/f/jpg/assets/multimedia/imagenes/2021/09/14/16316460402131.jpg"
	},
];

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

	return (
		<div className={classes.root}>
			<Container maxWidth="md">
				<Grid container spacing={3}>
					<Grid item xs={12}>
						<h1 className={classes.paper}>MIS POSTS</h1>
					</Grid>
					<Grid item xs={12}>
						<ListaPosts 
              posts={listaPosteosPropios}
            />
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};

export default PostsPropios;
