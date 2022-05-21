import React, { useState, useEffect } from "react";

function DisributionTeam() {
  const [allDeliveryOrders, setAllDeliveryOrders] = useState([]);
  const [sendedOrder, setSendedOrder] = useState("");

  const getDeliveryOrder = () => {
    fetch("http://localhost:5000/getalldeliveryorder")
      .then((data) => data.json())
      .then((data) => console.log(setAllDeliveryOrders(data)));
  };

  useEffect(getDeliveryOrder, [sendedOrder]);

  const completeHandle = (e) => {
    const orderNumber = e.target.value;

    fetch("http://localhost:5000/completeorder", {
      method: "PATCH",
      body: JSON.stringify({
        orderNumber: orderNumber,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((data) => data.json())
      .then(() => setSendedOrder(orderNumber));
  };

  return (
    <div>
      <h1 style={{ color: "#d40511" }}>
        The Distributor Will Deliver the Package
      </h1>
      <div className="container d-flex flex-wrap justify-content-center">
        {allDeliveryOrders.map((order) => {
          return (
            <div class="card m-2 shadow" style={{ width: "18rem" }}>
              <img src="./images/logo.svg" class="card-img-top p-3" alt="..." />
              <div class="card-body">
                <div class="card-title">
                  <label>Name:</label>{" "}
                  <h3>
                    {order.userContact.firstName +
                      " " +
                      order.userContact.lastName}
                  </h3>
                </div>
                <div class="card-title">
                  <label>Address:</label>
                  {order.userContact.address}
                </div>
                <div class="card-title">
                  <label>Phone:</label>
                  {order.userContact.phone}
                </div>
                <div class="card-title">
                  <label>E-Mail:</label>
                  {order.userContact.email}
                </div>

                <button
                  onClick={completeHandle}
                  value={order.orderNumber}
                  href="#"
                  class="btn btn-primary"
                >
                  The package has been delivered
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DisributionTeam;
