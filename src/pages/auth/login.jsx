import { useForm } from "react-hook-form";
import api, {
  authState,
  decodeTokens,
  setSchoolId,
  setTokens,
} from "../../auth/auth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";

function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await api
        .post("/api/v1/auth/login", data)
        .then((response) => {
          setTokens(response.data.access_token, response.data.refresh_token);
          let id = decodeTokens().accessTokenData.schoolId;
          let userId = decodeTokens().accessTokenData.userId;
          console.log(decodeTokens().accessTokenData);
          setSchoolId(id, userId);
          console.log(response.data);
          toast.success("Succesfully Logged in");
          navigate("/");
          navigate(0);
        })
        .catch((err) => {
          toast.error(err.response.data.message);
          console.log(err.response.data.message, "the error");
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (authState.accessToken) {
      navigate("/");
      navigate(0);
    }

    console.log(authState.accessToken);
  }, [navigate]);
  return (
    <>
      <div className="loginBackground">
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

                        <form
                          className="mt-3"
                          onSubmit={handleSubmit(onSubmit)}
                        >
                          <div className="mb-3">
                            <label className="mb-1">
                              <strong>Email</strong>
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              placeholder="hello@example.com"
                              {...register("emailAddress", {
                                required: true,
                                pattern: /^\S+@\S+$/i,
                              })}
                            />
                            {errors.emailAddress &&
                              errors.emailAddress.type === "required" && (
                                <span className="text-danger">
                                  Email is required
                                </span>
                              )}
                            {errors.emailAddress &&
                              errors.emailAddress.type === "pattern" && (
                                <span className="text-danger">
                                  Invalid email format
                                </span>
                              )}
                          </div>
                          <div className="mb-3">
                            <label className="mb-1">
                              <strong>Password</strong>
                            </label>
                            <input
                              type="password"
                              className="form-control"
                              placeholder="password"
                              {...register("password", {
                                required: true,
                              })}
                            />
                            {errors.password && (
                              <span className="text-danger">
                                Please select a country
                              </span>
                            )}
                          </div>
                          <div className="row d-flex justify-content-between mt-4 mb-2">
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
      </div>
    </>
  );
}

export default Login;
