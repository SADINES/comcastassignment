function reducer(state, action) {
    switch (action.type) {

        case "getMusicList":
            return {
                ...state,
                musiclist: action.payload,
                InitialList: action.payload
            };
        case "addLikedItems":
            return {
                ...state,
                likedAlbums: [...state.likedAlbums, action.payload]
            };
        case "filterAlbumItems":
            const changedInitialState = JSON.parse(JSON.stringify(state.InitialList));
            if (action.payload === "") {
                return {
                    ...state,
                    musiclist: changedInitialState,
                }
            } else {
                console.log(`action.payload ${action.payload}`);
                console.log(state.musiclist.feed.entry);
                const filteredAlbumList = state.InitialList.feed.entry.filter((musicObj) => {
                    return musicObj["im:name"].label.toLowerCase().includes(action.payload.toLowerCase());
                });
                console.log(filteredAlbumList);
                const finalList = JSON.parse(JSON.stringify(state.InitialList));
                finalList.feed.entry = filteredAlbumList;
                return {
                    ...state,
                    musiclist: finalList,
                }
            };
        default:
            return state;
    }
}

export default reducer;