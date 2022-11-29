import logo from './logo.svg';
import './App.css';
import Login from './logincomponent/logincomponent';
import Header from './headercomponent/headercomponent';
import MusicList from './musiclistcomponent/musiclistcomponent';
import PlayList from './playlistcomponent/playlistcomponent';
import { useAuth0 } from '@auth0/auth0-react';
import { Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import React from 'react';
import {ErrorFallback,myErrorHandler} from './errorfallbackcomponent/errorfallbackcomponent';

function App() {
  const { isLoading, isAuthenticated } = useAuth0();

  if (isLoading) return <div>...Loading</div>;

  if (isAuthenticated) {
    document.getElementById('bckImgDiv').style.display = "none";
    return <div>
      <Header></Header>
      <div>
        <Routes>
          <Route path="/playlist" exact element={<PlayList />} />
          <Route path="/fav" exact element={<MusicList />} />
          <Route path="/" exact element={<MusicList />} />
        </Routes>
        <ToastContainer/>
      </div>
    </div>;
  }

  return (
    <div>
      <Login />
    </div>
  );
}

export default connect() (App);
