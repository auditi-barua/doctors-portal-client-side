import React from 'react';
import appointment from '../../../assets/images/appointment.png'
const ContactUs = () => {
    return (
        <section
        style={{
            background: `url(${appointment})`
        }}
        >
            <div className="hero min-h-screen">
                <div className="">
                <div className="text-center ">
          <h1 className="text-5xl font-bold text-white">Contact Us</h1>
            <p className="text-5xl mt-5 text-white">Stay Connected with us</p>
          </div>
            <div className="card mt-12 mx-auto w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <input type="text" placeholder="Email Address" className="input input-bordered input-md w-full max-w-xs" />
                </div>
                <div className="form-control">
                <input type="text" placeholder="Subject" className="input input-bordered" />
                </div>
                    <div className="form-control">
                    <textarea className="textarea textarea-bordered h-24" placeholder="Your message"></textarea>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Contact</button>
              </div>
            </div>
          </div>
        </div>
      </div>
        </section>
        
    );
};

export default ContactUs;