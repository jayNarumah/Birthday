import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core"; 
import { environment } from "src/environments/environment"; 
import { AdminCountModel } from "../models/resources/count.model";

@Injectable({
    providedIn: 'root',
})
export class AdminCountEndpoint {
    baseUrl = `${environment.apiUrl}api/admin-count`;

    constructor(private readonly httpClient: HttpClient) {}

    list() {
        return this.httpClient.get<AdminCountModel[] >(`${this.baseUrl}`);
    }

}