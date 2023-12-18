import { useEffect } from "react";
import { studentState } from "../store/store";

const CenterModal = (props) => {
  // const { studentName } = studentState();
  // eslint-disable-next-line react/prop-types
  console.log(props.student);

  return (
    <div className="modal fade" id="exampleModalCenter">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Delete</h5>
            <button type="button" className="close" data-bs-dismiss="modal">
              <span>&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>Are sure you want to delete {props.student.lastName}?</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary light"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => console.log(props.student.lastName)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CenterModal;
