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
}

export { getStoredReadList, addtoStoredReadList };