import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import Editor from "@monaco-editor/react";
import {  Link } from '@material-ui/core';
import Dashboard from "views/Dashboard";

function CodePlatform() {
 
  const [isEditorReady, setIsEditorReady] = useState(false);
  const valueGetter = useRef();
 
  function handleEditorDidMount(_valueGetter) {
    setIsEditorReady(true);
    valueGetter.current = _valueGetter;
  }
 
  function handleShowValue() {
    alert(valueGetter.current());
  }

//   function home(){
//     <Link to="/dashboard" className="btn btn-primary">Home</Link>
//   }
 
  return (
       <>
      <button onClick={handleShowValue} disabled={!isEditorReady}>
        Show value
      </button>
    
      <Editor
        height="90vh"
        language="javascript"
        value={"// write your code here"}
        editorDidMount={handleEditorDidMount}
      />
    </>
  );
}
 

const codeElement = document.getElementById("editor");
ReactDOM.render(<CodePlatform />, codeElement);


export default CodePlatform;
