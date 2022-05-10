import {apiClient} from './Client'

export default function getPets(){
    return apiClient.get('pets')
}