import React from 'react'
import './data'
import Accordians from './accordians'
import './style.css'

export default function Accordian() {
  return (
    <div className="container d-flex justify-content-center mt-5 col-6 slide-in" data-bs-toggle="tooltip" title="hello">
        <div className="row w-100">
            <Accordians/>
        </div>
    </div>
  )
}
