// pages
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import EmployeeCreate from "./pages/EmployeeCreate";
import EmployeeEdit from "./pages/EmployeeEdit";
import EmployeeShow from "./pages/EmployeeShow";
import EmployeeList from "./pages/EmployeeList";

// other
import {FC} from "react";

// interface
interface Route {
    key: string,
    title: string,
    path: string,
    enabled: boolean,
    component: FC<{}>
}

export const routes: Array<Route> = [
    {
        key: 'signup-route',
        title: 'Signup',
        path: '/signup',
        enabled: true,
        component: Signup
    },
    {
        key: 'login-route',
        title: 'Login',
        path: '/login',
        enabled: true,
        component: Login
    },
    {
        key: 'employees-route',
        title: 'Employees',
        path: '/employees',
        enabled: true,
        component: EmployeeList
    },
    {
        key: 'employee-create-route',
        title: 'Create Employee',
        path: '/employees/create',
        enabled: true,
        component: EmployeeCreate
    },
    {
        key: 'employee-edit-route',
        title: 'Edit Employee',
        path: '/employees/edit/:id',
        enabled: true,
        component: EmployeeEdit
    },
    {
        key: 'employee-show-route',
        title: 'Show Employee',
        path: '/employees/:id',
        enabled: true,
        component: EmployeeShow
    },
    {
        key: 'landing-route',
        title: 'Login',
        path: '/',
        enabled: true,
        component: Login
    }
];
