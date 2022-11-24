

const FormCheckout =() => {



    return(
        <><div className="row mb-3">
            <label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">Nombre</label>
            <div class="col-sm-10">
                <input type="email" className="form-control form-control-sm"></input>
            </div>
        </div><div className="row mb-3">
                <label for="colFormLabel" class="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                    <input type="email" className="form-control"></input>
                </div>
            </div><div className="row">
                <label for="colFormLabelLg" className="col-sm-2 col-form-label col-form-label-lg">Telefono</label>
                <div className="col-sm-10">
                    <input type="email" className="form-control form-control-lg"></input>
                </div>
            </div></>
    )
}


export default FormCheckout