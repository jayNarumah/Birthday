import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";     
import { environment } from "src/environments/environment"; 
import { AddUserResources } from "../models/resources/add-user.model";

@Injectable({
    providedIn: 'root',
})
export class UserEndPoint {
     
    baseUrl = `${environment.apiUrl}api/user`;

    constructor(private readonly httpClient: HttpClient) {}

    list() {
        return this.httpClient.get< AddUserResources[] >(`${this.baseUrl}`);
    }

    single(id: number) {
        return this.httpClient.get<{ data: AddUserResources }>(`${this.baseUrl}/${id}`);
    }

    create(data) {
        return this.httpClient.post<{ data: AddUserResources }>(`${this.baseUrl}`, data);
    }
       
    delete(id: number) {
        return this.httpClient.delete<void>(`${this.baseUrl}/${id}`);
    }

    update(id: number, data) {
        return this.httpClient.put<{ data: AddUserResources }>(`${this.baseUrl}/${id}`, data);
    }
}