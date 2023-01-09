import React, { useState, useCallback } from 'react'
import Experience from './Experience'
import Modals from './Modals'
function Froms(el) {
  const [details, setDetails] = useState({ avgproblem: 5 })
  const [array, setArray] = useState([details])
  const nextDetails = Object.values(details)
  const addarray = useCallback(() => {
    setArray(array => [...array, details])
    setDetails({
      ...details,
      next: true,
    })
  }, [details])
  const reversearray = useCallback(() => {
    setArray(array => [...array, details])
    setDetails({
      ...details,
      next: false,
    })
  }, [details])
  console.log('details', nextDetails)
  return (
    <div className='container px-0 mr-5 ml-5'>
      {!details.next && (
        <div className='px-5'>
          <div>
            <h6 className='text-primary m-0'>Pain & Functional Description</h6>
            <p className=''>
              The description of the current situation gives ypur Optimum
              <br /> Trainer a picture of and clues to the underlying causes of
              your <br /> problems
            </p>
          </div>
          <section>
            <p className='text-start'>
              If you have problems with pain/aches,stiffness,weakness or
              functional problems,describe this/these below.(List the symptoms
              in describing order with the most troublesome first)
            </p>
            <div className='form-floating'>
              <textarea
                className='form-control'
                placeholder='Leave a comment here'
                onChange={e =>
                  setDetails({
                    ...details,
                    description: e.target.value,
                  })
                }></textarea>
            </div>

            <div className='row mt-3'>
              <p className='text-start' style={{ width: '40%' }}>
                Have you been diagnosed with this problem ?
              </p>
              <div className='px-0' style={{ width: '20%' }}>
                <input type='radio' className='me-4' name='flexRadioDefault' />
                <label className='form-check-label'>Not relevant</label>
              </div>
              <div className='px-0' style={{ width: '20%' }}>
                <input type='radio' className='me-4' name='flexRadioDefault' />
                <label className='form-check-label'>Yes</label>
              </div>
              <div className='px-0' style={{ width: '20%' }}>
                <input type='radio' className='me-4' name='flexRadioDefault' />
                <label className='form-check-label'>No</label>
              </div>
            </div>
            <div className='row mt-3'>
              <p className='text-start' style={{ width: '40%' }}>
                Did the problem start after a physical trauma?
              </p>
              <div className='px-0' style={{ width: '20%' }}>
                <input type='radio' className='me-4' name='flexRadioDefault' />
                <label className='form-check-label'>Not relevant</label>
              </div>
              <div className='px-0' style={{ width: '20%' }}>
                <input type='radio' className='me-4' name='flexRadioDefault' />
                <label className='form-check-label'>Yes</label>
              </div>
              <div className='px-0' style={{ width: '20%' }}>
                <input type='radio' className='me-4' name='flexRadioDefault' />
                <label className='form-check-label'>No</label>
              </div>
            </div>
            <div className='row mt-3'>
              <p className='text-start' style={{ width: '40%' }}>
                Did the problem start after a mental trama?
              </p>
              <div className='px-0' style={{ width: '20%' }}>
                <input type='radio' className='me-4' name='flexRadioDefault' />
                <label className='form-check-label'>Not relevant</label>
              </div>
              <div className='px-0' style={{ width: '20%' }}>
                <input type='radio' className='me-4' name='flexRadioDefault' />
                <label className='form-check-label'>Yes</label>
              </div>
              <div className='px-0' style={{ width: '20%' }}>
                <input type='radio' className='me-4' name='flexRadioDefault' />
                <label className='form-check-label'>No</label>
              </div>
            </div>
            <div className=' mt-3 '>
              <p className='text-start' style={{ width: '40%' }}>
                How often do you expeience the problem?
              </p>
              <div className='row text-start ps-3 '>
                <div className='px-0 w-25'>
                  <input
                    type='radio'
                    className='me-4'
                    name='flexRadioDefault'
                  />
                  <label className='form-check-label'>Not relevant</label>
                </div>
                <div className='px-0 w-25'>
                  <input
                    type='radio'
                    className='me-4'
                    name='flexRadioDefault'
                  />
                  <label className='form-check-label'>Daily</label>
                </div>
                <div className='px-0 w-25'>
                  <input
                    type='radio'
                    className='me-4'
                    name='flexRadioDefault'
                  />
                  <label className='form-check-label'>Several times/week</label>
                </div>
                <div className='px-0 w-25'>
                  <input
                    type='radio'
                    className='me-4'
                    name='flexRadioDefault'
                  />
                  <label className='form-check-label'>A few times/month</label>
                </div>
                <div className='px-0 w-25'>
                  <input
                    type='radio'
                    className='me-4'
                    name='flexRadioDefault'
                  />
                  <label className='form-check-label'>A few times/year</label>
                </div>
              </div>
              <Experience setDetails={setDetails} details={details} />
            </div>
          </section>

          <div>
            <button className='btn btn-primary w-25 m-2' onClick={reversearray}>
              Back
            </button>
            <button
              className='btn btn-primary w-25 m-2'
              data-toggle='modal'
              data-target='#exampleModalCenter'
              onClick={addarray}>
              Next
            </button>
          </div>
        </div>
      )}
      {details.next && (
        <div>
          <Modals />
          {nextDetails.map(el => {
            return <div> {el}</div>
          })}
          <div>
            <button className='btn btn-primary w-25 m-2' onClick={reversearray}>
              Back
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Froms
