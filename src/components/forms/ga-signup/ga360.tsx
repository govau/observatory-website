/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";

import TextField from "../text-field";
import SelectField from "../drop-down";
import CheckBoxField from "../checkbox";
import { Aubtn, AuFormGroup } from "../../helpers/auds";
import PageAlert from "../../blocks/page-alert";
import addToMailchimp from "gatsby-plugin-mailchimp";
import { navigate } from "@reach/router";
import { InitialValues, SignUpSchema, FormData } from "./ga360-meta";

const GAform: React.FC = () => {
  const [state, setState] = useState({
    isErrors: false,
    submitted: false,
    apiMessage: "",
  });

  const [saving, setSaving] = useState<boolean>(false);

  const postToMailChimp = async (formData: FormData) => {
    setSaving(true);
    const { email } = formData;
    const mailChimpResult = await addToMailchimp(email, {
      NAME: formData.preferredName,
      AUTHORITY: formData.cbauthority,
      AGENCY: formData.agencyName,
      "group[67090][1]": formData.cbauthority,
    });

    setSaving(false);
    if (mailChimpResult.result === "error") {
      const apiMessage = mailChimpResult.msg;
      setState((currentState) => ({ ...currentState, apiMessage }));
      document.title = "Error | Sign up form";
      const container = document.querySelector("main") as any;
      container &&
        container.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

      return;
    }
    // console.log(result);
    navigate(`/submitted`, { replace: true });
  };

  return (
    <Formik
      initialValues={InitialValues}
      onSubmit={(data, errors) => {
        postToMailChimp(data);
        setState({ isErrors: false, submitted: true, apiMessage: "" });
      }}
      validationSchema={SignUpSchema}
    >
      {({ values, errors, touched, handleSubmit }) => (
        <Form
          onSubmit={(e) => {
            handleSubmit(e);
            if (Object.keys(errors).length < 1) return;

            setState({ isErrors: true, submitted: false, apiMessage: "" });
            document.title = "Errors | Sign up form";
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
          {state && state.apiMessage && (
            <PageAlert type="error" className="max-42">
              <>
                <h3 id="api-error-heading">There was an error</h3>
                <p dangerouslySetInnerHTML={{ __html: state.apiMessage }}></p>
              </>
            </PageAlert>
          )}
          {state.isErrors && Object.keys(errors).length > 0 ? (
            <PageAlert type="error" className="max-42">
              <>
                <h3 tabIndex={0} id="error-heading">
                  There has been an error
                </h3>
                <ul>
                  {Object.keys(errors).map((error, i: number) => (
                    <li key={i}>
                      <a href={`#${error}`}>{errors[error]}</a>
                    </li>
                  ))}
                </ul>
              </>
            </PageAlert>
          ) : (
            ""
          )}

          <TextField id="email" label="Email" width="lg" />
          <TextField id="preferredName" label="Preferred name" width="lg" />
          <TextField
            id="abn"
            label="Agency Australian Business Number (ABN)"
            width="lg"
          />
          <TextField id="agencyName" label="Agency name" width="xl" />
          <TextField
            id="sharedEmail"
            hint="If a general or shared email address is available, please include this along with your work email address. Shared email addresses allow your agency to be contacted regardless of possible staff changes."
            label="Shared email"
            width="lg"
          />
          <TextField
            id="accounts"
            label="Your accounts"
            hint="Tell us which of your existing analytics accounts you would like to link to our subscription, and upgrade to Google Analytics 360 (e.g. UA-XXXXXXXX). If you do not have an existing Google Analytics account, please contact our team at analytics@digital.gov.au. "
            width="xl"
            as="textarea"
          />
          <SelectField
            id="tier"
            label="Estimated billable hits per month"
            hint="Please note, this would be the total hits expected for all of your accounts listed above."
            options={[
              { value: "", text: "Choose one" },
              { value: "tier1", text: "1 - 10 million" },
              { value: "tier2", text: "10 - 100 million" },
              { value: "tier3", text: " 100 - 500 million" },
              { value: "tier4", text: "500 million to 1 billion" },
              { value: "tier5", text: "Over 1 billion" },
              { value: "Free", text: "0 - 1 million (free)" },
            ]}
          />
          <CheckBoxField
            legend="Do you have authority to make this agreement with the DTA using the Terms of Service?"
            label="Yes"
            id="cbauthority"
          />
          <CheckBoxField
            legend="Do you have financial delegation to spend the amount required for this subscription?"
            label="Yes"
            id="cbdelegation"
          />
          <CheckBoxField
            id="cbagree"
            label="I agree"
            legend="I agree to the Terms of Service"
          />
          <h3 className="au-display-md">
            When you submit this form, your details will be recorded.
          </h3>
          <p>
            A member of the DTA&apos;s analytics team will contact you within 5
            business days with confirmation of your subscription.
          </p>
          <AuFormGroup>
            <Aubtn type="submit" disabled={saving}>
              {saving ? "Submitting" : "Submit"}
            </Aubtn>
          </AuFormGroup>
        </Form>
      )}
    </Formik>
  );
};

export default GAform;
