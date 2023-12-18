import { useForm } from "react-hook-form";
import Topnavbar from "../../components/header/Topnavbar";
import Siderbar from "../../components/header/siderbar";
import api, { authState, decodeTokens } from "../../auth/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect, useRef } from "react";

const AddTeachers = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const schoolIdRef = useRef(null);

  useEffect(() => {
    if (!authState.accessToken) {
      navigate("/login");
      navigate(0);
    } else {
      schoolIdRef.current = decodeTokens().accessTokenData.schoolId;
    }
  }, [navigate]);
  const onSubmit = async (data) => {
    try {
      await api
        .post(
          `/api/v1/teachers/add-teacher?schoolId=${schoolIdRef.current}`,
          data
        )
        .then((response) => {
          console.log(response.data);
          toast.success("Succesfully Logged in");
          navigate("/teacher");
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
  return (
    <div>
      <div id="preloader">
        <div className="sk-three-bounce">
          <div className="sk-child sk-bounce1"></div>
          <div className="sk-child sk-bounce2"></div>
          <div className="sk-child sk-bounce3"></div>
        </div>
      </div>
      <Siderbar />

      <div id="main-wrapper">
        <div className="nav-header">
          <a href="index.html" className="brand-logo">
            <div className="logo-abbr">
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="58.000000pt"
                viewBox="0 0 58.000000 58.000000"
                preserveAspectRatio="xMidYMid meet"
              >
                <g
                  transform="translate(0.000000,58.000000) scale(0.100000,-0.100000)"
                  fill="var(--primary)"
                  stroke="none"
                >
                  <path
                    d="M146 570 c-47 -15 -94 -52 -118 -95 -19 -33 -23 -59 -26 -148 -2 -59
                -1 -127 2 -151 10 -64 52 -122 110 -151 45 -23 62 -25 177 -25 119 0 130 2
                180 28 43 22 59 38 81 81 26 49 28 62 28 170 0 64 -4 131 -10 150 -14 51 -50
                97 -95 123 -35 20 -55 23 -170 25 -72 1 -143 -2 -159 -7z m106 -230 c17 -38
                34 -70 38 -70 3 0 20 32 37 70 31 70 49 84 72 56 18 -21 -81 -216 -109 -216
                -29 0 -132 206 -110 220 30 19 42 9 72 -60z"
                  />
                </g>
              </svg>
            </div>
            <img className="logo-compact" src="./images/logo-text.png" alt="" />
            <div className="brand-title">
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="99"
                height="30.000000pt"
                viewBox="0 0 99.000000 30.000000"
                // eslint-disable-next-line no-mixed-spaces-and-tabs
                preserveAspectRatio="xMidYMid meet"
              >
                <g
                  transform="translate(0.000000,30.000000) scale(0.100000,-0.100000)"
                  fill="#000000"
                  stroke="none"
                >
                  <path
                    d="M28 289 c-10 -5 -18 -16 -18 -24 0 -8 26 -67 57 -130 54 -108 78
                -136 103 -120 11 7 112 204 124 241 5 16 0 23 -18 32 -30 13 -27 17 -82 -98
                l-41 -85 -46 98 c-25 53 -49 97 -54 97 -4 0 -16 -5 -25 -11z"
                  />
                  <path
                    d="M344 210 c-57 -23 -83 -111 -46 -156 44 -55 109 -59 158 -10 51 51
                43 119 -18 156 -35 21 -60 24 -94 10z m74 -92 c6 -47 -59 -62 -73 -17 -9 27
                13 51 44 47 20 -2 27 -9 29 -30z"
                  />
                  <path
                    d="M615 210 c-11 -4 -37 -5 -58 -2 l-38 5 3 -99 c3 -98 3 -99 28 -99 24
                0 25 4 30 65 l5 65 40 5 c34 4 40 9 43 31 3 29 -19 41 -53 29z"
                  />
                  <path
                    d="M705 179 c-28 -35 -32 -76 -10 -118 18 -36 67 -58 98 -44 15 7 27 7
                38 0 9 -6 24 -7 33 -4 13 5 16 23 16 101 l0 94 -75 0 c-71 1 -76 -1 -100 -29z
                m100 -64 c0 -23 -5 -31 -21 -33 -30 -4 -48 21 -34 48 18 33 55 23 55 -15z"
                  />
                  <path
                    d="M914 66 c-12 -31 0 -51 31 -51 27 0 30 3 30 30 0 25 -4 30 -28 33
                -17 2 -29 -2 -33 -12z"
                  />
                </g>
              </svg>
            </div>
          </a>

          <div className="nav-control">
            <div className="hamburger">
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
            </div>
          </div>
        </div>

        <Topnavbar />

        <div className="content-body px-2 my-4">
          <div className="col-xl-12 col-lg-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Add Teacher</h4>
              </div>
              <div className="card-body">
                <div className="basic-form">
                  <form
                    className="teacher-form"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <div className="form-group row">
                      <label
                        className="col-sm-3 col-form-label"
                        htmlFor="firstname"
                      >
                        Firstname
                        <span className="text-danger">*</span>
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Firstname"
                          id="firstName"
                          name="firstName"
                          {...register("firstName", {
                            required: true,
                            minLength: 3,
                            maxLength: 20,
                          })}
                        />
                        {errors.firstName &&
                          errors.firstName.type === "required" && (
                            <span className="text-danger">
                              Firstname is required
                            </span>
                          )}
                        {errors.firstName &&
                          errors.firstName.type === "minLength" && (
                            <span className="text-danger">
                              Firstname should be at least 2 characters
                            </span>
                          )}
                        {errors.firstName &&
                          errors.firstName.type === "maxLength" && (
                            <span className="text-danger">
                              FirstName should not exceed 20 characters
                            </span>
                          )}
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        className="col-sm-3 col-form-label"
                        htmlFor="lastName"
                      >
                        Lastname
                        <span className="text-danger">*</span>
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Lastname"
                          id="lastName"
                          name="lastName"
                          {...register("lastName", {
                            required: true,
                            minLength: 3,
                            maxLength: 20,
                          })}
                        />
                        {errors.lastName &&
                          errors.lastName.type === "required" && (
                            <span className="text-danger">
                              Lastname is required
                            </span>
                          )}
                        {errors.lastName &&
                          errors.lastName.type === "minLength" && (
                            <span className="text-danger">
                              Lastname should be at least 3 characters
                            </span>
                          )}
                        {errors.lastName &&
                          errors.lastName.type === "maxLength" && (
                            <span className="text-danger">
                              Lastname should not exceed 20 characters
                            </span>
                          )}
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        className="col-sm-3 col-form-label"
                        htmlFor="email"
                      >
                        Email
                        <span className="text-danger">*</span>
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Email"
                          id="email"
                          name="email"
                          {...register("email", {
                            required: true,
                            pattern: /^\S+@\S+$/i,
                          })}
                        />
                        {errors.email && errors.email.type === "required" && (
                          <span className="text-danger">Email is required</span>
                        )}
                        {errors.email && errors.email.type === "pattern" && (
                          <span className="text-danger">
                            Invalid email format
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        className="col-sm-3 col-form-label"
                        htmlFor="gender"
                      >
                        Gender
                        <span className="text-danger">*</span>
                      </label>
                      <div className="col-sm-9">
                        <select
                          className="form-control"
                          id="gender"
                          name="gender"
                          {...register("gender", { required: true })}
                        >
                          <option value="">Please select Gender</option>
                          <option value="MALE">Male</option>
                          <option value="FEMALE">Female</option>
                        </select>
                        {errors.gender && (
                          <span className="text-danger">
                            Please select a country
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        className="col-sm-3 col-form-label"
                        htmlFor="address"
                      >
                        Address
                        <span className="text-danger">*</span>
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Address"
                          id="address"
                          name="address"
                          {...register("address", {
                            required: true,
                          })}
                        />
                        {errors.address &&
                          errors.address.type === "required" && (
                            <span className="text-danger">
                              Address is required
                            </span>
                          )}
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        className="col-sm-3 col-form-label"
                        htmlFor="phone"
                      >
                        Phone Number
                        <span className="text-danger">*</span>
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Phone Number"
                          id="phoneNumber"
                          name="phoneNumber"
                          {...register("phoneNumber", {
                            required: true,
                            pattern: /^[0-9]{10}$/,
                          })}
                        />
                        {errors.phoneNumber &&
                          errors.phoneNumber.type === "required" && (
                            <span className="text-danger">
                              Phone number is required
                            </span>
                          )}
                        {errors.phoneNumber &&
                          errors.phoneNumber.type === "pattern" && (
                            <span className="text-danger">
                              Invalid phone number format
                            </span>
                          )}
                      </div>
                    </div>

                    <div className="form-group row">
                      <div className="col-sm-10">
                        <button type="submit" className="btn btn-primary">
                          Add Teacher
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTeachers;
