import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core"; 
import { environment } from "src/environments/environment";  
import { AdminNameCountModel, UsersCountModel } from "../models/resources/count.model";

@Injectable({
    providedIn: 'root',
})
export class AdminNameCountEndpoint {
    baseUrl = `${environment.apiUrl}api/admin-profile`;

    constructor(private readonly httpClient: HttpClient) {}

    list() {
        return this.httpClient.get<AdminNameCountModel[] >(`${this.baseUrl}`);
    }

}