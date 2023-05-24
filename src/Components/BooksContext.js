//store context for book list

import { createContext, useContext, useReducer } from 'react';
import '../App.css';

const BooksContext = createContext(null);

const BooksDispatchContext = createContext(null);

export function BooksProvider({ children }) {
  const [books, dispatch] = useReducer(
    booksReducer,
    initialBooks
  );

  return (
    <BooksContext.Provider value={books}>
      <BooksDispatchContext.Provider value={dispatch}>
        {children}
      </BooksDispatchContext.Provider>
    </BooksContext.Provider>
  );
}

export function useTasks() {
  return useContext(BooksContext);
}

export function useBooksDispatch() {
  return useContext(BooksDispatchContext);
}

function booksReducer(books, action) {
  switch (action.type) {
    case 'added': {
      return [...books, {
        id: action.id,
        title: action.title,
        gutenID: action.gutenID,
        author: action.author,

      }];
    }

    case 'deleted': {
      return books.filter(t => t.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

let initialBooks = [
  { id: 0, title: 'Default Book', author: 'Default Author', gutenID: 0},
];
