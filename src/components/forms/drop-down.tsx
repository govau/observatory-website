import React from "react";
import { useField } from "formik";

import { SelectOptionType } from "../helpers/types";
import {
  AuFormGroup,
  AuLabel,
  AuErrorText,
  AuHintText,
  AuSelect,
} from "../helpers/auds";

interface SelectFieldProps {
  id: string;
  label: string;
  defaultValue?: string;
  hint?: string;
  options: Array<SelectOptionType>;
  onChange?: (e: any) => void;
  pattern?: string;
  required?: boolean;
  width?: string;
}

const SelectField: React.FC<SelectFieldProps> = (props: SelectFieldProps) => {
  const [field, meta] = useField({ name: props.id, ...props });
  const error = meta.touched && meta.error ? meta.error : "";

  return (
    <AuFormGroup status={error ? "invalid" : "valid"}>
      <AuLabel htmlFor={props.id} text={props.label} />
      {error && <AuErrorText text={meta.error} id={`${props.id}--error`} />}
      {props.hint && <AuHintText text={props.hint} />}
      <AuSelect {...props} {...field} />
    </AuFormGroup>
  );
};

export default SelectField;
