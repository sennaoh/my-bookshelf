// text for homepage
import {
    Container,
    Segment,
    Image,
  } from 'semantic-ui-react';
import sennaImg from '../Images/sennaimg.png';



export const AboutPageExport = ()=>{


return(
<Container>
      
<Segment className = "PageHeader"> <h1>Hello!</h1> <br></br>
    my name is senna. <br></br>
    javascript and react developer <br></br>
    based in brooklyn, ny. <br></br>
    senna.oh@gmail.com 
    <Image
    src={sennaImg}
    size='medium' 
    centered />
    </Segment>
     
    </Container>
  )
}

export default AboutPageExport