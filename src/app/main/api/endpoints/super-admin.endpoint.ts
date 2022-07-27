import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { SuperAdminResource } from "src/app/main/api/models/resources/super-admin-resource.model";    
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root',
})
export class SuperAdminEndPoint {
    
    baseUrl = `${environment.apiUrl}/admin/register`;

    constructor(private readonly httpClient: HttpClient) {}

    list() {
        return this.httpClient.get<{ data: SuperAdminResource[] }>(`${this.baseUrl}`);
    }

    single(id: number) {
        return this.httpClient.get<{ data: SuperAdminResource }>(`${this.baseUrl}/${id}`);
    }

    create(data) {
        return this.httpClient.post<{ data: SuperAdminResource }>(`${this.baseUrl}`, data);
    }
       
    delete(id: number) {
        return this.httpClient.delete<void>(`${this.baseUrl}/${id}`);
    }

    update(id: number, data) {
        return this.httpClient.put<{ data: SuperAdminResource }>(`${this.baseUrl}/${id}`, data);
    }
}