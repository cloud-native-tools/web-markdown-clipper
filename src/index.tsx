import React from 'react';
import ReactDOM from 'react-dom/client';
import MDEditor from '@uiw/react-md-editor';
import './index.css';

chrome.runtime.onMessage.addListener(clip => {
  console.log(`received a ${clip} on popup script`);
});

const App = () => {
  const [value, setValue] = React.useState("");

  chrome.storage.local.get().then(data => {
    console.log("get local storage");
    console.log(data);
  });

  return (
    <div className="container">
      <MDEditor value={value} onChange={(value) => {
        setValue(value || '');
      }} />
      <MDEditor.Markdown source={value} style={{ whiteSpace: 'pre-wrap' }} />
    </div>
  );
};
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
console.log("main script loaded");