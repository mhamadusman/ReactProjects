import data from "./data"; // Import the data correctly
import React, { useState } from "react";
import "./style.css";
export default function Accordians() {
  const clickedQuestion = (index) => {
    console.log("inside clicked function");
    selected === index ? setSelected(null) : setSelected(index);
  };

  const updateMultiSelectionList = (index) => {
    console.log("inside updateMultiSelectionList function");

    let myCopy = [...multiSelectionList];
    if (myCopy.indexOf(index) === -1) {
      myCopy.push(index);
      setMultiSelectionList(myCopy);
    } else {
      myCopy.splice(myCopy.indexOf(index), 1);
      setMultiSelectionList(myCopy);
    }
  };

  const updateMultiSelectionState = () => {
    console.log("update selection state");
    console.log(multiSelection);
    setMultiSelection((prevState) => !prevState);
  };
  const setState = (index) => {
    multiSelection ? updateMultiSelectionList(index) : clickedQuestion(index);
  };

  const [selected, setSelected] = useState(null);
  const [multiSelection, setMultiSelection] = useState(false);
  const [multiSelectionList, setMultiSelectionList] = useState([]);
  return (
    <div>
      <div className="btn  my-btn mb-3 d-flex justify-content-center" onClick={updateMultiSelectionState}>
        Enabale MultiSelection
      </div>
      {data && data.length > 0 ? (
        data.map((dataItem) => (  
          <div
            className="col-12 d-flex flex-column w-100
            border rounded-2 mb-3 col-bg-color px-3 py-2"
            onClick={() => setState(dataItem.id)}
          >
            <div className="d-flex justify-content-between  align-items-center">
              <p className="">{dataItem.question}</p>
              <span>{selected === dataItem.id ? "-" : "+"}</span>
            </div>
            <div>
              {multiSelection ? (
                multiSelectionList.indexOf(dataItem.id) !== -1 ? (
                  <div className="col-12 text-white text-center">
                    {dataItem.answer}
                  </div>
                ) : null
              ) : selected === dataItem.id ? (
                <div className="col-12 text-white text-center">
                  {dataItem.answer}
                </div>
              ) : null}
            </div>
          </div>
        ))
      ) : (
        <div className="col-12 text-center text-dark">No data</div>
      )}
    </div>
  );
}
