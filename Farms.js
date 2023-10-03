import React from "react";
import './farm.css';

const Forms = () => {
  return (
    <div className="form">
      <h1 className="heading">Worthy Hack</h1>
      <form className="farm-loan col-lg-6">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Name
          </label>
          <input
            placeholder="Enter your name"
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
          placeholder="Enter Your Email"
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Age
          </label>
          <input
          placeholder="Enter Your Age"
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Phone number
          </label>
          <input
          placeholder="Enter your Phone No"
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
          placeholder="Enter Your Password"
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Date Of Birth
          </label>
          <input
          placeholder="Enter your DOB"
            type="date"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            address
          </label>
          <textarea rows={4} cols={4}
          placeholder="Enter your Address"
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Aadhar Card
          </label>
          <input
            type="file"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Land Documents
          </label>
          <input
            type="file"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            IT Returns
          </label>
          <input
            type="file"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div><div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Crop Details
          </label>
          <textarea rows={4} cols={4}
          placeholder="Tell us about your crops"
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <button type="submit" class="btn btn-success">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Forms;
