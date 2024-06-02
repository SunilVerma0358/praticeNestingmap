import React from "react";

const NestingMapUse = () => {
  const myArr = [
    {
      heading: "Card One",
      list: [
        {
          subheading: "Card Sub heading",
          paragraph:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quia.",
        },
      ],
    },
    {
      heading: "Card Two",
      list: [
        {
          subheading: "Lorem paragraph",
          paragraph:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quia.",
          paragraphOne:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quia.",
        },
      ],
    },
    {
      heading: "Card Three",
      list: [
        {
          subheading: "Lorem paragraph Three",
          paragraph:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quia.",
        },
      ],
    },
  ];
  return (
    <div className=" h-screen">
      <div className="max-w-[1140px] px-3 mx-auto">
        <h2 className="font-bold text-4xl text-black pb-5 text-center">
          Nesting Map
        </h2>
        <div className="flex flex-row flex-wrap justify-center -mx-3">
          {myArr.map((obj, index) => (
            <div
              key={index}
              className="w-full md:w-6/12 lg:w-4/12 px-3 pt-6 lg:pt-0"
            >
              <div className="bg-blue-500 rounded-3xl border border-blue-500 px-4 py-3 h-full ">
                <h3 className="font-bold text-3xl text-white">{obj.heading}</h3>
                {obj.list &&
                  obj.list.map((event, index) => (
                    <div
                      key={index}
                      className="bg-gray-300 rounded-2xl px-2 py-4 mt-3"
                    >
                      <h4 className="font-semibold text-2xl text-black ">
                        {event.subheading}
                      </h4>
                      <p className="font-medium text-lg text-black leading-normal pt-2 ">
                        {event.paragraph}
                      </p>
                      <p className="font-medium text-lg text-black leading-normal pt-3 ">
                        {event.paragraphOne}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NestingMapUse;
