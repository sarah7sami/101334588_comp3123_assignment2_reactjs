import React, { ReactElement, FC } from "react";
import { Box, Typography } from "@mui/material";
import { useFetch } from "../hooks/useFetch";
import axios from "axios";
import Swal from "sweetalert2";

const token = sessionStorage.getItem("token");

const EmployeeList: FC<any> = (): ReactElement => {
  interface Employee {
    _id: number;
    first_name: string;
    last_name: string;
    email: string;
    gender: string;
    salary: number;
  }
  const { data, loading } = useFetch<Employee[]>(
    "http://23.133.249.134:8080/api/emp/employees"
  );

  const [swalFired, setSwalFired] = React.useState(false);

  // using axios for delete request to /api/emp/employees?eid=${id}
  const deleteEmployee = (id: number) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://23.133.249.134:8080/api/emp/employees?eid=${id}`)
          .then((response) => {
            console.log(response);
            if (response.status === 204) {
              Swal.fire("Deleted!", "This record has been deleted.", "success");
            }
            // refresh page
            window.location.reload();
          });
      }
    });
  };
  if (token) {
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
              <h1 className="display-6 text-center">
                &ldquo;Our Employees&rdquo;
              </h1>
              <figcaption className="blockquote-footer text-center mt-1">
                We <cite title="Source Title">totally</cite> value you
              </figcaption>
              <div className="d-grid gap-2 d-md-flex justify-content-md-end mb-3">
                <button
                  className="btn"
                  type="button"
                  onClick={() => (window.location.href = "/employees/create")}
                  style={{
                    backgroundColor: "#C1E1C1",
                    boxShadow:
                      "0px 3px 3px 0px rgba(0,0,0,0.12), 0px 3px 6px 0px rgba(0,0,0,0.22), 0px 5px 10px 0px rgba(0,0,0,0.2)",
                    border: "1px solid rgba(0,0,0,0.03)",
                    borderRadius: "6px",
                  }}
                >
                  Add New Employee
                </button>
              </div>
              <div className="row justify-content-center">
                <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1 w-100">
                  <table
                    className="table table-success table-striped table-hover"
                    style={{
                      boxShadow:
                        "0px 3px 3px 0px rgba(0,0,0,0.12), 0px 3px 6px 0px rgba(0,0,0,0.22), 0px 5px 10px 0px rgba(0,0,0,0.2)",
                      border: "1px solid rgba(0,0,0,0.03)",
                      borderRadius: "6px",
                    }}
                  >
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Salary</th>
                        <th scope="col">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {!loading &&
                        data.map((employee: Employee, index) => (
                          <tr key={employee._id}>
                            <th scope="row">{index + 1}</th>
                            <td>{employee.first_name}</td>
                            <td>{employee.last_name}</td>
                            <td>{employee.email}</td>
                            <td>{employee.gender}</td>
                            <td>{employee.salary}</td>
                            <td>
                              <button
                                style={{ all: "unset" }}
                                onClick={() => deleteEmployee(employee._id)}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  className="bi bi-trash me-4"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                  <path
                                    fill-rule="evenodd"
                                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                                  />
                                </svg>
                              </button>
                            <button
                                style={{ all: "unset" }}
                                onClick={() => window.location.href=`/employees/{{employee._id}}/edit`}
                              >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-pen"
                                viewBox="0 0 16 16"
                              >
                                <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
                              </svg>
                            </button>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
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
        }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = "/login";
        } else {
            window.location.href = "/login"
        }
        });
    }
    setSwalFired(true);
}
  return <></>;
};

export default EmployeeList;
