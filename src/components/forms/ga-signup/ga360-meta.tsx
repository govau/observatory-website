import * as Yup from "yup";

export const InitialValues: FormData = {
  abn: "",
  agencyName: "",
  accounts: "",
  cbagree: false,
  cbnewsletter: false,
  email: "",
  financeEmail: "",
  preferredName: "",
  tier: "",
};

export const SignUpSchema = Yup.object().shape({
  agencyName: Yup.string().required("Enter your agency"),
  abn: Yup.string().required().min(11, "Please enter a valid ABN"),
  accounts: Yup.string().required("Enter a UAID").min(10, "Enter a valid UAID"),
  cbagree: Yup.boolean()
    .test(
      "consented",
      "You must agree to the terms and conditions",
      (v) => v === true
    )
    .required(),
  email: Yup.string()
    .email(
      "Enter an email address in the correct format, like name@agency.gov.au"
    )
    .required("Email is a required field"),
  financeEmail: Yup.string()
    .email(
      "Enter an email address in the correct format, like name@agency.gov.au"
    )
    .required("Email is a required field"),
  preferredName: Yup.string().required("Enter your preferred name"),
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
});

export interface FormData {
  abn: string;
  accounts: string;
  agencyName: string;
  cbagree: boolean;
  cbnewsletter?: boolean;
  email: string;
  financeEmail: string;
  preferredName: string;
  tier: string;
}
