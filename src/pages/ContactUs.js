import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    fullName: "",
    phone: "",
    email: "",
    query: "",
  });
  const InputEvent = (event) => {
    const { name, value } = event.target;
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };
  const [onsubmit, setOnsubmit] = useState(true);

  const FormSubmit = (e) => {
    e.preventDefault();
    //   ${data.fullName} ${data.phone} ${data.email} ${data.query}
    setOnsubmit(false);
  };
  return (
    <>
      {onsubmit ? (
        <div className="queryform">
          <div className="my-10">
            <h1 className="text-center">Get in touch!</h1>
          </div>
          <div className="container contact_div">
            <div className="row">
              <div className="col-md-12 col-10 mx-auto">
                <form onSubmit={FormSubmit}>
                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">
                      Full name
                    </label>
                    <input
                      required
                      type="text"
                      class="form-control"
                      id="exampleFormControlInput1"
                      name="fullName"
                      value={data.fullName}
                      onChange={InputEvent}
                      placeholder="Enter your name"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">
                      Phone number
                    </label>
                    <input
                      required
                      type="number"
                      class="form-control"
                      id="exampleFormControlInput1"
                      name="phone"
                      value={data.phone}
                      onChange={InputEvent}
                      placeholder="0123739387"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">
                      Email address
                    </label>
                    <input
                      required
                      type="email"
                      class="form-control"
                      id="exampleFormControlInput1"
                      name="email"
                      value={data.email}
                      onChange={InputEvent}
                      placeholder="name@example.com"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">
                      Query
                    </label>
                    <textarea
                      required
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      name="query"
                      value={data.query}
                      onChange={InputEvent}
                      placeholder="Enter your query"
                      rows="3"
                    ></textarea>
                  </div>
                  <div class="col-12">
                    <button class="btn btn-outline-primary" type="submit">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="contactOnsubmit">
          <h1>
            Thank <br />
            You!
          </h1>
          <hr />
          <p>
            Your response has been recorded. We will get <br /> in touch with
            you shortly.
          </p>
        </div>
      )}
    </>
  );
};

export default Contact;
