import  React from 'react'
import { Button, Icon } from 'semantic-ui-react'

class Kontak extends React.Component {
    render() {
        return(
            <div>
                <h2>
                bila rindu hubungi saya di..
                </h2>
                <Button color='facebook'>
                <Icon name='facebook' /> Facebook
                </Button>
                <Button color='twitter'>
                <Icon name='twitter' /> Twitter
                </Button>
                <Button positive>
                <Icon name='phone' /> WhatsApp
                </Button>
                <Button color='instagram'>
                <Icon name='instagram' /> Instagram
                </Button>
                <Button color='youtube'>
                <Icon name='youtube' /> YouTube
                </Button>
                
            </div>

        )
    }
}

export default Kontak;