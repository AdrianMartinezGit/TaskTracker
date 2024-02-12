const SaveTaskToLocalStorage = (task) => {
    let tasklist = getLocalStorage();

    if (!tasklist.includes(task)) {
        tasklist.push(task);
    }

    localStorage.setItem("TaskList", JSON.stringify(tasklist));
}

const getLocalStorage = () => {
    let localStorageData = localStorage.getItem("TaskList");

    if (localStorageData == null){
        return [];
    }

    return JSON.parse(localStorageData);
}

const RemoveTaskFromLocalStorage = (task) => {
    let tasklist = getlocalStorage();

    let namedIndex = tasklist.indexOf(task);

    tasklist.splice(namedIndex, 1);

    localStorage.setItem("TaskList", JSON.stringify(tasklist))
}

export { SaveTaskToLocalStorage, getLocalStorage, RemoveTaskFromLocalStorage }