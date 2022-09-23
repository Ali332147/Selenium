import React from 'react';

const Selenium = () => {
  let handleClick=()=>{
    alert("I Am Practicing Selenium");
  }
  return (
    <div className="flex justify-center">
      <div className=" grid sm:grid-cols-1 md:grid-cols-2 sm:justify-between md:justify-between lg:grid-cols-3 lg:justify-between gap-5 py-8">
        <div id="chkbox" class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body">
            <button class="btn btn-success flex">CheckBox</button>
            <input
              id="chk1"
              type="checkbox"
              class=" checked:bg-blue-500 "
            ></input>
            <input
              id="chk2"
              type="checkbox"
              class=" checked:bg-blue-500 "
            ></input>
            <input
              id="chk3"
              type="checkbox"
              class=" checked:bg-blue-500 "
            ></input>
            <input id="chk4" type="checkbox" class=" checked:bg-blue-500 " />
          </div>
        </div>
        <div id="radio" class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body">
            <button class="btn btn-success">Radio Button</button>
            <input id="radio1" type="radio" class=" radio:bg-blue-500 "></input>
            <input id="radio2" type="radio" class=" radio:bg-blue-500 " />
            <input id="radio3" type="radio" class=" radio:bg-blue-500 " />
            <input id="radio4" type="radio" class=" radio:bg-blue-500 " />
          </div>
        </div>
        <div id="switch" class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body ">
            <button class="btn btn-success">Switch Window</button>
            <a
                
              class=" no-underline link-hover link link-success text-center"
              href="http://localhost:3000/cart"
            >
              <button id="switch" class="w-40  btn btn-success">
                Click me
              </button>
            </a>
          </div>
        </div>
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body ">
            <button class="btn btn-success">Open New Window</button>
            <a
              target="_blank"
              class=" no-underline link link-hover link-success text-center"
              href=" "
            >
              <button id="newWin" class="w-40  btn btn-success">
                Click me
              </button>
            </a>
          </div>
        </div>
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body">
            <label for="my-modal-6" class="btn btn-success modal-button">
              open modal
            </label>
            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
              <div class="modal-box">
                <h3 class="font-bold text-lg">
                  Congratulations random Internet user!
                </h3>
                <p class="py-4">Do you want to Cancel or Not ?</p>
                <div class="modal-action">
                  <label
                    for="my-modal-6"
                    class="btn btn-sm btn-circle absolute right-2 top-2"
                  >
                    ✕
                  </label>
                  <label for="my-modal-6" class="btn">
                    Yes
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="newWin" class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body ">
            <button class="btn btn-success">Open New Window</button>
            <a
              target="_blank"
              class=" no-underline link link-hover link-success text-center"
              href=" "
            >
              <button class="w-40  btn btn-success">Click me</button>
            </a>
          </div>
        </div>
        <div class="card w-96 bg-base-100 shadow-xl">
          <div id="window" class="card-body ">
          
            <button  class="btn btn-success">Alert Button</button>
            <a
              target="_blan"
              class=" no-underline link link-hover link-success text-center"
              href=" "
            >
              <button id='btn1' onClick={handleClick} class=" w-40  btn btn-success">Click me</button>
            </a>
          </div>
        </div>
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body  ">
            <button class="btn btn-success">Hamburger button</button>
            <div id="ham" className=" text-center">
              <label class="btn btn-success btn-circle swap swap-rotate">
                <input type="checkbox" />
                <svg
                target="_blank"
                  class="swap-off fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 512 512"
                >
                  <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                </svg>
                <svg
                 target="_blank"
                  class="swap-on fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 512 512"
                >
                  <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                </svg>
              </label>
            </div>
          </div>
        </div>
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body text-center">
            <div id="dropdown" class="dropdown  dropdown-end">
              <button class="btn btn-success ">Drop Down</button>
              {/* <label tabIndex="0" class="btn btn-ghost rounded-btn">Dropdown</label> */}
              <ul
                tabIndex="0"
                class="menu dropdown-content p shadow bg-base-100 rounded-box w-52 mt-"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    // start
    // end
  );
};

export default Selenium;
