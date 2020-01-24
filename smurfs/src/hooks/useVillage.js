import { useState, useEffect } from 'react'
import axios from 'axios'

export const useVillage = () => {
    const [smurfs, updateSmurfs] = useState([])

    const addSmurf = () => {

    }

    const updateSmurf = () => {

    }

    const deleteSmurf = () => {

    }

    const getSmurfs = () => {

    }

    return [smurfs, addSmurf, updateSmurf, deleteSmurf]
}