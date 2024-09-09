import React from "react";

const CoreCapabilitiesTitle = () => {
  return (
    <div className="w-full flex flex-col items-center pt-[60px] max-w-[1248px] md:px-8 lg:px-6">
      <div className="flex flex-col gap-8 items-center px-8 md:px-0">
        <span className="text-[26px] lg:text-4xl -tracking-[0.72px] text-common-white font-bold text-center">
          Build data-driven applications — with a great DX
        </span>
        <span className="text-center text-base lg:text-lg text-black-400">
          Prisma provides the best experience for your team to work and interact
          with databases.
          <br /> Even complex things like connection pooling, caching, real-time
          database subscriptions are a breeze with our products.
          <br /> Build your application, fortify to make everything run
          smoothly, and grow with your users and requirements.
        </span>
      </div>
    </div>
  );
};

export default CoreCapabilitiesTitle;
