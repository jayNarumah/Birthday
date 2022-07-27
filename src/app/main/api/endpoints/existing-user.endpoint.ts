import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core"; 
import { environment } from "src/environments/environment"; 
import { ExistingUserResources } from "../models/resources/existing-user.model";

@Injectable({
    providedIn: 'root',
})
export class ExistingUserEndPoint {
    baseUrl = `${environment.apiUrl}api/add-member`;

    constructor(private readonly httpClient: HttpClient) {}

    

    create(data) {
        return this.httpClient.post<{ data: ExistingUserResources }>(`${this.baseUrl}`, data);
    }
         
   
}