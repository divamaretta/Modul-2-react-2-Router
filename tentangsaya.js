import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

class TentangSaya extends React.Component {
    render(){
        return(
            <div>
                
                <Card>
                <Image src='' wrapped ui={false} />
                <Card.Content>
                <Card.Header>Diva Maretta</Card.Header>
                    <Card.Meta>
                <span className='date'>9 february 2021</span>
                    </Card.Meta>
                    <Card.Description>
                    Masih perlu banyak belajar
                </Card.Description>
                     </Card.Content>
                    <Card.Content extra>
                    <a>
                    <Icon name='user' />
                        pemain baru menuju menjadi bintang
                 </a>
                    </Card.Content>
                         </Card>
                         </div>
        );
    }
}

export default TentangSaya;