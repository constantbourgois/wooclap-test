import React from "react";
import PropTypes from "prop-types";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import SpeakerNoteForm from "./speakernoteform";

const wooclapBlue = "#146aff";

const arrowStyle = {
  bgcolor: "white",
  borderRadius: "50%",
  padding: "7px",
  cursor: "pointer",
  color: wooclapBlue,
  fontSize: ".8rem",
  "&:hover": {
    bgcolor: "lightgray",
  },
};

export default function Slide(props) {
  return (
    <div className="Slide">
      <div>
        <div className="currentslide-wrap"><img src={props.currentSlide} alt="currentslide" /></div>
        <div className="slide-nav">
          <span className="previous-slide" onClick={props.handleNoteSubmit}>
            <ChevronLeftIcon sx={arrowStyle} />
          </span>
          <span>
            <span className="currentslide-index">
              {props.currentSlideIndex + 1}
            </span>
            / {props.totalSlideNumber}
          </span>
          <span className="next-slide" onClick={props.handleNoteSubmit}>
            <ChevronRightIcon sx={arrowStyle} />
          </span>
        </div>
        <SpeakerNoteForm
          handleNoteSubmit={props.handleNoteSubmit}
          setSpeakerNote={props.setSpeakerNote}
          speakerNote={props.speakerNote}
        />
      </div>
    </div>
  );
}

Slide.propTypes = {
  currentSlide: PropTypes.string,
  handleNoteSubmit: PropTypes.func,
  currentSlideIndex: PropTypes.number,
  totalSlideNumber: PropTypes.number,
  setSpeakerNote: PropTypes.func,
  speakerNote: PropTypes.string,
};
