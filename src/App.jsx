import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import Note from "./components/Note";
import placeholder from "./notes";
import CreateArea from "./components/CreateArea";
import Footer from "./components/Footer";

function App() {
  const [notes, setNotes] = useState(placeholder);

  const addHandler = (newNote) => {
    console.log(newNote);
    setNotes([...notes, newNote]);
  };

  const deleteHandler = (id) => {
    setNotes((prevState) => prevState.filter((note, index) => index !== id));
  };

  return (
    <div>
      <div className="MainArea">
        <Header />
        <CreateArea addHandler={addHandler} />
        <div className="Notes">
          {notes.map((note, index) => (
            <Note
              key={index}
              title={note.title}
              content={note.content}
              onDelete={() => {
                deleteHandler(index);
              }}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
