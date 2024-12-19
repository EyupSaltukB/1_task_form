import React from "react";
import { BiCheckCircle } from "react-icons/bi";
const Task = () => {
  return (
    <>
      <div className="d-flex justify-content-center vh-100 align-items-center">
        <div className="border text-light p-3 w-50">
          <form className="">
            {/* Purpose Area */}
            <div className="text-start">
              <label className="mb-2 fs-5">Purpose:</label>
              <br />
              <div className="d-flex gap-5">
                <div className="d-flex gap-2">
                  <input
                    type="radio"
                    className="form-check"
                    name="purpose"
                    id="client"
                  />
                  <label htmlFor="client">Client</label>
                </div>
                <div className="d-flex gap-2">
                  <input
                    type="radio"
                    className="form-check"
                    name="purpose"
                    id="group"
                  />
                  <label htmlFor="group">Group</label>
                </div>
                <div className="d-flex gap-2">
                  <input
                    type="radio"
                    className="form-check"
                    name="purpose"
                    id="agent"
                  />
                  <label htmlFor="agent">Agent</label>
                </div>
              </div>
            </div>

            {/* Label & Key Area */}
            <div className="mt-3">
              <div className="mb-3 text-start">
                <label className="form-label fs-5">Label:</label>
                <input className="form-control bg-dark text-light" />
                <p className="text-secondary mt-1">
                  Please write label to here.
                </p>
              </div>

              <div className="mb-3 text-start">
                <label className="form-label fs-5">Key:</label>
                <input className="form-control bg-dark text-light" />
                <p className="text-secondary mt-1">Please write key to here.</p>
              </div>
            </div>

            {/* Status Area */}
            <div className="text-start mb-5">
              <label className="mb-2 fs-5">Status: </label>
              <div className="d-flex gap-5">
                <div className="d-flex gap-2">
                  <input type="radio" id="active" name="status" />
                  <label htmlFor="active">Active</label>
                </div>
                <div className="d-flex gap-2">
                  <input type="radio" id="passive" name="status" />
                  <label htmlFor="passive">Passive</label>
                </div>
              </div>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="btn btn-success w-100 btn-lg d-flex justify-content-center align-items-center gap-1 "
            >
              Save
              <BiCheckCircle style={{fontSize: 23}}/>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Task;
