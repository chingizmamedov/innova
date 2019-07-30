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
          <li className="form-btn__active" onClick={() => props.changeStepId(1)}>
            <Link to={`${match.url}/a`}>1. ТИП ПРОЕКТА</Link>
          </li>
          <li className={props.stepId >=2 ? "form-btn__active" : "form-btn"} onClick={() => props.changeStepId(2)}>
            <Link to={`${match.url}/b`}>2. Бюджет</Link>
          </li>
          <li className={props.stepId >=3 ? "form-btn__active" : "form-btn"} onClick={() => props.changeStepId(3)}>
            <Link to={`${match.url}/c`}>3. этап проекта</Link>
          </li>
          <li className={props.stepId >=4 ? "form-btn__active" : "form-btn"} onClick={() => props.changeStepId(4)}>
            <Link to={`${match.url}/d`}>4. когда начинаем</Link>
          </li>
          <li className={props.stepId >=5 ? "form-btn__active" : "form-btn"} onClick={() => props.changeStepId(5)}>
            <Link to={`${match.url}/e`}>5. Обратная связь</Link>
          </li>
        </ul>
        <ProjectWrapper />
        
        
      </div>
    );
  }


  const matToProps = (store) => {
    console.log('match.url', store)
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
  connect(matToProps, mapToDispath)(Projects)
)