const htmlCode = `<form>
    <label for="file-upload">Choose a file:</label>
    <input type="file" id="file-upload" name="file-upload">
    <button type="submit">Upload</button>
    <progress id="progress-bar" max="100" value="0"></progress>
</form>`;

const cssCode = `.welcome-message {
    text-align: center;
    margin-top: 50px;
}
  
form {
    margin: 50px auto;
    width: 80%;
    max-width: 500px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
}
  
label {
    display: block;
    margin-bottom: 10px;
}
  
input, select {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
}
  
.buttons {
    display: flex;
    justify-content: space-between;
}
  
.cancel-button {
    background-color: #ccc;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
  
.send-button {
    background-color: #4CAF50;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}`;

const jsCode = `const form = document.querySelector('form');
const fileInput = document.querySelector('input[type="file"]');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', fileInput.files[0]);
    
    fetch('/upload', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
});`;

const pythonCode = `def fibonacci(n):
    if n <= 1:
        return n
    else:
        return fibonacci(n-1) + fibonacci(n-2)`;

export const itemsCode = [
    {
        id: "0",
        title: "HTML",
        language: "html",
        value: htmlCode,
    },
    {
        id: "1",
        title: "CSS",
        language: "css",
        value: cssCode,
    },
    {
        id: "2",
        title: "Javascript",
        language: "javascript",
        value: jsCode,
    },
];

export const code = {
    title: "python",
    language: "python",
    value: pythonCode,
};

export const actions = [
    {
        id: "0",
        content: "Tell me more",
    },
    {
        id: "1",
        content: "Can you explain how the JavaScript function works?",
    },
    {
        id: "2",
        content: "Is there a way to display a progress bar during the upload?",
    },
    {
        id: "3",
        content: "How can I add more fields to the form?",
    },
];
