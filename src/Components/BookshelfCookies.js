import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {CookiesProvider} from 'react-cookie';
import { useCookies } from 'react-cookie';

import App from '../App';

export const CookieApp = () => {
    const [name, setName] = useState('');
    const [bookshelfName, setBookshelfName] = useState('');
    const [bookshelfList, setBookshelfList] = useState([]);
    const [cookies, setCookie] = useCookies(['user']);

        const handle = () => {
            setCookie('Name', name, {path: '/'});
            setCookie('BookshelfList', bookshelfList, {path: '/'});
            setCookie('BookshelfName', bookshelfName, {path: '/'});
            refreshPage();
        };
        function refreshPage() {
            window.location.reload(false);
        }



    return(
        <div className ="Cookies App">

            <h3> Name of Bookshelf Owner: </h3>
            <input
                placeholder = "Your Name"
                value = {name}
                onChange = {(e) => setName (e.target.value)}
                />

            <h3> Name of Bookshelf: </h3>
            <input
                placeholder = "Your Bookshelf's Name"
                value = {bookshelfName}
                onChange = {(e)=> setBookshelfName(e.target.value)}
            />
        
             <div>
            <button onClick={handle}>Set User Information</button>

            </div>
            Hello, <i>{cookies.Name}</i>!
            Accessing the <i>{cookies.BookshelfName} </i>bookshelf...
        </div>
        
    );
};