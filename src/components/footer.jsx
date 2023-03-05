import React from "react";
import styled from 'styled-components';

const wooclapBlue = '#146aff';


const SaveButton = styled.button`
display: flex;
justify-content: center;
align-items: center;
height : 30px;
background-color: ${wooclapBlue};
border-radius: 50px;
padding: 7px 5px;
border: 1px solid white;
color: white;
cursor: pointer;
width: 100px;
&:hover { color: ${wooclapBlue}; border: 1px solid ${wooclapBlue}; background-color: white; };`

const DiscardButton = styled.button`
display: flex;
justify-content: center;
align-items: center;
height: 30px;
background-color: transparent;
border-radius: 50px;
padding: 7px 5px;
border: 1px solid transparent;
color: ${wooclapBlue};
cursor: pointer;
width: 100px;
&:hover { border: 1px solid ${wooclapBlue} };`

export default function Footer() {
  return (
    <div className="Footer">
      <DiscardButton>Discard</DiscardButton>
      <SaveButton>Save</SaveButton>
    </div>
  );
}
