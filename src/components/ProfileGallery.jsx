import React, {useEffect, useState} from 'react';
import {getPets} from "../api/PetService";
import AddPet from "./AddPet";
import PetInformation from "./PetInformation";

export default function ProfileGallery() {

    //Allow us to update the whole profile gallery
    const [componentState, updateState] = useState('');

    const [selectedPet, setSelectedPet] = useState(null);

    //Show the profile gallery
    const [pets, setPets] = useState([]);
    useEffect(() => {
        console.log('enter effect');
        getPets().then((result) => setPets(result.data))
            .then(() => console.log('reload'));
    }, [componentState])

    let filteredPets;
    const [filterText, setFilterText] = useState([]);
    if (filterText === '' || filterText === undefined) {
        filteredPets = pets;
    } else {
        filteredPets = pets.filter(pet => pet.name.toLowerCase().includes(filterText.toString().toLowerCase()));
    }

    return (<>
            <div id="gallery" className="col-md-9">
                <div className="gallery">
                    {filteredPets
                        .sort((first, second) =>
                            first.name.localeCompare(second.name)
                        )
                        .map(pet => (
                            <div className="gallery-pet fader" key={pet.id} onClick={() => setSelectedPet(pet)}>
                                <img className="profile-picture" src={"https://petinder-react-alen.herokuapp.com/" + pet.image}
                                     alt="pet"/>
                                <div className="overlay">
                                    <div className="overlay-text">{pet.name}
                                    </div>
                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>
            <div className="col-md-3">
                <div className="gallery-detail">
                    <div>
                        <section className="tiny-dialog">
                            <h3>Find your pet</h3>
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    id="name"
                                    name="name"
                                    value={filterText}
                                    onChange={(event) => setFilterText(event.target.value)}
                                    placeholder="Name"
                                />
                            </div>
                        </section>
                    </div>
                </div>
            <AddPet triggerParentUpdate={updateState}/>
            <PetInformation selectedPet={selectedPet} triggerParentUpdate={updateState} setSelectedPet={setSelectedPet}/>
            </div>
        </>
    );
}