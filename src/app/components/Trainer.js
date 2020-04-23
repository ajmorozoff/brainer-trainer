import React, { useState } from 'react';

import './Trainer.css';
import SetOutputs from './SetOutputs';

import Button from './styled/Button';

const styles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start'
}

const Trainer = () => {
    const [step, setStep] = useState(0);

    return (
        <div id='trainer'>
            <div style={styles}>
                {
                    step === 0
                    ? <SetOutputs />
                    : 'Training placeholder'
                }
                <Button>
                    Start Training
                </Button>
            </div>

        </div>
    )
}

export default Trainer;