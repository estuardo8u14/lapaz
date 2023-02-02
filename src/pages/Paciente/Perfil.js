import React, { Component , Fragment } from "react";
import HeaderPerfil from "../../components/Header/HeaderPerfil";


//componentes
import Profiledetail from '../../components/Perfil/Profiledetail';
import ProfilecardThree from '../../components/Perfil/ProfilecardThree';
import Expediente from "./Expediente";

class Perfil extends Component {
    render() {
        return (
            <Fragment> 
                <HeaderPerfil />
                <div className="main-content right-chat-active">
                    <div className="middle-sidebar-bottom">
                        <div className="middle-sidebar-left pe-0">
                            <div className="row">
                                <div className="col-xl-12 mb-3">
                                    <ProfilecardThree />
                                </div>
                                <div className="col-xl-4 col-xxl-3 col-lg-4 pe-0">
                                    <Profiledetail />
                                    
                                </div>
                                <div className="col-xl-8 col-xxl-9 col-lg-8">
                                <Expediente/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Fragment>
        );
    }
}

export default Perfil;