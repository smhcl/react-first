import React from 'react';

class Login extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            name: 'Blog'
        }
    }

    nameChange = () => {
        this.setState({
            name: 'New Blog'
        });
    }
    render () {
        const { name } = this.state;
        return (
            <>
            <h3 className="mb-4">{name}</h3>
            <form className="col-9 ">
                <div className="row mb-3">
                    <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                    <input type="email" className="form-control" id="inputEmail3" />
                    </div>
                </div>
                <div className="row mb-3">
                    <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                    <input type="password" className="form-control" id="inputPassword3" />
                    </div>
                </div>
                <fieldset className="row mb-3">
                    <legend className="col-form-label col-sm-2 pt-0">Radios</legend>
                    <div className="col-sm-10">
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked />
                        <label className="form-check-label" for="gridRadios1">
                        First radio
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
                        <label className="form-check-label" for="gridRadios2">
                        Second radio
                        </label>
                    </div>
                    </div>
                </fieldset>
                <div className="row mb-3">
                    <div className="col-sm-10 offset-sm-2">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck1" />
                        <label className="form-check-label" for="gridCheck1">
                        Checkbox
                        </label>
                    </div>
                    </div>
                </div>
                <div className="row mb-3">
                    <label for="selectCountry" className="col-sm-2 col-form-label">Country</label>
                    <div className="col-sm-10">
                        <select id="selectCountry" className="form-select mb-2" aria-label="Country Select">
                            <option>Select</option>
                            <option value="1">NZ</option>
                            <option value="2">US</option>
                            <option value="3">Aus</option>
                            <option value="4" selected>India</option>
                            <option value="5">Rus</option>
                        </select>
                    </div>
                </div>                
                <button onClick={this.nameChange} type="button" className="btn btn-primary">Sign in</button>
            </form>
            </>
        );
    }
}

export default Login;
