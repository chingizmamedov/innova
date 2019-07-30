import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProjectType from './ProjectType';
import ProjectBudget from './ProjectBudget';
import ProjectStage from './ProjectStage';
import ProjectTime from './ProjectTime';
import ProjectCallback from './ProjectCallback';
import { doubleAdd } from '../../actions/index.js'

class Project extends React.Component {
    constructor(props){
        super(props)

    }

    componentWillMount() {

        var pages = [['shopping', 'Интернет-магазин'], ['landing', 'Landing Page'], ['corparative', 'Корпоративный сайт'], ['designe', 'Дизайн, Редизайн сайта'], ['react', 'Сайт на React']]

        var url = window.location.href || document.URL

        pages.forEach((item, index)=> {

            var reg = new RegExp(item[0],"i");
            var chckUrl = reg.test(url)
            if(chckUrl) {
                this.props.doubleAdd(2, [item[0], item[1]] )
            }

        })


    }

    render(){
        if(this.props.stepId == 1) {
            return (
                <ProjectType />
            )
        }
        if(this.props.stepId == 2) {
            return (
                <ProjectBudget />
            )
        }
        if(this.props.stepId == 3) {
            return (
                <ProjectStage />
            )
        }
        if(this.props.stepId == 4) {
            return (
                <ProjectTime />
            )
        }
        if(this.props.stepId == 5) {
            return (
                <ProjectCallback />
            )
        }
    }
    
}

const mapState = (state) => {
    console.log('state', state)
    return {
        stepId: state.projectReducer.stepId
    }
}

const mapToDispath = (dispatch) => {

    return {
        doubleAdd: (stepId, projectName) => dispatch(doubleAdd(stepId, projectName))
    }
    
  }

export default connect(mapState, mapToDispath)(Project)