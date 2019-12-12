import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import './css/small-business.css'

/////////////////
/// COMPONENTS //
/////////////////

// Container
class App extends React.Component {
    constructor(props)
    {
        super(props)
        this.state = {
            showMain: true,
            showBestiary: false,
            showStories: false
        };
        this.changeShowMain = this.changeShowMain.bind(this)
        this.changeShowBestiary = this.changeShowBestiary.bind(this)
        this.changeShowStories = this.changeShowStories.bind(this)
    }

    changeShowMain() {
      this.setState ({
        showMain: true,
        showBestiary: false,
        showStories: false
      });
    }

    changeShowBestiary() {
      this.setState ({
          showMain: false,
          showBestiary: true,
          showStories: false
        });

    }

    changeShowStories() {
        this.setState ({
          showMain: false,
          showBestiary: false,
          showStories: true
        });
    }

    render() {
        return (
          <div id="page-container">
                <Navigation/>
                <div id="content-wrap">
                    <div className="container">
                        { this.state.showMain && <Content
                          changeShowMain={this.changeShowMain}
                          changeShowBestiary={this.changeShowBestiary}
                          changeShowStories={this.changeShowStories}  /> }
                    </div>
                    <div className="container">
                        { this.state.showBestiary && <Bestiary
                          changeShowMain={this.changeShowMain}
                          changeShowBestiary={this.changeShowBestiary}
                          changeShowStories={this.changeShowStories}  /> }
                    </div>
                    <div>
                        { this.state.showStories && <Stories
                          changeShowMain={this.changeShowMain}
                          changeShowBestiary={this.changeShowBestiary}
                          changeShowStories={this.changeShowStories}  /> }
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
                    <a href="www.google.es" className="navbar-brand"></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01"
                            aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="www.google.es">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="www.google.es">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="www.google.es">Pricing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="www.google.es">About</a>
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
                            <button type="button" className="btn btn-primary btn-sm" onClick={ this.props.changeShowBestiary }>Acceder</button>
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
                            <button type="button" className="btn btn-primary btn-sm" onClick={ this.props.changeShowStories }>Acceder</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// Bestiary component
class Bestiary extends React.Component {
    render() {
        return (
            <div className="card-footer text-center">
                <h1>Bestiary</h1>
                <button type="button" className="btn btn-primary btn-sm" onClick={ this.props.changeShowMain }>Acceder</button>
            </div>
        );
    }
}

// Stories and tales component
class Stories extends React.Component {
    render() {
        return (
            <div className="card-footer text-center">
                <h1>Stories</h1>
                <button type="button" className="btn btn-primary btn-sm" onClick={ this.props.changeShowMain }>Acceder</button>
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
