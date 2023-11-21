import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import HeadingComponent from "./Heading";

export default function Pricing() {
  return (
    <div className="container mx-auto mt-24">
        <HeadingComponent text="Pricing" align="text-center" />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="card bg-gray-100 p-10">
          <h1 className="text-2xl mb-3">Basic</h1>
          <p>The essentials to provide your best work for clients.</p>
          <h1 className="text-4xl font-bold my-3">$49/month</h1>

          <div className="py-3 pb-10">
            <div className="flex gap-1">
              <CheckIcon className="text-primary" />
              <p>5 products</p>
            </div>
            <div className="flex gap-1">
              <CheckIcon className="text-primary" />
              <p>Up to 1,000 subscribers</p>
            </div>
            <div className="flex gap-1">
              <CheckIcon className="text-primary" />
              <p>Basic analytics</p>
            </div>
            <div className="flex gap-1">
              <CheckIcon className="text-primary" />
              <p>48-hour support response time</p>
            </div>
          </div>
          <button className="btn btn-block btn-secondary">Buy plan</button>
        </div>
        <div className="card bg-gray-100 p-10">
          <h1 className="text-2xl mb-3">Standard</h1>
          <p>The essentials to provide your best work for clients.</p>
          <h1 className="text-4xl font-bold my-3">$49/month</h1>

          <div className="py-3 pb-10">
            <div className="flex gap-1">
              <CheckIcon className="text-primary" />
              <p>5 products</p>
            </div>
            <div className="flex gap-1">
              <CheckIcon className="text-primary" />
              <p>Up to 1,000 subscribers</p>
            </div>
            <div className="flex gap-1">
              <CheckIcon className="text-primary" />
              <p>Basic analytics</p>
            </div>
            <div className="flex gap-1">
              <CheckIcon className="text-primary" />
              <p>48-hour support response time</p>
            </div>
          </div>
          <button className="btn btn-block btn-secondary">Buy plan</button>
        </div>
        <div className="card bg-gray-100 p-10">
          <h1 className="text-2xl mb-3">Pro</h1>
          <p>The essentials to provide your best work for clients.</p>
          <h1 className="text-4xl font-bold my-3">$49/month</h1>

          <div className="py-3 pb-10">
            <div className="flex gap-1">
              <CheckIcon className="text-primary" />
              <p>5 products</p>
            </div>
            <div className="flex gap-1">
              <CheckIcon className="text-primary" />
              <p>Up to 1,000 subscribers</p>
            </div>
            <div className="flex gap-1">
              <CheckIcon className="text-primary" />
              <p>Basic analytics</p>
            </div>
            <div className="flex gap-1">
              <CheckIcon className="text-primary" />
              <p>48-hour support response time</p>
            </div>
          </div>
          <button className="btn btn-block btn-secondary">Buy plan</button>
        </div>
      </div>
    </div>
  );
}
