import React from 'react'
import { connect } from 'react-redux';
import { doubleAddStage, changeStepId } from '../../actions/index.js'

function ProjectStage(props) {
    return (
        <div className="project__big">
        <span style={{position: 'absolute', top: '0'}} onClick={() => props.changeStepId(1)}>GO back</span>
            <div className="project__type">
                <p onClick={()=> props.doubleAddStage(4, 'Новый проект')}>Новый проект</p>
                <p onClick={()=> props.doubleAddStage(4, 'Существуещий проект')}>Существуещий проект</p>
            </div>
        </div>
    )
}

const mapDispatch = dispatch => {
    return {
        doubleAddStage: ( stepId, stageId ) => dispatch(doubleAddStage(stepId, stageId)),
        changeStepId: (stepId) => dispatch(changeStepId(stepId))
    }
}

export default connect( null, mapDispatch)(ProjectStage)