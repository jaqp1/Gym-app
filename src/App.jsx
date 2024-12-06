import { useState } from 'react'
import Hero from './components/Hero.jsx'
import Generator from './components/Generator.jsx'
import Workout from './components/Workout.jsx'
import { generateWorkout } from './utils/functions'

function App() {

  const [workout, setWorkout] = useState(null)
  const [poison, setPoison] = useState('individual');
  const [muscles, setMuscles] = useState([]);
  const [goal, setGoal] = useState('strength_power');

  function updateWorkout(){
      if(muscles.length < 1){
        return
      }
      let newWorkout = generateWorkout({poison, muscles, goal})
      setWorkout(newWorkout)
      setTimeout(() => { window.location.href = '#workout' }, 1)
  }


  return (
    <main className='min-h-screen flex flex-col bg-gradient-to-r from-scheme1-400 to-scheme1-600 text-white text-sm sm:text-base'>
      <Hero></Hero>
      <Generator 
      poison={poison} 
      setPoison={setPoison}
      muscles={muscles}
      setMuscles={setMuscles}
      goal={goal}
      setGoal={setGoal}
      updateWorkout={updateWorkout}
      ></Generator>
      {workout && (<Workout workout={workout} />)}
    </main>
  )
}

export default App
