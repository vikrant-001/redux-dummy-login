import classes from './Counter.module.css';
import { useDispatch,useSelector } from 'react-redux';

const Counter = () => {
  const toggleCounterHandler = () => {};

  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch()

  const incrementHandler = () =>{
    dispatch({type : 'inc' })
  }

  const decrementHandler = () => {
    dispatch({type : 'dec' })
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>INc</button>
        <button onClick={decrementHandler}>Dec</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
