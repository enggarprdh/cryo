import axios from "axios";

let axionConfig = {};



export const apiServices = async (method, action, body) => {
	debugger   ; 
	let URL = import.meta.env.VITE_API_URL;
	axionConfig.method = method;
	axionConfig.url = `${URL}/${action}`;
	axionConfig.data = body;
	try {
		let response = await axios(axionConfig);
		return response;
	} catch (error) {
		console.error(error);
        return error
	}

}