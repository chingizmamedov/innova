import React from 'react'
import apiProjectType from '../../api/ProjectCosts/projectcost'
import { connect } from 'react-redux';
import { doubleAddBudget } from '../../actions/index.js'



function ProjectBudget(props) {

    let priceList
    
    setTimeout(() => {

        console.log("TCL: ProjectBudget -> priceList", priceList)
        console.log("TCL: ProjectBudget -> apiProjectType", apiProjectType)

    }, 1000);
    

    for (var key in apiProjectType) {
        if(key === props.projectType) {
            
            console.log('apiProjectType[key]',apiProjectType[key])
            priceList = apiProjectType[key]

        }
    }

    const listBlock = (<div className="project__type">
        <p onClick={()=> props.doubleAdd(3, [priceList.start.from, priceList.start.to])}>от {priceList.start.from} до {priceList.start.to} <span>{priceList.start.subtext}</span></p>
        <p onClick={()=> props.doubleAdd(3, [priceList.minimal.from, priceList.minimal.to])}>от {priceList.minimal.from} до {priceList.minimal.to}<span>{priceList.minimal.subtext}</span></p>
        <p onClick={()=> props.doubleAdd(3, [priceList.middle.from, priceList.middle.to])}>от {priceList.middle.from} до {priceList.middle.to}<span>{priceList.middle.subtext}</span></p>
        <p onClick={()=> props.doubleAdd(3, [priceList.bissunez.from])}>от {priceList.bissunez.from} <span>{priceList.bissunez.subtext}</span>...</p>  
        </div>)




    return (
        <div className="project__big">
            {listBlock}
        </div>
    )
}

const matToProps = (store) => {
    console.log('store.projectReducer.projectType', store.projectReducer.projectType)
    return {
      projectType: store.projectReducer.projectType
    }
  }

const mapDispatch = dispatch => {
    return {
        doubleAdd: (stepId, budgetCost) => dispatch(doubleAddBudget(stepId, budgetCost))
    }
}

export default connect(matToProps, mapDispatch)(ProjectBudget)