import * as Yup from "yup";

export const InitialValues: FormData = {
  email: "raj.ghuman@dta.gov.au",
  preferredName: "Raj G",
  abn: "11111111111",
  agencyName: "DTA",
  sharedEmail: "agency@dta.gov.au",
  accounts: "aasdfsdaf123",
  tier: "",
  cbauthority: false,
  cbdelegation: false,
  cbagree: false,
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
  cbauthority: boolean;
  cbdelegation: boolean;
  cbagree: boolean;
}
