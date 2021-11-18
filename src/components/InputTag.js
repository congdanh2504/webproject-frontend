import React from 'react'

const InputTag = (props) => {
  return (
    <div class="col-12 col-md-6">
      <div class="form-group">
        <label >{props.title}</label>
        <input
          defaultValue={props.defaultValue}
          type={props.type}
          class="form-control"
          placeholder= {props.placeholder}
          onChange={props.onChange} />
      </div>
    </div>
  )
}

export default InputTag
