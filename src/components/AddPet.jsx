import React, {useState} from "react";
import {addPets} from "../api/PetService";
import Pet from "../model/Pet";

export default function AddPet({triggerParentUpdate}) {

    function handleSubmit(pet) {
        console.log('INFO : button create pet pressed!')
        let petToCreate = new Pet(0,
            pet.name,
            pet.kind,
            pet.picture,
            pet.profileText,
            0);
        addPets(petToCreate)
            .then((result) => console.log(result))
            .then(() => triggerParentUpdate('toUpdate'))
            .then(() => clearForm())
            .then(() => triggerParentUpdate('Updated'))
        ;
    }

    function clearForm(){
        pet.name = '';
        pet.kind = '';
        pet.image = '';
        pet.profileText = '';
    }

    let [pet = {name: '', kind: '', picture: '', profileText: ''}, setPet] = useState({});

    return (
        <section className="tiny-dialog fader" id="petProfile">
            <div className="form-group">
                <h3>Add your pet</h3>
                <form name="addPetForm">
                    <label>
                        Name:
                        <input className="form-control"
                               name="name"
                               type="text"
                               value={pet.name}
                               onChange={event => setPet({
                                   name: event.target.value,
                                   kind: pet.kind,
                                   picture: pet.picture,
                                   profileText: pet.profileText
                               })}/>
                    </label>
                    <br/>
                    <label>
                        Kind:
                        <input className="form-control"
                               name="kind"
                               type="text"
                               value={pet.kind}
                               onChange={event => setPet({
                                   name: pet.name,
                                   kind: event.target.value,
                                   picture: pet.picture,
                                   profileText: pet.profileText
                               })}/>
                    </label>
                    <br/>
                    <label>
                        Picture:
                        <input className="form-control"
                               name="image"
                               type="text"
                               value={pet.image}
                               onChange={event => setPet({
                                   name: pet.name,
                                   kind: pet.kind,
                                   picture: event.target.value,
                                   profileText: pet.profileText
                               })}/>
                    </label>
                    <br/>
                    <label>
                        Profile Text:
                        <input className="form-control"
                               name="profileText"
                               type="text"
                               value={pet.profileText}
                               onChange={event => setPet({
                                   name: pet.name,
                                   kind: pet.kind,
                                   picture: pet.picture,
                                   profileText: event.target.value
                               })}/>
                    </label>
                    <br/>
                </form>
                <button
                    className="btn btn-primary pull-right"
                    onClick={() => handleSubmit(pet)}>
                    Create Pet
                </button>
            </div>
        </section>
    );
}