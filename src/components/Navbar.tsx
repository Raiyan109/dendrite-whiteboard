
import { CloudDownload } from 'lucide-react'
import CloseWhiteboard from './CloseWhiteboard'

type Props = {}

const Navbar = (props: Props) => {
    return (
        <div className='bg-black w-full h-16 flex justify-between items-center py-1 px-2 rounded-t-2xl'>
            <div>
                <CloudDownload color='white' />
            </div>
            <div></div>
            <div>
                <CloseWhiteboard />
            </div>
        </div>
    )
}

export default Navbar