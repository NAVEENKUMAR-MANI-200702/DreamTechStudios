import axios from "axios";

export let server_URL = "http://localhost:8081";

const URLS = {
    CreatingClient : `${server_URL}/api/client/newClient`,
    FetchingAllClient :  `${server_URL}/api/client/allClient`
}

const MakeApiCall = (config,doCancelRequest) => {
    try{
        const{CancelToken} = axios;
        config.method = config.method || "GET";
        config.headers = {
            Accept : "application/json",
        };
        config.withCredentials = true; 
        if(doCancelRequest !== undefined){
            config.CancelToken = new CancelToken(function executor(
                cancelHttpRequest
            ){
                doCancelRequest(cancelHttpRequest);
            });
        }

        return axios(config)
            .then((response) => {
                return response;
            })
            .catch((response) => {
                return response;
            });
    }catch(e){
        console.error(e);
    }
};


export default  MakeApiCall;
export  {MakeApiCall,URLS};