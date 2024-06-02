import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const ShadcnAccordion = () => {
  const accordionItems = [
    {
      value: "item-1",
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      value: "item-2",
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      answer:
        "Yes. It comes with default styles that match the other components' aesthetic.",
    },
    {
      value: "item-3",
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      answer:
        "Yes. It's animated by default, but you can disable it if you prefer.",
    },
    {
      value: "item-4",
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      answer:
        "Yes. It's animated by default, but you can disable it if you prefer.",
    },
  ];
  return (
    <div className="flex justify-center h-screen items-center">
      <div className="w-[700px] px-3 mx-auto">
        <h3 className="text-center text-4xl pb-5 ">Faq </h3>
        <div className=" rounded-3xl">
          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="item-1"
          >
            {accordionItems.map((item, index) => (
              <AccordionItem
                key={item.value}
                value={item.value}
                className={`bg-gray-500 text-white rounded-3xl px-4 ${
                  index > 0 ? "mt-3 " : ""
                }`}
              >
                <AccordionTrigger className="w-full text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pb-2">{item.answer}</div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default ShadcnAccordion;
