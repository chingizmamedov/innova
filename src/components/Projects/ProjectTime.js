import React from 'react'
import { connect } from 'react-redux';
import { doubleAddTime, changeStepId } from '../../actions/index.js'

function ProjectTime(props) {
    return (
        <div className="project__big">
        <span style={{position: 'absolute', top: '0'}} onClick={() => props.changeStepId(1)}>GO back</span>
            <div className="project__type">
                <p onClick={()=> props.doubleAddTime(5, 'Немедленно')}>Немедленно</p>
                <p onClick={()=> props.doubleAddTime(5, 'В течении недели')}>В течении недели</p>
                <p onClick={()=> props.doubleAddTime(5, 'В течении месяца')}>В течении месяца</p>
                <p onClick={()=> props.doubleAddTime(5, 'непринципиально')}>непринципиально</p>
            </div>
        </div>
    )
}


const mapDispatch = dispatch => {
    return {
        doubleAddTime: ( stepId, timeId ) => dispatch(doubleAddTime(stepId, timeId)),
        changeStepId: (stepId) => dispatch(changeStepId(stepId))
    }
}

export default connect( null, mapDispatch)(ProjectTime)