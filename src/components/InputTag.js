import React from "react";

const InputTag = (props) => {
  return (
    <div class="col-12 col-md-6 ">
      <div class="form-group">
        <label>
          {props.title} {props.required && <span class="text-danger">*</span>}
        </label>
        <input
          name={props.name}
          defaultValue={props.defaultValue}
          className="form-control"
          placeholder={props.placeholder}
          onChange={props.onChange}
        />
      </div>
    </div>
  );
};

export default InputTag;
