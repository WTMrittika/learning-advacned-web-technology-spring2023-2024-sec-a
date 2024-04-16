import React from 'react';

function Test() {
    return (
        <div>
            {[...Array(5)].map((_, index) => (
                <h1 key={index}>Hello world</h1>
            ))}
        </div>
    );
}

export default Test;