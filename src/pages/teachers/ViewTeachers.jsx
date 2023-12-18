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
import { setTeacherdetails } from "../../store/store";

const ViewTeachers = () => {
  const [teacher, setTeacher] = useState([]);
  const [teacherId, setTeacherId] = useState("");

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
    setTeacherdetails(
      teacherId`${firstName} + ${lastName}`,
      `/api/v1/teachers/delete-teacher?teacherId=${teacherId}&schoolId=${1}`
    );
  };
  console.log(teacher, "still null");
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

        <div className="content-body my-4 px-4">
          <CenterModal teacherId={teacherId} />
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

export default ViewTeachers;
