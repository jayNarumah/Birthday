import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core"; 
import { environment } from "src/environments/environment";  
import { UsersCountModel } from "../models/resources/count.model";

@Injectable({
    providedIn: 'root',
})
export class UsersCountEndpoint {
    baseUrl = `${environment.apiUrl}api/users-count`;

    constructor(private readonly httpClient: HttpClient) {}

    list() {
        return this.httpClient.get<UsersCountModel[] >(`${this.baseUrl}`);
    }

}