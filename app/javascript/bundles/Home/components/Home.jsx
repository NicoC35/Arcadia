import React, { Component } from "react";
import Splash from "../../Splash/components/Splash";
import Fab from "../../Fab/components/FAB";

export const headers = ReactOnRails.authenticityHeaders();

export default class Home extends Component {
  state = {
    weekDays: {
      Su: "17",
      M: "18",
      T: "19",
      W: "20",
      Th: "21",
      F: "22",
      S: "23"
    },
    splash: !window.notInitial
  };

  splashTimer = () => {
    this.setState({ splash: false });
    window.notInitial = true;
  };

  componentDidMount() {
    !window.notInitial && setTimeout(this.splashTimer, 5000);
  }

  handleWeekDays = () => {
    const values = this.state.weekDays;
    const valuesList = Object.keys(values).map(key => (
      <div id="home-body-date-container">
        <div className="ft-nunito-10 ft-cr-blurple-berry">{key}</div>
        <a
          href=""
          id="home-body-date-container-value"
          className="ft-nunito-18 ft-cr-barney"
        >
          {values[key]}
        </a>
      </div>
    ));
    return valuesList;
  };

  render() {
    const { splash } = this.state;
    return splash ? (
      <Splash />
    ) : (
      <div id="home-body" className="bkgrd-cr-taupe">
        <nav id="home-body-nav" className="bkgrd-cr-vanilla">
          <div
            id="home-body-nav-left"
            className="ft-ramabhadra-24 ft-cr-mixed-berries"
          >
            <a href="">Treatment</a>
            <svg height="10px" width="64px">
              <line x1="64" y1="0" className="home-body-nav-active-line" />
            </svg>
          </div>
          <div
            id="home-body-nav-right"
            className="ft-ramabhadra-24 ft-cr-periwinkle"
          >
            <a href="">Educate</a>
            {/* Need to make l/r display only when active
          <svg height='10px' width='64px'>
              <line x1="64" y1="0" className='home-body-nav-active-line'/>
          </svg> */}
          </div>
        </nav>
        <div id="home-body-month">
          <div
            id="home-body-month-left"
            className="ft-nunito-20 ft-cr-pleasent-purple"
          >
            <span>November</span>
          </div>
          <a href="/calendars" id="home-body-month-right">
            <i
              className="far fa-calendar-alt ft-cr-barney"
              id="home-body-month-cal-icon"
            ></i>
          </a>
        </div>
        <div id="home-body-date">{this.handleWeekDays()}</div>
        <div id="home-body-dashboard">
          <div id="home-body-dashboard-div-1"></div>
          <div id="home-body-dashboard-div-2">
            <div id="home-body-dashboard-agenda">
              <div id="home-body-dashboard-agenda-div-1">
                <span className="ft-arimo-36 ft-cr-pure-white">Today</span>
              </div>
              <div id="home-body-dashboard-agenda-div-2">
                <div>
                  <span className="ft-arimo-12 ft-cr-pure-white">
                    0 medications
                  </span>
                </div>
                <div>
                  <span className="ft-arimo-12 ft-cr-pure-white">
                    0 appointments
                  </span>
                </div>
                <div>
                  <span className="ft-arimo-12 ft-cr-pure-white">0 notes</span>
                </div>
              </div>
              <div id="home-body-dashboard-agenda-div-3">
                <a href="" className="ft-nunito-12 ft-cr-mixed-berries">
                  view agenda
                </a>
              </div>
            </div>
          </div>
          <div id="home-body-dashboard-div-3"></div>
        </div>
        <Fab />
      </div>
    );
  }
}
