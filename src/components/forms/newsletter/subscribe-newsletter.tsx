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

interface Props {
  dark?: boolean;
}

const SubscribeNewsletterForm: React.FC<Props> = ({ dark = false }) => {
  const [state, setState] = useState({
    isErrors: false,
    submitted: false,
    apiMessage: "",
  });

  const postToMailChimp = async (FormData: NewsletterSubscribe) => {
    // const { email } = FormData;
    // const mailChimpResult = await addToMailchimp(email);
    // if (mailChimpResult.result === "error") {
    //   const apiMessage = mailChimpResult.msg;
    //   setState((currentState) => ({ ...currentState, apiMessage }));
    //   return;
    // }
    // console.log(result);
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
          id="newsletter-form"
        >
          {state && state.apiMessage && <p>error</p>}
          <div className="au-search au-search--dark au-form-group">
            <SubscribeField
              id="newsletter_email"
              type="search"
              label="Subscribe"
              dark={dark}
            />
            <div className="au-search__btn">
              <Aubtn dark={dark}>Subscribe</Aubtn>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SubscribeNewsletterForm;
