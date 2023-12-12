/* eslint-disable no-mixed-spaces-and-tabs */

import Topnavbar from "../../components/header/Topnavbar";
import Siderbar from "../../components/header/siderbar";

const Dashboard = () => {
  return (
    <div>
      <Siderbar />

      <div id="main-wrapper">
        <h1>ert</h1>
        {/*  
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
        </div> */}

        <Topnavbar />

        <div className="content-body">
          mjjijji
          {/* <!-- row --> 

          <div className="container-fluid">
            {/* <!-- Add Order -->  

            <div className="modal fade" id="addOrderModalside">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Create Project</h5>
                    <button
                      type="button"
                      className="close"
                      data-bs-dismiss="modal"
                    >
                      <span>&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="form-group">
                        <label className="text-black font-w500">
                          Project Name
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="form-group">
                        <label className="text-black font-w500">Deadline</label>
                        <input type="date" className="form-control" />
                      </div>
                      <div className="form-group">
                        <label className="text-black font-w500">
                          Client Name
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="form-group">
                        <button type="button" className="btn btn-primary">
                          CREATE
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-6">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="card fun">
                      <div className="card-body">
                        <div className="media align-items-center">
                          <div className="media-body me-3">
                            <h2 className="num-text text-black font-w600">
                              78
                            </h2>
                            <span className="fs-14">Total Project Handled</span>
                          </div>
                          <svg
                            width="36"
                            height="36"
                            viewBox="0 0 36 36"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M34.4221 13.9831C34.3342 13.721 34.1756 13.4884 33.9639 13.3108C33.7521 13.1332 33.4954 13.0175 33.2221 12.9766L23.6491 11.5141L19.3531 2.36408C19.232 2.10638 19.04 1.88849 18.7996 1.73587C18.5592 1.58325 18.2803 1.5022 17.9956 1.5022C17.7108 1.5022 17.432 1.58325 17.1916 1.73587C16.9512 1.88849 16.7592 2.10638 16.6381 2.36408L12.3421 11.5141L2.76908 12.9766C2.49641 13.0181 2.24048 13.1341 2.02943 13.3117C1.81837 13.4892 1.66036 13.7215 1.57277 13.9831C1.48517 14.2446 1.47139 14.5253 1.53293 14.7941C1.59447 15.063 1.72895 15.3097 1.92158 15.5071L8.89808 22.6501L7.24808 32.7571C7.20306 33.0345 7.23685 33.3189 7.34561 33.578C7.45437 33.8371 7.63373 34.0605 7.86325 34.2226C8.09277 34.3847 8.36321 34.4791 8.64377 34.495C8.92432 34.5109 9.20371 34.4477 9.45008 34.3126L18.0001 29.5906L26.5501 34.3126C26.7965 34.4489 27.0762 34.5131 27.3573 34.4978C27.6385 34.4826 27.9097 34.3885 28.1399 34.2264C28.37 34.0643 28.55 33.8406 28.659 33.5811C28.7681 33.3215 28.8019 33.0365 28.7566 32.7586L27.1066 22.6516L34.0786 15.5071C34.2703 15.3091 34.4038 15.0622 34.4644 14.7933C34.525 14.5245 34.5103 14.2441 34.4221 13.9831Z"
                              fill="#2953E8"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="card fun">
                      <div className="card-body">
                        <div className="media align-items-center">
                          <div className="media-body me-3">
                            <h2 className="num-text text-black font-w600">
                              214
                            </h2>
                            <span className="fs-14">Contacts You Have</span>
                          </div>
                          <svg
                            width="36"
                            height="36"
                            viewBox="0 0 36 36"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M17.8936 22.4999C23.6925 22.4999 28.3936 17.7989 28.3936 11.9999C28.3936 6.20095 23.6925 1.49994 17.8936 1.49994C12.0946 1.49994 7.39355 6.20095 7.39355 11.9999C7.39355 17.7989 12.0946 22.4999 17.8936 22.4999Z"
                              fill="#2953E8"
                            />
                            <path
                              d="M29.5606 21.3344C29.2171 20.9909 28.8511 20.6699 28.4761 20.3564C27.216 21.96 25.6079 23.2562 23.7734 24.1472C21.9389 25.0382 19.926 25.5007 17.8865 25.4996C15.8471 25.4986 13.8346 25.0342 12.001 24.1414C10.1674 23.2486 8.56061 21.9507 7.30209 20.3459C5.4471 21.8906 3.95587 23.8256 2.9348 26.013C1.91373 28.2003 1.38799 30.586 1.39509 32.9999C1.39509 33.3978 1.55313 33.7793 1.83443 34.0606C2.11573 34.3419 2.49727 34.4999 2.89509 34.4999H32.8951C33.2929 34.4999 33.6744 34.3419 33.9557 34.0606C34.2371 33.7793 34.3951 33.3978 34.3951 32.9999C34.4005 30.8324 33.976 28.6854 33.1461 26.683C32.3163 24.6807 31.0976 22.8627 29.5606 21.3344Z"
                              fill="#2953E8"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="card fun">
                      <div className="card-body">
                        <div className="media align-items-center">
                          <div className="media-body me-3">
                            <h2 className="num-text text-black font-w600">
                              93
                            </h2>
                            <span className="fs-14">Total Unfinished Task</span>
                          </div>
                          <svg
                            width="36"
                            height="36"
                            viewBox="0 0 36 36"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 1.5H6C3.51472 1.5 1.5 3.51472 1.5 6V29.8125C1.5 32.2977 3.51472 34.3125 6 34.3125H12C14.4853 34.3125 16.5 32.2977 16.5 29.8125V6C16.5 3.51472 14.4853 1.5 12 1.5Z"
                              fill="#2953E8"
                            />
                            <path
                              d="M30 1.5H24C21.5147 1.5 19.5 3.51472 19.5 6V12C19.5 14.4853 21.5147 16.5 24 16.5H30C32.4853 16.5 34.5 14.4853 34.5 12V6C34.5 3.51472 32.4853 1.5 30 1.5Z"
                              fill="#2953E8"
                            />
                            <path
                              d="M30 19.5H24C21.5147 19.5 19.5 21.5147 19.5 24V30C19.5 32.4853 21.5147 34.5 24 34.5H30C32.4853 34.5 34.5 32.4853 34.5 30V24C34.5 21.5147 32.4853 19.5 30 19.5Z"
                              fill="#2953E8"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="card fun">
                      <div className="card-body">
                        <div className="media align-items-center">
                          <div className="media-body me-3">
                            <h2 className="num-text text-black font-w600">
                              12
                            </h2>
                            <span className="fs-14">Unread Messages</span>
                          </div>
                          <svg
                            width="46"
                            height="46"
                            viewBox="0 0 46 46"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M34.4998 1.91666H11.4998C8.95911 1.9197 6.52332 2.93035 4.72676 4.72691C2.93019 6.52348 1.91955 8.95927 1.9165 11.5V26.8333C1.91929 29.0417 2.68334 31.1816 4.07988 32.8924C5.47642 34.6031 7.42004 35.7801 9.58317 36.225V42.1667C9.58312 42.5137 9.67727 42.8542 9.85558 43.1518C10.0339 43.4495 10.2897 43.6932 10.5956 43.8569C10.9016 44.0206 11.2462 44.0982 11.5928 44.0814C11.9394 44.0645 12.2749 43.9539 12.5636 43.7613L23.5748 36.4167H34.4998C37.0406 36.4136 39.4764 35.403 41.2729 33.6064C43.0695 31.8098 44.0801 29.374 44.0832 26.8333V11.5C44.0801 8.95927 43.0695 6.52348 41.2729 4.72691C39.4764 2.93035 37.0406 1.9197 34.4998 1.91666ZM30.6665 24.9167H15.3332C14.8248 24.9167 14.3373 24.7147 13.9779 24.3553C13.6184 23.9958 13.4165 23.5083 13.4165 23C13.4165 22.4917 13.6184 22.0041 13.9779 21.6447C14.3373 21.2853 14.8248 21.0833 15.3332 21.0833H30.6665C31.1748 21.0833 31.6623 21.2853 32.0218 21.6447C32.3812 22.0041 32.5832 22.4917 32.5832 23C32.5832 23.5083 32.3812 23.9958 32.0218 24.3553C31.6623 24.7147 31.1748 24.9167 30.6665 24.9167ZM34.4998 17.25H11.4998C10.9915 17.25 10.504 17.0481 10.1446 16.6886C9.78511 16.3292 9.58317 15.8417 9.58317 15.3333C9.58317 14.825 9.78511 14.3375 10.1446 13.978C10.504 13.6186 10.9915 13.4167 11.4998 13.4167H34.4998C35.0082 13.4167 35.4957 13.6186 35.8551 13.978C36.2146 14.3375 36.4165 14.825 36.4165 15.3333C36.4165 15.8417 36.2146 16.3292 35.8551 16.6886C35.4957 17.0481 35.0082 17.25 34.4998 17.25Z"
                              fill="#2953E8"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-12">
                    <div className="card">
                      <div className="card-header mb-0 d-sm-flex flex-wrap d-block shadow-sm border-0 align-items-center">
                        <div className="me-auto pe-3 mb-3">
                          <h4 className="text-black fs-20 mb-sm-0 mb-2">
                            Project Created
                          </h4>
                        </div>
                        <div className="card-action card-tabs mb-3">
                          <ul
                            className="nav nav-tabs"
                            id="project"
                            role="tablist"
                          >
                            <li className="nav-item" role="presentation">
                              <a
                                className="nav-link active"
                                data-bs-toggle="tab"
                                href="#Daily"
                                role="tab"
                                aria-selected="false"
                              >
                                Daily
                              </a>
                            </li>
                            <li className="nav-item" role="presentation">
                              <a
                                className="nav-link"
                                data-bs-toggle="tab"
                                href="#Weekly"
                                role="tab"
                                aria-selected="false"
                              >
                                Weekly
                              </a>
                            </li>
                            <li className="nav-item" role="presentation">
                              <a
                                className="nav-link"
                                data-bs-toggle="tab"
                                href="#Monthly"
                                role="tab"
                                aria-selected="true"
                              >
                                Monthly
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="card-body">
                        <div className="tab-content">
                          <div
                            className="tab-pane show active"
                            id="Daily"
                            role="tabpanel"
                          >
                            <div className="d-flex align-items-center">
                              <span className="fs-36 text-black font-w600 me-4">
                                0,45%
                              </span>
                              <div>
                                <svg
                                  className="me-2"
                                  width="27"
                                  height="14"
                                  viewBox="0 0 27 14"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M0 13.435L13.435 0L26.8701 13.435H0Z"
                                    fill="#2FCA51"
                                  />
                                </svg>
                                <span>last month $563,443</span>
                              </div>
                            </div>
                            <div id="chartTimeline"></div>
                          </div>
                          <div className="tab-pane" id="Weekly" role="tabpanel">
                            <div className="d-flex align-items-center">
                              <span className="fs-36 text-black font-w600 me-4">
                                5,75%
                              </span>
                              <div>
                                <svg
                                  className="me-2"
                                  width="27"
                                  height="14"
                                  viewBox="0 0 27 14"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M0 13.435L13.435 0L26.8701 13.435H0Z"
                                    fill="#2FCA51"
                                  />
                                </svg>
                                <span>last month $563,443</span>
                              </div>
                            </div>
                            <div id="chartTimeline2"></div>
                          </div>
                          <div
                            className="tab-pane"
                            id="Monthly"
                            role="tabpanel"
                          >
                            <div className="d-flex align-items-center">
                              <span className="fs-36 text-black font-w600 me-4">
                                1,20%
                              </span>
                              <div>
                                <svg
                                  className="me-2"
                                  width="27"
                                  height="14"
                                  viewBox="0 0 27 14"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M0 13.435L13.435 0L26.8701 13.435H0Z"
                                    fill="#2FCA51"
                                  />
                                </svg>
                                <span>last month $563,443</span>
                              </div>
                            </div>
                            <div id="chartTimeline3"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-xxl-12 col-md-6">
                    <div className="card">
                      <div className="card-header border-0 shadow-sm">
                        <h4 className="fs-20 text-black font-w600">
                          Monthly Target
                        </h4>
                        <div className="dropdown">
                          <a
                            href="javascript:void(0)"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                                stroke="#575757"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                              <path
                                d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
                                stroke="#575757"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                              <path
                                d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
                                stroke="#575757"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                            </svg>
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a
                              className="dropdown-item"
                              href="javascript:void(0);"
                            >
                              Edit
                            </a>
                            <a
                              className="dropdown-item"
                              href="javascript:void(0);"
                            >
                              Delete
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="card-body text-center">
                        <div id="radialChart"></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-xxl-12 col-md-6">
                    <div className="card">
                      <div className="card-header border-0 shadow-sm">
                        <h4 className="fs-20 text-black font-w600">
                          New Clients
                        </h4>
                        <div className="dropdown">
                          <a
                            href="javascript:void(0)"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                                stroke="#575757"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                              <path
                                d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
                                stroke="#575757"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                              <path
                                d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
                                stroke="#575757"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                            </svg>
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a
                              className="dropdown-item"
                              href="javascript:void(0);"
                            >
                              Edit
                            </a>
                            <a
                              className="dropdown-item"
                              href="javascript:void(0);"
                            >
                              Delete
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="card-body text-center">
                        <canvas id="widgetChart1" className="max-h80"></canvas>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-6"></div>
            </div>
          </div> */}
        </div>

        {/* 
              <!--**********************************
            Content body end
        ***********************************-->

        <!--**********************************
            Footer start
        ***********************************-->
               */}

        <div className="footer">
          <div className="copyright">
            <p>Copyright © Designed &amp; Developed by charles 2022</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
