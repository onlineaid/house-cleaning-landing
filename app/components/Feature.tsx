import React from "react";
import HeadingComponent from "./Heading";
import Image from "next/image";

type Props = {};

// https://i.ibb.co/kBrgYt5/carpet.png
// https://i.ibb.co/hBBX4gB/window-cleaning.png
// https://i.ibb.co/tBrGKj0/house-cleaning.png
// https://i.ibb.co/dKkLgsP/broom.png

const cleaningFeatures = [
  {
    icon: "✨",
    title: "Professional Cleaners",
    description:
      "Our experienced team of professional cleaners will leave your space spotless.",
  },
  {
    icon: "🕒",
    title: "Flexible Scheduling",
    description:
      "We work around your schedule to make cleaning convenient for you.",
  },
  {
    icon: "💼",
    title: "Customized Services",
    description:
      "Tailored cleaning solutions to meet your specific needs and preferences.",
  },
  {
    icon: "💰",
    title: "Affordable Rates",
    description: "High-quality cleaning at competitive prices.",
  },
];

const Feature = (props: Props) => {
  return (
    <div>
      <div className="container mx-auto mt-24">
        <HeadingComponent text="Our Feature" align="text-center" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {cleaningFeatures.map((feature) => (
            <div className="flex flex-col p-6 bg-gray-100 border-2 border-gray-300 rounded-xl">
              
              <Image height={70} width={70} src="https://i.ibb.co/kBrgYt5/carpet.png" alt="Lol" />
              <h3 className="text-2xl font-light text-primary">{feature.title}</h3>

              <p>{feature.description}</p>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feature;
