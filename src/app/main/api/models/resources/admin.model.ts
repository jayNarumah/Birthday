import { AddUserResources } from "./add-user.model";
import { GroupsResources } from "./group-resource.model";


export class AdminResources {
    
    id:number;
    name:string; 
    email:string;
    password:string;
    profile: AddUserResources;
    group: GroupsResources;
    
}
