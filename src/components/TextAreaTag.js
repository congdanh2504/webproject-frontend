import React from 'react'

function TextAreaTag(props) {
  return (
    <div class="col-12">
      <div class="form-group">
        <label>{props.title}</label>
        <textarea
          defaultValue={props.defaultValue}
          class="form-control"
          rows={props.rows}
          placeholder={props.placeholder}
          onChange={props.onChange}
        />
      </div>
    </div>
  )
}

export default TextAreaTag
