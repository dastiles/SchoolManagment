import Dashboard from "./pages/main/dashboard";
import { Route, Routes } from "react-router-dom";
import ViewTeachers from "./pages/teachers/ViewTeachers";
import AddTeachers from "./pages/teachers/AddTeachers";
import ViewStudents from "./pages/students/ViewStudents";
import AddStudents from "./pages/students/AddStudents";
import ViewStuff from "./pages/stuff/ViewStuff";
import AddStuff from "./pages/stuff/AddStuff";
import Login from "./pages/auth/login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EditTeachers from "./pages/teachers/EditTeacher";
import StudentProfile from "./pages/students/StudentProfile";
import EditStudents from "./pages/students/EditStudent";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Dashboard />} />
        {/* teacher routes */}
        <Route path="/teacher" element={<ViewTeachers />} />
        <Route path="/addteacher" element={<AddTeachers />} />
        <Route path="/editteacher/:id" element={<EditTeachers />} />
        <Route path="/student" element={<ViewStudents />} />
        <Route path="/addstudent" element={<AddStudents />} />
        <Route path="/editstudent/:id" element={<EditStudents />} />
        <Route path="/profile/:id" element={<StudentProfile />} />
        <Route path="/stuff" element={<ViewStuff />} />
        <Route path="/addstuff" element={<AddStuff />} />
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default App;
