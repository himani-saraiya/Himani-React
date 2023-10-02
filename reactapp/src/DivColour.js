import React, { useState } from 'react';

const ColorPicker = () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    const ColorChange = () => {
        const color = `rgb(${red}, ${green}, ${blue})`;
        return color;
    };

    return (
        <div>
            <h1>ColorPicker</h1>

            <label htmlFor='red'>Red</label>
            0 <input type='range' id='red' min={0} max={255} value={red} onChange={(e) => setRed(e.target.value)} /> 255<br />

            <label htmlFor='green'>Green</label>
            0 <input type='range' id='green' min={0} max={255} value={green} onChange={(e) => setGreen(e.target.value)} /> 255<br />

            <label htmlFor='blue'>Blue</label>
            0 <input type='range' id='blue' min={0} max={255} value={blue} onChange={(e) => setBlue(e.target.value)} /> 255<br />

            <div style={{ height: '100px', width: '100px', border: '1px solid black', backgroundColor: ColorChange() }}>
            </div>
            {`rgb(${red}, ${green}, ${blue})`}
        </div>
    );
};

export default ColorPicker;
