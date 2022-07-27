import { GroupsResources } from "../../resources/group-resource.model";
import { UserAdminResources } from "../../resources/userAdminResource.model";

 
export interface CreateUser {
    id:number;
    profile:UserAdminResources;
    user:number;
    email:string;
    password:string; 
    gender:string;
    group:GroupsResources;

    
    
}