import { useState } from "react";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comments, setComments] = useState("");

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleCommentsChange = (e) => setComments(e.target.value);

  const submitHandler = (event) => {
    event.preventDefault();

    // Record comments in some way...
    // TODO
    const entry = { name, email, comments };
    console.log(entry);

    setName("");
    setEmail("");
    setComments("");
  };

  return (
    <div>
      <h1>Contact us!</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label>Name</label>
          <input type="text" value={name} onChange={handleNameChange} />
        </div>
        <div>
          <label>Email</label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label>Comments</label>
          <textarea
            type="text"
            value={comments}
            onChange={handleCommentsChange}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
          <button type="reset">Clear</button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
