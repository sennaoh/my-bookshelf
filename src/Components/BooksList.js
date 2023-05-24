import { useState } from 'react';
import { useTasks, useBooksDispatch } from './BooksContext.js';
import '../App.css';
import { Card, Button, Item, Icon, Label} from 'semantic-ui-react';


// current book list 
export  function TaskList() {
  const tasks = useTasks();
  return ( 
    <ul>
      {tasks.map(task => ( task.id !=0 &&
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
}

function Task({ task: bookName }) {

  const dispatch = useBooksDispatch();
  let bookContent;

  bookContent = (
    <>
    {bookName.title} by {bookName.author}
    </>
  )
  return ( 
      <Item.Group className="CardItems" unstackable>
      <Item>
      <Item.Content verticalAlign = 'middle'>
      <Item.Header> {bookName.title} </Item.Header>
      <Item.Description>{bookName.author}</Item.Description>
      <Item.Meta>{bookName.gutenID}</Item.Meta>
      <Item.Extra>
        <Button animated onClick={() => {
        dispatch({
          type: 'deleted',
          id: bookName.id
        });
      }}>
        
        <Button.Content visible>Delete</Button.Content>
         <Button.Content hidden> <Icon name = 'trash'/></Button.Content>
        </Button>
      </Item.Extra>   
        </Item.Content>
      </Item>
      </Item.Group>

   
  );
}


