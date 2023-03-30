import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { FormRow, Alert } from "../../components";
import { useAppContext } from "../../context/appContext";

const AddJob = () => {
  const {
    showAlert,
    displayAlert,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
    isEditing,
  } = useAppContext();

  const handleJobInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(`${name}: ${value}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!position || !company || !jobLocation) {
      displayAlert();
    }
  };

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h3>{isEditing ? "edit job" : "add job"}</h3>
        {showAlert && <Alert />}
        <div className="form-center">
          <FormRow
            type="text"
            name="position"
            value={position}
            handleChange={handleJobInput}
          />
          <FormRow
            type="text"
            name="company"
            value={company}
            handleChange={handleJobInput}
          />
          <FormRow
            type="text"
            labelText="job location"
            name="jobLocation"
            value={jobLocation}
            handleChange={handleJobInput}
          />

          <div className="form-row">
            <label htmlFor="jobType" className="form-label">
              job  type
            </label>
            <select name="jobType" value={jobType} onChange ={handleJobInput} className='form-select'></select>
          </div>

          <div className="btn-container">
            <button type="submit" className="btn btn-block submit-btn" onClick={handleSubmit}>
              submit
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};
export default AddJob;
