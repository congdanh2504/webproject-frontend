import React from 'react'

const InputTag = (props) => {
  return (
    <div class="col-12 col-md-6">
      <div class="form-group">
        <label >{props.title}</label>
        {/* <label className="font-weight-bold">{props.title}</label> */}
        <input
          type={props.type}
          class="form-control"
          placeholder= {props.placeholder} />
      </div>
    </div>
  )
}

export default InputTag
