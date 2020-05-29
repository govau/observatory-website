import React from "react";
import { Formik, Form, Field } from "formik";

import * as Yup from "yup";
import TextField from "./text-field";
import { ABNValidation } from "../helpers/helper";
import SelectField from "./drop-down";
import CheckBoxField from "./checkbox";
import { Aubtn, AuFormGroup } from "../helpers/auds";

interface Props {
  a?: string;
}

Yup.addMethod<Yup.StringSchema>(Yup.string, "validateABN", function (
  this: any,
  args
) {
  console.log(this);
  console.log(args);
  return this.test("test-name", "bla", function (value: any) {
    return true;
  });
});

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
  tier: Yup.string().required("Select a tier"),
  cbagree: Yup.boolean().oneOf([true], "Field must be checked"),
});

const GAform: React.FC<Props> = () => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        preferredName: "",
        abn: "",
        agencyName: "",
        accounts: "",
        cbagree: false,
      }}
      onSubmit={(data) => console.log(data)}
      validationSchema={SignUpSchema}
    >
      {({ values, errors, touched }) => (
        <Form>
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
              { value: "", text: "Choose" },
              { value: "tier1", text: "1 - 10 million" },
              { value: "tier2", text: "10 - 100 million" },
              { value: "tier3", text: " 100 - 500 million" },
              { value: "tier4", text: "500 million to 1 billion" },
              { value: "tier5", text: "Over 1 billion" },
              { value: "Free", text: "0 - 1 million (free)" },
            ]}
          />
          <CheckBoxField
            id="cbagree"
            label="I agree"
            legend="I agree to the Terms of Service"
          />
          <AuFormGroup>
            <Aubtn type="submit">Submit</Aubtn>
          </AuFormGroup>
          <pre>{JSON.stringify(values)}</pre>
          <pre>{JSON.stringify(errors, null, 2)}</pre>
        </Form>
      )}
    </Formik>
  );
};

export default GAform;
