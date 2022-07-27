import { AddUserResource } from "src/api/model/user.model"; 

export class GroupsResources {
    
    id:number;
    addUserResource:AddUserResource;
    group_name:string;
    group_id:number;
    admin_id:number; 
} 