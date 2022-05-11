import React, {useEffect, useState} from 'react';
import getPets from "../api/PetService";

export default function ProfileGallery() {
    const [pets, setPets] = useState([]);
    useEffect(() => {
        getPets().then((result) => setPets(result.data));
    }, pets)

    return (
        <div id="gallery" className="col-md-9">
            <div className="gallery">
                {pets.map(pet => (
                        <div className="gallery-pet fader" key={pet.id}>
                            <img className="profile-picture" src={"https://pettinder.herokuapp.com/" + pet.image} alt="pet-picture"/>
                            <div className="overlay">
                                <div className="overlay-text">{pet.name}
                                </div>
                            </div>
                        </div>
                    )
                )}
            </div>
        </div>
    );

}