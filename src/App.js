import './App.css';
import { BooksProvider } from './Components/BooksContext';
import { SidebarComponent} from './Components/SidebarApp';
import {HomepageText} from './Components/Pages/HomepageExport';
import {BookshelfExport} from './Components/Pages/BookshelfExport';
import {AboutPageExport} from './Components/Pages/AboutPageExport';



function Home() {
  return( 
    <div className = "NavMenuContainer">
      <SidebarComponent SegmentInfo={<HomepageText/>}/>   
    </div>);
}

export function BookLibrary() {
  return( 
    <div className = "NavMenuContainer">
    <BooksProvider>
    <SidebarComponent SegmentInfo={<BookshelfExport/>}/>
    </BooksProvider>
    </div>
    )
}

export function About(){
  return(

    <div className = "NavMenuContainer">
      <SidebarComponent SegmentInfo={<AboutPageExport/>}/>   
    </div>
  )
}


export function App() {
  return <Home />;
}