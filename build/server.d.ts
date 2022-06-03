import express from 'express';
declare class Server {
    app: express.Application;
    constructor();
    config(): Promise<void>;
    routes(): void;
    start(): void;
}
export { Server };
