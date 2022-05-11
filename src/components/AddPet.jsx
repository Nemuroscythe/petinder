import React, {useState} from "react";

export default function AddPet() {
    let pet = {name, kind, picture, profileText};
    [pet, setPet] = useState({});

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
                               onChange={handleChange}/>
                    </label>
                    <br/>
                    <label>
                        Kind:
                        <input className="form-control"
                               name="kind"
                               type="text"
                               value={pet.kind}
                               onChange={handleChange}/>
                    </label>
                    <br/>
                    <label>
                        Picture:
                        <input className="form-control"
                               name="image"
                               type="text"
                               value={pet.image}
                               onChange={handleChange}/>
                    </label>
                    <br/>
                    <label>
                        Profile Text:
                        <input className="form-control"
                               name="profileText"
                               type="text"
                               value={pet.profileText}
                               onChange={handleChange}/>
                    </label>
                    <br/>
                </form>
                <button
                    className="btn btn-primary pull-right">
                    Create Pet
                </button>
            </div>
        </section>
    );
}