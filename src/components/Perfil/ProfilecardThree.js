import React,{Component} from 'react';
import PopoverMenu from '../PopoverMenu/PopoverMenu';

class ProfilecardThree extends Component {
    render() {
        return (
            <div className="card w-100 border-0 p-0 bg-white shadow-xss rounded-xxl">
                <div className="card-body h250 p-0 rounded-xxl overflow-hidden m-3"><img src="https://via.placeholder.com/1200x250.png" alt="avater" /></div>
                <div className="card-body p-0 position-relative">
                    <figure className="avatar position-absolute w100 z-index-1" style={{top:'-40px',left:'30px'}}><img src="assets/images/user.png" alt="avater" className="float-right p-1 bg-white rounded-circle w-100" /></figure>
                    <h4 className="fw-700 font-sm mt-2 mb-lg-5 mb-4 pl-15">Michele Addio  <span className="fw-500 font-xssss text-grey-500 mt-1 mb-3 d-block">CÓDIGO DE PACIENTE: 301974968</span></h4>
                    <div className="d-flex align-items-center justify-content-center position-absolute-md right-15 top-0 me-2">
                        <a href="/Admisiones" className="d-none mx-2 d-lg-block bg-danger p-3 z-index-1 rounded-3 text-white font-xsssss text-uppercase fw-700 ls-1">ADMISIÓN EMERGENCIA</a>
                        <a href="/Admisiones" className="d-none d-lg-block bg-success p-3 z-index-1 rounded-3 text-white font-xsssss text-uppercase fw-700 ls-1">ADMISIÓN</a>
                        <PopoverMenu></PopoverMenu>
                    </div>
                </div>

                <div className="card-body d-block w-100 shadow-none mb-0 p-0 border-top-xs">
                    <ul className="nav nav-tabs h55 d-flex product-info-tab border-bottom-0 ps-4" id="pills-tab" role="tablist">
                        <li className="active list-inline-item me-5"><a className="fw-700 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block active" href="#navtabs1" data-toggle="tab">Expediente clínico</a></li>
                        <li className="list-inline-item me-5"><a className="fw-700 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block" href="#navtabs2" data-toggle="tab">Términos de pago</a></li>
                        <li className="list-inline-item me-5"><a className="fw-700 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block" href="#navtabs3" data-toggle="tab">Factura</a></li>
                        <li className="list-inline-item me-5"><a className="fw-700 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block" href="#navtabs4" data-toggle="tab">Responsable de la cuenta</a></li>
                        <li className="list-inline-item me-5"><a className="fw-700 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block" href="#navtabs3" data-toggle="tab">Observaciones</a></li>
                    </ul>
                </div>
            </div>
             
        );
    }
}

export default ProfilecardThree;