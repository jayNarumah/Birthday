import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core"; 
import { environment } from "src/environments/environment"; 
import { ListOfBirthdaysResource } from "../models/resources/list-of-birth.model";

@Injectable({
    providedIn: 'root',
})
export class ListOfBirthdayEndPoint {
    baseUrl = `${environment.apiUrl}api/birthday`;

    constructor(private readonly httpClient: HttpClient) {}

    list() {
        return this.httpClient.get<ListOfBirthdaysResource[] >(`${this.baseUrl}`);
    }
 
}