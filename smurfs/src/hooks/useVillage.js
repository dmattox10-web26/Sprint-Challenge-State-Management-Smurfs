import { useState, useEffect } from 'react'
import axios from 'axios'

export const useVillage = () => {
    const [smurfs, updateSmurfs] = useState([])

    useEffect(() => {
        getSmurfs()
    }, [])
    const addSmurf = data => {
        axios.post('smurfs', data)
        .then(res => {
            getSmurfs()
        })
        .catch(err => console.log(err))
    }

    const updateSmurf = data => {
        axios.put(`smurfs/${data.id}`, data)
        .then(res => {
            getSmurfs()
        })
        .catch(err => console.log(err))
    }

    const deleteSmurf = id => {
        axios.delete(`smurfs/${id}`)
        .then(res => {
            getSmurfs()
        })
        .catch(err => console.log(err))
    }

    const getSmurfs = () => {
        axios.get('smurfs')
        .then(res => updateSmurfs(res.data))
        .catch(err => console.log(err))
    }

    return [smurfs, addSmurf, updateSmurf, deleteSmurf]
}