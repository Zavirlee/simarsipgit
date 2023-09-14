
import {RxLayers, RxDashboard} from "react-icons/rx";
import {BiLogOut} from "react-icons/bi";

export const Bar = () => {
    return(
        <div className="row  sticky-top">
            <div id="sidebar" className="sidebar">
                <div className="col-10 d-flex  flex-shrink-0 p-3 justify-content-center align-items-center w-100 ">
                <ul class="nav nav-pills flex-column mt-5 ms-3 ">
                    <li class="nav-item mb-3">
                        <a href="/home" class="nav-link active " aria-current="page">
                            <RxDashboard className="me-2 col-12 col-md-3"/>
                            <span className="col-md-4 d-none d-md-block">Dashboard</span>
                        </a>
                    </li>
                    <li className="nav-item mb-3">
                        <a href="/tambah" class="nav-link mb-3 ">
                            <RxLayers className="me-2 col-12 col-md-3"/>
                            <span className="col-md-4 d-none d-md-block">Tambah Arsip</span>
                        </a>
                    </li>
                    <li className="nav-item mb-3">
                        <a href="/tambah" class="nav-link mb-3 ">
                            <BiLogOut className="me-2 col-12 col-md-3"/>
                            <span className="col-md-4 d-none d-md-block">Keluar</span>
                        </a>
                    </li>

                </ul>
                </div>
            </div>
        </div>

    )
}
export default Bar;