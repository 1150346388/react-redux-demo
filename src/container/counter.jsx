import { connect } from 'react-redux'
import { changeInput, add, minus, toZero, incrementAsync } from '../action/action'
import MyComponent from '../components/myComponent'

// state/props
function mapStateToProps(state) {
  console.log(state)
  return {
    text: state.info.text,
    name: state.info.name,
    count: state.count.count
  }
}

// handler
function mapDispatchToProps(dispatch) {
  return {
    onChange: (e) => dispatch(changeInput(e.target.value)),
    add: () => dispatch(add()),
    minus: () => dispatch(minus()),
    toZero: () => dispatch(toZero()),
    incrementAsync: () => dispatch(incrementAsync())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(MyComponent);
