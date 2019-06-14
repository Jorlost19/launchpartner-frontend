import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 320
  }
});

const UserCard = props => {
  const classes = useStyles();

  return (
    <Card style={{marginBottom: 40}}>
      <CardActionArea style={{width:'100%'}}>
        <CardMedia
          className={props.dashboard ? '' : classes.card}
          component="img"
          alt="Username Avatar"
          height="140"
          image="/pendent"
          title="User Avatar"
        />
        <CardContent className={classes.card}>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
          {props.dashboard && (
            <CardActions>
                <Button onClick={props.handleDialogOpen} size="small" color="primary">
                    Edit
                </Button>
            </CardActions>
          )}
      
    </Card>
  );
}

export default UserCard;