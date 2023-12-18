/* eslint-disable no-unused-vars */
import {
  Button,
  Checkbox,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import Topnavbar from "../../components/header/Topnavbar";
import Siderbar from "../../components/header/siderbar";
import { useEffect, useRef, useState } from "react";
import api, { authState, decodeTokens } from "../../auth/auth";
import { Link, useNavigate } from "react-router-dom";
import { MdDelete, MdEdit } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import CenterModal from "../../components/CenterModal";

const Grades = () => {
  const [teacher, setTeacher] = useState([]);
  const [teacherDetails, setTeacherDetails] = useState([]);

  // Selected students state
  const [selectedStudents, setSelectedStudents] = useState([]);

  // Pagination state
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Delete selected students
  const handleDeleteSelectedStudents = () => {
    const updatedStudents = students.filter(
      (student) => !selectedStudents.includes(student.id)
    );
    setStudents(updatedStudents);
    setSelectedStudents([]);
  };

  // const handleChangePage = (event, newPage) => {
  //   setPage(newPage);
  // };

  // const handleChangeRowsPerPage = (event) => {
  //   setRowsPerPage(parseInt(event.target.value, 10));
  //   setPage(0);
  // };

  const handleSelectStudent = (studentId) => {
    if (selectedStudents.includes(studentId)) {
      setSelectedStudents(selectedStudents.filter((id) => id !== studentId));
    } else {
      setSelectedStudents([...selectedStudents, studentId]);
    }
  };

  const isSelected = (studentId) => selectedStudents.includes(studentId);

  const navigate = useNavigate();

  const schoolIdRef = useRef(null);

  useEffect(() => {
    const getTeachers = async () => {
      try {
        await api
          .get(`/api/v1/teachers?schoolId=${schoolIdRef.current}`)
          .then((response) => {
            setTeacher(response.data.content);
            console.log(response.data.content);
            console.log(teacher);
          })
          .catch((err) => {
            console.log(err.response.data.message, "the error");
          });
      } catch (error) {
        console.log(error);
      }
    };
    if (!authState.accessToken) {
      navigate("/login");
      navigate(0);
    } else {
      schoolIdRef.current = decodeTokens().accessTokenData.schoolId;
      getTeachers();
    }
  }, [setTeacher]);

  const handleDelete = (teacher) => {
    let { teacherId, firstName, lastName } = teacher;
    setTeacherDetails({
      name: `${firstName} ${lastName}`,
      url: `/api/v1/teachers/delete-teacher?teacherId=${teacherId}&schoolId=${authState.schoolId}`,
    });
    console.log(teacher);
  };
  console.log(teacherDetails, "still null");
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

        <div className="content-body my-4 px-4">
          <CenterModal member={teacherDetails} />
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Teachers</h4>
              </div>
              <div className="card-body">
                <TableContainer className="w-100">
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>
                          <Checkbox
                            checked={selectedStudents.length === teacher.length}
                            onChange={() => {
                              if (selectedStudents.length === teacher.length) {
                                setSelectedStudents([]);
                              } else {
                                setSelectedStudents(
                                  teacher.map((student) => student.id)
                                );
                              }
                            }}
                          />
                        </TableCell>
                        <TableCell>Firstname</TableCell>
                        <TableCell>Lastame</TableCell>
                        <TableCell>Subject</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Phone Number</TableCell>
                        <TableCell>Gender</TableCell>
                        <TableCell>Address</TableCell>
                        <TableCell>Action</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {teacher
                        .slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        )
                        .map((teacher) => (
                          <TableRow key={teacher.id}>
                            <TableCell>
                              <Checkbox
                                checked={isSelected(teacher.id)}
                                onChange={() => handleSelectStudent(teacher.id)}
                              />
                            </TableCell>
                            <TableCell>{teacher.firstName}</TableCell>
                            <TableCell>{teacher.lastName}</TableCell>
                            <TableCell>{teacher.title}</TableCell>
                            <TableCell>{teacher.email}</TableCell>
                            <TableCell>{teacher.phoneNumber}</TableCell>
                            <TableCell>{teacher.gender}</TableCell>
                            <TableCell>{teacher.address}</TableCell>
                            <TableCell>
                              <Link
                                reloadDocument
                                to={`/editteacher/${teacher.teacherId}`}
                              >
                                <IconButton aria-label="delete">
                                  <FaEye />
                                </IconButton>
                              </Link>

                              <Link
                                reloadDocument
                                to={`/editteacher/${teacher.teacherId}`}
                              >
                                <IconButton aria-label="delete">
                                  <MdEdit />
                                </IconButton>
                              </Link>

                              <IconButton
                                aria-label="delete"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModalCenter"
                                onClick={() => handleDelete(teacher)}
                              >
                                <MdDelete />
                              </IconButton>
                            </TableCell>
                          </TableRow>
                        ))}
                    </TableBody>
                  </Table>
                </TableContainer>

                <TablePagination
                  rowsPerPageOptions={[5, 10, 25]} // Customize the number of rows per page options
                  component="div"
                  count={1}
                  rowsPerPage={1}
                  page={1}
                  onPageChange={() => {}}
                  onRowsPerPageChange={() => {}}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grades;
