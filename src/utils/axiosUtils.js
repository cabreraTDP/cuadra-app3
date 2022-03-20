import axios from 'axios';
const URL = "http//localhost:7799/"

export const Post = async (url, body = {}, options = { withCredentials: true }) => {

  const config = {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  };

  const bodyStr = JSON.stringify(body);

  try {
    const resp = await axios.Post(URL + url, bodyStr, config);
    return resp;

  } catch (err) {
    console.error('WHAT ???', err);
    // Somehow these axios errors are a little different (than err.message being the error message!)
  }
  return null;
};

export const Get = async (url, body = {}, options = { withCredentials: true }) => {

    const config = {
      headers: { 'Content-Type': 'application/json' },
      ...options,
    };
  
    const bodyStr = JSON.stringify(body);
  
    try {
      const resp = await axios.Get(URL + url, bodyStr, config);
      return resp;
  
    } catch (err) {
      console.error('WHAT ???', err);
      // Somehow these axios errors are a little different (than err.message being the error message!)
    }
    return null;
  };

export const Delete = async (url, body = {}, options = { withCredentials: true }) => {

    const config = {
      headers: { 'Content-Type': 'application/json' },
      ...options,
    };
  
    const bodyStr = JSON.stringify(body);
  
    try {
      const resp = await axios.Delete(URL + url, bodyStr, config);
      return resp;
  
    } catch (err) {
      console.error('WHAT ???', err);
      // Somehow these axios errors are a little different (than err.message being the error message!)
    }
    return null;
  };


