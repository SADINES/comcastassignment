import React ,{useEffect} from 'react';
import {fetchMusicList} from '../store/configureStore';
import {useDispatch,useSelector} from 'react-redux';
import './musiclistcomponent.css';
import 'react-toastify/dist/ReactToastify.min.css'
import Music from '../musiccomponent/musiccomponent';


function MusicList(){

    const dispatch = useDispatch();
    const musicList = useSelector((state)=> state.musiclist);

    useEffect(()=>{
        dispatch(fetchMusicList());
    },[dispatch])

    return (<div className="grid">
        <Music musiclist={musicList}/>
    </div>)

}

export default MusicList;