import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core"; 
import { environment } from "src/environments/environment";
import {   BirthDayCountModel } from "../models/resources/count.model";

@Injectable({
    providedIn: 'root',
})
export class BirthDayCountEndpoint {
    baseUrl = `${environment.apiUrl}api/birthday-count`;

    constructor(private readonly httpClient: HttpClient) {}

    list() {
        return this.httpClient.get<BirthDayCountModel[] >(`${this.baseUrl}`);
    }

}