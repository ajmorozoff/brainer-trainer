import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './Trainer.css';
import AddOutput from './AddOutput';

const styles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start'
}

//
// BIG PROOF OF CONCEPTING MESS RIGHT NOW DON'T LOOK
//
function Trainer(props) {
    
    const [inputStr, setInputStr] = useState('');
    const [selected, setSelected] = useState('');
    const outputs = useSelector(state => state);
 
    return (
        <div style={styles}>
            <div>
                <textarea
                    id="input-field"
                    rows="4"
                    col="50"
                    style={{ resize: 'none' }}
                    value={inputStr}
                    onChange={(e) => setInputStr(e.target.value)}
                />
            </div>
            <div>
                {
                    outputs.map(value => 
                    <div
                        key={value}
                        className={selected === value ? 'selected output' : 'output'}
                    >
                        <p>{value}</p>
                        <button
                            onClick={() => setSelected(value)}
                        >
                            Select
                        </button>
                    </div>)
                }
                <AddOutput />
            </div>
            <button>Submit</button>
        </div>
    )
}

export default Trainer;