const baseUrl = 'http://localhost:3030/jsonstore/games';
import { request } from "../lib/request";


export const getAll = async () => {
    const result = await request('GET', baseUrl);

    return Object.values(result);
};


export const create = async (gameData) => {

    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(gameData)         // правим обекта на стринг
    });

    const result = await response.json();

    // console.log(result);

    return result;
};


