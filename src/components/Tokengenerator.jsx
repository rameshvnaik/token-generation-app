import React, { useState } from "react"
import './Tokengenerator.scss'

const Tokengenerator = () => {

    const [blueCount, setBlueCount] = useState();
    const [bluePrefix, setBluePrefix] = useState();
    const [bluePerRow, setBluePerRow] = useState();
    const [redCount, setRedCount] = useState();
    const [redPrefix, setRedPrefix] = useState();
    const [redPerRow, setRedPerRow] = useState();
    const [tokens, setTokens] = useState({ blue: [], red: [] });


    const generateToken = () => {
        const blueTokens = Array.from({ length: blueCount }, (_, i) => `${bluePrefix}${i + 1}`);
        const redTokens = Array.from({ length: redCount }, (_, i) => `${redPrefix}${i + 1}`);
        setTokens({ blue: blueTokens, red: redTokens });

    }

    // Handle clear form and token display
    const handleClear = () => {
        setBlueCount();
        setBluePrefix();
        setBluePerRow();
        setRedCount();
        setRedPrefix();
        setRedPerRow();
        setTokens({ blue: [], red: [] });
    };

    const renderTokens = (tokens, perRow) => {
        const rows = [];
        for (let i = 0; i < tokens.length; i += perRow) {
            rows.push(
                <div key={i} style={{ marginBottom: '10px' }}>
                    {tokens.slice(i, i + perRow).map((token, index) => (
                        <span key={index} style={{ marginRight: '10px' }}>
                            {token}
                        </span>
                    ))}
                </div>
            );
        }
        console.log(rows, "rows")
        return rows;
    };


    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
            }}>
                <div>
                    <label>Number of blue tokens</label>
                    <input type="number" onChange={(e) => {
                        setBlueCount(Number(e.target.value))
                    }} />
                </div>
                <div>
                    <label>Blue token prefix</label>
                    <input type="text" onChange={(e) => {
                        setBluePrefix(e.target.value)
                    }} />
                </div>
                <div>
                    <label>Blue token per row</label>
                    <input type="number" onChange={(e) => {
                        setBluePerRow(Number(e.target.value))
                    }} />
                </div>
                <div>
                    <label>Number of red Tokens</label>
                    <input type="number" onChange={(e) => {
                        setRedCount(Number(e.target.value))
                    }} />
                </div>
                <div>
                    <label>Red token prefix</label>
                    <input type="text" onChange={(e) => {
                        setRedPrefix(e.target.value)
                    }} />
                </div>
                <div>
                    <label>Red token per row</label>
                    <input type="number" onChange={(e) => {
                        setRedPerRow(Number(e.target.value))
                    }} />
                </div>

                <button onClick={generateToken}>Generate Token</button>
                <button onClick={handleClear}>Clear</button>


            </form>

            <div style={{ marginTop: '20px' }}>
                {renderTokens(tokens.blue, bluePerRow)}

                {renderTokens(tokens.red, redPerRow)}
            </div>

        </div>
    )
}

export default Tokengenerator
