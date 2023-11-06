import MobileStepper from '@mui/material/MobileStepper'
import { useTheme } from '@mui/material/styles'
import { useState } from 'react'
import SwipeableViews from 'react-swipeable-views'
import { autoPlay } from 'react-swipeable-views-utils'
import SingleClient from './singleClient'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

const AutoPlay = autoPlay(SwipeableViews)

const array = [1, 2, 3, 4]
const Clients = () => {
  const theme = useTheme()
  const [activeStep, setActiveStep] = useState(0)
  const maxSteps = array.length

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleStepChange = (step) => {
    setActiveStep(step)
  }

  return (
    <>
      <Box>
        <section className="py-16">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-semibold tracking-wider uppercase">
              Client Feedback
            </h2>
          </div>
          <div>
            <AutoPlay
              axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents>
              {array.map((item, index) => (
                <SingleClient key={index} item={item} />
              ))}
            </AutoPlay>
          </div>
          <Box
            sx={{
              maxWidth: 500,
              margin: 'auto',
              marginTop: 5,
              bgcolor: '#334155',
            }}>
            <MobileStepper
              steps={maxSteps}
              position="static"
              activeStep={activeStep}
              nextButton={
                <Button
                  size="small"
                  onClick={handleNext}
                  disabled={activeStep === maxSteps - 1}>
                  Next
                  {theme.direction === 'rtl' ? '<' : '>'}
                </Button>
              }
              backButton={
                <Button
                  size="small"
                  onClick={handleBack}
                  disabled={activeStep === 0}>
                  {theme.direction === 'rtl' ? '<' : '<'}
                  Back
                </Button>
              }
            />
          </Box>
          {/* <div className="flex items-center justify-center py-10">
            {[1, 2, 3, 4].map((item, index) => (
              <a
                key={index}
                href="#"
                className="mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 hover:scale-105">
                {item}
              </a>
            ))}
          </div> */}
        </section>
      </Box>
      <hr />
    </>
  )
}

export default Clients
