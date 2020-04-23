import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setOutputs } from '../redux/outputs';

import AddOutput from './AddOutput';
import OutputListItem from './OutputListItem';
import List from './styled/List';

const SetOutputs = () => {
    const outputs = useSelector(state => state);
    const dispatch = useDispatch();

    const removeOutput = (removedOutput) => {
        const nextOutputs = outputs.filter(_v => _v !== removedOutput);
        dispatch(
            setOutputs(nextOutputs)
        );
    }

    return (
        <div className='outputs-wrapper'>
            <h1>Set Net Outputs</h1>
            <List>
                {
                    outputs.map(value => 
                        <OutputListItem
                            key={value}
                            onRemove={() => removeOutput(value)}
                            value={value}
                        />
                    )
                }
            </List>
            <AddOutput />
        </div>
    )
}

export default SetOutputs;