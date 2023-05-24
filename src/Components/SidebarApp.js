import React from 'react'
import { Link, Outlet}  from "react-router-dom";
import {
  Checkbox,
  Grid,
  Icon,
  Menu,
  Segment,
  Sidebar,
  Container,
} from 'semantic-ui-react'


export const SidebarComponent = ({SegmentInfo}) => {
  const [visible, setVisible] = React.useState(false)

  return (
    //toggle is in it's own column above the nav
    <Grid container className = "MenuHorizontalNav" columns={1}>
      <Grid.Column>
        <Checkbox className = "MenuToggle"
          checked={visible}
          label={{ children: <Icon name = "plus" size = "big" className="MenuIconReg"/>}}
          onChange={(e, data) => setVisible(data.checked)}
        />
      </Grid.Column>

      <Grid.Column>
        <Sidebar.Pushable  className = "SidebarContent" as={Segment}>
          <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            onHide={() => setVisible(false)}
            horizontal
            direction = 'top'
            visible={visible}
            width='thin'
          >
            {/* Links using router */}
            <Link to="/">
            <Menu.Item className="MenuItem" as='a' link='/'>
              <Icon  name='home' />
              Home
            </Menu.Item> </Link>

            <Link to="/my-books">
            <Menu.Item className="MenuItem" as='a'>
              <Icon name='book' />   
              My Bookshelf
            </Menu.Item></Link>

            <Link to="/about">
            <Menu.Item className="MenuItem" as='a'>
              <Icon name='user outline' />
              About
            </Menu.Item></Link>

          </Sidebar>
          <Sidebar.Pusher>
         
            <Container className = "PagewideContainer">
            {SegmentInfo}
           </Container>
           </Sidebar.Pusher>
          </Sidebar.Pushable>

      </Grid.Column>
    </Grid>
  )
}

export default SidebarComponent