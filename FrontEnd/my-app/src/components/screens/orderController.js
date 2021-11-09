/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

import "./total.css";

import wash from "./reqimg/wash.png";
import washclick from "./reqimg/washclick.png";

import pack from "./reqimg/pack.png";
import packclick from "./reqimg/packclick.png";
import iron from "./reqimg/iron.png";
import ironclick from "./reqimg/ironclick.png";
import fold from "./reqimg/fold.png";
import foldclick from "./reqimg/foldclick.png";

function Ordercontroller(props) {
  const [wash1, setWash] = useState(false);
  const [iron1, setIron] = useState(false);
  const [pack1, setPack] = useState(false);
  const [fold1, setFold] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState("---");
  const [Type, setType] = useState(0);

  const washCost = 25;
  const ironCost = 15;
  const foldCost = 10;
  const packCost = 25;

  function washtouch() {
    setWash(!wash1);
  }
  function presstouch() {
    setIron(!iron1);
  }

  function packtouch() {
    setPack(!pack1);
  }
  function foldtouch() {
    setFold(!fold1);
  }
  function subtotal() {
    let cost = 0;
    let type = 0;

    if (wash1) {
      cost += quantity * washCost;
      type += washCost;
    }
    if (iron1) {
      cost += quantity * ironCost;
      type += ironCost;
    }

    if (pack1) {
      cost += quantity * packCost;
      type += packCost;
    }
    if (fold1) {
      cost += quantity * foldCost;
      type += foldCost;
    }

    setPrice(cost);
    setType(type);
  }

  useEffect(() => {
    subtotal();
    props.detailer({
      product: props.titlek,
      selected: {
        quantity: quantity,
        wash: wash1,
        iron: iron1,
        fold: fold1,
        pack: pack1,
        price: price,
      },
    });
  });
  return (
    <tr>
      <td>
        <div class="row">
          <div class="col-lg-2">
            <img
              src={`${process.env.PUBLIC_URL}/prodtype/${props.image}`}
              alt="shirt"
              class="productpic"
            />
          </div>
          <div class="col-lg-10">
            <b>{props.titlek}</b>
            <p>{props.description}</p>
          </div>
        </div>
      </td>

      <td>
        <input
          type="text"
          maxlength="4"
          size="1"
          class="form-control"
          onChange={(e) => {
            setQuantity(e.target.value);
          }}
          value={quantity}
        />
      </td>
      <td>
        <div class="row">
          <div class="col-lg-3">
            <img
              src={wash1 ? washclick : wash}
              onClick={() => {
                washtouch();
              }}
              alt="wash"
            />
          </div>
          <div class="col-lg-3">
            <img
              src={iron1 ? ironclick : iron}
              onClick={() => {
                presstouch();
              }}
              alt="press"
            />
          </div>
          <div class="col-lg-3">
            <img
              src={fold1 ? foldclick : fold}
              onClick={() => {
                foldtouch();
              }}
              alt="fold"
            />
          </div>
          <div class="col-lg-3">
            <img
              src={pack1 ? packclick : pack}
              onClick={() => {
                packtouch();
              }}
              alt="pack"
            />
          </div>
        </div>
      </td>
      <td>{`${quantity} x ${Type} = ${price}`}</td>
      <td>
        {/* <button type="button" class="btn btn-outline-primary">
          Reset
        </button> */}
        <button
          type="button"
          class="btn btn-outline-primary"
          onClick={() => {
            setQuantity(0);
            setWash(false);
            setFold(false);
            setPack(false);
            setIron(false);
          }}
        >
          Reset
        </button>
      </td>
    </tr>
  );
}

export default Ordercontroller;
