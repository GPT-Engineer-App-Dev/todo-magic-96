import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Pencil, Trash } from "lucide-react";

const TodoItem = ({ todo, toggleComplete, deleteTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing && newText.trim()) {
      editTodo(todo.id, newText);
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="flex items-center gap-2 mb-2">
      <Checkbox
        checked={todo.completed}
        onCheckedChange={() => toggleComplete(todo.id)}
      />
      {isEditing ? (
        <Input
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          className="flex-grow"
        />
      ) : (
        <span className={`flex-grow ${todo.completed ? "line-through" : ""}`}>
          {todo.text}
        </span>
      )}
      <Button variant="outline" size="icon" onClick={handleEdit}>
        <Pencil className="h-4 w-4" />
      </Button>
      <Button variant="outline" size="icon" onClick={() => deleteTodo(todo.id)}>
        <Trash className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default TodoItem;