export interface UserResource {
    id: number;
    email: string;
    password: string;
    user_type: string;
    is_active: boolean;
    email_verified: boolean;
    email_verified_at: Date;
    profile_picture: string;
}