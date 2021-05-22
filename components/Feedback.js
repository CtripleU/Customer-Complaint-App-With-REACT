import React from 'react';


const Feedback = (props) => {

    return (
        <div className ="ml-4">
            <h2 className ="mb-4" >Customer Complaints Details</h2>

            <h5>Name of Customer</h5>
            <p>props.feedbackDetails.name</p>

            <h5>Email</h5>
            <p>props.feedbackDetails.email</p>

            <h5>Reason</h5>
            <p>props.feedbackDetails.reason</p>

            <h5>Description</h5>
            <p>props.feedbackDetails.Description</p>
        </div>
    )
}

export default Feedback;