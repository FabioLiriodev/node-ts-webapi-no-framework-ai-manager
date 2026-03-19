import * as http from "http";

import {getFilterIAs, getFilterIasCategory, getListIAs} from "./controllers/ia-controller"
import { Routes } from "./routes/routes";
import { HttpMethod } from './utils/http-methods';
import { TransferIaModel } from "./models/transfer-ia-model";



export const app = async (request: http.IncomingMessage, response: http.ServerResponse) => {

        const baseUrl = request.url?.split("?")[0]
    
        if(request.method === HttpMethod.GET && baseUrl === Routes.LIST) {
        await getListIAs(request, response)
    } 
        if(request.method === HttpMethod.GET && baseUrl === Routes.IANAME) {
         await getFilterIAs(request, response);   
        } 
        if(request.method === HttpMethod.GET && baseUrl === Routes.CATEGORY) {
         await getFilterIasCategory(request, response);           
} 
}