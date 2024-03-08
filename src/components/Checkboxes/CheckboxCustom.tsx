import { useState, useEffect } from "react";

interface CheckBoxCustomProps {
  val: string;
  answer: {key: string, val: string};
  checked: boolean;
  handleSelected: (value: any) => void
}

const CheckboxOne: React.FC<CheckBoxCustomProps> = ({val, answer, checked, handleSelected}) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  useEffect(() => setIsChecked(checked), []);

  return (
    <div>
      <label
        htmlFor={`checkboxLabelOne-${val}`}
        className="flex cursor-pointer select-none items-center"
      >
        <div className="relative">
          <input
            type="checkbox"
            id={`checkboxLabelOne-${val}`}
            className="sr-only"
            onChange={(e) => {
              e.preventDefault()
              setIsChecked(!isChecked);
              handleSelected(answer.key)
            }}
          />
          <div
            className={`mr-4 flex h-5 w-5 items-center justify-center rounded border ${
              isChecked && "border-primary bg-gray dark:bg-transparent"
            }`}
          >
            <span
              className={`h-2.5 w-2.5 rounded-sm ${isChecked && "bg-primary"}`}
            ></span>
          </div>
        </div>
        {answer?.val}
      </label>
    </div>
  );
};

export default CheckboxOne;
