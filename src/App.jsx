import Dashboard from "./pages/main/dashboard";
import { Route, Routes } from "react-router-dom";
import ViewTeachers from "./pages/teachers/ViewTeachers";
import AddTeachers from "./pages/teachers/AddTeachers";
import ViewStudents from "./pages/students/ViewStudents";
import AddStudents from "./pages/students/AddStudents";
import ViewStuff from "./pages/stuff/ViewStuff";
import AddStuff from "./pages/stuff/AddStuff";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/teacher" element={<ViewTeachers />} />
      <Route path="/addteacher" element={<AddTeachers />} />
      <Route path="/student" element={<ViewStudents />} />
      <Route path="/addstudent" element={<AddStudents />} />
      <Route path="/stuff" element={<ViewStuff />} />
      <Route path="/addstuff" element={<AddStuff />} />
    </Routes>
  );
};

export default App;
