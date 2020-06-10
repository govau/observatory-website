import React from "react";
import { useField } from "formik";
import { AuTextInput, AuErrorText } from "../../helpers/auds";

interface TextFieldProps {
  label: string;
  id: string;
  aria_label?: string;
  btnText?: string;
  className?: string;
  required?: boolean;
  defaultValue?: string;
  width?: string;
  dark?: boolean;
  alt?: boolean;
  wrapper?: string;
  type?: string;
}

const SubscribeField: React.FC<TextFieldProps> = (props: TextFieldProps) => {
  const [field, meta] = useField({ name: props.id, ...props });
  const error = meta.touched && meta.error ? meta.error : "";
  const describedByError: string = error && `${props.id}--error`;

  return (
    <>
      <label
        htmlFor={props.id}
        className={`inherit-bg au-body ${props.dark ? "au-body--dark" : ""} ${
          props.alt ? "au-body--alt" : ""
        }`}
      >
        {props.label}
      </label>
      <AuTextInput {...props} {...field} />
      {error && <AuErrorText text={meta.error} id={`${props.id}--error`} />}
    </>
  );
};

export default SubscribeField;
