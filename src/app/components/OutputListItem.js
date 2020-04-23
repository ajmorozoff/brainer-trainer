import React, { useState } from 'react';

import InlineButton from './styled/InlineButton';

const styles = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start'
}

const OutputListItem = ({ value, onClick, onRemove }) => {
    const [isHovering, setIsHovering] = useState(false);
    return (
        <li
            className={'output'}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            {value}
            {
                isHovering &&
                <InlineButton
                    onClick={onRemove}
                >
                    Remove
                </InlineButton>
            }
        </li>
    )
}

export default OutputListItem;