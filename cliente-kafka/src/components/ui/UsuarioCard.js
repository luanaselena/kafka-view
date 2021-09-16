import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function UsuarioCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
          Usuario
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Nombre
        </Typography>
        <Typography variant="body2" component="p">
          x Seguidores <br/>
          x Posts
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Seguir</Button>
      </CardActions>
    </Card>
  );
}
