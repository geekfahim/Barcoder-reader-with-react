import React from 'react';

const Form = (props) => {
  return ( 
<div>
  <div className='container'>
    <div className='col-md-6'>
    <form  onSubmit={props.getUser}>
    <div className='form-group'>
      <input type='text' className='form-control' name='username'/>
      <button className='btn btn-success'>Submit</button>

    </div>
    </form>
    </div>
  </div>
</div>
   );
}
 
export default Form;