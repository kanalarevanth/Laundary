import React from "react";
import Summarypart from "./summaryconpart.js";
import {Link} from 'react-router-dom'
// import {useState} from 'react';
// import Modal from 'react-modal'
import {getToken} from '../utils/authoperations';

function Summarydetails(props) {
  // const history = useHistory();
  const totp = props.totalDetails
    .map((item) => item.selected.price)
    .reduce((prev, curr) => prev + curr, 0);

  const quanp = props.totalDetails
    .map((item) => item.selected.quantity)
    .reduce((prev, curr) => parseInt(prev) + parseInt(curr), 0);
  console.log("quanp", quanp);

  const article = [];
  props.totalDetails.forEach((member) => {
    article.push({ producttype: member.product, ...member.selected });
  });

  const setwashs = async () => {
    const totalprice = totp;
    const totalitems = quanp;
    const productlist = article;
    console.log(productlist, totalprice, totalitems);
    try {
      await fetch("http://localhost:5000/order", {
        method: "POST",
        mode: "cors",
        headers: { "Content-Type": "application/json", 
                  'authorization' : `Bearer ${getToken()}` },
        body: JSON.stringify({
          totalprice,
          productlist,
          totalitems,
        }),
      });
      console.log("done");
      // setpopup(true) 
    } catch (e) {
      console.log(e);
    }
  };

  
  // const [popup, setpopup] = useState(false) 
  return (
    <div>
      <p class="orddets">Order Details</p>
      {props.totalDetails.length > 0 &&
        props.totalDetails.map(
          (holder) =>
            holder.selected.quantity > 0 &&
            (holder.selected.wash ||
              holder.selected.iron ||
              holder.selected.fold ||
              holder.selected.pack) && (
              <Summarypart
                producname={holder.product}
                clicker={holder.selected}
                cost={holder.selected.price}
              />
            )
        )}

      <div class="sumdown">sub Total : {totp}</div>

      <div class="sumdown">Pick Up Charges : 90</div>

      <div class="row finpric">
        <div class="col-lg-4"></div>
        <div class="col-lg-4"></div>
        <div class="col-lg-4 ">Total :{totp + 90}</div>
      </div>
      <div>
        <h6 className="addressg">Address</h6>
      </div>
      <div className="addressallg">
        <div className="boxg">
          <div className="conteng">
            <h5 className="addresshg">Home</h5>
            <h5 className="addressdg">near srkr engg college,bhimavaram</h5>
          </div>
        </div>
        <div className="boxg">
          <div className="conteng">
            <h5 className="addresshg">other</h5>
            <h5 className="addressdg">d.no:14-3,near pvp mall,bhimavaram</h5>
          </div>
        </div>
        <div>
          <button type="button" class="btn btn-info">
            ADD NEW
          </button>
        </div>
      </div>
      <div class="confbtn"></div> 
      <Link to="/order"><button class="btn btn-primary my-3 btncon" onClick={setwashs}>
        Confirm
      </button></Link>
      {/* <button class="btn btn-primary my-3 btncon" onClick={setwashs}> 
        Confirm
      </button>  */}
      {/* <Modal isOpen={popup} className="ssforcancelorder"> 
                <div className="sssuccessfulimages">
                  <i class="fas fa-check-circle ssimageorders" ></i>
                </div>
                <div className="ssAlertheaderss"> 
                    <h3>Your order is</h3>
                    <h3 className="sssuccessfulltext">Successfull</h3>  
                </div> 
                <div className="ssalertmessage">
                    <p >You can track the delivery in the </p>
                    <p className="ssalertmsgpara">"Orders" section</p> 
                </div>
                <div className="ssalertbtnss">
                    <Link to="/order"><button onClick={() => console.log("clicked")}>Go to orders</button></Link>
                </div> 
      </Modal>  */}
    </div>
  );
}

export default Summarydetails;
