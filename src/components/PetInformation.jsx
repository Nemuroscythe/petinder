import React from "react";

export default function PetInformation({selectedPet}) {

    const {name, profileText, popularity, rest} = {...selectedPet};
    return ( <>
            {selectedPet &&
                (<div className="gallery-detail">
                    <section className="tiny-dialog fader" id="petProfile">
                        <h3>{name}</h3>
                        <p>{profileText}</p>
                        <p>
                            Popularity:
                            {popularity}
                        </p>

                        {/*<button*/}
                        {/*    className="btn btn-primary pull-right"*/}
                        {/*    onClick={handleDelete()}*/}
                        {/*type="button">*/}
                        {/*Delete Pet*/}
                        {/*</button>*/}
                    </section>
                </div>)
            }</>
        )
}