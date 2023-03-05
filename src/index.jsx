import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./assets/style/style.scss";
import Slide from "./components/slide";
import Footer from "./components/footer";
import SlideList from "./components/slidelist";
import SideBar from "./components/sidebar";

const slideImages = [
  "https://dsf5766rjqvw9.cloudfront.net/images/e736e529-6244-43de-8745-aad85cc85cea_Presentations-Tips.ppt/e736e529-6244-43de-8745-aad85cc85cea_Presentations-Tips-1.png-640x360",
  "https://dsf5766rjqvw9.cloudfront.net/images/e736e529-6244-43de-8745-aad85cc85cea_Presentations-Tips.ppt/e736e529-6244-43de-8745-aad85cc85cea_Presentations-Tips-3.png-640x360",
  "https://dsf5766rjqvw9.cloudfront.net/images/e736e529-6244-43de-8745-aad85cc85cea_Presentations-Tips.ppt/e736e529-6244-43de-8745-aad85cc85cea_Presentations-Tips-4.png-640x360",
  "https://dsf5766rjqvw9.cloudfront.net/images/e736e529-6244-43de-8745-aad85cc85cea_Presentations-Tips.ppt/e736e529-6244-43de-8745-aad85cc85cea_Presentations-Tips-5.png-640x360",
  "https://dsf5766rjqvw9.cloudfront.net/images/e736e529-6244-43de-8745-aad85cc85cea_Presentations-Tips.ppt/e736e529-6244-43de-8745-aad85cc85cea_Presentations-Tips-6.png-640x360",
  "https://dsf5766rjqvw9.cloudfront.net/images/e736e529-6244-43de-8745-aad85cc85cea_Presentations-Tips.ppt/e736e529-6244-43de-8745-aad85cc85cea_Presentations-Tips-7.png-640x360",
  "https://dsf5766rjqvw9.cloudfront.net/images/e736e529-6244-43de-8745-aad85cc85cea_Presentations-Tips.ppt/e736e529-6244-43de-8745-aad85cc85cea_Presentations-Tips-8.png-640x360",
  "https://dsf5766rjqvw9.cloudfront.net/images/e736e529-6244-43de-8745-aad85cc85cea_Presentations-Tips.ppt/e736e529-6244-43de-8745-aad85cc85cea_Presentations-Tips-9.png-640x360",
  "https://dsf5766rjqvw9.cloudfront.net/images/e736e529-6244-43de-8745-aad85cc85cea_Presentations-Tips.ppt/e736e529-6244-43de-8745-aad85cc85cea_Presentations-Tips-10.png-640x360",
];


function App() {
  const [currentSlide, setCurrentSlide] = useState();
  const [nextSlide, setNextSlide] = useState();
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [totalSlideNumber, setTotalSlideNumber] = useState();

  /*const [speakerNote, setSpeakerNote] = useState(
    () => {
      // getting stored value
      const speakernotes = localStorage.getItem("speakernotes");
      const initialValue = JSON.parse(speakernotes);
      console.log(initialValue);
      return initialValue || [];
    }
  );
*/

  const [speakerNote, setSpeakerNote] = useState("");

  const handleNoteSubmit = (event) => {

    event.preventDefault();

    if (speakerNote) {

      const newNote = {
        'slideIndex': currentSlideIndex,
        'speakerNote': speakerNote
      }

      // first we get the existing items, create the array if it doesn't exist
      let speakerNotes = JSON.parse(localStorage.getItem("speakernotes"));
      if (speakerNotes == null) speakerNotes = [];

      if (speakerNotes.length !== 0) {  
        let existingNote = false;
        speakerNotes.forEach(speakerNoteElt => {
          console.log(speakerNoteElt);
          if (speakerNoteElt.slideIndex === currentSlideIndex) { //if there's an existing note, we update it
            speakerNoteElt.speakerNote = speakerNote;
            existingNote = true;
            setSpeakerNote("");
          }
        });
        if (existingNote === false) { //otherwise we add the note
          speakerNotes.push(newNote);
          setSpeakerNote("");
        }
      }

      else if (speakerNotes.length === 0) {
        // if there's no note we  add one
        speakerNotes.push(newNote);
        setSpeakerNote("");
      }
     
      console.log(speakerNotes);

      localStorage.setItem("speakernotes", JSON.stringify(speakerNotes)); // store the array

      const saved = localStorage.getItem("speakernotes"); // check if saved correctly
      console.log(saved);
    }

    if (event.currentTarget.className === "previous-slide") {
      showPreviousSlide()
    }
    if (event.currentTarget.className === "next-slide") {
      showNextSlide()
    }
  }

  //fires once
  useEffect(() => {
    setCurrentSlide(slideImages[0]);
    setCurrentSlideIndex(0);
    setNextSlide(slideImages[1]);
    setTotalSlideNumber(slideImages.length);
  }, []);

  // fires each time the slide changes to update the textarea with the saved value
  useEffect(() => {
    const speakerNotes = JSON.parse(localStorage.getItem("speakernotes"));
    if (speakerNotes) {
      speakerNotes.forEach(speakerNoteElt => {
        if (speakerNoteElt.slideIndex === currentSlideIndex) {
          setSpeakerNote(speakerNoteElt.speakerNote);
          console.log(speakerNote);
        }
    }) 
  }
  }, [speakerNote,currentSlideIndex]);

  function showNextSlide() {
    if (currentSlideIndex < slideImages.length - 1) {
      setCurrentSlide(slideImages[currentSlideIndex + 1]);
      setCurrentSlideIndex(currentSlideIndex + 1);

    }
  }

  function showPreviousSlide() {
    if (currentSlideIndex > 0) {
      setCurrentSlide(slideImages[currentSlideIndex - 1]);
      setCurrentSlideIndex(currentSlideIndex - 1);
    }
  }

  return (
    <div className="App">
      <div className="left-col">
        <Slide
          showNextSlide={showNextSlide}
          showPreviousSlide={showPreviousSlide}
          currentSlide={currentSlide}
          currentSlideIndex={currentSlideIndex}
          nextSlide={nextSlide}
          totalSlideNumber={totalSlideNumber}
          speakerNote={speakerNote}
          setSpeakerNote={setSpeakerNote}
          handleNoteSubmit={handleNoteSubmit}
        ></Slide>
        <SlideList
          slideImages={slideImages}
          currentSlide={currentSlide}
          currentSlideIndex={currentSlideIndex}
          setCurrentSlide={setCurrentSlide}
          setCurrentSlideIndex={setCurrentSlideIndex}
          handleNoteSubmit={handleNoteSubmit}
        />
        <Footer />
      </div>
      <SideBar />
    </div>
  );
}

const rootElement = document.getElementById("app");
ReactDOM.render(<App />, rootElement);
