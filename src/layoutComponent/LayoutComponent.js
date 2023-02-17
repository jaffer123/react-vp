import React from 'react';
import UploadComponent from '../uploadComponent/UploadComponent';
import ListComponent from '../listComponent/ListComponent';

function LayoutComponent() {
  return (
    <>
      <div className='row'>
        <div className='col-sm-4'>
          <UploadComponent />
        </div>
        <div className='col-sm-8'>
          <ListComponent />
        </div>
      </div>
    </>
  )
}

export default LayoutComponent