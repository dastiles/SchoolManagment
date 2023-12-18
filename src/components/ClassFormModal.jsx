import { useForm } from "react-hook-form";
import {
  createClasses,
  getClasses,
  getGrades,
  getTeachers,
} from "../store/store";
import { useEffect, useState } from "react";

const ClassFormModal = () => {
  const [teacher, setTeacher] = useState([]);
  const [classes, setClasses] = useState([]);
  const [grade, setGrade] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const { className, teacherId, gradeId } = data;

    const body = {
      className,
      grade: {
        gradeId,
      },
      classTeacher: {
        teacherId,
      },
    };
    createClasses(body).then((res) => console.log(res));
    console.log(body);
  };

  useEffect(() => {
    getTeachers().then((res) => setTeacher(res.data.content));
    getClasses().then((res) => setClasses(res.data.content));
    getGrades().then((res) => setGrade(res.data));
  }, []);

  return (
    <div
      className="modal fade bd-example-modal-lg"
      tabIndex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add Class</h5>
            <button type="button" className="close" data-bs-dismiss="modal">
              <span>&times;</span>
            </button>
          </div>{" "}
          <div className="basic-form">
            <form className="teacher-form" onSubmit={handleSubmit(onSubmit)}>
              <div className="modal-body">
                <div className="form-group row">
                  <label
                    className="col-sm-3 col-form-label"
                    htmlFor="firstname"
                  >
                    Class Name
                    <span className="text-danger">*</span>
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="className"
                      id="className"
                      name="className"
                      {...register("className", {
                        required: true,
                      })}
                    />
                    {errors.className &&
                      errors.className.type === "required" && (
                        <span className="text-danger">class is required</span>
                      )}
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label" htmlFor="gradeId">
                    Grade
                    <span className="text-danger">*</span>
                  </label>
                  <div className="col-sm-9">
                    <select
                      className="form-control"
                      id="gradeId"
                      name="gradeId"
                      {...register("gradeId", { required: true })}
                    >
                      <option value="">Please select Grade</option>
                      {grade.map((grade) => (
                        <option value={grade.gradeId} key={grade.gradeId}>
                          {grade.grade}
                        </option>
                      ))}
                    </select>
                    {errors.gradeId && (
                      <span className="text-danger">Please select a grade</span>
                    )}
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    className="col-sm-3 col-form-label"
                    htmlFor="teacherID"
                  >
                    Class Teacher
                    <span className="text-danger">*</span>
                  </label>
                  <div className="col-sm-9">
                    <select
                      className="form-control"
                      id="teacherId"
                      name="teacherId"
                      {...register("teacherId", { required: true })}
                    >
                      <option value="">Please select Class Teacher</option>

                      {teacher.map((teacher) => (
                        <option
                          value={teacher.teacherId}
                          key={teacher.teacherId}
                        >
                          {teacher.firstName + " " + teacher.lastName}
                        </option>
                      ))}
                    </select>
                    {errors.teacherId && (
                      <span className="text-danger">
                        Please select a class teacher
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger light"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                >
                  Create Class
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassFormModal;
