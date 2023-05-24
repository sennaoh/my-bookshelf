// searches through API and returns results with 3 search parameters
import { useState, useEffect} from "react";
import '../App.css';
import axios from 'axios';
import React from 'react';
import AddBook from './AddBook.js';
import '../App.css';
import {Container, Segment, Button, Divider} from 'semantic-ui-react';


export  function SearchLibrary () {
    const [selectedSearch, setSearch] = useState(phraseOptions[0]);

    return (
      <div>
        <SelectSearchPhrase
        phraseOptions = {phraseOptions}
        selectedSearch = {selectedSearch}
        onSelect = {phraseOption => setSearch(phraseOption)}
        />
        <PhraseInputField 
        key ={selectedSearch.id}
        phraseOption={selectedSearch}/>
</div>
    )
  }


  //options
const phraseOptions = [
    {id: 0, phrase: 'Search Title ONLY', key: 'Title'},
    {id: 1, phrase: 'Search Author ONLY', key: 'Author'},
    {id: 2, phrase: 'Search in both Author & Title', key: 'Authors & Title'}
];


function SelectSearchPhrase({
    selectedSearch,
    phraseOptions,
    onSelect
  }) {
    return (
      
      <section className="SearchOptionSelection">
        <ul className = "SearchOptionBtns">
        <Button.Group widths='3'>
          <Button.Group/>
          {phraseOptions.map(phraseOption =>
            <li key={phraseOption.id}>
              <Button className = "SearchOptionBtnGroup" onClick={() => {
                onSelect(phraseOption);
              }}>
               <span class="selectionToggle">{phraseOption.key}</span>
              </Button>

            </li>
            
          )}</Button.Group>

        </ul>
        <div>
              
        </div>      

      </section>
    );
  }


  function PhraseInputField({ phraseOption }) {
    const [text, setText] = useState(''); //stores input text phrase
    const [thisData, setThisData] = useState('');  //stores axios end point
    

    
    return (
      <section className="InputSection">
        <input className = "SearchInputField"
          value ={text}
          placeholder={'searching in ' 
          + phraseOption.key + 's for...'}
          onChange={e => setText(e.target.value)}
          onKeyDown = {event => {
              if(event.key ==='Enter'){
                event.preventDefault();
                setThisData(StartSearch({text}));
              }
          }}
          
        />
        <br />
        
        <Button floated = "right" className = "SearchSubmit" onClick={()=>
        
        setThisData(StartSearch({text}))

        } type = "submit">      
          Search {phraseOption.key}s 
          </Button>    

          
         <div>
            <div className = "SearchResults">
              <br></br>
            <SearchTerm endPoint = {thisData}
                        searchPhrase = {phraseOption.phrase}
                        incomingSearch = {text}/>
          </div>
          </div>
      </section>
    );
  }
//child takes in search phrase and outputs axios end point

function StartSearch ({text}){

  const axiosEndPoint = "https://gutendex.com/books/?search="+`${text}`;
      return (axiosEndPoint);
}


  //takes in term and searches through api for single term
function SearchTerm({endPoint, searchPhrase, incomingSearch}){
    const [returnedCount, setReturnedCount] = useState(0);
    const [returnedResults, setReturnedResults] = useState([]);
    const [isFound, setFound] = useState();
  
    useEffect(()=>{
      console.log("Pulling request from API at " + `${endPoint}`) ;
      axios .get(endPoint)
          .then((response) =>{  
            setReturnedCount(response.data.count);
            setReturnedResults(response.data.results);
          //  console.log(Object.values(returnedResults));
          if(response.data.count == 0){
            setFound(false);
                  return(
                    console.log('no results...')
                  );
                }
                if(response.data.count > 0){
                  setFound(true);
                  return(console.log('results found!'));
                };       
          })
          .catch((err) =>{
            console.log(err);
            })                
            return (console.log("loading results...") )
            
          
    }, [endPoint]);
        if(isFound === false)
        {
          return (
            <div className = "BooksResultsDiv">
             <Segment className="NoResults">Sorry, nothing was found! Please try another search term.</Segment></div>
          )
        }    
    
      return (
        
                <div className = "ResultsContainer">                  
                  {returnedResults.map(({id, title, authors}) =>{                   

                      if (searchPhrase == "Search Title ONLY"){
                          if(title.toUpperCase().includes(incomingSearch.toUpperCase()))
                              {return(
                                <div className = "BooksResultsDiv">
                                  <Segment className="BookResults">
                                    {authors.map(({name, sIndex}) =>{
                                      return <span>
                                      
                                    Title: {title}
                                    <br></br>
                                    Gutenburg Book ID: {id} 
                                    <br></br>
                                    Author(s): {name} 
                                    <br></br>                     
                                    <AddBook addToBookshelf
                                    title = {title}
                                    gutenID = {id}
                                    author = {name}/>
                                   
                                   
                                    </span>;
                                    })}
                                  </Segment></div>
                              )};

                              
                        }   
                      if (searchPhrase == "Search Author ONLY"){                     
                          {return(
                            <div className = "BooksResultsDiv">
                            <Segment className="BookResults">
                              {authors.map(({name, sIndex}) =>{
                                if (name.toUpperCase().includes(incomingSearch.toUpperCase()))
                                return <span>
                                
                              Title: {title}
                              <br></br>
                              Gutenburg Book ID: {id} 
                              <br></br>
                              Author(s): {name}
                              <br></br>
                              <AddBook addToBookshelf
                                    title = {title}
                                    gutenID = {id}
                                    author = {name}/>
                              
                              </span>;
                              })}
                          </Segment></div>

                            )}
                      } 
                      
                      if (searchPhrase == "Search in both Author & Title"){
                        {return(
                          <div className = "BooksResultsDiv">
                            <Segment className="BookResults"> 
                            {authors.map(({name, sIndex}) =>{
                              return <span>
                              
                            Title: {title}
                            <br></br>
                            Gutenburg Book ID: {id} 
                            <br></br>
                            Author(s): {name}
                            <br></br>
                            <AddBook addToBookshelf
                                    title = {title}
                                    gutenID = {id}
                                    author = {name}/>
                              
                            </span>;
                            })}
                          </Segment></div>

                        )}
                  }
                 
                  
                }

                
            )}
     
                  </div>
          
 
        )  
  }
