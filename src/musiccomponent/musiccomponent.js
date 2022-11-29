import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { useDispatch } from 'react-redux';
import { addLikedItems } from '../actions/action';
import '../musiclistcomponent/musiclistcomponent.css';


function Music({ musiclist }) {
    const dispatch = useDispatch();
    let objectToAdd = [];

    function notify(e) {

        e.stopPropagation();

        toast(`${e.currentTarget.getAttribute("albumname")} is added to liked albums`, {
            position: "top-center",
            autoClose: 500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });

        dispatch(addLikedItems(objectToAdd.find(x => x.id === +e.currentTarget.getAttribute('id'))));
    }


    function openNewTabSongsForAlbum(e) {
        window.open(e.currentTarget.getAttribute("href"), "_blank");
    }

    return (<>
        {musiclist?.feed?.entry.map((musicEntryObj, index) => {

            objectToAdd = [...objectToAdd, { id: index, musicObj: musicEntryObj }];

            return (<div className="wrapper">
                <div onClick={(e) => { openNewTabSongsForAlbum(e) }} className="card" href={musicEntryObj["im:image"][2].label}>
                    <img src={musicEntryObj["im:image"][2].label} />
                    <div className="innerDiv">
                        <span><b>Album Name:</b> {musicEntryObj["im:artist"].label}
                        </span>
                        <span className="name">
                            <b>Album Decription:</b>{musicEntryObj["im:name"].label}
                        </span>
                        <div>
                            <span>{musicEntryObj["im:price"].label}</span>
                            <span musicobj ={{ image: musicEntryObj["im:image"][2].label,
                        album: musicEntryObj["im:artist"].label,description:musicEntryObj["im:name"].label }} 
                        albumname={musicEntryObj["im:artist"].label}
                        id={index}
                        onClick ={(e)=>{notify(e)}}
                        >
                            <i className="fa-solid fa-bookmark"></i>
                            </span>
                            </div>
                    </div>
                </div>
            </div>)

        })}
    </>)
}

export default Music;