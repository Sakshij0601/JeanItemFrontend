
import './App.css';
import Header from './Components/Header/Header';
import AddItem from './Components/AddItem/AddItem';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import UpdateItem from './Components/UpdateItem/UpdateItem';
import ViewItem from './Components/ViewItem/ViewItem';
import SearchBar from './Components/SearchItem/SearchBar';
import ItemcodeSearch from './Components/SearchItem/SearchbyItemcode';
import ItempriceSearch from './Components/SearchItem/SearchbyPriceRange';
import ItemstoreSearch from './Components/SearchItem/SearchbyStoreid';







function App() {
  return (
   
    <BrowserRouter>
    <Header>
    
    </Header>
    
      <Routes>
    
    
    <Route exat path="/view-item" Component={ViewItem} />
    <Route exat path="/add-item" Component={AddItem}/> 
    <Route exat path="/update-item" Component={UpdateItem}/>
    {/* <Route exat path="/search-item" Component={SearchBar}/> */}
    <Route exat path='/search-item/itemcode' Component={ItemcodeSearch}/>
    <Route exat path='/search-item/itemname' Component={SearchBar}/>
    <Route exat path='/search-item/price' Component={ItempriceSearch}/>
    <Route exat path='/search-item/storeid' Component={ItemstoreSearch}/>
    </Routes>
    </BrowserRouter>
    
    
    
  );
}

export default App;
