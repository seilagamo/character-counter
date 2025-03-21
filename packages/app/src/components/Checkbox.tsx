import {useState} from "react";

interface CheckboxProps {
  label: string;
  id: string;
  checked: boolean;
}

function Checkbox ({label, id, checked}: CheckboxProps) {
  const [isChecked, setIsChecked] = useState(checked);

  const checkHandler = () => {
    setIsChecked(!isChecked);
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