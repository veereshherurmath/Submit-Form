import React from 'react'

function Experience({ setDetails, details }) {
  let numbersE = []
  let experience = [
    'Not relevant',
    'when lying down',
    'when sitting',
    'Under standing',
    'In walking',
  ]

  for (let i = 0; i <= 10; i++) {
    numbersE.push(i)
  }
  console.log('shf', console.log(details))

  return (
    <div>
      <p className='text-start mt-3 mb-0'>When do you experience the Problem</p>
      <div className='text-start '>
        {experience.length > 0 &&
          experience.map((el, index) => {
            return (
              <div className='px-0 w-25' key={index}>
                <input
                  type='checkbox'
                  className='me-4'
                  name='flexCheckDefault'
                  value={el}
                  onChange={e => {
                    let ex = []
                    ex.push(e.target.value)
                    console.log('asdf', ex)
                    // setDetails({
                    //   ...details,{

                    //   }

                    // })
                  }}
                />
                <label className='form-check-label'>{el}</label>
              </div>
            )
          })}
      </div>

      <p className='text-start'>
        {' '}
        How intense is the experience of the problem on average on a 0-10 scale?
      </p>
      <div>
        {numbersE &&
          numbersE.length > 0 &&
          numbersE.map((el, index) => {
            return (
              <div className='form-check form-check-inline me-5' key={index}>
                <div className='d-flex flex-column'>
                  {el === details.avgproblem ? (
                    <input
                      type='radio'
                      className='me-0'
                      name='flexRadioDefault'
                      checked
                      onChange={e => setDetails({ ...details, avgproblem: el })}
                    />
                  ) : (
                    <input
                      type='radio'
                      className='me-0'
                      name='flexRadioDefault'
                      onChange={e => setDetails({ ...details, avgproblem: el })}
                    />
                  )}

                  <label className='form-check-label'>{el}</label>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default Experience
