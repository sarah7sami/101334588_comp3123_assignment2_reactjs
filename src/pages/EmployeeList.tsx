import React, {ReactElement, FC} from "react";
import {Box, Typography} from "@mui/material";
import { useFetch } from "../hooks/useFetch";

const EmployeeList: FC<any> = (): ReactElement => {
    interface Employee {
        id: number;
        first_name: string;
        last_name: string;
        email: string;
        gender: string;
        salary: number;
    }

    const{data, loading} = useFetch<Employee[]>('http://23.133.249.134:8080/api/emp/employees');
    // const employees = data?.map((employee: Employee) => {
    //     <tr key={employee.id}>
    //         <th scope="row">{(loading)? <div>Loading...</div> : <div>{employee.id}</div>}</th>
    //         <td>{(loading)? <div>Loading...</div> : <div>{employee.first_name}</div>}</td>
    //         <td>{(loading)? <div>Loading...</div> : <div>{employee.last_name}</div>}</td>
    //         <td>{(loading)? <div>Loading...</div> : <div>{employee.email}</div>}</td>
    //         <td>{(loading)? <div>Loading...</div> : <div>{employee.gender}</div>}</td>
    //         <td>{(loading)? <div>Loading...</div> : <div>{employee.salary}</div>}</td>
    //     </tr>
    // })
        

    return (
        <section className="vh-100">
        <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
                <div className="card text-black">
                <div className="card-body p-md-5">
                    <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <table className="table table-success table-striped">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Email</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Salary</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                {/* {!!employees} */}
            </tbody>
            </table>

                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    );
};

export default EmployeeList;