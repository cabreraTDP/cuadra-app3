import axios from 'axios';
const URL = "https://cuadra-server-testing.herokuapp.com"

export const Post = async (url, body = {}, options = { withCredentials: true }) => {

  const config = {
    headers: { 'Content-Type': 'application/json',
                'Access-Control-Allow-Origin':'*'},
    ...options,
  };

  const bodyStr = JSON.stringify(body);

  try {
    console.log(URL)
    console.log(url)
    console.log(URL+url)
    const ruta = URL+url
    const resp = await axios.get(ruta, bodyStr, config);

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


