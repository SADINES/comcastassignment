import {createStore,applyMiddleware} from 'redux';
import reducer from '../reducer/reducer';
import ThunkMiddleware from 'redux-thunk';
import axios from 'axios';
import {getMusicList} from '../actions/action';


function configureStore(state={musiclist:[],likedAlbums:[],InitialList:[]}){
    return createStore(reducer,state,applyMiddleware(ThunkMiddleware));
}

export function fetchMusicList(){
    return  function(dispatch){
        axios.get("https://itunes.apple.com/us/rss/topalbums/limit=100/json").then((res)=>{
        dispatch(getMusicList(res.data));
        }).catch((err)=>{
            console.log(err);
        })
    }
}

export default configureStore;