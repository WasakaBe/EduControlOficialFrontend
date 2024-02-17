import React from 'react'
import { CredentialBlue, CredentialRed} from '../../../Credentials'
import './PanelCredencial.css'
export default function PanelCredencial() {
  return (
    <div className='panelcredencial3'>
        <div className='section-credential'>
                <CredentialBlue/>
                <CredentialRed/>
        </div>
    </div>
  )
}
