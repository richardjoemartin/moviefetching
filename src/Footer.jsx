import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';
function Footer() {
  return (
    <div>
       <MDBFooter  bgColor='light' className='text-center text-lg-left fixed-bottom'>
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-dark' href='https://mdbootstrap.com/'>
          Richardjoemartin
        </a>
      </div>
    </MDBFooter> 
    </div>
  )
}

export default Footer