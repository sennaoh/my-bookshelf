// text for homepage
import {
    Container,
    Segment,
 
  } from 'semantic-ui-react'
  
export const HomepageText = ()=>{
return(
<Container className = "HomepageTextExport">
      

   <Container>
      
<Segment className = "PageHeader"> <h1>Home</h1> <br></br>
    Welcome to my Projects! <br></br>
    <i>My Bookshelf:</i> A "Todo" app that pulls from the Gutenberg API,
       searching author or title, and allowing you to add it to your 'Bookshelf', 
     a local list built into the app, where you can add and remove 
     however many books as you'd like
   
    </Segment>
     
    </Container>

     
    </Container>
  )
}

export default HomepageText