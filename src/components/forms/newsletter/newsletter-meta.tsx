import * as Yup from "yup";

export const NewsletterSchema = Yup.object().shape({
  email: Yup.string()
    .email(
      "Enter an email address in the correct format, like name@agency.gov.au"
    )
    .required("Email is a required field"),
});

export const NewsletterInitialValues = {
  email: "",
};

export interface NewsletterSubscribe {
  email: string;
}
