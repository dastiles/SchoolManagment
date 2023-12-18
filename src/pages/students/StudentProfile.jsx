import Topnavbar from "../../components/header/Topnavbar";
import Siderbar from "../../components/header/siderbar";

const StudentProfile = () => {
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
            {/* <img className="logo-compact" src="./images/logo-text.png" alt="" /> */}
            {/* <div className="brand-title text-black">EduSync</div> */}
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
          <div className="row">
            <div className="col-xl-4 col-lg-12 col-sm-12">
              <div className="card overflow-hidden">
                <div
                  className="text-center p-3 overlay-box "
                  style={{ backgroundImage: "url('./images/big/img1.jpg')" }}
                >
                  <div className="profile-photo">
                    <img
                      src="images/profile/profile.png"
                      width="100"
                      className="img-fluid rounded-circle"
                      alt=""
                    />
                  </div>
                  <h3 className="mt-3 mb-1 text-white">Deangelo Sena</h3>
                  <p className="text-white mb-0">Senior Manager</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between">
                    <span className="mb-0">Student Gender</span>{" "}
                    <strong className="text-muted">Female </strong>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    <span className="mb-0">Years Old</span>{" "}
                    <strong className="text-muted">Age: 24 </strong>
                  </li>
                </ul>
                <div className="card-footer border-0 mt-0">
                  <button className="btn btn-primary btn-lg btn-block">
                    <i className="fa fa-bell-o"></i> Registered
                  </button>
                </div>
              </div>
            </div>

            <div className="col-xl-7 col-lg-12 col-sm-12">
              <div className="card">
                <div className="card-header border-0 pb-0">
                  <h2 className="card-title">about me</h2>
                </div>
                <div className="card-body pb-0">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex px-0 justify-content-between">
                      <strong>Gender</strong>
                      <span className="mb-0">Male</span>
                    </li>
                    <li className="list-group-item d-flex px-0 justify-content-between">
                      <strong>Education</strong>
                      <span className="mb-0">PHD</span>
                    </li>
                    <li className="list-group-item d-flex px-0 justify-content-between">
                      <strong>Designation</strong>
                      <span className="mb-0">Se. Professor</span>
                    </li>
                    <li className="list-group-item d-flex px-0 justify-content-between">
                      <strong>Operation Done</strong>
                      <span className="mb-0">120</span>
                    </li>
                  </ul>
                </div>
                <div className="card-footer pt-0 pb-0 text-center">
                  <div className="row">
                    <div className="col-4 pt-3 pb-3 border-end">
                      <h3 className="mb-1 text-primary">150</h3>
                      <span>Projects</span>
                    </div>
                    <div className="col-4 pt-3 pb-3 border-end">
                      <h3 className="mb-1 text-primary">140</h3>
                      <span>Uploads</span>
                    </div>
                    <div className="col-4 pt-3 pb-3">
                      <h3 className="mb-1 text-primary">45</h3>
                      <span>Tasks</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
