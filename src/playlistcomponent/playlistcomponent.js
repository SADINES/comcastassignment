import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './playlistcomponent.css';


function PlayList() {

    const likedAlbums = useSelector((state) => state.likedAlbums);
    useEffect(() => {
    }, [likedAlbums]);


    function openNewTabSongsForAlbum(e) {
        window.open(e.currentTarget.getAttribute("href"), "_blank");
    }

    return (<div className="grid">
        {likedAlbums?.map((albumObj, index) => {

            return (<div className="wrapper">
                <div onClick={(e) => { openNewTabSongsForAlbum(e) }} className="card" href={albumObj["musicObj"]["id"].label}>
                    <img src={albumObj["musicObj"]["im:image"][2].label} className="imgcontainer"/>
                    <div className="innerDiv">
                        <span><b>Album Name:</b> {albumObj["musicObj"]["im:artist"].label}
                        </span>
                        <span className="name">
                            <b>Album Decription:</b>{albumObj["musicObj"]["im:name"].label}
                        </span>
                        <div>
                            <span>{albumObj["musicObj"]["im:price"].label}</span>
                            <span musicobj ={{ image: albumObj["musicObj"]["im:image"][2].label,
                        album: ["im:artist"].label,description:albumObj["musicObj"]["im:name"].label }} 
                        albumname={albumObj["musicObj"]["im:artist"].label}
                        id={index}
                        
                        >
                            <i className="fa-solid fa-bookmark"></i>
                            </span>
                            </div>
                    </div>
                </div>
            </div>)

        })}
    </div>)

}

export default PlayList;