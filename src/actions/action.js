export const getMusicList = (musiclist) => {
    return {
        type: "getMusicList",
        payload: musiclist,
    };

}
export const addLikedItems = (musicAlbum) => {
    return {
        type: "addLikedItems",
        payload: musicAlbum,
    };
}
export const filterAlbumItems = (filterText) => {
    return {
        type: "filterAlbumItems",
        payload: filterText,
    };
}