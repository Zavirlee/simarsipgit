import {useNavigate} from 'react-router-dom';
import brand from "../images/logo.png"


export const Login = () => {
    const navigate = useNavigate()

    function handleSubmit() {
      alert("yakin login?");
      navigate('/home')
    }


    return(
        <div className='container-fluid d-flex flex-column align-items-center justify-content-center min-vh-100 back'>
            <div class="container py-5">
    <div class="row d-flex justify-content-center align-items-center ">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="logo d-flex justify-content-center align-items-center">
                <img src={brand} alt="logo-depan" className="brand w-50" />
            </div>
        <div class="card log text-white mt-3 w-80">
          <div class="card-body p-4 text-center rounded-5">

            <div class="">
              <div class="form-outline form-white mb-4 mt-4">
                <input type="email" id="typeEmailX" class="form-control form-control-lg" placeholder='email' />
              </div>

              <div class="form-outline form-white mb-4">
                <input type="password" id="typePasswordX" class="form-control form-control-lg" placeholder='Password' />
            </div>  
              <button class="btn btn-warning btn-lg px-5 text-white" type="submit" onClick={handleSubmit}>masuk</button>

            </div>
        </div>
        </div>
      </div>
    </div>
  </div>
        </div>
    )
}

export default Login;