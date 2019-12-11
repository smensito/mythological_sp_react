import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import './css/small-business.css'

/////////////////
/// COMPONENTS //
/////////////////

// Container
class App extends React.Component {
    constructor()
    {
        super()
        this.state = {
            show: true
            prueba: false
        };
        this.changeShowState = this.changeShowState.bind(this)
    }

    changeShowState() {
        this.setState ({
          show: !this.state.show
        });
        console.log(this.state.show)
    }

    render() {
        return (

          <div id="page-container">
                <Navigation/>
                <div id="content-wrap">
                    <div className="container">
                        { this.state.show && <Content changeShowState={this.changeShowState}  /> }
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

// Navigation
class Navigation extends React.Component {
    render() {
        return (
            <div id="navigation" className="Navigation">
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <a href="#" className="navbar-brand"></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01"
                            aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Pricing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
                            <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
            </div>
        );
    }
}

class Content extends React.Component {
    render() {
        return (
            <div className="row information_cards">
                <div className='col-md-6'>
                    <div className="card h-100">
                        <div className="card-img-wrap">
                            <img className="card-img-top" src={"./static/img/icon_bestiario.jpg"}
                                 alt="Bestiario"/>
                        </div>
                        <div className="card-body">
                            <h2 className="card-title text-center">Bestiario</h2>
                            <p className="card-text">Criaturas mitológicas, Dioses, seres del imaginario
                                colectivo. </p>
                        </div>
                        <div className="card-footer text-center">
                            <a href=""
                               className="btn btn-primary btn-sm">Acceder</a>
                        </div>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className="card h-100">
                        <div className="card-img-wrap ">
                            <img className="card-img-top"
                                 src={"./static/img/icon_historias_y_cuentos.jpg"}
                                 alt="Historias y cuentos"/>
                        </div>
                        <div className="card-body">
                            <h2 className="card-title text-center">Historias y cuentos</h2>
                            <p className="card-text">Historias y cuentos que se ambientan en la península
                                ibérica. </p>
                        </div>
                        <div className="card-footer text-center">
                            <button type="button" onClick={ this.props.changeShowState }>Acceder</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// Footer
class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <footer className="py-5 bg-dark">
                    <div className="container">
                        <p className="m-0 text-center text-white">Copyright &copy; <a
                            href="http://domain.invalid/"> Your
                            Website
                            2019</a></p>
                    </div>
                </footer>
            </div>
        );
    }
}


export default App;
