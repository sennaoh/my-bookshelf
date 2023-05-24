import { BooksProvider } from '../BooksContext';
import {TaskList} from '../BooksList';
import { Container, Grid, Header, Menu, Segment } from 'semantic-ui-react'
import {SearchLibrary} from '../SearchLibrary';
import {PopoutListComponent} from '../PopOutList';




export const BookshelfExport = ()=>{
        return(
          
            <Container className = "BookshelfExportContainer">
              
             <Segment className = "PageHeader"> <h1>Welcome to the Bookshelf!</h1>
              <br></br>
            
              Fill your bookshelf with books! Pulled from Gutenberg API
              with frontend using semantic-ui. A "Todo" written in React.
              


              </Segment>
            <BooksProvider>    
              
           <Grid columns = {1}>
  
          <Grid.Column width = {11}>
          { <div className = "BookshelfContainer">   
          <Container>
          
         { /*<PopoutListComponent PopoutInfo ={ <TaskList/> }/>*/}

          { /*<TaskList/>*/}
          <PopoutListComponent PopoutInfo ={ <TaskList/> }/>
           </Container>
           </div>}
          <div className = "LibrarySearchContainer">
            <Container> 
            <Header floated="right"><h1>Bookshelf </h1></Header>   
            <SearchLibrary/>    
            </Container>
            </div>     
          </Grid.Column>
     
           </Grid>

             {/*Current Bookshelf list */}
        

        </BooksProvider>   
        </Container>
    
          )
        }
        
        export default BookshelfExport