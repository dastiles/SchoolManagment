import { proxy } from "valtio";
import api, { authState } from "../auth/auth";

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

export const memberState = proxy({
  id: "",
  firstname: "",
  lastname: "",
  url: "",
  teachers: [],
  students: [],
  staff: [],
});

export const setMemberDetails = (id, firstname, lastname, url) => {
  memberState.id = id;
  memberState.firstname = firstname;
  memberState.lastname = lastname;
  memberState.url = url;
};
// get admin info
export const getAdminInfor = async () => {
  try {
    return await api.get(`0/api/v1/admin/profile?userId=${authState.userId}`);
  } catch (err) {
    console.error(err.response?.data?.message || err.message);
  }
};

// create students
export const createStudents = async (data) => {
  try {
    return await api.post(
      `/api/v1/students/add-student?schoolId=${authState.schoolId}`,
      data
    );
  } catch (err) {
    console.error(err.response?.data?.message || err.message);
  }
};

// get students
export const getStudents = async () => {
  try {
    return await api.get(
      `/api/v1/students?page=1&size=1&sort=&schoolId=${authState.schoolId}`
    );
  } catch (err) {
    console.error(err.response?.data?.message || err.message);
  }
};

// get teachers
export const getTeachers = async () => {
  try {
    return await api.get(`/api/v1/teachers?schoolId=${authState.schoolId}`);
  } catch (err) {
    console.error(err.response?.data?.message || err.message);
  }
};

// get all classes
export const getClasses = async () => {
  try {
    return await api.get(`/api/v1/classes?schoolId=${authState.schoolId}`);
  } catch (err) {
    console.error(err.response?.data?.message || err.message);
  }
};

// create classes

export const createClasses = async (data) => {
  try {
    return await api.post(
      `/api/v1/classes/create-class?schoolId=${authState.schoolId}`,
      data
    );
  } catch (err) {
    console.error(err.response?.data?.message || err.message);
  }
};

export const getGrades = async () => {
  try {
    return await api.get(
      `/api/v1/students/grades?schoolId=${authState.schoolId}`
    );
  } catch (err) {
    console.error(err.response?.data?.message || err.message);
  }
};
