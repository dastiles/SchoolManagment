import { useNavigate } from "react-router-dom";
import api from "../auth/auth";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

const CenterModal = (props) => {
  console.log(props.member.name);
  const navigate = useNavigate();
  const handleDelete = async () => {
    try {
      await api
        .delete(props.member.url)
        .then((response) => {
          console.log(response.data);
          toast.success("Succesfully Deleted");
          navigate("/teacher");
          navigate(0);
        })
        .catch((err) => {
          toast.error(err.response.data.message);
          console.log(err.response.data.message, "the error");
        });
      // navigate(0);
    } catch (error) {
      console.log(error);
    }
  };

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
            <p>Are sure you want to delete {props.member.name}?</p>
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
              data-bs-dismiss="modal"
              onClick={() => handleDelete()}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

CenterModal.propTypes = {
  member: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default CenterModal;
