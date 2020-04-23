import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setOutputs } from '../redux/outputs';

import Input from './styled/Input';
import Button from './styled/Button';

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
        <div className='add-output-form'>
            <Input
                type='text'
                id='add-net-output'
                value={fieldStr}
                onChange={(e) => setFieldStr(e.target.value)}
                style={{flexGrow: 1}}
            />
            <Button
                primary
                disabled={!fieldStr}
                onClick={handleSubmit}
                style={{marginLeft: '1rem'}}
            >
                Add Output
            </Button>
        </div>
    )
}

export default AddOutput;