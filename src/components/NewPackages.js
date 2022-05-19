import React, { useState, useEffect } from "react";

function NewPackages() {
  const [shippedOrders, setShippedOrders] = useState([]);
  const [update,setUpdate] = useState(0);

  

  setInterval(function() {
      setUpdate(update + 3)
    }, 5000);


  const getShippedOrders = () => {
    fetch("http://localhost:5000/shippedorders")
      .then((data) => data.json())
      .then((data) => setShippedOrders(data));
  };

  const deliveryOrderHandle = (e) => {
    const orderNumber = e.target.value;

    

    const result = fetch("http://localhost:5000/deliveryorder", {
      method: "PATCH",
      body: JSON.stringify({
        orderNumber: orderNumber,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  };

 

  useEffect(() => {
    getShippedOrders();
  }, [update]);


  return (
    <div>
      <h1 style={{ color: "#d40511" }}>
        New Packages from Contracted Companies
      </h1>
      <div className="container d-flex flex-wrap justify-content-center">
        {shippedOrders.map((order) => {
          return (
            <div class="card m-2" style={{ width: "18rem" }}>
              <img src="./images/logo.svg" class="card-img-top p-3" alt="..." />
              <div class="card-body">
               <div class="card-title"><label>Name:</label> <h3>{order.userContact.firstName + " " + order.userContact.lastName}</h3></div>
                <div class="card-title"><label>Address:</label>{order.userContact.address}</div>
                <div class="card-title"><label>Phone:</label>{order.userContact.phone}</div>
                <div class="card-title"><label>E-Mail:</label>{order.userContact.email}</div>
               
                <button onClick={deliveryOrderHandle}
                        value={order.orderNumber} href="#" class="btn btn-primary">
                Give it to the distribution team
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default NewPackages;
