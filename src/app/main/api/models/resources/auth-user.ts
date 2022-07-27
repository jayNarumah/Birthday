
import { Role } from "./role";

export class AuthUser {
    id: number;
    profile_id:number;
    user_type_id:number;
    email: string;
    password:string;
    role: Role;
    token: string;
    avatar?: string = "avatar-s-11.jpg";     
}
