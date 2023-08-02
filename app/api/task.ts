import { useEffect, useState } from 'react';



// Custom React Hook function
const useCallApi = (input: string) => {
  const [image, setImage] = useState('');
  const [audio, setAudio] = useState('');
  const [video, setVideo] = useState('');
  const [text, setText] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
      if (!input) return
      setImage('');
      setAudio('');
      setVideo('');
      setText('');

      const response = await fetch('./api/', {
        method: "POST",
        body: JSON.stringify({
          query: input
        }),
      });

      const { data, type } = await response.json()
      console.log('data:', data)
      if (type === 'image') {
        setImage(data[0]);
      }
      if (type === 'video') {
        setVideo(data[0]);
      }
      if (type === 'audio') {
        setAudio(data);
      }
      if (type == 'text') {
        setText(data);
      }
    } catch (err) {
      console.log('error:', err)
    }
  }

  fetchData();
}, [input]); // Dependency array ensures it runs when "input" changes

// Return any state variables or functions as needed
return { image, audio, video, text };
};

export default function Home() {
   const [input, setInput] = useState('');

   // Use the custom hook here
   const { image, audio, video, text } = useCallApi(input);

   return (
    
      {/* Your component JSX code here */}

  );
}