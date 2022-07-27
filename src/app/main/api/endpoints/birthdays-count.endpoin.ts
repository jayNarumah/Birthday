import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core"; 
import { environment } from "src/environments/environment"; 
import { BirthDaysCountModel } from "../models/resources/count.model";

@Injectable({
    providedIn: 'root',
})
export class BirthDaysCountEndpoint {
    baseUrl = `${environment.apiUrl}api/birthdays-count`;

    constructor(private readonly httpClient: HttpClient) {}

    list() {
        return this.httpClient.get<BirthDaysCountModel[] >(`${this.baseUrl}`);
    }

}