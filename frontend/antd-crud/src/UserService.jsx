import axios from "./http-common";

const getAll = () => {
    return axios.get("/randomusers?_start=20&_limit=12");
};

const get = id => {
    return axios.get(`/tutorials/${id}`);
};

const create = data => {
    return axios.post("/tutorials", data);
};

const update = (id, data) => {
    return axios.put(`/tutorials/${id}`, data);
};

const remove = id => {
    return axios.delete(`/tutorials/${id}`);
};

const removeAll = () => {
    return axios.delete(`/tutorials`);
};

const findByTitle = title => {
    return axios.get(`/tutorials?title=${title}`);
};

const UserService = {
    getAll,
    get,
    create,
    update,
    remove,
    removeAll,
    findByTitle
};

export default UserService;