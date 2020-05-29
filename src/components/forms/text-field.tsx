import React from "react";
import { useField } from "formik";
import {
  AuFormGroup,
  AuLabel,
  AuErrorText,
  AuHintText,
  AuTextInput,
} from "../helpers/auds";

interface TextFieldProps {
  label: string;
  id: string;
  required?: boolean;
  defaultValue?: string;
  hint?: string;
  onChange?: (e: any) => void;
  pattern?: string;
  width?: string;
  as?: string;
  className?: string;
}

const TextField: React.FC<TextFieldProps> = (props: TextFieldProps) => {
  const [field, meta] = useField({ name: props.id, ...props });
  const error = meta.touched && meta.error ? meta.error : "";

  return (
    <AuFormGroup status={error && "invalid"}>
      <AuLabel htmlFor={props.id} text={props.label} />
      {error && <AuErrorText text={meta.error} id={`${props.id}--error`} />}
      {props.hint && <AuHintText text={props.hint} />}
      <AuTextInput {...field} {...props} />
    </AuFormGroup>
  );
};

export default TextField;
