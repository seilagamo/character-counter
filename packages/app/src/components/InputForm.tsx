import Checkbox from "./Checkbox.tsx";

function InputForm () {
  return (
    <form action="">
      <label htmlFor="textarea" className="visually-hidden">Textarea</label>
      <textarea id="textarea" className="input textarea"
                placeholder="Start typing here... (or paste your text)"></textarea>
      <div className="flex options">
        <Checkbox label="Exclude Spaces" id="exclude-spaces" checked={false}/>
        <div className="flex">
          <Checkbox label="Set Character Limit" id="character-limit" checked={false}/>
          <div className="limit">
            <label htmlFor="limit"
                   className="visually-hidden">Limit: </label>
            <input id="limit" type="number"/>
          </div>
        </div>
        <p className="reading-time">Approx. reading time: 0 minute</p>
      </div>
    </form>
  );
}

export default InputForm;