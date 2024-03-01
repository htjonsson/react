import { useEffect, useState, useCallback } from "react";
import axios from "axios";

{ /* https://blog.openreplay.com/integrating-axios-with-react-hooks/ */ }

const useAxiosGet = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState("");
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(url);
                setData(response.data);
            }
            catch (error) {
                setError(error.message);
            }
            finally {
                setLoaded(true);
            }
        })();
    }, []);

    return { data, error, loaded };
};

{/* https://stackoverflow.com/questions/74317726/react-hook-for-a-post-call-onclick */}

const useGetAction = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState("");
    const [loaded, setLoaded] = useState(false);    

    const getAction = useCallback(async (url) => {
        try {
            const response = await axios.get(url);
            setData(response.data);
        }
        catch (error) {
            setError(error.message);
        }
        finally {
            setLoaded(true);
        }
    }, []);

    return {getAction, data, error, loaded};
}

const usePostAction = (url, payload) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState("");
    const [loaded, setLoaded] = useState(false);    

    const postAction = useCallback(async (url) => {
        try {
            debugger;
            const response = await axios.post(url, payload);
            setData(response.data);
        }
        catch (error) {
            setError(error.message);
        }
        finally {
            setLoaded(true);
        }
    }, []);

    return {postAction, data, error, loaded};
}

const usePutAction = (url, payload) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState("");
    const [loaded, setLoaded] = useState(false);    

    const putAction = useCallback(async (url) => {
        try {
            debugger;
            const response = await axios.put(url, payload);
            setData(response.data);
        }
        catch (error) {
            setError(error.message);
        }
        finally {
            setLoaded(true);
        }
    }, []);

    return {putAction, data, error, loaded};
}

const useDeleteAction = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState("");
    const [loaded, setLoaded] = useState(false);    

    const deleteAction = useCallback(async (url) => {
        try {
            debugger;
            const response = await axios.delete(url);
            setData(response.data);
        }
        catch (error) {
            setError(error.message);
        }
        finally {
            setLoaded(true);
        }
    }, []);

    return {deleteAction, data, error, loaded};
}

export { useAxiosGet, useGetAction, usePostAction, usePutAction, useDeleteAction }