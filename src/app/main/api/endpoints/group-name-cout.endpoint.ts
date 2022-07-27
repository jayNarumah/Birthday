import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core"; 
import { environment } from "src/environments/environment";  
import { UsersCountModel } from "../models/resources/count.model";

@Injectable({
    providedIn: 'root',
})
export class GroupNameCountEndpoint {
    baseUrl = `${environment.apiUrl}api/admin-group`;

    constructor(private readonly httpClient: HttpClient) {}

    list() {
        return this.httpClient.get<UsersCountModel[] >(`${this.baseUrl}`);
    }

}