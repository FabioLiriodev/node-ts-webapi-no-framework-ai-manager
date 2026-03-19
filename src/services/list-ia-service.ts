import { TransferIaModel } from "../models/transfer-ia-model";
import { repoIA } from "../repositories/ias-repository";
import { StatusCode } from "../utils/status-code";



export const serviceListIas = async ()=> {

     let responseFormat: TransferIaModel = {
            statusCode : 0,
            body:[],
        }

    const data = await repoIA();

    if(data.length !== 0) {
            responseFormat.statusCode = StatusCode.OK;
        } else {
            responseFormat.statusCode = StatusCode.NO_CONTENT;
        }
        
        responseFormat.body = data;
    
        return responseFormat;
};