export interface LoginResponse {
    data: {
        access_token: string;
        token_type: string;
        user: {
            id: number;
            name: string;
            email: string;
        }
    }
}