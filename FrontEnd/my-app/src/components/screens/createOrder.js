import React from "react";
import { useHistory, Link } from "react-router-dom";
import "./total.css";
import homes from "./reqimg/homes.png";
import hamberg from "./reqimg/hamberg.png";
import plus from "./reqimg/plus.png";
import image1 from "./reqimg/userphoto.jpg";
import {getNameinls} from '../utils/authoperations';
function Creatingorder() {
  const history = useHistory();

  function addorder() {
    console.log("creating Orders");
    history.push("/orderPage");
  }
  return (
    <div>
      <div class="container-fluid">
        <div className="ssorderhead">
          <div className="ssorderdisplayhead">
            <div className="ssorderlefttext">
              <h2>LAUNDRY</h2>
            </div>
            <div className="ssorderHPC">
              <p></p>
              <h6>Pricing</h6>
              <p></p>
              <h6>Carrer</h6>
            </div>
            <div className="orderrightbutton">
              <img src={image1} alt="userimage" />
              <h2 className="ssorderrightname">{getNameinls()}</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div className="ssordersbody">
            <div className="ssordersidebar1">
              <div className="ssorderhome">
                <img src={homes} alt="home" />
              </div>
              <div className="ssorderlist">
                <img src={plus} alt="more" />
              </div>
              <div className="ssordermore">
              <Link to="/order"><img src={hamberg} alt="list" /></Link>
              </div>
            </div>

            <div class="col-lg-11">
              <div class="row ssorders111">
                <div class="col-lg-2">
                  <b>Create Order</b>
                </div>
                <div class="col-lg-8"></div>
                <div class="col-lg-2">
                  <div class="form-group seabar">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Search"
                    />
                  </div>
                </div>
              </div>
              <div class="createorderb">
                <p> No Orders available </p>{" "}
                <button class="btn btn-light sscreatebtns" onClick={addorder}>
                  Create
                </button>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="ssorderfooter">
        <p>2021 &copy; Laundry</p>
      </div>
    </div>
  );
}
export default Creatingorder;
