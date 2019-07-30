import React from 'react'
import { connect } from 'react-redux'
import { doubleAdd } from '../../actions/index.js'

function ProjectType(props) {
    return (
        <div className="project__big">
            <div className="project__type">
                <p onClick={()=> props.doubleAdd(2, ['shopping', 'Интернет-магазин'])}>Интернет-магазин</p>
                <p onClick={()=> props.doubleAdd(2, ['landing', 'Landing Page'])}>Landing Page</p>
                <p onClick={()=> props.doubleAdd(2, ['corparative', 'Корпоративный сайт'])}>Корпоративный сайт</p>
                <p onClick={()=> props.doubleAdd(2, ['designe', 'Дизайн, Редизайн сайта'])}>Дизайн, Редизайн сайта</p>
                <p onClick={()=> props.doubleAdd(2, ['react', 'Сайт на React'])}>Сайт на React</p>
            </div>
        </div>
    )
}

const mapDispatch = dispatch => {
    return {
        doubleAdd: (stepId, projectName) => dispatch(doubleAdd(stepId, projectName))
    }
}

export default connect(null, mapDispatch)(ProjectType)