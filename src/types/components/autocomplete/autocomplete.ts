import {
  AutocompleteChangeReason,
  AutocompleteProps as MuiAutocompleteProps,
  AutocompleteRenderInputParams,
} from "@material-ui/lab";
import { FormikProps } from "formik";

import { Any } from "~/types";

export interface AutocompleteOption {
  title: string;
  value: string;
}

//FIXME: WTF ANY
export interface AutocompleteProps
  extends Omit<MuiAutocompleteProps<AutocompleteOption, boolean, boolean, boolean>, "renderInput"> {
  id?: string;
  controlledDefaultValue?: AutocompleteOption | AutocompleteOption[];
  formik?: FormikProps<Any>;
  inputLabel?: string;
  options: AutocompleteOption[];
  addOptionOnClick?: () => void;
  renderInput?: (params: AutocompleteRenderInputParams) => React.ReactNode;
  controlledOnChange?: (
    event: React.ChangeEvent<Record<Any, Any>>,
    value: AutocompleteOption | AutocompleteOption[],
    reason?: AutocompleteChangeReason
  ) => void;
}
