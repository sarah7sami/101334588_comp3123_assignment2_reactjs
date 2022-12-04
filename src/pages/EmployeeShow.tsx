import React, {ReactElement, FC, useEffect, useState} from "react";
import {Box, Typography} from "@mui/material";
import axios from "axios";
import { useFetch } from "../hooks/useFetch";

const EmployeeShow: FC<any> = (): ReactElement => {
    const id = window.location.href.split("/").pop();
    interface Employee {
        first_name: string;
        last_name: string;
        email: string;
        gender: string;
        salary: number;
    }

    const { data, loading} = useFetch<Employee>(`http://23.133.249.134:8080/api/emp/employees/${id}`);

    return (
        <section
        className="vh-100"
        style={{
          backgroundImage: "url(../../public/delicious-coffee.jpeg)",
          backgroundSize: "cover",
        }}
      >
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">

            <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Employee Details</h3>
                

            <div className="card mb-4">
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-3">
                            <p className="mb-0">Full Name</p>
                        </div>
                    <div className="col-sm-9">
                        <p className="text-muted mb-0">{data?.first_name} {data?.last_name}</p>
                    </div>
                    </div>
                <hr />
                    <div className="row">
                    <div className="col-sm-3">
                        <p className="mb-0">Email</p>
                    </div>
                    <div className="col-sm-9">
                        <p className="text-muted mb-0">{data?.email}</p>
                    </div>
                </div>

                <hr />
                    <div className="row">
                    <div className="col-sm-3">
                        <p className="mb-0">Gender</p>
                    </div>
                    <div className="col-sm-9">
                        <p className="text-muted mb-0">{data?.gender}</p>
                    </div>
                    </div>
                <hr />
                    <div className="row">
                    <div className="col-sm-3">
                        <p className="mb-0">Salary</p>
                    </div>
                    <div className="col-sm-9">
                        <p className="text-muted mb-0">{data?.salary}</p>
                    </div>
                    </div>
                </div>
            </div>


                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4"> 
                            <button
                            className="btn mb-5 mx-1 mx-md-4 mt-4"
                            style={{
                                backgroundColor: "#C1E1C1",
                                boxShadow:
                                "0px 3px 3px 0px rgba(0,0,0,0.12), 0px 3px 6px 0px rgba(0,0,0,0.22), 0px 5px 10px 0px rgba(0,0,0,0.2)",
                                border: "1px solid rgba(0,0,0,0.03)",
                                borderRadius: "6px",
                            }}
                            onClick={() => window.location.href = "/employees"}
                            >
                            See All Employees
                            </button>
                        </div>

                </div>
            </div>
        </div>
    </section>
        
    );
};

export default EmployeeShow;

function setValue(arg0: string, first_name: any) {
    throw new Error("Function not implemented.");
}
