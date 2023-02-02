import React, { Component , Fragment } from "react";
import HeaderPerfil from "../../components/Header/HeaderPerfil";
import "./Expediente.css";


class Expediente extends Component {
    render() {
        return (
            <Fragment> 
                <HeaderPerfil />
                <div className="main-contentt">
                    <div className="middle-sidebar-bottom">
                        <div className="middle-sidebar-left pe-0" style={{maxWidth: "100%"}}>
                            <div className="row">
                                <div className="col-lg-12 position-relative">
                                    <div className="chat-wrapper pt-0 w-100 position-relative scroll-bar bg-white theme-dark-bg">
                                        <div className="chat-body p-3 ">
                                            <div className="messages-content pb-5">
                                                <div className="message-item">
                                                    <div className="message-user">
                                                        <figure className="avatar">
                                                            <img src="assets/images/user.png" alt="avater" />
                                                        </figure>
                                                        <div>
                                                            <h5>Rayos-X</h5>
                                                            <div className="time">2023/01/01 01:35 PM</div>
                                                        </div>
                                                    </div>
                                                    <div className="message-wrap bg-red-gradiant">Orden: Pruebas de rayos en la sala 23 evaluando femur izquierdo dada una posible lesión ósea.</div>
                                                </div>

                                                <div className="message-item outgoing-message">
                                                    <div className="message-user">
                                                        <figure className="avatar">
                                                            <img src="assets/images/user.png" alt="avater" />
                                                        </figure>
                                                        <div>
                                                            <h5>Encamamiento cuarto 429</h5>
                                                            <div className="time">2023/01/05 11:35 PM<i className="ti-double-check text-info"></i></div>
                                                        </div>
                                                    </div>
                                                    <div className="message-wrap bg-blue-gradiant">Orden: Pruebas de rayos en la sala 23 evaluando femur izquierdo dada una posible lesión ósea.</div>
                                                </div>

                                                <div className="message-item">
                                                    <div className="message-user">
                                                        <figure className="avatar">
                                                            <img src="assets/images/user.png" alt="avater" />
                                                        </figure>
                                                        <div>
                                                            <h5>Medicamentos</h5>
                                                            <div className="time">2023/24/01 19:35 PM</div>
                                                        </div>
                                                    </div>
                                                    <div className="message-wrap bg-gold-gradiant">Orden: Suministrar de estreptomicina (500mg intravenoso) y medir Aminoglucósa.</div>
                                                </div>
                                                <div className="clearfix"></div>


                                            </div>
                                        </div>
                                    </div>
                                    <div className="chat-bottom dark-bg p-3 shadow-none theme-dark-bg" style={{width:"98%"}}>
                                        <form className="chat-form">
                                            <button className="bg-primary-gradiant float-left"><i className="ti-microphone text-grey-600"></i></button>
                                            <div className="form-group bg-black"><input  className="bg-primary-gradiant" type="text" placeholder="Start typing.." /></div>          
                                            <button className="bg-black"><i className="ti-arrow-right text-white"></i></button>
                                        </form>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Fragment>
        );
    }
}

export default Expediente;