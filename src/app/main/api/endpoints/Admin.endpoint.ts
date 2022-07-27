import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core"; 
import { environment } from "src/environments/environment";
import { AdminResources } from "../models/resources/admin.model"; 
import { UserAdminResources } from "../models/resources/userAdminResource.model";

@Injectable({
    providedIn: 'root',
})
export class AdminEndPoint {
    baseUrl = `${environment.apiUrl}api/admin`; 

    constructor(private readonly httpClient: HttpClient) {}

    list() {
        return this.httpClient.get<UserAdminResources[] >(`${this.baseUrl}`);
    }

    single(id: number) {
        return this.httpClient.get<{ data: UserAdminResources }>(`${this.baseUrl}/${id}`);
    }

    create(data) {
        return this.httpClient.post<{ data: UserAdminResources }>(`${this.baseUrl}`, data);
    }
       
    delete(id: number) {
        return this.httpClient.delete<void>(`${this.baseUrl}/${id}`);
    }

    update(id: number, data) {
        return this.httpClient.put<{ data: UserAdminResources }>(`${this.baseUrl}/${id}`, data);
    }
    update2(id: number, data) {
        return this.httpClient.post<{ data: UserAdminResources }>(`${this.baseUrl}/${id}`, data);
    }
}