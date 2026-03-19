import { IncomingMessage, ServerResponse } from 'http'

import { serviceListIas } from "../services/list-ia-service"
import { serviceFilterIAsByName } from '../services/filter-ia-name-service';
import { serviceFilterIAsByCategory } from '../services/filter-ia-category-service';
import { StatusCode } from '../utils/status-code';
import { ContentType } from '../utils/content-type';
import { TransferIaModel } from '../models/transfer-ia-model';


const defaultContent = { "content-type": ContentType.JSON };

export const getListIAs = async (request: IncomingMessage, response: ServerResponse) => {


    const content = await serviceListIas()

    response.writeHead(StatusCode.OK, defaultContent);
    response.write(JSON.stringify(content.body));

    response.end();
};

export const getFilterIAs = async (
    request: IncomingMessage, 
    response: ServerResponse
) => {
    
    const content: TransferIaModel = await serviceFilterIAsByName(request.url);

    response.writeHead(content.statusCode, defaultContent);
    response.write(JSON.stringify(content.body));

    response.end()
}

export const getFilterIasCategory = async (
    request: IncomingMessage,
    response: ServerResponse
) => {

    const content: TransferIaModel = await serviceFilterIAsByCategory(request.url);

    response.writeHead(content.statusCode, { 'content-type': ContentType.JSON});
    response.write(JSON.stringify(content.body));

    response.end()
}