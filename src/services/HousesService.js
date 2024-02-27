import { House } from "../models/House.js"
import { AppState } from "../AppState.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class HousesService {

    async getHouses() {
        const response = await api.get('api/houses')
        logger.log('got houses', response.data)
        const houses = response.data.map(housePOJO => new House(housePOJO))
        AppState.houses = houses
        logger.log('new Houses mapped', houses)
    }
}

export const housesService = new HousesService()