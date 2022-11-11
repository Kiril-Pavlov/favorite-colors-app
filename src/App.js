import './App.css';
import {AiOutlineHeart} from "react-icons/ai"

function App() {
  return (
    <div className="main-container">
      <h1 className='main-title'>My Favoruite Colors</h1>
      <div className='add-colors-container'>
        <div className='input-container'>
          <div className='heart-icon'>
            <AiOutlineHeart fill='#D8D9D9' size={20}/>
          </div>
          <div className='input-field'>
            <input type="text" placeholder='Color Name'/>
          </div>
          <div className='selected-color-container'>
            <div className='display-selected-color'>

            </div>
          </div>
        </div>
        <div className='add-color-button'>

        </div>
      </div>
    </div>
  );
}

export default App;
