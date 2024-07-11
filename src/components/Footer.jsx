import { Button } from "@/components/ui/button";

const Footer = ({ filter, setFilter, clearCompleted }) => {
  return (
    <footer className="flex justify-between items-center p-4 bg-muted/40 mt-4">
      <div className="flex gap-2">
        <Button
          variant={filter === "all" ? "default" : "outline"}
          onClick={() => setFilter("all")}
        >
          All
        </Button>
        <Button
          variant={filter === "active" ? "default" : "outline"}
          onClick={() => setFilter("active")}
        >
          Active
        </Button>
        <Button
          variant={filter === "completed" ? "default" : "outline"}
          onClick={() => setFilter("completed")}
        >
          Completed
        </Button>
      </div>
      <Button variant="destructive" onClick={clearCompleted}>
        Clear Completed
      </Button>
    </footer>
  );
};

export default Footer;