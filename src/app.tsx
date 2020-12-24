import * as React from 'react'
import * as ReactDOM from 'react-dom'

const timeToSleep = 15 * 60 * 1000
const timeNow = Date.now()

const time = (ms: number) => {
  return new Date(ms).toISOString().slice(11, -1).slice(0, 5);
}

const wakeUpTimes = [1, 2, 3, 4, 5, 6].map((i) => {
  const ninetyMinutes = 90 * 60 * 1000
  return <p className='wake-up-time'>{time(timeNow + timeToSleep + (i * ninetyMinutes))}</p>
})

const App: React.FC = () => {
  return (
    <div className='main'>
      <p className='title'>Fall asleep now and you should set your alarm for one of:</p>
      <div className='wake-up-times'>
        {wakeUpTimes}
      </div>
    </div>
  )
}

export default ReactDOM.render(<App />, document.getElementById('app'))
