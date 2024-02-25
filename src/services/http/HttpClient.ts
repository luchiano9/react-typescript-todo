import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { IHttpClient } from '../../interfaces/IHttpClient';

export class HttpClient implements IHttpClient {
    private static instance: HttpClient;
    private connection: AxiosInstance;
    private baseUrl: string = 'https://jsonplaceholder.typicode.com';

    private headers: Record<string, string> = {
        'Content-Type': 'application/json',
    };

    private constructor() {
        this.connection = axios.create({
            baseURL: this.baseUrl,
            timeout: 10000,
            headers: this.headers,
        })
    }

    public static getInstance(): HttpClient {
        if (!HttpClient.instance) {
            HttpClient.instance = new HttpClient();
        }
        return HttpClient.instance;
    }

    public createUrl(url: string): string {
        return `${this.baseUrl}${url}`;
    }

    private request = async (method: string, url: string, data?: any): Promise<any> => {
        const response: AxiosResponse = await this.connection.request({
            method,
            url: this.createUrl(url),
            data,
        });
        return response.data;
    }

    public async get(url: string): Promise<any> {
        return this.request('get', url);
    }

    public async post(url: string, body: any): Promise<any> {
        return this.request('post', url, body);
    }

    public async put(url: string, body: any): Promise<any> {
        return this.request('put', url, body);
    }

    public async delete(url: string): Promise<any> {
        return this.request('delete', url);
    }
}
