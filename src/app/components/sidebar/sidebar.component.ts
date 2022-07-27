import { Component, OnInit } from "@angular/core"; 

declare interface RouteInfo {
  path: string;
  title: string;
  rtlTitle: string;
  icon: string;
  class: string;
}
/*settings menu*/
declare interface RouteInfo2 {
  path: string;
  title: string;
  rtlTitle: string;
  icon: string;
  class: string;
}
export const ROUTES2: RouteInfo2[] = [
  {
    path: "manage-groups",
    title: "Manage Groups",
    rtlTitle: "لوحة القيادة",
    icon: "icon-molecule-40",
    class: ""
  }, 
  {
    path: "manage-admin",
    title: "Manage Admin",
    rtlTitle: "لوحة القيادة",
    icon: "icon-single-02",
    class: ""
  },
]
 /*settings menu end*/
export const ROUTES: RouteInfo[] = [
  {
    path: "dashboard",
    title: "Dashboard",
    rtlTitle: "لوحة القيادة",
    icon: "icon-chart-pie-36",
    class: ""
  },   
  ////////
  {
    path: "add-users",
    title: "Create Admin",
    rtlTitle: "لوحة القيادة",
    icon: "icon-simple-add",
    class: ""
  },
  {
    path: "add-group",
    title: "Create Group",
    rtlTitle: "لوحة القيادة",
    icon: "icon-vector",
    class: ""
  },
  {
    path: "assign-admin",
    title: "Assign Admin",
    rtlTitle: "لوحة القيادة",
    icon: "icon-link-72",
    class: ""
  },
  // {
  //   path: "/make-admin",
  //   title: "Make Admin",
  //   rtlTitle: "لوحة القيادة",
  //   icon: "icon-badge",
  //   class: ""
  // },
  ////////////
  // {
  //   path: "list-of-users",
  //   title: "List Of Admin",
  //   rtlTitle: "لوحة القيادة",
  //   icon: "icon-bullet-list-67",
  //   class: ""
  // },
  // {
  //   path: "list-of-groups",
  //   title: "List Of Groups",
  //   rtlTitle: "لوحة القيادة",
  //   icon: "icon-paper",
  //   class: ""
  // },
  ////////////
  // {
  //   path: "/admin-registration",
  //   title: "Add New Admin",
  //   rtlTitle: "لوحة القيادة",
  //   icon: "icon-user-run",
  //   class: ""
  // },
////////////
  // {
  //   path: "/icons",
  //   title: "Icons",
  //   rtlTitle: "الرموز",
  //   icon: "icon-atom",
  //   class: ""
  // },
  // {
  //   path: "/maps",
  //   title: "Maps",
  //   rtlTitle: "خرائط",
  //   icon: "icon-pin",
  //   class: "" },
  // {
  //   path: "/notifications",
  //   title: "Notifications",
  //   rtlTitle: "إخطارات",
  //   icon: "icon-bell-55",
  //   class: ""
  // },s

  // {
  //   path: "/user",
  //   title: "User Profile",
  //   rtlTitle: "ملف تعريفي للمستخدم",
  //   icon: "icon-single-02",
  //   class: ""
  // },
  // {
  //   path: "/tables",
  //   title: "Table List",
  //   rtlTitle: "قائمة الجدول",
  //   icon: "icon-puzzle-10",
  //   class: ""
  // },
  // {
  //   path: "/typography",
  //   title: "Typography",
  //   rtlTitle: "طباعة",
  //   icon: "icon-align-center",
  //   class: ""
  // },
  // {
  //   path: "/rtl",
  //   title: "RTL Support",
  //   rtlTitle: "ار تي ال",
  //   icon: "icon-world",
  //   class: ""
  // }
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  menuItems2: RouteInfo2[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.menuItems2 = ROUTES2.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
