import  React from 'react';
import { Layout, Header, Navigation,CardTitle,Card,Button,CardText,CardActions,CardMenu,IconButton} from 'react-mdl';

class Hobby extends React.Component {
    render(){
        return(
            <div>
            <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
    <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Update</CardTitle>
    <CardText>
        aku sangat suka menyanyi dan mendengarkan musik karena itu hobby saya ialah memasak dan melihat oppa-oppa
    </CardText>
    <CardActions border>
        <Button colored>Kepo?,pencet</Button>
    </CardActions>
</Card>
            </div>
        );
    }
}

export default Hobby;