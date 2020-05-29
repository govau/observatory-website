/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React, { useState } from "react";
import { Formik, Form } from "formik";

import * as Yup from "yup";
import TextField from "./text-field";
import { ABNValidation } from "../helpers/helper";
import SelectField from "./drop-down";
import CheckBoxField from "./checkbox";
import { Aubtn, AuFormGroup } from "../helpers/auds";
import PageAlert from "../blocks/page-alert";

interface Props {
  a?: string;
}

const SignUpSchema = Yup.object().shape({
  email: Yup.string()
    .email(
      "Enter an email address in the correct format, like name@agency.gov.au"
    )
    .required("Email is a required field")
    .matches(
      /.*gov.au$/i,
      "A government email is required to sign up, like name@agency.gov.au"
    ),
  preferredName: Yup.string().required("Enter your preferred name"),
  agencyName: Yup.string().required("Enter your agency"),
  abn: Yup.string().required().length(11, "Please enter a valid ABN"),
  accounts: Yup.string().required("Enter a UAID").min(10, "Enter a valid UAID"),
  tier: Yup.string()
    .oneOf(["tier1", "tier2", "tier3", "tier4", "tier5", "free"])
    .required("Select a tier"),
  cbagree: Yup.boolean()
    .test(
      "consented",
      "You must agree to the terms and conditions",
      (v) => v === true
    )
    .required(),
  cbdelegation: Yup.boolean()
    .test("del", "You must have delegation to spend", (v) => v === true)
    .required(),
  cbauthority: Yup.boolean()
    .test(
      "auth",
      "You must have the authority to make this agreement",
      (v) => v === true
    )
    .required(),
});

const GAform: React.FC<Props> = () => {
  const initialValues = { isErrors: false };
  const [state, setState] = useState(initialValues);
  return (
    <Formik
      initialValues={{
        email: "abc@dsd.gov.au",
        preferredName: "asdfsadf",
        abn: "11111111111",
        agencyName: "11111sdf",
        accounts: "1212121212121212",
        tier: "",
        cbauthority: false,
        cbdelegation: false,
        cbagree: false,
      }}
      onSubmit={(data, errors) => {
        console.log("hello");
      }}
      validationSchema={SignUpSchema}
    >
      {({ values, errors, touched, handleSubmit }) => (
        <Form
          onSubmit={(e) => {
            handleSubmit(e);
            if (Object.keys(errors).length < 1) return;
            setState({ isErrors: true });
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
          {state.isErrors && (
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
          )}

          <TextField id="email" label="Email" width="lg" />
          <TextField id="preferredName" label="Preferred name" width="lg" />
          <TextField id="agencyName" label="Agency name" width="xl" />
          <TextField
            id="abn"
            label="Agency Australian Business Number (ABN)"
            width="xl"
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
            <Aubtn type="submit">Submit</Aubtn>
          </AuFormGroup>
          <pre>{JSON.stringify(values, null, 2)}</pre>
          <pre>{JSON.stringify(errors, null, 2)}</pre>
        </Form>
      )}
    </Formik>
  );
};

export default GAform;
