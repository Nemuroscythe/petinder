import apiClient from './Client'

export function getPets() {
    return apiClient.get('pets');
}

export function addPets(pet) {
    return apiClient.post('pets', pet);
}

export function deletePet(petId) {
    return apiClient.delete('pets/' + petId);
}

export function addPetPopularity(petName) {
    return apiClient.get('pets/' + petName + '/incrementPopularity');
}