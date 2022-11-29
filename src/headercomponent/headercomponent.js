import React from 'react';
import './headercomponent.css';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { useDispatch } from 'react-redux';
import { filterAlbumItems } from '../actions/action';

function Header() {

    const { logout } = useAuth0();
    const handleSearchText = _.debounce(onSearchText, 500);
    const dispatch = useDispatch();

    function handleInputChange(event) {
        const input = event.target.value;
        handleSearchText(input);
    }

    function onSearchText(input) {
        dispatch(filterAlbumItems(input));
    }

    return (<div>
        <div class="topnav" id="myTopnav">
            <Link to="/" class="active">Home</Link>
            <Link to="/playlist">My Play List</Link>
            <Link to="/fav">Liked Albums</Link>
            <div class="dropdown">
                <div class="dropbtn">
             <form>
                        <input type="text" placeholder="Search By Albums" onChange={handleInputChange} />

                    </form>
                </div>
            </div>
            <a onClick={()=>{logout()}}>LogOut</a>
        </div>
    </div>)

}

export default Header;