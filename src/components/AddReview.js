import React, { useState } from 'react'
import ReactStars from "react-rating-stars-component";
import { addReview } from '../api/jobAPI';
import { getUser } from "../api/Common";

function AddReview(props) {
    const [rate, setRate] = useState(0);
    const [title, setTitle] = useState("")
    const [message,setMessage] = useState("")

    const changeRate = (param) => {
        setRate(param)
    }

    const changeTitle = (param) => {
        setTitle(param.target.value)
    }

    const changeMessage = (param) => {
        setMessage(param.target.value)
    }

    const submit = () => {
        if (rate && title && message)
        addReview(props.id, title, message, rate, props.setJob, props.idJob)
    }

    const isDisabled = ()=>{
        if(getUser()== null){
            return true;
        } 
        return (getUser().type == "Employee")?false:true;
    }

    return (
        <div className="write-review">
            <h4>
            Write a review
            </h4>
            <div className="form-group">
                <label>Review</label>
                <ReactStars
                    count={5}
                    onChange={changeRate}
                    size={24}
                    activeColor="#ffd700"
                />
            </div>
            <div className="form-group">
                <label>Title of your review</label>
                <input
                onChange={changeTitle}
                className="form-control"
                type="text"
                placeholder="If you could say it in one sentence, what would you say?"
                />
            </div>
            <div className="form-group">
                <label>Your review</label>
                <textarea
                onChange={changeMessage}
                id="review_desc"
                maxlength="100"
                className="form-control"
                ></textarea>

                <div className="d-flex justify-content-between mt-3">
                <small className="text-muted">
                    <span id="chars">100</span> characters remaining
                </small>
                </div>
            </div>
            <hr />
            <div className="submit-section">
                <button
                onClick={submit}
                type="submit"
                className="btn btn-primary submit-btn"
                disabled={isDisabled()}
                >
                Add Review
                </button>
            </div>
        </div>
    )
}

export default AddReview
