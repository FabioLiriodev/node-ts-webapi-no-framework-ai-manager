import fs from "fs"

import path from "path"
import { IaModel } from "../models/ia-model";



const pathData = path.join(__dirname, "../repositories/ias.json");

export const repoIA = async (
    IAName?: string
): Promise<IaModel[]> => {
    
    const language = "utf-8";

    const rawData = fs.readFileSync(pathData, language);
    let jsonFile = JSON.parse(rawData);

    if(IAName) {
        jsonFile = jsonFile.filter((IA: IaModel) => IA.IAName === IAName);
    }

    return jsonFile;
}