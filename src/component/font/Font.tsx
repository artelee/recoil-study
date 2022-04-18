import { useRecoilState,useRecoilValue } from "recoil"
import fontSizeState from "../../recoil/atom"
import fontSizeLabelState from "../../recoil/font/withFontSize"
import React from "react";

const FontButton : React.FC = () => {
    const [fontSize, setFontSize] = useRecoilState(fontSizeState);
    const fontSizeLabel = useRecoilValue(fontSizeLabelState);
    return (
        <>
            <div>Current font size: ${fontSizeLabel}</div>
            <button onClick={()=>setFontSize(fontSize + 1)} style={{fontSize}}>
                Click to Enlarge
            </button>
        </>
    )


}

export default FontButton
