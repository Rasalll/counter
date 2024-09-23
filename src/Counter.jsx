import React,{useState} from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import { increament,decreament,reset,addValue} from './redux/countSlice'

function Counter() {

  const [val,setVal]=useState(0)

  const {count}=useSelector((state)=>state.counterReducer)
  console.log(count)

  const dispatch=useDispatch()


  return (
    <>
    <div className='w-50 p-3  rounded shadow border bg-light'>
        <h3 className='text-center text-dark mb-3'>Counter</h3>
<h4 className='text-dark text-center'>{count}</h4>
<div className='p-3 my-2 d-flex justify-content-around'>
    <button className='btn btn-success' onClick={()=>{dispatch(increament())}}>+ Increase</button>
    <button className='btn btn-info' onClick={()=>{dispatch(reset())}}>RESET</button>
<button className='btn btn-danger' onClick={()=>{dispatch(decreament())}}>- Decrease</button>
</div>
<div className='mt-3 d-flex'>
<input type="number" onChange={(e)=>{setVal(Number(e.target.value))}} className='form-control' />
<button className='btn btn-info w-25' onClick={()=>dispatch(addValue(val))}>Submit</button>
</div>
    </div>
    </>
  )
}

export default Counter