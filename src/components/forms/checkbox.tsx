import { useField } from "formik";
import * as React from "react";
import {
  AuFormGroup,
  AuFieldset,
  AuLabel,
  AuHintText,
  AuErrorText,
  AuCheckbox,
  AuLegend,
} from "../helpers/auds";

interface CheckBoxFieldProps {
  legend: string;
  label: string;
  id: string;
  required?: boolean;
  defaultValue?: string;
  hint?: string;
  onChange?: (e: any) => void;
  className?: string;
}

const CheckBoxField: React.FC<CheckBoxFieldProps> = (
  props: CheckBoxFieldProps
) => {
  const [field, meta] = useField({ name: props.id, ...props });
  const error = meta.error && meta.touched ? true : false;
  return (
    <AuFormGroup>
      <AuFieldset>
        <AuLegend>
          <AuLabel htmlFor={props.id} text={props.legend} />
          {props.hint && <AuHintText text={props.hint} />}
          {error && <AuErrorText text={meta.error} id={`${props.id}--error`} />}
        </AuLegend>
        <AuCheckbox {...props} {...field} />
      </AuFieldset>
    </AuFormGroup>
  );
};

export default CheckBoxField;
