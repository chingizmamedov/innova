import React, { Component } from 'react'
import { Link, Route } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import ProjectWrapper from '../Projects/ProjectWrapper';
import projectList from '../../api/ProjectCosts/projectcost'
import { changeStepId } from '../../actions/index.js'


function Projects({ match, ...props }) {
    return (
      <div className="container container__project">
        <ul className="form-btn__list">
          <li className="form-btn__active"  onClick={() => {
              props.stepId >=2 ? props.changeStepId(1) : null
            }
          }>
            <Link to={`${match.url}/`}>1. ТИП ПРОЕКТА</Link>
          </li>
          <li className={props.stepId >=2 ? "form-btn__active" : "form-btn"} onClick={() => {
              props.stepId >2 ? props.changeStepId(2) : null
            }
          }>
            <Link to={`${match.url}/`}>2. Бюджет</Link>
          </li>
          <li className={props.stepId >=3 ? "form-btn__active" : "form-btn"} onClick={() => {
              props.stepId >3 ? props.changeStepId(3) : null
            }
          }>
            <Link to={`${match.url}/`}>3. этап проекта</Link>
          </li>
          <li className={props.stepId >=4 ? "form-btn__active" : "form-btn"} onClick={() => {
              props.stepId >4 ? props.changeStepId(4) : null
            }
          }>
            <Link to={`${match.url}/`}>4. когда начинаем</Link>
          </li>
          <li className={props.stepId == 5 ? "form-btn__active" : "form-btn"}>
            <Link to={`${match.url}/`}>5. Обратная связь</Link>
          </li>
        </ul>
        <ProjectWrapper />    
      </div>
    );
  }


const matToProps = (store) => {

  return {
    stepId: store.projectReducer.stepId
  }

}

const mapToDispath = (dispatch) => {

  return {
    changeStepId: (stepId) => dispatch(changeStepId(stepId)) 
  }
  
}

export default withRouter(
  connect( matToProps, mapToDispath )(Projects)
)