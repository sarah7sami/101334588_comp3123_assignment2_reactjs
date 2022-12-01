import React, {ReactElement, FC} from "react";
import {Box, Typography} from "@mui/material";
import axios from "axios";
import { useRef, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Swal from "sweetalert2";
import withReactContent, { ReactElementOr } from "sweetalert2-react-content";
import "../../src/App.css";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { useFetch } from "../hooks/useFetch";

const token = sessionStorage.getItem("token");

// @ts-expect-error => the alert return is not a ReactElement but is also an expected return type
const EmployeeEdit: React.FC = () => {
    // set id to the id of the employee by splitting url employees/edit/6355cd0ea1cc5a2e704c119f and getting the last element
    const id = window.location.href.split("/").pop();
    interface EmployeeFormData {
        first_name: string;
        last_name: string;
        email: string;
        gender: string;
        salary: number;
    }

    interface Employee {
        first_name: string;
        last_name: string;
        email: string;
        gender: string;
        salary: number;
    }
    const [swalFired, setSwalFired] = React.useState(false);

    // use axios to get the employee data
    const { data, loading} = useFetch<Employee>(`http://23.133.249.134:8080/api/emp/employees/${id}`);

    const { register, handleSubmit, formState: {errors}, watch } = useForm<EmployeeFormData>()
    const mySwal = withReactContent(Swal)

    const [userData, setUserData] = useState<EmployeeFormData>();
    const onSubmit = (data:EmployeeFormData) => {
        // using axios to send data to the backend
        setUserData(data);
        console.log(data);

        axios.put(`http://23.133.249.134:8080/api/emp/employees/${id}`, data)
            .then((response) => {
                console.log(response);
                if (response.status === 201) {
                  Swal.fire({
                    icon: "success",
                    title: "Success!",
                    text: "Employee edited.",
                    confirmButtonColor: "#3085d6",
                    confirmButtonText: "View Employees",
                    }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.href = "/employees";
                    } else {
                        window.location.href = "/employees";
                    }
                    });
                }
            }
        )
        .catch(err => {
            console.error(err);

            if (err.response.status === 403) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Employee already exists!',
                })
            }

            if (err.response.status === 400 ) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Please fill out all fields.',
                })
            }
        })
    }

    if(token) {
        return (
            <section className="vh-100"
            style={{
              backgroundImage: "url(../../public/delicious-coffee.jpeg)",
              backgroundSize: "cover",
            }}>
          <div className="container py-5 h-100">
            <div className="row justify-content-center align-items-center h-100">
              <div className="col-12 col-lg-9 col-xl-7">
                <div className="card shadow-2-strong card-registration" style={{borderRadius: "15px"}}>
                  <div className="card-body p-4 p-md-5">
                    <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Edit Employee</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
        
                      <div className="row">
                        <div className="col-md-6 mb-4">
        
                          <div className="form-outline">
                          <label className="form-label" htmlFor="firstName">First Name</label>
                            <input type="text" id="firstName" className="form-control form-control-lg" defaultValue={data.first_name} {...register("first_name", { required: true})}/>
                            {errors.first_name && errors.first_name.type === "required" && <p className="text-danger small">This field is required</p>}
                          </div>
        
                        </div>
                        <div className="col-md-6 mb-4">
        
                          <div className="form-outline">
                            <label className="form-label" htmlFor="lastName">Last Name</label>
                            <input type="text" id="lastName" className="form-control form-control-lg" defaultValue={data.last_name} {...register("last_name", { required: true})} />
                            {errors.last_name && errors.last_name.type === "required" && <p className="text-danger small">This field is required</p>}
                          </div>
        
                        </div>
                      </div>
        
                      <div className="row">
                        <div className="col-md-6 mb-4 pb-2">
        
                          <div className="form-outline">
                            <label className="form-label" htmlFor="emailAddress">Email</label>
                            <input type="email" id="emailAddress" className="form-control form-control-lg" defaultValue={data.email} {...register("email", { required: true})} />
                            {errors.email && errors.email.type === "required" && <p className="text-danger small">This field is required</p>}
                          </div>
        
                        </div>
        
                        <div className="col-md-6 mb-4 pb-2">
        
                          <div className="form-outline">
                          <label className="form-label" htmlFor="salary">Salary</label>
                            <input type="number" id="salary" className="form-control form-control-lg" defaultValue={data.salary} {...register("salary", { required: true})} />
                            {errors.salary && errors.salary.type === "required" && <p className="text-danger small">This field is required</p>}
                          </div>
        
                        </div>
                        
                      </div>
                      <div className="col-md-6 mb-4">
        
                          <h6 className="mb-2 pb-1">Gender: </h6>
        
                          <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" id="femaleGender"
                              value="female"  defaultValue={data.gender} {...register("gender", { required: true})}/>
                            <label className="form-check-label" htmlFor="femaleGender">Female</label>
                          </div>
        
                          <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" id="maleGender"
                              value="male" defaultValue={data.gender} {...register("gender", { required: true})}/>
                            <label className="form-check-label" htmlFor="maleGender">Male</label>
                          </div>
        
                          <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" id="otherGender"
                              value="other" defaultValue={data.gender} {...register("gender", { required: true})}/>
                            <label className="form-check-label" htmlFor="otherGender">Other</label>
                          </div>
        
                        </div>
        
                      
        
                      <div className="mt-4 pt-2">
                      <button
                          className="btn"
                          type="submit"
                          value="Submit"
                          style={{
                            backgroundColor: "#C1E1C1",
                            boxShadow:
                              "0px 3px 3px 0px rgba(0,0,0,0.12), 0px 3px 6px 0px rgba(0,0,0,0.22), 0px 5px 10px 0px rgba(0,0,0,0.2)",
                            border: "1px solid rgba(0,0,0,0.03)",
                            borderRadius: "6px",
                          }}
                        >
                          Submit
                        </button>
                      </div>
        
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        );
    } else {
        if (swalFired) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "You must be logged in to view this page!",
                confirmButtonColor: "#3085d6",
                confirmButtonText: "Login",
    }) .then((result) => {
        if (result.isConfirmed) {
            window.location.href = "/login";
        } else {
            window.location.href = "/login"
        }
        });
        }
        setSwalFired(true);
    }
};


export default EmployeeEdit;