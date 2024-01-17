const init = () => {
    const data = [
        {
            id: 1,
            name: "John",
            email: "john@table.com",
            address: "John Address",
        },
        {
            id: 2,
            name: "David",
            email: "david@table.com",
            address: "David Address",
        },
        {
            id: 3,
            name: "James",
            email: "james@table.com",
            address: "James Address",
        },
        {
            id: 4,
            name: "Sam",
            email: "sam@table.com",
            address: "Sam Address",
        },
        {
            id: 5,
            name: "George",
            email: "george@table.com",
            address: "Georges Address",
        },
    ];
    
    if (localStorage.getItem('table') === null) {
        localStorage.setItem('table', JSON.stringify(data));
    }
}

const getAll = () => {
    return JSON.parse(localStorage.getItem('table'));
};

const get = id => {
    const index = data.findIndex((el) => el.id === id);
    if (index != -1) {
        return data[index];
    }
    return null;
};

const insert = record => {
    var data = JSON.parse(localStorage.getItem('table'));
    data.push(record);
    localStorage.setItem('table', JSON.stringify(data));
};

const update = (record) => {
    var data = JSON.parse(localStorage.getItem('table'));
    const index = data.findIndex((el) => el.id === record.id);
    if (index != -1) {
       data[index] = record;
       localStorage.setItem('table', JSON.stringify(data)); 
    }
};

const remove = record => {
    var data = JSON.parse(localStorage.getItem('table'));
    const index = data.findIndex((el) => el.id === record.id);
    if (index != -1) {
        data.splice(index, 1);
        localStorage.setItem('table', JSON.stringify(data));
    }
};

const removeAll = () => {
    localStorage.setItem('table', JSON.stringify([]));
};

const findByTitle = title => {

};

const tableService = {
    init,
    getAll,
    get,
    insert,
    update,
    remove,
    removeAll,
    findByTitle
};

export default tableService;