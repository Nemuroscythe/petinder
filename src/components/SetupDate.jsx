import React from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {addPetPopularity} from "../api/PetService";
import {Link} from "react-router-dom";

export default function SetupDate() {

    const navigate = useNavigate();
    const location = useLocation();
    const {selectedPet} = location.state.selectedPet;

    function OnSubmitLetsPlay(event) {
        event.preventDefault();
        addPetPopularity(selectedPet.name)
            .then(result => console.log('Popularity increase :' + result))
            .then(() => navigate(`/`));
    }

    return (<>
            <div className="container modalPopup">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <div className="big-dialog">
                            <div className="clearfix">
                                <div className="pull-left dialog-picture">
                                    <img
                                        src={"https://pettinder.herokuapp.com/" + selectedPet.image}
                                        className="profile-picture"
                                        alt={"Picture of " + selectedPet.name}
                                    />
                                </div>
                                <h3>{selectedPet.name}</h3>
                                <p>{selectedPet.profileText}</p>
                            </div>
                            <br/>
                            <div className="clearfix">
                                <form onSubmit={OnSubmitLetsPlay}>
                                    <Link to="/">
                                        <button className="btn btn-primary pull-right" type="button">Cancel</button>
                                    </Link>
                                    <button className="btn btn-primary pull-right"
                                            type="submit">Let us Play
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}