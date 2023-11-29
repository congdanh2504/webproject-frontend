import React from 'react';

function TextAreaTag(props) {
  return (
    <div class="col-12">
      <div class="form-group">
        <label>{props.title} {props.required && <span class="text-danger">*</span>}</label>
        <textarea
          defaultValue={props.defaultValue}
          class="form-control"
          rows={props.rows}
          name={props.name}
          placeholder={props.placeholder}
          onChange={props.onChange}
        />
      </div>
    </div>
  );
}

export default TextAreaTag;
