import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const UserProfile = props => {

  return (
    <Card>
      <CardActionArea style={{width:'100%'}}>
        <CardMedia
          component="img"
          alt={props.name}
          height="140"
          image={props.avatar || ''}
          title="User Avatar"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
            <CardActions>
                <Button onClick={props.handleDialogOpen} size="small" color="primary">
                    Edit
                </Button>
            </CardActions>
    </Card>
  );
}

export default UserProfile;