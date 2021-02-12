import  React from 'react'
import { Container } from 'semantic-ui-react'
import { Layout, Header, Navigation,CardTitle,Card,Button,CardText,CardActions,CardMenu,IconButton} from 'react-mdl';


class Biografi extends React.Component {
    render() {
        return(
            <div>
            <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Annyeong Chinggu</CardTitle>
   
             <CardText>
                Halo perkenalkan it's me Diva Maretta...
            </CardText>
            <CardActions border>
            <Button colored>Lebih lanjut</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
            </CardMenu>
            </Card>

         </div>
        );
    }
}

  export default Biografi;