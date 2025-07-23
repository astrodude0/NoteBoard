import Note from "../Note.js";

export async function getAllNotes(req, res) {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (err) {
    console.error("error", err);
    res.status(500).json({ msg: "Internal server error" });
  }
}

export async function createNote(req, res) {
  try {
    const { title, content } = req.body;
    const newNote = new Note({ title: title, content: content });
    await newNote.save();
    res.status(201).send("note created");
  } catch (err) {
    console.error(err);
  }
}

export async function updateNote(req, res) {
  try {
    const { title, content } = req.body;
    const userId = req.params.id;
    await Note.findByIdAndUpdate(userId, { title, content });
    res.status(200).send("note updated");
  } catch (err) {
    console.error(err);
    res.status(500).send("internal server error");
  }
}

export async function deleteNote(req, res) {
  try {
    const userId = req.params.id;
    const deleteNote = await Note.findByIdAndDelete(userId);
    if (!deleteNote) {
      return res.status(404).send("Note not found!");
    } else {
      res.status(200).send("note Deleted");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("internal server error");
  }
}
