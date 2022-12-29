import React from "react";

const Hero = () => {
  return (
    <div>
      <main>
        <section className="h-full bg-gray-700">
          <div className="relative  px-8 py-8"></div>
          <div className="grid grid-cols-12 gap-6 px-8 py-8  ">
            <div className="hidden md:block col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-5 xxl:col-span-5 sm:mt-10 sm:ml-10">
              <div className="py-4">
                <p className="text-lg font-semibold text-white">
                  <span className="text-blue-400 font-bold">01- </span>
                  <span className="font-bold">DEVOPS ENGINEER</span>
                </p>
                <p className="text-white text-sm pl-8">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
              <div className="py-4">
                <p className="text-lg font-semibold text-white">
                  <span className="text-blue-400 font-bold">02- </span>
                  <span className="font-bold">FRONTEND DEVELOPER</span>
                </p>
              </div>
              <div className="py-4">
                <p className="text-lg font-semibold text-white">
                  <span className="text-blue-400 font-bold">03- </span>
                  <span className="font-bold">BACKEND DEVELOPER</span>
                </p>
              </div>
              <div className="py-4">
                <p className="text-lg font-semibold text-white">
                  <span className="text-blue-400 font-bold">04- </span>
                  <span className="font-bold">FULLTACK DEVELOPER</span>
                </p>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-7 xxl:col-span-7 flex justify-center">
              <img
                src="https://cdn3d.iconscout.com/3d/premium/thumb/male-employee-looking-at-customer-review-2937682-2426381.png"
                className="w-auto"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Hero;
