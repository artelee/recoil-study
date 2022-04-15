import { useRecoilState } from "recoil"
import fontSizeState from "../../recoil/atom"

const FontButton = () => {
    const [fontSize, setFontSize] = useRecoilState(fontSizeState)
}