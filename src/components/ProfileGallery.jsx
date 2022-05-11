import React, {useEffect, useState} from 'react';
import getPets from "../api/PetService";

export default function ProfileGallery() {
    const [pets, setPets] = useState([]);
    useEffect(() => {
        getPets().then((result) => setPets(result.data));
    }, pets)

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
                            <div className="gallery-pet fader" key={pet.id}>
                                <img className="profile-picture" src={"https://pettinder.herokuapp.com/" + pet.image}
                                     alt="pet-picture"/>
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
            </div>
        </>
    );
}