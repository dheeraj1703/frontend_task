import React, { useState, useEffect } from "react";
import { Input, Button, Form, message } from "antd";
const InputHandler = ({ onSubmit, editMode = false, user}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
    }
  }, [user]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) {
      message.error("Name and email are required.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      message.error("Please enter a valid email.");
      return;
    }
    onSubmit({ name, email });
    setName("");
    setEmail("");
    
  };

  return (
    <Form layout="vertical" onSubmit={handleSubmit}>
      <div className="header-box">
        <Form.Item>
          <Input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Item>
        <Form.Item>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={handleSubmit} block>
            {editMode ? "Edit user" : "Add user"}
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
};


export default InputHandler;
