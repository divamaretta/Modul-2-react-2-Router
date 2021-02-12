import React from 'react'
import { Header, Icon, Image, Segment  } from 'semantic-ui-react'

class Beranda extends React.Component{

    
    render() {
          return(
            
        <div>
             <div>
                <Header as='h2' icon textAlign='center'>
                    <Icon name='home' circular color='blue' />
                 <Header.Content>Beranda</Header.Content>


                </Header>
                
             </div>
             <Segment>
             <Image
            src=''
            as='a'
            size='medium'
            />
                <p>
                hello word!, mari sekolah telkom belajar untuk menulis hello world
                </p>
                </Segment>
            </div>
            
        )
    }

}

export default Beranda;