import React from "react";
import PropTypes from 'prop-types';


const SlideList = (props) => {
  //const { currentSlide, setCurrentSlide } = useState();

  function setSlide(slidesImage,index) {
    props.setCurrentSlide(slidesImage);
    props.setCurrentSlideIndex(index);
    props.handleNoteSubmit(event);
  }
  const slideItems = props.slideImages.map((slidesImage,index) => (
    <li key={slidesImage} onClick={() => setSlide(slidesImage,index)}>
      <a className ={ (index === props.currentSlideIndex ? 'selected-slide' : '') }  href="#">
        <span className="imglist-index">{index}</span>
        <span className="imglist-wrap"><img alt="img" src={slidesImage} /></span>
      </a>
    </li>
  ));

  return (
    <div className="SlideList">
      <ul> {slideItems} </ul>
    </div>
  );
};

SlideList.propTypes = {
  setCurrentSlide: PropTypes.func,
  setCurrentSlideIndex: PropTypes.func,
  handleNoteSubmit: PropTypes.func,
  slideImages: PropTypes.array,
  currentSlideIndex: PropTypes.number
};

export default SlideList;
