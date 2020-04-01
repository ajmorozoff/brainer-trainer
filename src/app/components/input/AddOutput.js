import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setOutputs } from '../../redux/outputs';

const AddOutput = () => {
    const [fieldStr, setFieldStr] = useState('');
    const outputs = useSelector(state => state);
    const dispatch = useDispatch();

    const handleSubmit = () => {
        const newOutput = fieldStr.toLowerCase();
        if (!outputs.includes(newOutput)) {
            const nextOutputs = [...outputs];
            nextOutputs.push(newOutput);
            dispatch(
                setOutputs(nextOutputs)
            );
        }
        setFieldStr('');
    }

    return (
        <div>
            <input
                type='text'
                id='add-net-output'
                value={fieldStr}
                onChange={(e) => setFieldStr(e.target.value)}
            />
            <button
                disabled={!fieldStr}
                onClick={handleSubmit}
            >
                Add Output
            </button>
        </div>
    )
}

export default AddOutput;