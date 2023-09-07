import classes from './Counter.module.css';
import { useDispatch,useSelector } from 'react-redux';
import {counterActions} from '../Store/Store'

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const toggle = useSelector((state) => state.counter.toggle)

  const toggleCounterHandler = () => {
    // dispatch({type:'toggle'})
    dispatch(counterActions.toggler());
  };


  const incrementHandler = () =>{
    dispatch(counterActions.incriment(2))
  }

  const decrementHandler = () => {
    // dispatch({type : 'dec' })
    dispatch(counterActions.decriment())
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {toggle && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>INc</button>
        <button onClick={decrementHandler}>Dec</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
