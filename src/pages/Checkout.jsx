import React from "react";
import { useLoaderData, useLocation } from "react-router";

const Checkout = () => {

  
 const location=useLocation();
      console.log('checkout ',location.pathname)

  const { title, price, img } = useLoaderData();
  // console.log(data)
  const handleCheckout =(e)=>{
    e.preventDefault();
    const service=e.target.service.value;
    const price=e.target.price.value;
    const email=e.target.email.value;
    const password=e.target.password.value;
    console.log(service,price,email,password)
    const data={
      service,price,email,password
    }

    // const data = {
    //   item: "Ceramic Vase",
    //   quantity: 2,
    //   price: 45.99,
    //   customer: "John Doe",
    //   address: "123 Main Street, Springfield, USA",
    // };
    
    fetch('http://localhost:3000/checkout', { // Removed the trailing slash
      method: 'POST',
      headers: {
        "Content-Type": 'application/json',
      },
      body: JSON.stringify(data), // Convert data object to JSON string
    })
      .then(res => {
        if (!res.ok) {
          // Handle non-2xx HTTP responses
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json(); // Parse the response as JSON
      })
      .then(responseData => {
        console.log("Response from server:", responseData);
      })
      .catch(error => {
        console.error("Error occurred:", error.message); // Catch network or JSON errors
      });
    

    
  }


  return (
    <div>
      <p>name:{title} </p>
      <p>{price} $</p>

      <div className="relative flex flex-col justify-center h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-lg">
          <h1 className="text-3xl font-semibold text-center text-purple-700">
            checkout
          </h1>
          <form onSubmit={handleCheckout} className="space-y-4">
            <div className="flex w-full gap-4 ">
             
              <div>
                <label className="label">
                  <span className="text-base label-text">Service Name</span>
                </label>
                <input
                  type="text"
                  name="service"
                  placeholder="Service Name"
                  defaultValue={title ? `${title} ` : ""}
                  className="w-full input input-b  ordered input-primary"
                />
              </div>

              <div>
                <label className="label">
                  <span className="text-base label-text"> Price</span>
                </label>
                <input
                  type="text"
                  placeholder="Service Name"
                  defaultValue={price ? ` ${price} $` : ""}
                  name="price"
                  className="w-full input input-b  ordered input-primary"
                />
              </div>
            </div>

            <div>
              <label className="label">
                <span className=" text-base label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="Email Address"
                className="w-full input input-bordered input-primary"
                name="email"

              />
            </div>

            <div>
              <label className="label">
                <span className="text-base label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                className="w-full input input-bordered input-primary"
                name="password"
              />
            </div>
            <a
              href="#"
              className="text-xs text-gray-600 hover:underline hover:text-blue-600"
            >
              Forget Password?
            </a>
            <div>
              <button className="btn btn-primary">Order Now</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
