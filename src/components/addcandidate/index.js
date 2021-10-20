import React, { useState, useEffect } from "react";
import {
  AddCandidateAddNoteButton,
  AddCandidateDiv,
  AddCandidateNoteDiv,
  AddCandidateNoteInput,
  AddCandidateNoteInputDiv,
  AddCandidateStageSelect,
  AddCandidateScheduleButtonsDiv,
  AddCandidateScheduleButtons,
  AddCandidateTabsDiv,
} from "./addcandidate.style";
import CandidateStageSelect from "./candidatestageselect";
import AddCandidateBody from "./addcandidatebody";
import Axios from "axios";
import { ADD_CANDIDATE } from "./apis";

const AddCandidate = () => {
  const [getInputSize, setInputSize] = useState("");
  const [getOnFocus, setOnFocus] = useState(false);
  const [getNote, setNote] = useState();
  const [getName, setName] = useState();
  const [getCompanyName, setCompanyName] = useState();
  const [getResume, setResume] = useState();
  const [getEmail, setEmail] = useState();
  const [getPhone, setPhone] = useState();

  const onFocusHandler = () => {
    setOnFocus(true);
    setInputSize("active");
  };
  const submitNoteHandler = () => {
    setOnFocus(false);
    setInputSize("null");
  };
  const onBlurHandler = () => {
    setOnFocus(false);
  };

  useEffect(() => {
    console.log("Name", getName);
    console.log("Company Name", getCompanyName);
    console.log("Resume", getResume);
  });
  const config = {
    headers: { "content-type": "multipart/form-data" },
  };

  const candidateAddHandler = async () => {
    await Axios.post(
      ADD_CANDIDATE,
      {
        candidate_name: getName,
        prev_company: getCompanyName,
        email: getEmail,
        phone: getPhone,
        cv: getResume,
        notes: getNote,
      },
      config
    ).then((response) => {
      console.log("asdsadsadsadsadsad ", response.data);
    });
  };
  const noteChangeHandler = (e) => {
    setNote(e.target.value);
  };

  return (
    <React.Fragment>
      <AddCandidateDiv>
        <AddCandidateNoteDiv>
          <AddCandidateNoteInputDiv active={getOnFocus}>
            <AddCandidateNoteInput
              placeholder="Add Note"
              onFocus={onFocusHandler}
              onBlur={onBlurHandler}
              active={getOnFocus}
              onChange={noteChangeHandler}
            />
            {getOnFocus && (
              <AddCandidateAddNoteButton onClick={submitNoteHandler}>
                Add Note
              </AddCandidateAddNoteButton>
            )}
          </AddCandidateNoteInputDiv>
        </AddCandidateNoteDiv>
        <AddCandidateStageSelect>
          <CandidateStageSelect />
        </AddCandidateStageSelect>
        <AddCandidateScheduleButtonsDiv>
          <AddCandidateScheduleButtons onClick={candidateAddHandler}>
            + Add Candidate
          </AddCandidateScheduleButtons>
        </AddCandidateScheduleButtonsDiv>
      </AddCandidateDiv>
      <AddCandidateTabsDiv>
        <AddCandidateBody
          candidateName={setName}
          candidateCompany={setCompanyName}
          candidateResume={setResume}
          candidateEmail={setEmail}
          candidatePhone={setPhone}
        />
      </AddCandidateTabsDiv>
    </React.Fragment>
  );
};

export default AddCandidate;
