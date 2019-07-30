import React from 'react'
import { connect } from 'react-redux'
import ProjectType from './ProjectType';
import ProjectBudget from './ProjectBudget';
import ProjectStage from './ProjectStage';
import ProjectTime from './ProjectTime';
import ProjectCallback from './ProjectCallback';

function Project(props) {
    if(props.stepId == 1) {
        return (
            <ProjectType />
        )
    }
    if(props.stepId == 2) {
        return (
            <ProjectBudget />
        )
    }
    if(props.stepId == 3) {
        return (
            <ProjectStage />
        )
    }
    if(props.stepId == 4) {
        return (
            <ProjectTime />
        )
    }
    if(props.stepId == 5) {
        return (
            <ProjectCallback />
        )
    }
}

const mapState = (state) => {
    console.log('state', state.projectReducer.stepId)
    return {
        stepId: state.projectReducer.stepId
    }
}

export default connect(mapState)(Project)