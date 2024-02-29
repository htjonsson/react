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
            debugger;
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

/*
const axiosGet2 = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState("");
    const [loaded, setLoaded] = useState(false);

    async () => {
        try {
            debugger;
            const response = await axios.get(url);
            setData(response.data);
        }
        catch (error) {
            setError(error.message);
        }
        finally {
            setLoaded(true);
        }
    };

    return { data, error, loaded };
};
*/

export { useAxiosGet, useGetAction }