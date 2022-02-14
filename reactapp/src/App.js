import './App.css';
import Album from './Components/album';
import Eloado from './Components/Eloado/eloado';
import Szam from './Components/Szam/szam';
import {Route, Switch} from 'react-router-dom';
import Header from './Components/Header';
import AlbumInsert from './Components/AlbumInsert';
import AlbumUpdate from './Components/AlbumUpdate';
import UpdateEloado from './Components/Eloado/UpdateEloado';
import InsertEloado from './Components/Eloado/InsertEloado';
import UpdateSzam from './Components/Szam/UpdateSzam';
import InsertSzam from './Components/Szam/InsertSzam';

function App() {
  return(
    <div>
      <Header/>
      <Switch>
        <Route component = {Album} path='/album'/>
        <Route component = {Eloado} path='/Eloado/eloado'/>
        <Route component = {Szam} path='/Szam/szam'/>
        <Route component = {AlbumInsert} path='/InsertAlbum'></Route>
        <Route component = {AlbumUpdate} path='/UpdateAlbum/:id'></Route>
        <Route component = {InsertEloado} path='/InsertEloado'></Route>
        <Route component = {UpdateEloado} path='/UpdateEloado/:id'></Route>
        <Route component = {InsertSzam} path='/InsertSzam'></Route>
        <Route component = {UpdateSzam} path='/UpdateSzam/:id'></Route>
      </Switch>
    </div>
  );
}

export default App;
