import React from 'react'
import {SketchPicker} from 'react-color'
import {useSnapshot} from "valtio";

import state from '../store';

const ColorPicker = () => {

    const snap = useSnapshot(state);
    return (
        <div className="absolute -left-full ml-35 mt-15">
            <SketchPicker
            color={snap.color}
            disableAlpha
            presetColor={[
                '#02478e',
                '#ffb365',
                '#ba7fba',
                '#ff5e63',
                '#f77696',
            ]}
            onChange={(color) => {state.color = color.hex}}
            />
        </div>
    )
}
export default ColorPicker
