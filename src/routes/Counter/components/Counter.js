import React from 'react'
import PropTypes from 'prop-types'
import sushi1 from '../../Home/assets/sushi1.jpg';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header, Item,  Label} from 'semantic-ui-react'

const visible = Window.innerWidth > 1000 || screen.width > 1000;

export class Counter extends React.Component {
  state = { visible: visible }

  renderItems = function(menu) {
    var self = this;
    var menu = [{id:0},{id:1},{id:2},{id:3},{id:4}]
    const { counter } = this.props.counter;
    var items = [];
    menu.forEach(function(m){
      items.push((
      <Item>
        <Item.Image size='small' src={ sushi1 } />

        <Item.Content>
          <Item.Header as='a'>{'Item' + m.id}</Item.Header>
          <div style={{float:'right'}}>
            <Button.Group>
              <Button icon='plus' onClick={(ev)=>self.props.increment(m.id)} />
              <Label size='medium'>{counter[m.id]}</Label>
              <Button icon='minus' onClick={(ev)=>self.props.decrement(m.id)} />
            </Button.Group>
          </div>
          <Item.Meta>this is {'item' +m.id } description</Item.Meta>
          <Item.Extra>$7.99</Item.Extra>
        </Item.Content>
      </Item>
      ));
    });
    return items;
  }

  render() {
    const { visible, menu } = this.state;
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
                  { this.renderItems(menu) }
                </Item.Group>
              </div>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}


Counter.propTypes = {
  counter: PropTypes.object.isRequired,
  decrement : PropTypes.func.isRequired,
  increment   : PropTypes.func.isRequired
}

export default Counter
