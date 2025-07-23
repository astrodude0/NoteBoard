import { useEffect, useState } from "react";
import axios from "axios";
import NoteCard from "../components/NoteCard";

const Home = () => {
  let [notes, setNotes] = useState([]);
  let [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await axios.get("/api/notes");
        setNotes(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchNotes();
  }, []);

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl ">
        {isLoading && (
          <div className="text-center text-primary text-3xl">
            Loading notes...
          </div>
        )}
        {notes.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {notes.map((note) => (
              <NoteCard key={note._id} note={note} setNotes={setNotes} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
