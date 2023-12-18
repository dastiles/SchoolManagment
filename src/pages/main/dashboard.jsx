/* eslint-disable no-mixed-spaces-and-tabs */

import { useEffect } from "react";
import Topnavbar from "../../components/header/Topnavbar";
import Siderbar from "../../components/header/siderbar";
import { authState, decodeTokens } from "../../auth/auth";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!authState.accessToken) {
      navigate("/login");
      navigate(0);
    }
  }, [navigate]);

  return (
    <div>
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
          {/* <!-- row --> */}
          <div className="row">
            <div className="col-xl-4 col-lg-6 col-sm-6">
              <div className="widget-stat card bg-danger ">
                <div className="card-body p-4">
                  <div className="media">
                    <span className="me-3">
                      <i className="la la-dollar"></i>
                    </span>
                    <div className="media-body text-white">
                      <p className="mb-1">Fees Collect</p>
                      <h3 className="text-white">250$</h3>
                      <div className="progress mb-2 bg-secondary">
                        <div
                          className="progress-bar progress-animated bg-light"
                          style={{ width: "50%" }}
                        ></div>
                      </div>
                      <small>30% Increase in 30 Days</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-6 col-sm-6">
              <div className="widget-stat card">
                <div className="card-body p-4">
                  <h4 className="card-title">Total Students</h4>
                  <h3>3280</h3>
                  <div className="progress mb-2">
                    <div
                      className="progress-bar progress-animated bg-primary"
                      style={{ width: "50%" }}
                    ></div>
                  </div>
                  <small>80% Increase in 20 Days</small>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-sm-6">
              <div className="widget-stat card">
                <div className="card-body p-4">
                  <h4 className="card-title">Total Teachears</h4>
                  <h3>245</h3>
                  <div className="progress mb-2">
                    <div
                      className="progress-bar progress-animated bg-warning"
                      style={{ width: "50%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
