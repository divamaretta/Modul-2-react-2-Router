import React from 'react'
import { List, Segment } from 'semantic-ui-react'
                


class Karya extends React.Component {
    render() {
        return(
            <div>
                <Segment inverted>
    <List divided inverted relaxed>
      <List.Item>
      <List.Icon name='github' size='large' verticalAlign='middle' />
      <List.Content>
        <List.Header as='a'>INHERITANCE</List.Header>
        <List.Description as='a'>Updated 10 year ago</List.Description>
        <a href='https://github.com/divamaretta/INHERITANCE'>click me</a>
      </List.Content>
      </List.Item>
      <List.Item>
      <List.Icon name='github' size='large' verticalAlign='middle' />
      <List.Content>
        <List.Header as='a'>CSS-Responsive</List.Header>
        <List.Description as='a'>Updated 5 year ago</List.Description>
        <a href='https://github.com/divamaretta/CSS-Responsive'>click me</a>
      </List.Content>
      </List.Item>
      <List.Item>
      <List.Icon name='github' size='large' verticalAlign='middle' />
      <List.Content>
        <List.Header as='a'>PHP</List.Header>
        <List.Description as='a'>Updated 10 mins ago</List.Description>
        <a href='https://github.com/divamaretta/PHP-1'>click me</a>
      </List.Content>
      </List.Item>
      <List.Item>
      <List.Icon name='github' size='large' verticalAlign='middle' />
      <List.Content>
        <List.Header as='a'>NODE.JS</List.Header>
        <List.Description as='a'>Updated 10 mins ago</List.Description>
        <a href='https://github.com/divamaretta/Dasar-NODEJS'>click me</a>
      </List.Content>
      </List.Item>
    </List>
  </Segment>
            
            </div>
        )
    }
}

export default Karya;