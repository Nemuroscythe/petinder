import apiClient from './Client'

export function getPets(){
    return apiClient.get('pets')
}

export function addPets(){
    return apiClient.post('pets')
}