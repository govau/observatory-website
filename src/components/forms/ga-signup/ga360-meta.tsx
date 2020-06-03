import * as Yup from "yup";

export const InitialValues: FormData = {
  email: "raj.ghuman@dta.gov.au",
  preferredName: "Raj G",
  abn: "11111111111",
  agencyName: "DTA",
  sharedEmail: "agency@dta.gov.au",
  accounts: "aasdfsdaf123",
  tier: "",
  cbagree: false,
  cbnewsletter: false,
};

export const SignUpSchema = Yup.object().shape({
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
  abn: Yup.string().required().min(11, "Please enter a valid ABN"),
  accounts: Yup.string().required("Enter a UAID").min(10, "Enter a valid UAID"),
  tier: Yup.string()
    .oneOf([
      "0 - 1 million",
      "1m - 10 million",
      "10m - 100 million",
      "100m - 500 million",
      "500m - 1 billion",
      "Over 1 billion",
    ])
    .required("Select a tier"),
  cbagree: Yup.boolean()
    .test(
      "consented",
      "You must agree to the terms and conditions",
      (v) => v === true
    )
    .required(),
  sharedEmail: Yup.string()
    .email(
      "Enter an email address in the correct format, like name@agency.gov.au"
    )
    .required("Email is a required field")
    .matches(
      /.*gov.au$/i,
      "A government email is required to sign up, like name@agency.gov.au"
    ),
});

export interface FormData {
  email: string;
  preferredName: string;
  abn: string;
  agencyName: string;
  accounts: string;
  tier: string;
  sharedEmail: string;
  cbagree: boolean;
  cbnewsletter?: boolean;
}
