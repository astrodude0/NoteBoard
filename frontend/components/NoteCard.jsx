import { PenSquare, Trash2Icon } from "lucide-react";
import { Link } from "react-router";
import { format } from "date-fns";
import axios from "axios";
import toast from "react-hot-toast";
import { useState } from "react";

const NoteCard = ({ note, setNotes }) => {
  async function handleDelete(e, id) {
    e.preventDefault();
    try {
      await axios.delete(`http://localhost:3000/api/notes/${note._id}`);
      setNotes((prev) => prev.filter((note) => note._id !== id));
      toast.success("Deleted succefully");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Link
      to={`/note/${note._id}`}
      className="card bg-base-100 hover:shadow-md transition-all border-t-4 border-solid border-green-400"
    >
      <div className="card-body">
        <h3 className="card-title text-base-content">{note.title}</h3>
        <p className="text-base-content/70 line-clamp-3">{note.content}</p>
        <div className="card-actions justify-between items-center mt-3">
          <span className="text-sm">
            {format(new Date(note.createdAt), "p, yyyy/MM/dd")}
          </span>
          <div className="flex items-center gap-1">
            <PenSquare className="btn btn-ghost btn-xs" />
            <button
              className="btn btn-ghost btn-xs text-error"
              onClick={(e) => handleDelete(e, note._id)}
            >
              <Trash2Icon />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NoteCard;
