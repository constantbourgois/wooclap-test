import React from "react";
import { PropTypes } from "prop-types"

const SpeakerNoteForm = (props) => {
  return (
    <form onSubmit={props.handleNoteSubmit}>
      <textarea
        value={props.speakerNote}
        onChange={(e) => props.setSpeakerNote(e.target.value)}
        placeholder="click to add a speaker note"
        aria-label="addnote"
        
      />
    </form>
  );
};

SpeakerNoteForm.propTypes = {
  speakerNote: PropTypes.string,
  setSpeakerNote: PropTypes.func,
  handleNoteSubmit: PropTypes.func
};


export default SpeakerNoteForm;