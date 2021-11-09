import './signup.css';
import fb from './socialmediaimages/facebook.svg';
import insta from './socialmediaimages/instagram.svg';
import lk from './socialmediaimages/linkedin.svg';
// import { useState } from "react";
import {useHistory} from "react-router-dom";
import {Link} from "react-router-dom";
function SignUp() {
    const history=useHistory()
    const register= async elem=>{
        try{
            elem.preventDefault();
            await fetch("http://localhost:5000/sign_up", {
                method: 'POST', 
                mode: 'cors', 
                cache: 'no-cache', 
                credentials: 'same-origin', 
                headers: {
                'Content-Type': 'application/json'
                
                },
                redirect: 'follow', 
                referrerPolicy: 'no-referrer', 
                body: JSON.stringify({
                    name:elem.target.name.value,
                    email:elem.target.email.value,
                    password:elem.target.password.value,
                    address:elem.target.address.value,
                    phone:elem.target.phone.value,
                    state:elem.target.state.value,
                    district:elem.target.district.value,
                    pincode:elem.target.pincode.value,
                    
                }) 
            });
            // const data=await response.json();
            // setmsg(data.message)
            history.push("/")
            
            }
        catch(e){
            console.log(e)
        } 
    }
    return(
    <div className="signupcontainer">
        <div className="container3">
                <div className="left">
                    <h2 className="l_w">LAUNDRY</h2>
                </div>
                
                <div className="right">
                    
                    
                    <div className="line1"><p></p></div>
                    <div className="right_div">
                    <p className="r_w" >Home</p>
                    </div>
                    
                    <div className="line1"><p></p></div>
                    <div className ="right_div">
                    <p className="r_w">Pricing</p>
                    </div>
                    
                    <div className="line1"><p></p></div>
                    <div className="right_div">
                    <p className="r_w">Career</p>
                    </div>
                    <div className="right_div">
                    <Link to="/"><button className="rightbtnn">Sign In</button></Link>
                    </div>
                </div>
                
        </div>
        <div className="signupbody_c">
            <div className="p1">
                <div className="c1">
                    <h1>Laundry Service</h1>
                    <p3>Doorstep Wash &</p3><br/>
                    <div className="abc">
                    <p2>Dryclean Service</p2><br/>
                    </div>
                    <div className="account"></div>
                    <p1>Already Have Account</p1><br/>
                    <Link to="/"><button className="signupinsignin">Sign In</button></Link>
                </div>
            </div>
            {/* <p className="hr"></p> */}
            <div className="p2">
                <div className="c2">
                <h1>REGISTER</h1>
                    <form className="sign_form" onSubmit={elem=>register(elem)}>
                        <div className="sf_p">
                        <div className="sf_c1"> 
                        <label className="label">Name</label><br/>
                        <input className="f_input" type="name" name="name" ></input><br/>
                        <label className="label">Phone</label><br/>
                        <input className="f_input" type="phone" name="phone" ></input><br/>
                        <label className="label">District</label><br/>
                        <input className="f_input" type="text" name="district"></input><br/>
                        <label className="label">Pincode</label><br/>
                        <input className="f_input" type="pincode" name="pincode" ></input><br/>
                        
                        </div>
                        <div className="sf_c2">
                        <label className="label">Email</label><br/>
                        <input className="f_input" type="email" name="email" ></input><br/>
                        <label className="label">State</label><br/>
                        <input className="f_input" type="text" name="state" ></input><br/>
                        <label className="label">Address</label><br/>
                        <input className="f_input" type="address" name="address"></input><br/>
                        <label className="label">Password</label><br/>
                        <input className="f_input" type="password" name="password" ></input><br/>
                        </div>
                        </div>
                        <div className="sf_c3">
                        <input  type="checkbox" id="tc" name="tc" value="Bike" className="checkbox"></input>
                        <label for="tc" > I agree to Terms & Conditions receving marketing and promotional materials </label>
                        </div> 
                        <div className="signupbutton">
                        <button type="submit" className="signupbtn">Register</button>
                        </div>
                    </form>
                </div>
                
            </div>
        </div> 
        <hr/>
            <div className="container2">
                
                    <p className="footerpara">Now Refer & Earn &#x20B9;500 for every referral*</p>
                    <p className="terms">*Terms and conditions will be applied</p>
                <div className="footer">
                <div className="c_parent1">
                    <p className="aboutus">ABOUT US</p>
                    <p className="doorstep">Doorstep Wash & Dryclean Service</p>
                </div>
                <div className="c_parent2">
                    <p className="home">Home</p>
                    <p className="signin">Sign In</p>
                    <p className="signin">Register</p>
                </div>
                <div className="c_parent2">
                    <p className="home">Pricing</p>
                </div >
                <div className="c_parent2">
                    <p className="home">Career</p>
                    <p className="signin">Blogs</p>
                    <p className="signin">Create</p>
                </div>
                <div className="c_parent2">
                    <p className="home">Contact</p>
                </div>
                <div className="c_parent3" >
                    <p className="aboutus">SOCIAL MEDIA</p>
                    <div className="socialmediaimages">
                    <img src={fb} alt="fb"/> <img src={insta} alt="insta"/> <img src={lk} alt="lk"/>
                    </div>
                </div>
                </div>
            </div> 
            <div className="footer1">
                <p class="lastpara">2021 &copy; Laundry</p> 
            </div>
    </div>
  )
  }
  
  export default SignUp;