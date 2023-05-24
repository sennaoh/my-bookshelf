import { useState, useEffect } from 'react';
import { useBooksDispatch as useBookDispatch } from './BooksContext.js';
import '../App.css';
import {Button, Icon} from 'semantic-ui-react';

export default function AddBook({title, gutenID, author}) {
  const [selectedTitle, setSelectedTitle] = useState('');
  const [selectedGutenID, setSelectedGutenID] = useState();
  const [selectedAuthor, setSelectedAuthor] = useState('');

  useEffect(()=>{
    setSelectedTitle(title);
    setSelectedGutenID(gutenID);
    setSelectedAuthor(author);
  }, [])
  const dispatch = useBookDispatch();
  
  return (
    <>
    


<Button animated floated= "right" onClick={() => {
        dispatch({
          type: 'added',
          id: nextId++,
          title: selectedTitle,
          gutenID: selectedGutenID,
          author: selectedAuthor
        });
      }}>
  <Button.Content visible>ADD</Button.Content>
  <Button.Content hidden> <Icon name = 'check'/></Button.Content>
  
 </Button>
    </>
   
  );
}

let nextId = 1;

