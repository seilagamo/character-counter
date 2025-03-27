import Checkbox from "./Checkbox.tsx";
import {ChangeEventHandler, FocusEventHandler, use, useState} from "react";
import CounterContext from "../../store/counter-context.tsx";

function InputForm () {

  const counterCtx = use(CounterContext);
  const [text, setText] = useState("");
  const [excludeSpaces, setExcludeSpaces] = useState(false);
  const [characterLimit, setCharacterLimit] = useState(false);
  const [limit, setLimit] = useState(0);

  const handleOnChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    let t = e.currentTarget.value;
    if (characterLimit && t.length > limit) {
      t = t.slice(0, limit);
      setText(t);
    }
    setText(t);
    counterCtx?.updateCounter(t, excludeSpaces);
  };

  const handleExcludeSpaces = (state: boolean) => {
    counterCtx?.updateCounter(text, state);
    setExcludeSpaces(state);
  };

  const handleCharacterLimit = (state: boolean) => {
    if (!state) {
      setLimit(0);
    }
    counterCtx?.updateCounter(text, state);
    setCharacterLimit(state);
  };

  const handleLimit: FocusEventHandler<HTMLInputElement> = (e) => {
    if (characterLimit) {
      setLimit(Number(e.currentTarget.value));
      if (text.length > limit) {
        const t = text.slice(0, limit);
        setText(t);
      }
    }
  };

  const handleChangeLimit: ChangeEventHandler<HTMLInputElement> = (e) => {
    setLimit(Number(e.currentTarget.value));
  };

  return (
    <form action="">
      <label htmlFor="textarea" className="visually-hidden">Textarea</label>
      <textarea id="textarea" className="input textarea"
                placeholder="Start typing here... (or paste your text)"
                onChange={handleOnChange} value={text}></textarea>
      <div className="flex options">
        <Checkbox label="Exclude Spaces" id="exclude-spaces" checked={false}
                  onChange={handleExcludeSpaces}/>
        <div className="flex">
          <Checkbox label="Set Character Limit" id="character-limit"
                    checked={false} onChange={handleCharacterLimit}/>
          <div className="limit">
            <label htmlFor="limit"
                   className="visually-hidden">Limit: </label>
            <input id="limit" type="input" value={limit}
                   onChange={handleChangeLimit} onBlur={handleLimit}/>
          </div>
        </div>
        <p className="reading-time">Approx. reading time: 0 minute</p>
      </div>
    </form>
  );
}

export default InputForm;