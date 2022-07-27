import { AddUserResources } from "../resources/add-user.model";
import { GroupsResources } from "../resources/group-resource.model";

 

export class CreateAdmin2  {
    
    id:number; 
    email:string;
    password:string;
    name:string;
    group:GroupsResources;
    profile:AddUserResources;
}