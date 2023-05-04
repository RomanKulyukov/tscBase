import React from "react";
import { Button, DatePicker, Space, version, Pagination, Input } from "antd";
import "./App.css";
import "antd/dist/reset.css";
function App() {
  function handleSubmit (e:string) :any =>{
    e.preventDefault();


  }
  return (
    <div className="App">
      <Input type="primary" ref={node =>(inputNode = node)} />
      <Pagination></Pagination>
    </div>
  );
}

export default App;
