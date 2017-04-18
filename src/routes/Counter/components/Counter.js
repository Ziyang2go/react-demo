import React, { Component } from 'react'
import PropTypes from 'prop-types'
import sushi1 from '../../Home/assets/sushi1.jpg';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header, Item,  Label} from 'semantic-ui-react'

const visible = Window.innerWidth > 1000 || screen.width > 1000;
class Counter extends Component {
  state = { visible: visible };

  renderItems = function(menu) {
    var items = [];
    for(var i = 0;i <15; i++) {
      items.push((
      <Item>
        <Item.Image size='small' src={sushi1} />

        <Item.Content>
          <Item.Header as='a'>{'Item' + i}</Item.Header>
          <div style={{float:'right'}}>
            <Button.Group>
              <Button icon='plus' onClick={this.addItem} />
              <Label size='medium'>0</Label>
              <Button icon='minus' onClick={this.removeItem} />
            </Button.Group>
          </div>
          <Item.Meta>this is {'item' +i } description</Item.Meta>
          <Item.Extra>$7.99</Item.Extra>
        </Item.Content>
      </Item>
      ));
    }
    return items;
  }

  render() {
    const { visible, menu } = this.state;
    const items = this.renderItems(menu);
    return (
      <div>
        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation='slide along' width='thin' visible={visible} icon='labeled' vertical inverted>
            <Menu.Item name='food'>
              <Icon name='food' />
              Food
            </Menu.Item>
            <Menu.Item name='gamepad'>
              <Icon name='coffee' />
              Drink
            </Menu.Item>
            <Menu.Item name='bar'>
              <Icon name='bar' />
              Beer
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            <Segment>
              <div>
                <Item.Group>
                  { items }
                </Item.Group>
              </div>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}

/*export default SidebarLeftPush
)

Counter.propTypes = {
  counter     : PropTypes.number.isRequired,
  doubleAsync : PropTypes.func.isRequired,
  increment   : PropTypes.func.isRequired
}
*/
export default Counter
