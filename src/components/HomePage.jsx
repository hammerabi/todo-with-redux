import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getAllTasks, postNewTask } from '../redux/reducer';
import Task from './Task';


class HomePage extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    getAllTasks();
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
             <h1>Todo-Redux</h1>
              <form onSubmit={e => {
                 e.preventDefault();
                 this.props.postNewTask(e.target.taskName.value);
                 e.target.taskName.value = "";
                }
               }>
                <div className="form-group">
                <label for="exampleInputEmail1">Add New To-Do</label>
                <input name="taskName" placeholder="Enter new task" />
                </div>
                <button type="submit">Add</button>
              </form>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h3>Your To-do list</h3>
            </div>
          </div>
        </div>
        <div className="container">
          {
            this.props.tasks && this.props.tasks.map((task) => {
              return (
                <Task key={task._id} Obj={task} isComplete={task.metafields[0].value} Name={task.title}/>
              )
            })
          }
        </div>
      </div>
    )
  }
}
const mapState = ({tasks}) => ({tasks});
const mapDispatch = {getAllTasks, postNewTask};
export default connect(mapState, mapDispatch)(HomePage);
