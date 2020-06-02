/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React, { useState } from "react";
import { Formik, Form } from "formik";

import { Aubtn, AuFormGroup } from "../../helpers/auds";
import addToMailchimp from "gatsby-plugin-mailchimp";
import { navigate } from "@reach/router";
import {
  NewsletterInitialValues,
  NewsletterSchema,
  NewsletterSubscribe,
} from "./newsletter-meta";
import SubscribeField from "./susbscribe-field";

const SubscribeNewsletterForm: React.FC = () => {
  const [state, setState] = useState({
    isErrors: false,
    submitted: false,
    apiMessage: "",
  });

  const postToMailChimp = async (FormData: NewsletterSubscribe) => {
    const { email } = FormData;
    const mailChimpResult = await addToMailchimp(email);

    if (mailChimpResult.result === "error") {
      const apiMessage = mailChimpResult.msg;
      setState((currentState) => ({ ...currentState, apiMessage }));
      return;
    }
    // console.log(result);
    navigate(`/submitted`, { replace: true });
  };

  return (
    <Formik
      initialValues={NewsletterInitialValues}
      onSubmit={(data, errors) => {
        postToMailChimp(data);
        setState({ isErrors: false, submitted: true, apiMessage: "" });
      }}
      validationSchema={NewsletterSchema}
    >
      {({ values, errors, touched, handleSubmit }) => (
        <Form
          onSubmit={(e) => {
            handleSubmit(e);
            if (Object.keys(errors).length < 1) return;
            setState({ isErrors: true, submitted: false, apiMessage: "" });
            if (state.isErrors) document.title = "Errors | Sign up form";
            const timeout = setTimeout(() => {
              const errorSum = document.getElementById("error-heading") as any;
              if (errorSum && errorSum.focus()) {
                errorSum.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }

              clearTimeout(timeout);
            }, 500);
          }}
        >
          {state && state.apiMessage && <p>error</p>}
          <SubscribeField
            btnText="Subscribe"
            aria_label="Subscribe to observatory newsletter"
            id="subscribe-email"
            label="Email"
            width="lg"
            dark={true}
            wrapper="div"
          />
        </Form>
      )}
    </Formik>
  );
};

export default SubscribeNewsletterForm;
