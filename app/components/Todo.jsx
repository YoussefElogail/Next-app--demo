"use client";

import { useEffect, useState } from "react";

export default ()=>{
  const [todo, setTodo] = useState({});

  useEffect( () => {
    const getPost = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      const result = await response.json()
      setTodo(result);
    }
    getPost()
  },[]);
  

  return <div>{todo.title}</div>;
};
