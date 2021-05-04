import axios from 'axios'
import { useState, useEffect, useContext } from 'react'
import { UserContext } from '../Context/UserContext'
import SingleDetail from '../Components/SingleDetail'

const SingleSpace = (props) => {

    const [space, setSpace] = useState([])
    const {userState} = useContext(UserContext)
    const [user, setUser] = userState

    const [date, setDate] = useState()

    const getSingleSpace = async () => {
        let response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/spaces/${props.id}`)
        setSpace(response.data.space)
    }

    useEffect(() => {
        getSingleSpace()
    }, [])

    const reserveSpace = async () => {
        let response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/spaces/reserve`, {
            spaceId: props.id,
            date: date
        }, {
            headers: {
                Authorization: user.id
            }
        })
        console.log(response)
    }

    const handleReserve = (e) => {
        e.preventDefault()
        reserveSpace()
    }

    return (
        <div className="single-space-container">
            { space.length === 0 ? 
            <div>Loading...</div>
            :
            <SingleDetail space={space} user={user} setDate={setDate} handleReserve={handleReserve} />
            }
        </div>
    )
}


export default SingleSpace