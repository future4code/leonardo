import axios, { AxiosResponse } from "axios";
const firstId = process.argv[4];
const secondId = process.argv[5];
const thirdId = process.argv[6];


const doRequest = async ():Promise<void> => {
    try{
      const firstResp:AxiosResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts/${firstId}`, )
      const secondResp:AxiosResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts/${secondId}`)
      const thirdEesp:AxiosResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts/${thirdId}`)
      console.log('primeiro',firstResp.data.id);
      console.log('segundo',secondResp.data.id);
      console.log('terceiro',thirdEesp.data.id);
    } catch(error) {
      console.error(error);
    }
  };
  doRequest()