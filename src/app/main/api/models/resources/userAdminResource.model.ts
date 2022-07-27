import { AddUserResources } from "./add-user.model";
import { GroupsResources } from "./group-resource.model";

 

export class UserAdminResources {
    id:number;
    email:string;
    name:string;
    phone_number:number;
    dob:string;
    gender:string; 
    group:GroupsResources;
    profile:AddUserResources;
    
}