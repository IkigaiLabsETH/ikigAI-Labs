// app/education-feedback/page.tsx
// @ts-nocheck

import dynamic from "next/dynamic";
import { useEffect } from "react"; // Add useEffect import
import { NextPage } from "next"; // Import NextPage from "next" package
import { Task } from '@/interfaces/education';
import { useClient } from "@lukejamesk/core"; // Import useClient from the "@lukejamesk/core" package


// Dynamic import of EducationFeedbackPage component
const EducationFeedbackPage = dynamic(
  () => import("@/templates/EducationFeedbackPage"),
  { ssr: false } // Set ssr to false to ensure the component is loaded on the client side
);

// Define your task here
const task: Task = {
  api: 'Your API endpoint',
  desc: 'Your description',
  fromColor: 'Your color',
  title: 'Your title',
  category: 'Your category',
  // Icon: 'Your Icon', // This might need to be a React component if it's meant to be an actual icon
  permissions: ['Your permissions'], // This is an array, so you might need to add more items
  toColor: 'Your toColor',
  to: 'Your to',
  output: {
    title: 'Your output title',
    desc: 'Your output description',
  },
  prompts: [
    {
      title: 'Your prompt title',
      desc: 'Your prompt description',
      prompts: [
        {
          title: 'Your prompt field title',
          attr: 'Your prompt field attribute',
          value: 'Your prompt field value',
          placeholder: 'Your prompt field placeholder',
          label: 'Your prompt field label',
          maxLength: 100,
          error: 'Your prompt field error',
          example: 'Your prompt field example',
        },
      ],
      example: {
        output: 'Your prompt example output',
      },
    },
  ],
};

const EducationFeedback: NextPage = () => {
  // Mark the parent component as a client-side component using useClient hook
  useClient();

  useEffect(() => {
    // This useEffect hook runs on the client side
    // You can add any client-side logic here if needed
  }, []);

  return <EducationFeedbackPage task={task} />;
};

export default EducationFeedback;






