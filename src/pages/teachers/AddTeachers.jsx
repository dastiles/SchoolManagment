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
            <div className="logo-abbr text-primary">
              <h1>EduSync</h1>
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
                          placeholder="charles"
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
                          placeholder="madhuku"
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
                          placeholder="dastilesforever@gmail.com"
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
                          placeholder="22 street MVuma"
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
                          placeholder="0771315239"
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
