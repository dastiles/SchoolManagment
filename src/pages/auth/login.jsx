function Login() {
  return (
    <>
      <body className="loginBackground">
        <div className="container h-100">
          <div className="row h-100 align-items-center justify-contain-center">
            <div className="col-xl-12">
              <div className="card">
                <div className="card-body p-0">
                  <div className="row m-0">
                    <div className="col-xl-6 col-md-6 sign text-center">
                      <div>
                        <div className="text-center my-5">
                          <a href="index.html">
                            <img src="images/logo-dark.png" alt="" />
                          </a>
                        </div>
                        <img
                          src="images/log.png"
                          className="img-fix bitcoin-img sd-shape7"
                        ></img>
                      </div>
                    </div>
                    <div className="col-xl-6 col-md-6">
                      <div className="sign-in-your py-4 px-2">
                        <h4 className="fs-20">Sign in your account</h4>
                        <span>
                          Welcome back! Login with your data that you entered
                          <br /> during registration
                        </span>

                        <form action="index.html" className="mt-3">
                          <div className="mb-3">
                            <label className="mb-1">
                              <strong>Email</strong>
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              value="hello@example.com"
                            />
                          </div>
                          <div className="mb-3">
                            <label className="mb-1">
                              <strong>Password</strong>
                            </label>
                            <input
                              type="password"
                              className="form-control"
                              value="Password"
                            />
                          </div>
                          <div className="row d-flex justify-content-between mt-4 mb-2">
                            <div className="mb-3">
                              <div className="form-check custom-checkbox ms-1">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  id="basic_checkbox_1"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="basic_checkbox_1"
                                >
                                  Remember my preference
                                </label>
                              </div>
                            </div>
                            <div className="mb-3">
                              <a href="page-forgot-password.html">
                                Forgot Password?
                              </a>
                            </div>
                          </div>
                          <div className="text-center">
                            <button
                              type="submit"
                              className="btn btn-primary btn-block"
                            >
                              Sign Me In
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}

export default Login;
