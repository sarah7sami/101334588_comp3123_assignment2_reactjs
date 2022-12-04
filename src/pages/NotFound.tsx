import React, {ReactElement, FC, useEffect} from "react";



const NotFound: React.FC = () => {
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
                &ldquo;Page Not Found&rdquo;
              </h1>
                <figcaption className="blockquote-footer text-center mt-1">
                <cite title="Source Title">404</cite>
                </figcaption>

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
                            onClick={() => window.location.href = "/"}
                            >
                            Login
                            </button>
                        </div>
            </div>
            </div>
            </div>
            </section>
    )
};

export default NotFound;
