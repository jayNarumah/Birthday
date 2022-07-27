import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core"; 
import { environment } from "src/environments/environment"; 
import { GroupAdmin } from "../models/resources/group-admin.model";

@Injectable({
    providedIn: 'root',
})
export class CreateAdminEndpoint {
    baseUrl = `${environment.apiUrl}api/create-admin`;

    constructor(private readonly httpClient: HttpClient) {}

   

    create(data) {
        return this.httpClient.post<{ data: GroupAdmin }>(`${this.baseUrl}`, data);
    }
         
     
}