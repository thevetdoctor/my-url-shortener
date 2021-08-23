import React, { useState, useEffect } from "react";

import Form from "../Form/Form";
import ResultList from "../ResultList/ResultList";
import StatsIntroText from "../StatsIntroText/StatsIntroText";
import CardDeck from "../CardDeck/CardDeck";
import { getShortenedURL } from "../../Api";
import "./Statsection.scss";

const StatSection = () => {
  const introSubtitle =
    "Track how your links are performing across the web with our advanced statistics dashboard";

  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [formFieldValid, setFormFieldValid] = useState(true);
  const [formValid, setFormValid] = useState(true);
  const [shortenedURLs, setShortenedURLs] = useState([]);

  const { inputValueField } = inputValue;
  const { errorMsg } = errorMessage;
  const { formValidation } = formValid;
  const { formFieldValidation } = formFieldValid;
  const { shortURLs } = shortenedURLs;

  useEffect(() => {
    try {
      const stateQueries = JSON.parse(localStorage.getItem("pastQueries"));
      if (stateQueries) {
        setShortenedURLs({
          shortenedURLs: stateQueries,
        });
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  const handleInputFieldChange = (event) => {
    const value = event.target.value;
    setInputValue(
      {
        inputValue: event.target.value,
      },
      () => {
        validateField(value);
      }
    );
  };

  const validateField = (fieldValue) => {
    const urlRegEx =
      /((http|https|ftp):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%;:#-~+&amp/]*[\w@?^=%&amp;/~+#-])?/g;

    if (!fieldValue) {
      setErrorMessage({
        errorMessage: "Field cannot be blank. Please enter a URL.",
      });
      setFormFieldValid({
        formFieldValid: false,
      });
    } else if (!urlRegEx.test(fieldValue)) {
      setErrorMessage({
        errorMessage: "Please enter a valid URL",
      });
      setFormFieldValid({
        formFieldValid: false,
      });
    } else {
      setErrorMessage({
        errorMessage: "",
      });
      setFormFieldValid({
        formFieldValid: true,
      });
    }
  };

  const validateForm = () => {
    setFormValid({
      formValid: formFieldValidation,
    });
    return formValidation;
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      getShortenedURL(inputValueField)
        .then((response) => {
          setShortenedURLs((prevState) => ({
            shortenedURLs: [...prevState.shortenedURLs, response.data.result],
          }));
          localStorage.setItem("pastQueries", JSON.stringify(shortURLs));
          console.log(response.data);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <section data-testid="stats" id="stats">
      <Form
        value={inputValueField}
        onSubmit={handleFormSubmit}
        onChange={handleInputFieldChange}
        errorMessage={errorMsg}
        formFieldValid={formFieldValidation}
      />
      <ResultList results={shortURLs} />
      <StatsIntroText
        introTitle="Advanced Statistics"
        bodyText={introSubtitle}
      />
      <CardDeck />
    </section>
  );
};
export default StatSection;
