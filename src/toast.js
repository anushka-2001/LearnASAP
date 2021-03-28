import React from 'react';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';
import Form from './form'
const toast = (props) => {
  return (
    
       <div className="p-3 my-2 rounded bg-docs-transparent-grid">
        <Toast>
          <ToastHeader>
           <Form/>
          </ToastHeader>
          <ToastBody>
            This is a toast on a gridded background — check it out!
          </ToastBody>
        </Toast>
        </div>
     
  );
};

export default toast;