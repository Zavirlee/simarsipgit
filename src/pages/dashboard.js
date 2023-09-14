import { TbListTree } from 'react-icons/tb';
import { HiOutlineUsers } from 'react-icons/hi2';
import { CgFileDocument } from 'react-icons/cg';
import { BsShop } from 'react-icons/bs';
export const Dashboard = () => {

    return(
        <div className="container-fluid">
            <div className="row d-flex  justify-content-center align-items-center mt-5">
                <div class="col-md-2 col-2 card bg-light border-dark m-3 ">
                    <div class="card-body row d-flex  justify-content-center align-items-center">
                        <div className='col-md-3 col-3'>
                            <CgFileDocument className='text-dark fs-1 '/>
                        </div>
                        <div className='col-md-9 col-3 justify-content-center align-items-center '>
                            <p class="fs-6 d-none d-md-block ">Jumlah Arsip</p>
                            <h3 class="d-none d-md-block fs-4">120</h3>
                        </div>
                      
                    </div>
                </div>
                <div class="col-md-2 col-2 card bg-light border-dark m-3">
                    <div class="card-body row d-flex  justify-content-center align-items-center">
                        <div className='col-md-3 col-3'>
                            <BsShop className='text-dark fs-1 '/>
                        </div>
                        <div className='col-md-9 col-3 justify-content-center align-items-center'>
                            <p class="fs-6 d-none d-md-block ">Arsip Baru</p>
                            <h3 class="d-none d-md-block fs-4">120</h3>
                        </div>
                      
                    </div>
                </div>
                <div class="col-md-2 col-2 card bg-light border-dark m-3">
                    <div class="card-body row d-flex  justify-content-center align-items-center">
                        <div className='col-md-3 col-3'>
                            <HiOutlineUsers className='text-dark fs-1 '/>
                        </div>
                        <div className='col-md-9 col-3 justify-content-center align-items-center'>
                            <p class="fs-6 d-none d-md-block ">Pengguna</p>
                            <h3 class="d-none d-md-block fs-4">120</h3>
                        </div>
                      
                    </div>
                </div>
                <div class="col-md-2 col-2 card bg-light border-dark m-3">
                    <div class="card-body row d-flex  justify-content-center align-items-center ">
                        <div className='col-md-3 col-3 '>
                            <TbListTree className='text-dark fs-1'/>
                        </div>
                        <div className='col-md-9 col-3 justify-content-center align-items-center'>
                            <p class="fs-6 d-none d-md-block ">Kategori</p>
                            <h3 class="d-none d-md-block fs-4">120</h3>
                        </div>
                      
                    </div>
                </div>
            </div>
        </div>
    )
}

