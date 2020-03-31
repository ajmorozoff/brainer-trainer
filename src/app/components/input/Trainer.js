import React, { useEffect, useState } from 'react';
import './Trainer.css';

const styles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start'
}

//
// BIG PROOF OF CONCEPTING MESS RIGHT NOW DON'T LOOK
//
function Trainer(props) {
    
    const [addField, setAddField] = useState('');
    const [inputStr, setInputStr] = useState('');
    const [outputList, setOutputList] = useState([]);
    const [selected, setSelected] = useState('');
    const [error, setError] = useState(false);

    function handleClick() {
        const newOutput = addField.toLowerCase();
        setError(false);
    
        if (outputList.includes(newOutput)) {
            setError(true);
            setAddField('');
            return;
        }

        const temp = [...outputList];
        temp.push(newOutput);

        setOutputList(temp);
        setAddField('');
    }

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
                    outputList.map(value => 
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
                <input
                    type="text"
                    id="new-output"
                    value={addField}
                    onChange={(e) => setAddField(e.target.value)}
                />
                {
                    error ?
                    <p>Outputs must be unique</p>
                    : null
                }
                <button
                    onClick={handleClick}
                >
                    Add Output
                </button>
            </div>
            <button>Submit</button>
        </div>
    )
}

export default Trainer;