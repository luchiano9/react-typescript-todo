import { HttpClient } from './http/HttpClient'

export const fetchTasks = async (): Promise<any> => {

    const httpClient = HttpClient.getInstance();

    try {
        const response = await httpClient.get('/todos');
        return response;
    } catch (error) {
        throw new Error('error')
    }
};