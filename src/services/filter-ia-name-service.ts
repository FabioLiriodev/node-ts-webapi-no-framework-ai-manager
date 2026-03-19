import { TransferIaModel } from '../models/transfer-ia-model';
import { repoIA } from "../repositories/ias-repository"
import { StatusCode } from '../utils/status-code';



export const serviceFilterIAsByName = async (IAName: string | undefined): Promise<TransferIaModel> => {

    let responseFormat: TransferIaModel = {
        statusCode : 0,
        body:[],
    }

    const queryString = IAName?.split("?n=")[1] || ""
    const data = await repoIA(queryString);

    responseFormat.statusCode =
        data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT;
    
    responseFormat.body = data;

    return responseFormat;
}


