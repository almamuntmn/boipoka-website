import { toast } from "react-toastify";

const getStoredReadList = () => {
    const storedlist = localStorage.getItem('readList');
    return storedlist ? JSON.parse(storedlist) : [];

}

const addtoStoredReadList = (id) => {
    const storedlist = getStoredReadList();
    if (storedlist.includes(id)) {
        return;
    }
    storedlist.push(id);
    localStorage.setItem('readList', JSON.stringify(storedlist));
    toast.success('Book marked as read!');
}

export { getStoredReadList, addtoStoredReadList };



const getStoredWishList = () => {
    const storedlist = localStorage.getItem('wishList');
    return storedlist ? JSON.parse(storedlist) : [];

}

const addtoStoredWishList = (id) => {
    const storedlist = getStoredWishList();
    if (storedlist.includes(id)) {
        return;
    }
    storedlist.push(id);
    localStorage.setItem('wishList', JSON.stringify(storedlist));
}

export { getStoredWishList, addtoStoredWishList };