import React from 'react'
import { Link, Outlet}  from "react-router-dom";
import {
  Checkbox,
  Grid,
  Icon,
  Menu, Header,

  Segment,
  Sidebar,
  Container,
} from 'semantic-ui-react'


export const PopoutListComponent = ({PopoutInfo}) => {
  const [visible, setVisible] = React.useState(false)

  return (
    //toggle is in it's own column above the nav
    <Grid container className = "PopoutNav" columns={1}>
      <Grid.Column className = "PopoutColumn">
        <Checkbox className = "SidebarToggle"
          checked={visible}
          label={{ children: <Icon name = "chevron left" size = "small" className="SidebarToggleIcon"><h1>Open <br></br>Bookshelf</h1></Icon>}}
          onChange={(e, data) => setVisible(data.checked)}
        />
        <Sidebar.Pushable  className = "SideBookshelfSidebar" as={Container}>
          <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            onHide={() => setVisible(false)}
            vertical
            direction = 'right'
            visible={visible}
            width='wide'
            className = "PopoutSidebarClass"
          >
            <Header textAlign="center"><h1>Current Bookshelf </h1></Header>
   
            {PopoutInfo}
         
          </Sidebar>
          <Sidebar.Pusher>
         <Container className = "PusherPopout">{PopoutInfo}
         </Container>
           </Sidebar.Pusher>
          </Sidebar.Pushable>

      </Grid.Column>
    </Grid>
  )
}

export default PopoutListComponent