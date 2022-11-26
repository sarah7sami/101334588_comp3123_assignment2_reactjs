import axios from "axios";
import { useRef, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "../../src/App.css";

interface RegisterFormData {
    username: string;
    password: string;
}

const Login: React.FC = () => {
    const { register, handleSubmit, formState: {errors}, watch } = useForm<RegisterFormData>()
    const MySwal = withReactContent(Swal)

    const [userData, setUserData] = useState<RegisterFormData>();
    const onSubmit = (data:RegisterFormData) => {
        // using axios to send data to the backend
        setUserData(data);
        console.log(data);

        // use axios post to http://23.133.249.134:8080/api/user/login

        axios.post("http://23.133.249.134:8080/api/user/login", data)
            .then((response) => {
                console.log(response);
                if (response.status === 200) {
                    // set session storage token
                    sessionStorage.setItem("token", response.data.user);
                    alert(sessionStorage.getItem("token"));
                    // redirect to employee list page
                    window.location.href = "/employees";
                }
            }

        )
        .catch(err => {
            console.error(err);

            if (err.response.status === 401) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Invalid credentials!',
                })
            }

            if (err.response.status === 400 ) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Please fill out both fields.',
                })
            }
        })
    }

    return (
        <section className="vh-100">
        <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
                <div className="card text-black">
                <div className="card-body p-md-5">
                    <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login</p>

                        <form className="mx-1 mx-md-4" onSubmit={handleSubmit(onSubmit)}>

                        <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">

                            <label className="form-label" htmlFor="username">Your Username</label>
                            <input type="text" id="username" {...register("username", { required: true})} className="form-control" />
                            {errors.username && errors.username.type === "required" && <p className="text-danger small">This field is required</p>}
                            </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">

                            <label className="form-label" htmlFor="password">Password</label>
                            <input type="password" id="password" {...register("password", { required: true})} className="form-control" />
                            {errors.password?.type === 'required' && <p className="text-danger small">This field is required</p>}
                            </div>
                        </div>
                        
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button type="submit" className="btn btn-primary btn-lg" value="Submit">Login</button>
                            <p className="small fw-bold mt-2 pt-1 mb-0 ms-2">Don't have an account? <a href="/signup"
                                className="link-danger">Sign Up</a></p>
                        </div>
                        </form>

                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                        <img src="../../public/coffeecup.jpeg" className="img-fluid" alt="Coffee Cup Image"/>

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

export default Login;