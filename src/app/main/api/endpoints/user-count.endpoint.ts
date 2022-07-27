import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core"; 
import { environment } from "src/environments/environment"; 
import { UserCountModel } from "../models/resources/count.model";

@Injectable({
    providedIn: 'root',
})
export class UserCountEndpoint {
    baseUrl = `${environment.apiUrl}api/user-count`;

    constructor(private readonly httpClient: HttpClient) {}

    list() {
        return this.httpClient.get<UserCountModel[] >(`${this.baseUrl}`);
    }

}