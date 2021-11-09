import homes from "./reqimg/homes.png";
import hamberg from "./reqimg/hamberg.png";
import plus from "./reqimg/plus.png";
import image1 from "./reqimg/userphoto.jpg";
import { Modal } from "react-bootstrap";
import React, { useState } from "react";
import Summarydetails from "./summarycontroller";

import "./total.css";
import Ordercontroller from "./orderController"; 
import { getNameinls } from "../utils/authoperations";
let totalDetails = [];
const orderhistory = { assign: new Map() };

function Orderpage() {
  const [show, setShow] = useState(false);
  // const history = useHistory();

  function Detailsaver(props) {
    orderhistory.assign.set(props.product, props.selected);
    totalDetails = [...orderhistory.assign].map(([product, selected]) => ({
      product,
      selected,
    }));
    return;
  }
  const holddatas = [
    {
      image: "shirts.jpg",
      titlek: "Shirt",
      description: "Shirts for Laundry",
    },
    {
      image: "tshirts.jpg",
      titlek: "tshirt",
      description: "tshirts for laundry ",
    },
    {
      image: "jeans.jpg",
      titlek: "jeans",
      description: "jeans for laundry",
    },
    {
      image: "boxers.jpg",
      titlek: "boxers",
      description: "boxers for laundry",
    },
    {
      image: "trouses.jpg",
      titlek: "trouses",
      description: "trouses for laundry",
    },
    {
      image: "joggers.jpg",
      titlek: "joggers",
      description: "joggers for laundry",
    },
    {
      image: "others.jpg",
      titlek: "others",
      description: "other items for laundry",
    },
  ];

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
              <h6>Career</h6>
            </div>
            <div className="ssorderrightbutton">
              <img src={image1} alt="userimage" />
              <h2 className="ssorderrightname">{getNameinls()}</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div className="ssordersbody"> 
            <div className="ssordersidebar"> 
              <div className="ssorderhome">
                <img src={homes} alt="home" />
              </div>
              <div className="ssorderlist"> 
                <img src={plus} alt="more" />
              </div>
              <div className="ssordermore">
                <img src={hamberg} alt="list" />
              </div>
            </div>

            <div class="col-lg-11">
              <div class="row orders111">
                <div class="col-lg-2">
                  <h3>
                    {" "}
                    <b>Create Order</b>
                  </h3>
                </div>
                <div class="col-lg-8"></div> 
                <div class="col-lg-2">
                  <div class="form-group seabar">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Search"
                      className="seabarinputs"
                    />
                  </div>
                </div>
              </div>
              <table class="table tottable">
                <thead className="tbhead1">
                  <tr class="table-dark ">
                    <th>Product Types</th>
                    <th>Quantity </th>
                    <th>Wash-Type</th>
                    <th>Price</th>
                    <th>Reset</th>
                  </tr>
                </thead>
                <tbody> 
                  {holddatas.map((eachprod) => (
                    <Ordercontroller
                      image={eachprod.image}
                      titlek={eachprod.titlek}
                      description={eachprod.description}
                      detailer={Detailsaver}
                    />
                  ))}
                </tbody>
              </table>
              <div class="butord">
                <button class="btn btn btn-outline-primary cancel">
                  Cancel
                </button>
                <button
                  class="btn btn btn-primary proceed"
                  onClick={() => setShow(true)}
                >
                  proceed
                </button>
              </div>
              <Modal 
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-custom-modal-styling-title ">
                  <p className="ssclosebtn">Summary</p> 
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div class="row mainadd">
                    <div class="col-lg-4">
                      <h5>Store Location</h5> 
                      <h5>JP-Nagar</h5>
                    </div>
                    <div class="col-lg-4">
                      <h5>Store Address</h5>
                      <h5>Near Bhanugudi jnc,Bhimavaram</h5>
                    </div> 
                    <div class="col-lg-4">
                      <h5>Store Phone</h5>
                      <h5>+919000080000</h5>
                    </div>
                  </div>
                  <Summarydetails totalDetails={totalDetails} />
                </Modal.Body>
              </Modal>
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

export default Orderpage;
