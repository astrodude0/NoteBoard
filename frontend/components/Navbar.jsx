import { PlusIcon, NotebookIcon } from "lucide-react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <header className="bg-base-200 border-b border-base-content/10">
      <div className="mx-auto max-w-6xl p-4">
        <div className="flex justify-between items-center">
          <Link to={"/"} className="inline-flex items-center">
            <NotebookIcon />
            <h1 className="text-3xl text-primary font-bold tracking-tight ">
              ThinkBoard
            </h1>
          </Link>
          <div className="flex items-center gap-4">
            <Link to={"/create"} className="btn btn-primary">
              <PlusIcon /> <span>Create Note</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
