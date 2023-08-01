// app/education-feedback/page.tsx
import { useClient } from 'next/react'; // Import the useClient hook

import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { Task } from '@/interfaces/education';

// Dynamic import of EducationFeedbackPage component
const EducationFeedbackPage = dynamic(
  () => import("@/templates/EducationFeedbackPage"),
  { ssr: false } // Set ssr to false to ensure the component is loaded on the client side
);

// Define your task here
const task: Task = {
  // Your task properties here
};

const EducationFeedback: NextPage = () => {
  const client = useClient(); // Use the useClient hook here
  return client ? <EducationFeedbackPage task={task} /> : null;
};

export default EducationFeedback;
