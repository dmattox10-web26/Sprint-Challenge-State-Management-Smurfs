import { useState, useEffect } from 'react'
import axios from 'axios'

export const useVillage = () => {
    const [smurfs, updateSmurfs] = useState([])

    useEffect(() => {
        getSmurfs()
    }, [])
    const addSmurf = () => {

    }

    const updateSmurf = () => {

    }

    const deleteSmurf = () => {

    }

    const getSmurfs = () => {
        axios.get('smurfs')
        .then(res => updateSmurfs(res.data))
    }

    return [smurfs, addSmurf, updateSmurf, deleteSmurf]
}