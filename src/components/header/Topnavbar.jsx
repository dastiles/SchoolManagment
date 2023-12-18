import { useEffect } from "react";
import { getAdminInfor } from "../../store/store";
import { decodeTokens } from "../../auth/auth";

const Topnavbar = () => {
  useEffect(() => {
    console.log(decodeTokens().accessTokenData);
    getAdminInfor().then((res) => console.log(res));
  });
  return (
    <div className="header">
      <div className="header-content">
        <nav className="navbar navbar-expand">
          <div className="collapse navbar-collapse justify-content-between">
            <div className="header-left">
              <div className="dashboard_bar">Dashboard</div>
            </div>
            <ul className="navbar-nav header-right">
              <li className="nav-item">
                <div className="input-group search-area d-lg-inline-flex d-none">
                  <div className="input-group-append">
                    <span className="input-group-text">
                      <a href="#">
                        <i className="flaticon-381-search-2"></i>
                      </a>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search here..."
                  />
                </div>
              </li>
              <li className="nav-item dropdown notification_dropdown">
                <a className="nav-link bell bell-link" href="#">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.23779 10.2492L4.66679 11.7064V8.30554L2.23779 10.2492Z"
                      fill="#67636D"
                    />
                    <path
                      d="M1.1665 12.327V23.3334C1.16852 23.8531 1.28817 24.3656 1.5165 24.8325L9.20134 17.15L1.1665 12.327Z"
                      fill="#67636D"
                    />
                    <path
                      d="M26.4832 24.8325C26.7115 24.3656 26.8311 23.8531 26.8332 23.3334V12.327L18.7983 17.15L26.4832 24.8325Z"
                      fill="#67636D"
                    />
                    <path
                      d="M23.3335 8.30554V11.7064L25.7625 10.2492L23.3335 8.30554Z"
                      fill="#67636D"
                    />
                    <path
                      d="M21.0492 13.0772C21.024 12.998 21.0076 12.9162 21.0002 12.8334V7.00004C21.0002 6.69062 20.8773 6.39388 20.6585 6.17508C20.4397 5.95629 20.1429 5.83337 19.8335 5.83337H8.16684C7.85742 5.83337 7.56067 5.95629 7.34188 6.17508C7.12309 6.39388 7.00017 6.69062 7.00017 7.00004V12.8334C6.99274 12.9162 6.97631 12.998 6.95117 13.0772L14.0002 17.3064L21.0492 13.0772Z"
                      fill="#67636D"
                    />
                    <path
                      d="M17.3262 3.50003L14.7292 1.4222C14.5222 1.25653 14.2651 1.16626 14 1.16626C13.7349 1.16626 13.4777 1.25653 13.2708 1.4222L10.6738 3.50003H17.3262Z"
                      fill="#67636D"
                    />
                    <path
                      d="M16.7358 18.3855L14.6008 19.6688C14.4194 19.7778 14.2117 19.8354 14 19.8354C13.7883 19.8354 13.5806 19.7778 13.3991 19.6688L11.2641 18.3855L3.16748 26.4833C3.63438 26.7117 4.14691 26.8313 4.66665 26.8333H23.3333C23.853 26.8313 24.3656 26.7117 24.8325 26.4833L16.7358 18.3855Z"
                      fill="#67636D"
                    />
                  </svg>
                  <span className="badge text-white badge-primary rounded-circle">
                    6
                  </span>
                </a>
              </li>

              <li className="nav-item dropdown header-profile">
                <a
                  className="nav-link"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  <img src="images/profile/17.jpg" width="20" alt="" />
                  <div className="header-info">
                    <span className="text-black">Peter Parkur</span>
                    <p className="fs-12 mb-0">Super Admin</p>
                  </div>
                </a>
                <div className="dropdown-menu dropdown-menu-right">
                  <a
                    href="./app-profile.html"
                    className="dropdown-item ai-icon"
                  >
                    <svg
                      id="icon-user1"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-primary"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    <span className="ms-2">Profile </span>
                  </a>
                  <a
                    href="./email-inbox.html"
                    className="dropdown-item ai-icon"
                  >
                    <svg
                      id="icon-inbox"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-success"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    <span className="ms-2">Inbox </span>
                  </a>
                  <a href="./page-login.html" className="dropdown-item ai-icon">
                    <svg
                      id="icon-logout"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-danger"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                      <polyline points="16 17 21 12 16 7"></polyline>
                      <line x1="21" y1="12" x2="9" y2="12"></line>
                    </svg>
                    <span className="ms-2">Logout </span>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Topnavbar;
