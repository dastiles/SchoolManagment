import { useForm } from "react-hook-form";
import Topnavbar from "../../components/header/Topnavbar";
import Siderbar from "../../components/header/siderbar";
import api, { authState, decodeTokens } from "../../auth/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect, useRef, useState } from "react";

const EditTeachers = () => {
  const location = useLocation();
  const [teacher, setTeacher] = useState({});

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const navigate = useNavigate();
  const schoolIdRef = useRef(null);
  const teacherId = location.pathname.split("/")[2];

  useEffect(() => {
    console.log(teacherId);
    if (!authState.accessToken) {
      navigate("/login");
      navigate(0);
    } else {
      schoolIdRef.current = decodeTokens().accessTokenData.schoolId;
    }
    const getTeachers = async () => {
      try {
        await api
          .get(`/api/v1/teachers/view-teacher?teacherId=${teacherId}`)
          .then((response) => {
            setTeacher(response.data);
            const { firstName, lastName, address, phoneNumber, email, gender } =
              response.data;
            reset({
              firstName: firstName || "",
              lastName: lastName || "",
              address: address || "",
              phoneNumber: phoneNumber || "",
              email: email || "",
              gender: gender || "",
            });
            console.log(response);
            console.log(teacher);
          })
          .catch((err) => {
            console.log(err.response.data.message, "the error");
          });
      } catch (error) {
        console.log(error);
      }
    };

    getTeachers();
  }, [navigate]);

  const onSubmit = async (data) => {
    try {
      await api
        .put(`/api/v1/teachers/update-teacher?teacherId=${teacherId}`, data)
        .then((response) => {
          console.log(response.data);
          toast.success("Succesfully Updated Teacher");
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

  console.log(location);
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
                              FirstName is required
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
                              Firstname should not exceed 20 characters
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
                          Edit Teacher
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

export default EditTeachers;
