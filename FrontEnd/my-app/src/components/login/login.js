import './login.css';
import { useState } from "react";
import { setToken } from "../utils/authoperations";
import { setNameinls } from "../utils/authoperations";
import {useHistory} from "react-router-dom";
// import "./homepage.css";

import fb from '../signup/socialmediaimages/facebook.svg';
import insta from '../signup/socialmediaimages/instagram.svg';
import lk from '../signup/socialmediaimages/linkedin.svg';
import {Link} from "react-router-dom";
// import lock from "../signup/socialmediaimages/padlock.svg";
function Login(){
    // const [loginstatus,setstatus]=useState(false)
    const history = useHistory()
    const [loginmsg,setmsg]=useState('')
    const login= async elem=>{
        try{
            elem.preventDefault();
            const response = await fetch("http://localhost:5000/login", {
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
                    email:elem.target.email.value,
                    password:elem.target.password.value
                }) 
            });
            const data=await response.json();
            if (data.data==='error'){
                // setstatus(true)
                setmsg(data.message) 
            }else{
                console.log("token",await data)
                setToken(data.data) 
                setNameinls(data.name)
                history.push('/creatingorder')
                
            }
        }catch(e){
            console.log(e)
        }
    }
    return(
        <div className="container">
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
                    <button className="rightbtnn">Sign In</button>
                    </div>
                </div>
                
            </div>
        
            <div className="container1"> 
                <div className="parent1">
                    <div className="child1">
                        <h1 className="h1">Laundry Service</h1>
                        <p>Doorstep Wash and Drycelan Service</p>
                        <p1>Dont Have An Account?</p1><br/>
                        <Link to="/signup"><button className="register">Register</button></Link>
                    </div>
            
                </div>
                <div className="line">
                    <p></p>
                </div>
                <div className="parent2">
                    <div className="child2">
                        <p3>SIGN IN</p3>
                        <form onSubmit={elem=>login(elem)}>
                            <label className="label">Mobile/Email</label><br/>
                            <input name="email" className="input" type="text" /><br/>
                            <p>{loginmsg}</p>
                            <label className="label">password</label><br/>
                            <input name="password" className="input" type="password" />
                            {/* <img src={lock} alt="lockicon"/> */}
                            <h6>forgot password?</h6>
                            <button className="signupbtn">sign in</button>
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
                    <p className="home">Carrer</p>
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
export default Login;