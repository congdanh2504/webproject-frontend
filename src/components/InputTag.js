import React from 'react'

const InputTag = (props) => {
  return (
    <div class="col-12 col-md-6">
      <div class="form-group">
        <label >{props.title}</label>
        <input
          type={props.type}
          class="form-control"
          placeholder= {props.placeholder}
          onChange={props.onChange} 
          value={props.value}
          />
      </div>
    </div>
  )
}

export default InputTag
