import React, { useState } from "react"
import './Tokengenerator.scss'

const Tokengenerator = () => {

    const [blueCount, setBlueCount] = useState('');
    const [bluePrefix, setBluePrefix] = useState('');
    const [bluePerRow, setBluePerRow] = useState('');
    const [redCount, setRedCount] = useState('');
    const [redPrefix, setRedPrefix] = useState('');
    const [redPerRow, setRedPerRow] = useState('');
    const [tokens, setTokens] = useState({ blue: [], red: [] });


    const generateToken = () => {
        const blueTokens = Array.from({ length: blueCount }, (_, i) => `${bluePrefix}${i + 1}`);
        const redTokens = Array.from({ length: redCount }, (_, i) => `${redPrefix}${i + 1}`);
        setTokens({ blue: blueTokens, red: redTokens });

    }

    // Handle clear form and token display
    const handleClear = () => {
        setBlueCount('');
        setBluePrefix('');
        setBluePerRow('');
        setRedCount('');
        setRedPrefix('');
        setRedPerRow('');
        setTokens({ blue: [], red: [] });
    };

    const renderTokens = (tokens, perRow,color) => {
        const rows = [];
        for (let i = 0; i < tokens.length; i += perRow) {
            rows.push(
                <div key={i} style={{ marginBottom: '10px', display: 'flex' }}>
                    {tokens.slice(i, i + perRow).map((token, index) => (
                        <span key={index} style={{
                            marginRight: '10px',
                            width: '50px',
                            height: '50px',
                            display: 'inline-block',
                            backgroundColor: color,
                            color: 'white',
                            textAlign: 'center',
                        }}>
                            {token}
                        </span>
                    ))}
                </div>
            );
        }
        return rows;
    };


    return (
        <div className="token-generator-section">

            <h4>Token Generator Application</h4>
            <form onSubmit={(e) => {
                e.preventDefault();
            }}>
                <div className="input-section">
                  
                    <label>Number of blue tokens</label>
                     <input  type="number" value={blueCount} onChange={(e) => {
                        setBlueCount(Number(e.target.value))
                    }} />
                </div>
                <div className="input-section">
                    <label>Blue token prefix</label>
                    <input type="text" value={bluePrefix} onChange={(e) => {
                        setBluePrefix(e.target.value)
                    }} />
                </div>
                <div className="input-section">
                    <label>Blue token per row</label>
                    <input type="number" value={bluePerRow} onChange={(e) => {
                        setBluePerRow(Number(e.target.value))
                    }} />
                </div>
                <div className="input-section">
                    <label>Number of red Tokens</label>
                    <input type="number" value={redCount} onChange={(e) => {
                        setRedCount(Number(e.target.value))
                    }} />
                </div>
                <div className="input-section">
                    <label>Red token prefix</label>
                    <input type="text" value={redPrefix} onChange={(e) => {
                        setRedPrefix(e.target.value)
                    }} />
                </div>
                <div className="input-section">
                    <label>Red token per row</label>
                    <input type="number" value={redPerRow}
                     onChange={(e) => {
                        setRedPerRow(Number(e.target.value))
                    }} />
                </div>


                <div className="input-section">
                 <div></div>
                 <div>
                <button onClick={generateToken}>Generate Token</button>
                <button onClick={handleClear}>Clear</button>
                </div>
                </div>

            </form>

            <div style={{ marginLeft: '30vw'}}>
                {renderTokens(tokens.blue, bluePerRow, 'blue')}

                {renderTokens(tokens.red, redPerRow, 'red')}
            </div>

        </div>
    )
}

export default Tokengenerator
