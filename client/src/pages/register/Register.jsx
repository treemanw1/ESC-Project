import React, {useState} from 'react';
import Navbar from "../../components/navbar/Navbar";
import "./register.css";

const Register= () => {

  const [user, setUser]= useState({
    "firstname":"",
    "lastname": "",
    "phonenumber": "",
    "emailaddress": "",
    "password": "",
    "confirmpassword": ""
  })

  let field, value;

  const handleInputs= (e) =>{
    console.log(e);
    field= e.target.id;
    value=e.target.value;

    setUser({... user, [field]:value});
  }

  const postData= async (e) =>{
    e.preventDefault();
    const  {firstname, lastname, phonenumber, emailaddress, password, confirmpassword }= user;

    const res= await fetch("/register", {
      method:"POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        firstname, lastname, phonenumber, emailaddress, password, confirmpassword 
      })
  });

    const data= await res.json();
    
    if(res.status===422 || !data){
      window.alert("Registration not Succesful");
      console.log("Invalid Registration");
    } else{
      window.alert("Success");
      console.log("Success");
    }


  }

  return(
    <div>
    <Navbar />
    <div className="registerContainer">
      <div className="registerChildContainer">
        <div className="heading">Help us get to know you better!</div>
        <div className="guestInfoContainer">
          {/* <div className="info">Your Information</div> */}
          <section>
      <form method="POST">
        <div>
          <label for="firstname">First Name</label>
          <input type="text" class="form-control" id="firstname" 
            value={user.firstname}
            onChange={handleInputs}/>
     
        </div>
        <div>
          <label for="lastname">Last Name</label>
          <input type="text" class="form-control" id="lastname" 
            value={user.lastame}
            onChange={handleInputs}/>
        </div>
        <div>
          <label for="phonenumber">Phone Number</label>
          <input type="text" class="form-control" id="phonenumber" 
            value={user.phonenumber}
            onChange={handleInputs}/>
        </div>
        <div>
          <label for="emailaddress">Email</label>
          <input type="email" class="form-control" id="emailaddress" 
            value={user.emailaddress}
            onChange={handleInputs}/>
        </div>
        <div>
          <label for="password">Password</label>
          <input type="password" class="form-control" id="password"
            value={user.password}
            onChange={handleInputs}/>
        </div>
        <div>
          <label for="confirmpassword">Confirm Password</label>
          <input type="password" class="form-control" id="confirmpassword"
            value={user.confirmpassword}
            onChange={handleInputs}/>
        </div>
      </form>
      </section>
          <button type="submit" className="submitButton" onClick={postData}>
              Submit
            </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Register