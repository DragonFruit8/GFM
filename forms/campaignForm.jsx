import React, {useState} from 'react';

function CampaignForm () {
  const [user, setUser] = useState ({
    userName: '',
    dob: '',
    password: '',
    verifyPassword: '',
  });

  const handleChange = e => {
    const {name, value} = e.target;
    setUser (prevState => ({...prevState, [name]: value}));
  };

  const handleSubmit = e => {
    e.preventDefault ();
    console.log (user);
    setUser ({
      userName: '',
      dob: '',
      password: '',
      verifyPassword: '',
    });
  };
  return (
    <form onSubmit={handleSubmit} className="form-control">
      <input
        id='userName'
        name="userName"
        className="form-control"
        type="text"
        value={user.userName}
        onChange={handleChange}
      />
      <input
        id='dob'
        name="dob"
        className="form-control"
        type="date"
        value={user.dob}
        onChange={handleChange}
      />
      <input
        id='password'
        name="password"
        className="form-control"
        type="text"
        value={user.password}
        onChange={handleChange}
      />
      <input
        id='verifyPassword'
        name="verifyPassword"
        className="form-control"
        type="text"
        value={user.verifyPassword}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default CampaignForm;
