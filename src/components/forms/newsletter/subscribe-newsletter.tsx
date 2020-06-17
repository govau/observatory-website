/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React, { useState } from "react";
import { Formik, Form } from "formik";

import { Aubtn } from "../../helpers/auds";
import addToMailchimp from "gatsby-plugin-mailchimp";
import {
  NewsletterInitialValues,
  NewsletterSchema,
  NewsletterSubscribe,
} from "./newsletter-meta";
import SubscribeField from "./susbscribe-field";
import PageAlert from "../../../components/blocks/page-alert";

interface Props {
  dark?: boolean;
}

const SubscribeNewsletterForm: React.FC<Props> = ({
  dark = false,
}) => {
  const [state, setState] = useState({
    isErrors: false,
    isSubmitting: false,
    submitted: false,
    apiMessage: "",
    email: "",
  });

  const postToMailChimp = async (FormData: NewsletterSubscribe) => {
    setState((currentState) => ({ ...currentState, isSubmitting: true }));
    const { email } = FormData;
    const mailChimpResult = await addToMailchimp(
      email,
      {},
      "https://dta.us12.list-manage.com/subscribe/post?u=81bbb1d15242b2224ee11e3fe&amp;id=b0e8de9c9a"
    );

    if (mailChimpResult.result === "error") {
      const apiMessage = mailChimpResult.msg;
      setState((currentState) => ({
        ...currentState,
        isErrors: true,
        isSubmitting: false,
        apiMessage,
      }));
      return;
    }

    setState((currentState) => ({
      ...currentState,
      isErrors: false,
      isSubmitting: false,
      submitted: true,
      email,
      apiMessage: "",
    }));
  };

  return (
    <>
      {state.submitted && !state.isSubmitting ? (
        <PageAlert type="success" className="max-42">
          <>
            <h3>Success</h3>
            <p>
              Thank you for subscribing! We have sent an email to{" "}
              <strong>{state.email}</strong> with details on how to confirm your
              subscription.
            </p>
          </>
        </PageAlert>
      ) : (
        <Formik
          initialValues={NewsletterInitialValues}
          onSubmit={(data) => {
            postToMailChimp(data);
          }}
          validationSchema={NewsletterSchema}
          validateOnBlur={false}
          validateOnChange={false}
        >
          {() => (
            <Form id="newsletter-form" className="max-42">
              <div className="au-search au-search--dark au-form-group max-30">
                <SubscribeField
                  id="email"
                  type="search"
                  label="Enter email"
                  dark={dark}
                />
                <div className="au-search__btn">
                  <Aubtn
                    dark={dark}
                    type="submit"
                    disabled={state.isSubmitting}
                  >
                    {state.isSubmitting ? "Submitting" : "Subscribe"}
                  </Aubtn>
                </div>
              </div>
              {state.isErrors && (
                <p
                  className="au-error-text mt-0"
                  dangerouslySetInnerHTML={{ __html: state.apiMessage }}
                ></p>
              )}
            </Form>
          )}
        </Formik>
      )}
    </>
  );
};

export default SubscribeNewsletterForm;
