import { proxy } from "valtio";

export const teacherState = proxy({
  teacherId: "",
  teacherName: "",
  url: "",
});

export const setTeacherdetails = (id, name, url) => {
  teacherState.teacherId = id;
  teacherState.teacherName = name;
  teacherState.url = url;
};

export const studentState = proxy({
  studentId: "",
  studentName: "",
  url: "",
});

export const setStudentDetails = (id, name, url) => {
  studentState.studentId = id;
  studentState.studentName = name;
  studentState.url = url;
};
