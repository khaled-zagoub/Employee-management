import { Employee } from "./Employee";

export class Content {
    status: string;
    data: any;
    message: string;

    constructor(
        status: string,
        data: any,
        message: string,
    ) {
        this.status = status;
        this.data = data;
        this.message = message;
    }   
}