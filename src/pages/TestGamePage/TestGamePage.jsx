import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios'
import '../../../node_modules/rc-slider/assets/index.css'
import Slider from 'rc-slider';
import { baseUrl } from '../../services/api';
import Cookies from 'js-cookie';
import { setCredits } from '../../redux/reducers';

function getRandomValueInRange(min, max) {
  const randomDecimal = Math.random();
  const randomValue = min + randomDecimal * (max - min);
  const roundedValue = Math.round(randomValue);
  return roundedValue;
}
//////////////////////////////////////////////////////
const TestGamePage = () => {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  const [selectedValue, setSelectedValue] = useState(0); // Initial range values
  const [selectedBet, setSelectedBet] = useState(0); // Initial range values
  const [winValue, setWinValue] = useState(0)


  const handleValueChange = (newValue) => {
    setSelectedValue(newValue);
  };

  const getRealTimeCredit = async()=>{
    const cookie = Cookies.get("userToken")
    const palyer = await axios.post(`${baseUrl}/getPlayerCredit`,{userName:user.userName,cookie})
    dispatch(setCredits(palyer.data.credits))
  }

  const handleBet = async () => {
    setSelectedBet(selectedValue)
    setWinValue(0)
    const cookie = Cookies.get("userToken")
    const setBetOnDataBase = await axios.post(`${baseUrl}/playerBet`,{userName:user.userName,cookie,credits:(-1)*selectedValue})
    if(setBetOnDataBase.status==200)
      alert(`you can now play on bet ${selectedValue}`)
    getRealTimeCredit()
  }

  const handlePlay = async() => {
    const cookie = Cookies.get("userToken")
    const minValue = 0;
    const maxValue = selectedBet*2;
    const randomValue = getRandomValueInRange(minValue, maxValue);
    const res = await axios.post(`${baseUrl}/playerWin`,{userName:user.userName,cookie,credits:randomValue})
    if(res.status == 200)
        alert(`You winned ${randomValue}`)
    getRealTimeCredit()
    setWinValue(randomValue)
    setSelectedValue(0)
  }

  return (
    <div className='testGamePage' style={{ backgroundColor: "white", height: "600px", display: "flex", fontSize: "20px", justifyContent: "center", alignItems: "center" }}>
      <div style={{ width: "200px", }}>
        <div>Your Balance : {user.credits}</div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>0</div>
          <div>{user.credits}</div>

        </div>

        <Slider
          range
          min={0}
          max={user.credits}
          value={selectedValue}
          onChange={handleValueChange}
        />
        <div>
          Selected Value: {selectedValue}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button onClick={() => handleBet()}>Bet on price</button>
          <button onClick={() => handlePlay()}>play</button>
        </div>
        <br />
        <div>
          Selected Bet: {selectedBet}
        </div>
        <br />
        <div>Win : {winValue} </div>
      </div>
    </div>
  )
}

export default TestGamePage