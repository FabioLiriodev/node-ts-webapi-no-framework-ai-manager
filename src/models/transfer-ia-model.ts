import { IaModel } from './ia-model';

export interface TransferIaModel {
    statusCode: number;
    body: IaModel[];
}