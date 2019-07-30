import React from 'react'
import { changeStepId } from '../../actions/index.js'
import { connect } from 'react-redux';

function ProjectCallback(props) {
    return (
        <div className="project__big">
            <span style={{position: 'absolute', top: '0'}} onClick={() => props.changeStepId(1)}>GO back</span>
            <div className="project_callback">
                <form>
                Меня зовут <input placeholder="Имя" />, мне нужно разработать <input value={props.projectType} readonly />. Моя почта <input type="mail" placeholder="suka@email.com" />, телефон <input type="tel" placeholder="+7 (___) ___-__-__" /> Я хочу {props.startTime} начать существующий проект, с бюждетом от {props.budget[0]} {props.budget[1] && `до ${props.budget[1]} тысяч`} 
                </form>
            </div>
        </div>
    )
}

const matToProps = (store) => {

    return {
        projectType: store.projectReducer.projectType[1],
        startTime: store.projectReducer.startTime,
        budget: store.projectReducer.budget
    }

}

const mapDispatch = dispatch => {
    return {
        changeStepId: (stepId) => dispatch(changeStepId(stepId))
    }
}

export default connect( matToProps, mapDispatch )(ProjectCallback)