import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { apiAxios } from "../../config/axios";
import { useHistory } from "react-router-dom";
import Navegacion from "./Navegacion";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));

const Notificaciones = () => {
    const classes = useStyles();
    let history = useHistory();

    const usernameSesion = localStorage.getItem("usuario");
    //Si el usuario no esta logueado no puede entrar a la pagina
    if (usernameSesion === "" || usernameSesion === undefined) {
        history.push("/signin");
    }

    const [likes, setLikes] = useState([]);
    const [followers, setFollowers] = useState([]);

    const fetchApi = async () => {
        const likes = await apiAxios.get("http://localhost:8080/likes", {
            params: { username: usernameSesion },
        });
        setLikes(likes.data);

        const followers = await apiAxios.get(
            "http://localhost:8080/getFollowers",
            {
                params: { username: usernameSesion },
            }
        );
        setFollowers(followers.data);
    };

    useEffect(() => {
        fetchApi();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    console.log("Followers");
    console.log(followers);
    console.log("Likes");
    console.log(likes);

    return (
        <div className={classes.root}>
            <Container maxWidth="md">
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <h1 className={classes.paper}>lista notis</h1>
                    </Grid>
                    <Grid item xs={6}>
						{followers === undefined || followers.length === 0 ? (
							<p>No hay notificaciones nuevas</p>
						) : (
							followers.map((follower) => (
								<div>{follower.username} te siguio</div>
							))
						)}
                    </Grid>
                    <Grid item xs={6}>
						{likes === undefined || likes.length === 0 ? (
							<p>No hay notificaciones nuevas</p>
						) : (
							likes.map((like) => (
								<div>{like.userLike.username} te dio like en el post "{like.post.title}"</div>
							))
						)}
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Notificaciones;