import Canvas from "./Canvas"
import ControlsMenu from "./ControlsMenu"
import Navbar from "./Navbar"

type Props = {}

const Home = (props: Props) => {
    return (
        <div className="bg-white rounded-t-2xl relative">
            <Navbar />
            <Canvas />
            <div className="absolute bottom-28 left-28 md:left-[350px] lg:left-[900px]">
                <ControlsMenu />
            </div>
        </div>
    )
}

export default Home