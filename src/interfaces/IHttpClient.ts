export interface IHttpClient {
    createUrl(url: string): string;
    get(url: string): Promise<any>;
    post(url: string, body: any): Promise<any>;
    put(url: string, body: any): Promise<any>;
    delete(url: string): Promise<any>;
}