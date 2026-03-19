import { TransferIaModel } from "../models/transfer-ia-model";
import { repoIACategory } from "../repositories/ias-category";
import { StatusCode } from "../utils/status-code";



export const serviceFilterIAsByCategory = async (
    category: string | undefined
): Promise<TransferIaModel> => {

    console.log(category);

    const queryString = category?.split("?c=")[1] || ""
    const data = await repoIACategory(queryString);

    console.log(queryString);

    let responseFormat: TransferIaModel = {
        statusCode : 0,
        body:[],
    }

    responseFormat.statusCode =
        data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT;

    responseFormat.body = data;

    return responseFormat;
}