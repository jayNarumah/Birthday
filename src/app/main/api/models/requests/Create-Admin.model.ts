import { AddUserResources } from "../resources/add-user.model";
import { AdminResources } from "../resources/admin.model";
import { GroupsResources } from "../resources/group-resource.model";

 

export class CreateAdmin  {
    
    id:number; 
    email:string;
    password:string;
    name:string;
    group:GroupsResources;
    profile:AddUserResources;
}