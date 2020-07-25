import { addData,loadData, deleteData } from '../actions/actions';
import { connect } from 'react-redux';
import App from '../components/App.js'

const mapDispatchToProps = (dispatch) => ({
    deleteList: (index) => dispatch(deleteData(index)),
    addToList:(data)=>dispatch(addData(data)),
    loadData:()=>dispatch(loadData())
})

const mapStateToProps = (state) => ({
    list: state.reducers.listCategory
})

export default connect(mapStateToProps,mapDispatchToProps)(App);