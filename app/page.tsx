'use client'
import Image from "next/image";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Count from "./components/client/Count";
import CompareImg from "./components/CompareImg";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-20">
        <div className="bg-gray-300 p-4 text-center">
          <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
              <div>
                <h1 className="text-5xl font-bold">Box Office News!</h1>
                <p className="py-6">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-300 p-4 text-center">
          <img src="https://img.freepik.com/premium-photo/woman-cleaning-floor-with-mop-living-room-home-with-smile-happy-asian-cleaner-doing-housework-job-clean-lounge-hotel-room-house-while-smiling-alone-spring-cleaning_590464-85963.jpg" />
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4 mt-20">
        <div className="col-span-12 sm:col-span-5 bg-gray-300 p-4 text-center">
          Column 1 (5 columns on small screens)
        </div>

        <div className="col-span-12 sm:col-span-7 bg-gray-300 p-4 text-center">
          Column 2 (7 columns on small screens and larger)
        </div>
      </div>



      <div className="grid grid-cols-12 gap-4 my-20">
        <div className="col-span-12 sm:col-span-4 bg-gray-300 p-4 text-center">
          <Count end={2000} duration={10} />
        </div>

        <div className="col-span-12 sm:col-span-4 bg-gray-300 p-4 text-center">
          <Count end={1000} duration={10}  />

        </div>
        <div className="col-span-12 sm:col-span-4 bg-gray-300 p-4 text-center">
          <Count end={3000} duration={10}  />

        </div>
      </div>

      <CompareImg />
      <Footer />
    </>
  );
}
