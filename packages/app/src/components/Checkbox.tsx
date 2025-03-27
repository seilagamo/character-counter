import {useState} from "react";

interface CheckboxProps {
  label: string;
  id: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

function Checkbox ({label, id, checked, onChange}: CheckboxProps) {
  const [isChecked, setIsChecked] = useState(checked);

  const checkHandler = () => {
    setIsChecked(!isChecked);
    onChange(!isChecked);
  };

  return (
    <div className={`check-${id} flex`}>
      <input id={id} type="checkbox" className="input" onChange={checkHandler}
             checked={isChecked} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

export default Checkbox;