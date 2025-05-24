import Link from "next/link";
import React from "react";

const hotQuestions = [
  {
    _id: 1,
    title: "How to ensure that a component is re-rendered when a prop changes?",
  },
  {
    _id: 2,
    title: "How to use React Router?",
  },
  {
    _id: 3,
    title: "How to use React context?",
  },
];

const RightSidebar = () => {
  return (
    <section className="custom-scrollbar background-light900_dark200 light-border sticky right-0 top-0 flex h-screen flex-col justify-between overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-sm:hidden w-[350px] gap-6 max-xl:hidden">
      <div className="flex flex-1 flex-col gap-6">
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 w-full flex-col gap-[30px]">
          {hotQuestions.map((questions) => (
            <Link
              href={`/questions/${questions._id}`}
              key={questions._id}
              className="flex cursor-pointer items-center justify-between gap-7"
            >
              <p>{questions.title}</p>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-6">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <p>Next.js</p>
        <p>Tailwind CSS</p>
        <p>TypeScript</p>
        <p>JavaScript</p>
        <p>Node.js</p>
        <p>Express</p>
      </div>
    </section>
  );
};

export default RightSidebar;
