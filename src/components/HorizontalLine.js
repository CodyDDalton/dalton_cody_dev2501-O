import React from 'react';

const HorizontalLine = ({ color, marginTop, marginBottom, width }) => (
    <hr
        style={{
            color: color,
            borderColor: color,
            fontSize: 8,
            borderRadius:'50%',
            height: 0,
            width: width,
            opacity: '70%',
            marginTop: marginTop,
            marginBottom: marginBottom
            
        }}
    />
);
export default HorizontalLine;