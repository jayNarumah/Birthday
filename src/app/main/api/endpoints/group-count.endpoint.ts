import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core"; 
import { environment } from "src/environments/environment"; 
import { GroupCountModel } from "../models/resources/count.model";

@Injectable({
    providedIn: 'root',
})
export class GroupCountEndPoint {
    baseUrl = `${environment.apiUrl}api/group-count`;

    constructor(private readonly httpClient: HttpClient) {}

    list() {
        return this.httpClient.get<GroupCountModel[] >(`${this.baseUrl}`);
    } 
  
}