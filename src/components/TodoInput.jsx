import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const TodoInput = ({ addTodo }) => {
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.trim()) {
      addTodo(todo);
      setTodo("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <Input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Add a new todo"
        className="flex-grow"
      />
      <Button type="submit">Add</Button>
    </form>
  );
};

export default TodoInput;