import Input from "../form-input";
import Label from "../form-label";
import { ControlProps } from "./types";

export default function Control({ label }: ControlProps) {
  return (
    <Label text={label}>
      <Input />
    </Label>
  );
}
