import { ArrowLeftIcon } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import toast from "react-hot-toast";
import axios from "axios";

const CreateNotePage = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setloading] = useState(false);
  async function handleSubmit(e) {
    e.preventDefault();
    setloading(true);
    if (!title || !content) {
      toast.error("all fields required");
      setloading(false);
    }

    try {
      await axios.post("/api/notes", {
        title,
        content,
      });
      toast.success("Note Created Successfully");
      navigate("/");
    } catch (error) {
      console.error(error);
    } finally {
      setloading(false);
    }
  }
  return (
    <div className="min-h-screen bg-base-200">
      <div className="max-w-2xl mx-auto">
        <Link to="/" className="btn btn-ghost text-primary">
          <ArrowLeftIcon className="size-6" />
          Back to notes
        </Link>
      </div>

      <div className="card bg-base-100 ">
        <div className="card-body">
          <h2 className="card-title ">Create New Note</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-control mb-5 items-center">
              <label className="label">
                <span className="label-text text-[22px]">Title</span>
              </label>
              <input
                type="text"
                placeholder="Note Title"
                className="input input-bordered mx-4"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="form-control mb-5">
              <label className="label">
                <span className="label-text text-[22px]">Content</span>
              </label>
              <textarea
                placeholder="Write Your Name"
                className="textarea textarea-bordered h-32"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              ></textarea>
            </div>
            <div className="card-actions justify-end">
              <button
                className="btn btn-primary"
                type="submit"
                disabled={loading}
              >
                {loading ? "creating..." : "Create Note"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateNotePage;
