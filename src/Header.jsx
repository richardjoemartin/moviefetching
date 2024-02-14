import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';

function Header() {
  return (
    <div>
       <MDBNavbar className='fixed-top' light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>Find Movies  &nbsp; <i class="fa-solid fa-film"></i></MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header