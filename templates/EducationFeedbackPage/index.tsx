// templates/EducationFeedbackPage/index.tsx

import React, { useState } from 'react';
import { Task } from '@/interfaces/education';
import Layout from '@/components/Layout';
import Chat from '@/components/Chat';
import Question from '@/components/Question';
import Answer from '@/components/Answer';
import Feedback from '@/components/Feedback';

interface ResponseType {
  data: {
    id: number;
    name: string;
  };
}

interface EducationFeedbackPageProps {
  task: Task;
}

const EducationFeedbackPage: React.FC<EducationFeedbackPageProps> = ({ task }) => {
  const [response, setResponse] = useState<ResponseType | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await fetch(task.api, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: task.desc }),
      });

      if (!res.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await res.json();
      setResponse(data);
      setLoading(false);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Layout>
      <Chat background={task.fromColor}>
        <Question content={task.title} files={['file-name.pdf', 'file-name.pdf', 'file-name.pdf']} />
        {loading ? (
          <Answer message="Generating answers for you…">
            <div>Loading...</div>
          </Answer>
        ) : (
          response && (
            <Answer message={`ID: ${response.data.id}, Name: ${response.data.name}`}>
              <Feedback />
            </Answer>
          )
        )}
      </Chat>
    </Layout>
  );
};

export default EducationFeedbackPage;
