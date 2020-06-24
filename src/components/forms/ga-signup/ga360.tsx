/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React, { useState } from "react";
import { Formik, Form } from "formik";

import TextField from "../text-field";
import SelectField from "../drop-down";
import CheckBoxField from "../checkbox";
import { Aubtn, AuFormGroup, AuFieldset, AuLegend } from "../../helpers/auds";
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

  const handleAPIerror = (apiMessage: string) => {
    setState((currentState) => ({ ...currentState, apiMessage }));

    document.title = "Error | Sign up form";
    const container = document.querySelector("main") as any;
    container &&
      container.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  const postToMailChimp = async (formData: FormData) => {
    setSaving(true);
    const { email } = formData;

    const subscribeGAresult = await addToMailchimp(email, {
      NAME: formData.preferredName,
      AGENCY: formData.agencyName,
      ACC_IDS: formData.accounts,
      ABN: formData.abn,
      EST_HITS: formData.tier,
      INV_EMAIL: formData.financeEmail,
      "group[67090][1]": formData.cbagree,
    });

    if (subscribeGAresult.result === "error") {
      const apiMessage = subscribeGAresult.msg;
      handleAPIerror(apiMessage);
      setSaving(false);
      return;
    }

    // Add to newsletter subscribe audience if selected
    if (formData.cbnewsletter) {
      const newsletterSubscribeResult = await addToMailchimp(
        email,
        {},
        "https://dta.us12.list-manage.com/subscribe/post?u=81bbb1d15242b2224ee11e3fe&amp;id=b0e8de9c9a"
      );

      if (newsletterSubscribeResult.result === "error") {
        const apiMessage = newsletterSubscribeResult.msg;
        handleAPIerror(apiMessage);
        setSaving(false);

        return;
      }
    }

    setSaving(false);
    navigate(`/submitted`, { replace: true, state: { email } });
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
          noValidate
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
          <AuFieldset className="fieldset-group">
            <span>
              <AuLegend>
                <h3>1. Account details</h3>
              </AuLegend>
            </span>
            <TextField
              id="preferredName"
              label="Your name"
              width="lg"
              required
            />
            <TextField
              id="email"
              hint={`Shared email addresses are preferred, since they
             allow your agency to be contacted regardless of possible staff changes.`}
              label="Contact email"
              width="lg"
              required
            />
            <TextField
              id="accounts"
              label="Your accounts"
              hint="Tell us which of your existing analytics accounts you would like to link to our subscription, and upgrade to Google Analytics 360 (e.g. UA-XXXXXXXX). If you do not have an existing Google Analytics account, please contact our team at analytics@digital.gov.au. "
              width="xl"
              as="textarea"
              required
            />
            <SelectField
              id="tier"
              label="Estimated billable hits per month"
              hint="Please note, this would be the total hits expected for all of your accounts listed above."
              options={[
                { value: "", text: "Choose one" },
                { value: "0 - 1 million", text: "0 - 1 million (free)" },
                { value: "1m - 10 million", text: "1 - 10 million" },
                { value: "10m - 100 million", text: "10 - 100 million" },
                { value: "100m - 500 million", text: " 100 - 500 million" },
                { value: "500m - 1 billion", text: "500 million to 1 billion" },
                { value: "Over 1 billion", text: "Over 1 billion" },
              ]}
            />
          </AuFieldset>

          <AuFieldset className="fieldset-group">
            <span>
              <AuLegend>
                <h3>2. Finance details</h3>
              </AuLegend>
            </span>
            <TextField
              id="agencyName"
              label="Agency name"
              required
              width="xl"
            />
            <TextField
              id="abn"
              label="Agency Australian Business Number (ABN)"
              width="lg"
              required
            />
            <TextField
              id="financeEmail"
              label="Accounts payable email"
              hint="So we know who to invoice (if required)"
              required
              width="lg"
            />
          </AuFieldset>

          <AuFieldset className="fieldset-group">
            <span>
              <AuLegend>
                <h3>3. Terms and conditions</h3>
              </AuLegend>
            </span>

            <CheckBoxField
              id="cbagree"
              label="I agree"
              legend={`I agree to the <a href="/analytics-360/terms-of-service">Terms of Service</a> and have the financial delegation to spend the required amount for this subscription`}
            />
            <CheckBoxField
              id="cbnewsletter"
              label="Yes"
              legend="I would like to receive product updates from the Observatory team"
            />
          </AuFieldset>
          <AuFieldset className="fieldset-group">
            <h3>
              <AuLegend>4. Lets go!</AuLegend>
            </h3>
            <p>
              When you submit this form, your details will be recorded. A member
              of the DTA&apos;s analytics team will contact you within 1
              business day with confirmation of your subscription.
            </p>
            <AuFormGroup>
              <Aubtn type="submit" disabled={saving}>
                {saving ? "Submitting" : "Submit"}
              </Aubtn>
            </AuFormGroup>
          </AuFieldset>
        </Form>
      )}
    </Formik>
  );
};

export default GAform;
