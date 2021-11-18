import React from 'react'

function TextAreaTag(props) {
  return (
    <div class="col-12">
      <div class="form-group">
        <label>{props.title}</label>
        <textarea
          class="form-control"
          rows={props.rows}
          placeholder={props.placeholder}
          onChange={props.onChange}
          value={props.value}
        />
      </div>
    </div>
  )
}

export default TextAreaTag
