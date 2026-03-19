import fs from "fs"

import path from "path"
import { IaModel } from "../models/ia-model";

const pathData = path.join(__dirname, "../repositories/ias.json");

export const repoIACategory = async (
    categories?: string
): Promise<IaModel[]> => {
    
    const language = "utf-8";

    const rawData = fs.readFileSync(pathData, language);
    let jsonFile = JSON.parse(rawData);

    if(categories) {
        jsonFile = jsonFile.filter((IA: IaModel) => IA.categories.some((category: string) => category.toLowerCase() === categories.toLocaleLowerCase())
    );
    }

    return jsonFile;
}