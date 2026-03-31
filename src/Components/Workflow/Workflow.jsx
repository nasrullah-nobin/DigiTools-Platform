import React from "react";

const Workflow = () => {
  return (
    <section className="bg-linear-to-l from-[#4F39F6] to-[#9514FA] text-white text-center py-28 space-y-3 mt-28">
      <h2 className="text-4xl font-bold">Ready to Transform Your Workflow?</h2>
      <p className="text-base">
        Join thousands of professionals who are already using DigiTools to work
        smarter.Start your free trial today.
      </p>
      <div className="flex justify-center gap-4">
        <button className="btn bg-white rounded-full  text-[#4F39F6] shadow-none">
          Explore Products
        </button>
        <button className="btn rounded-full bg-transparent text-white shadow-none">
          View Pricing
        </button>
      </div>
      <small>
        14-day free trial • No credit card required • Cancel anytime
      </small>
    </section>
  );
};

export default Workflow;
