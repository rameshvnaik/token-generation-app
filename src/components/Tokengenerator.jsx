import React, { useState } from "react"
import './Tokengenerator.scss'

const Tokengenerator = () => {

    const [blueCount, setBlueCount] = useState();
    const [bluePrefix, setBluePrefix] = useState();
    const [bluePerRow, setBluePerRow] = useState();
    const [redCount, setRedCount] = useState();
    const [redPrefix, setRedPrefix] = useState();
    const [redPerRow, setRedPerRow] = useState();

    const generateToken = () => {


    }


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
                <button>Clear</button>


            </form>

        </div>
    )
}

export default Tokengenerator
