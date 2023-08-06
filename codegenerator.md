To integrate the OpenAI API into the `CodeGeneratorPage` template, we'll follow a similar approach as we did for the previous templates. The goal here is to allow users to generate code based on certain prompts and then display the results fetched from the OpenAI API.

Here's a step-by-step guide:

1. **State Management**:
   - Add a new state variable `apiData` to store the data fetched from the OpenAI API.
   - Add a `loading` state to handle the loading state during the API call.

2. **API Call Function**:
   - Create a new function `fetchFromOpenAI` that will make the API call to fetch code based on a given prompt.

3. **Triggering the API Call**:
   - For this example, I'll assume you want to trigger the API call when the page loads. If you have a specific event or user action in mind, adjust accordingly.

4. **Displaying the Results**:
   - Display the results fetched from the OpenAI API in the component. For simplicity, I'll display it as a JSON string, but you can format and display it as needed.

Here's the updated `CodeGeneratorPage` component:

```tsx
import { useEffect, useState } from "react";
import axios from "axios";
// ... other imports ...

const CodeGeneratorPage = () => {
    const [apiData, setApiData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        fetchFromOpenAI();
    }, []);

    const fetchFromOpenAI = async () => {
        setLoading(true);
        try {
            const response = await axios.post("/api/openai", {
                query: "Your code generation prompt goes here", // Replace with the desired prompt
            });
            setApiData(response.data);
        } catch (error) {
            console.error("Error fetching code from OpenAI:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Layout>
            <Chat background="/images/bg-6.jpg">
                {/* ... other components ... */}
                {loading && <div>Loading...</div>}
                {apiData && <pre>{JSON.stringify(apiData, null, 2)}</pre>}
                {/* ... other components ... */}
            </Chat>
        </Layout>
    );
};

export default CodeGeneratorPage;
```

A few things to note:

- The `fetchFromOpenAI` function makes a POST request to the `/api/openai` endpoint. Ensure that this endpoint is correctly set up in your Next.js app to handle the request and interact with the OpenAI API.
  
- The results from the OpenAI API are displayed as a JSON string using the `<pre>` tag. You can format and display this data as needed based on your design requirements.

- Ensure that error handling is robust, especially for user-facing components. You might want to display user-friendly error messages or provide a retry mechanism.

With these changes, the `CodeGeneratorPage` component should be able to fetch code from the OpenAI API based on a given prompt and display the results. Make sure to test the functionality to ensure everything works as expected.