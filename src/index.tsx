import React from 'react';
import ReactDOM from 'react-dom/client';
import MDEditor from '@uiw/react-md-editor';
import './index.css';

const App = () => {
  const [value, setValue] = React.useState("**Hello world!!!**");
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