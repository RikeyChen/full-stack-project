import React from 'react';
import 'react-dates/initialize';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

class SplashPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minPrice: null,
      maxPrice: null,
      startDate: null,
      endDate: null,
      focusedInput: null,
      openDropdown: 'hidden',
      numGuests: 1,
      numAdults: 1,
      numChildren: 0,
      numInfants: 0,
    };
    this.openDropdown = this.openDropdown.bind(this);
  }

  changeNumGuests(type) {
    return (e) => {
      if (type === 'adult' && e.target.innerText === '-') {
        this.setState({ numAdults: (this.state.numAdults - 1) });
        this.setState({ numGuests: (this.state.numGuests - 1) });
      } else if (type === 'adult' && e.target.innerText === '+') {
        this.setState({ numAdults: (this.state.numAdults + 1) });
        this.setState({ numGuests: (this.state.numGuests + 1) });
      } else if (type === 'child' && e.target.innerText === '-') {
        this.setState({ numChildren: (this.state.numChildren - 1) });
        this.setState({ numGuests: (this.state.numGuests - 1) });
      } else if (type === 'child' && e.target.innerText === '+') {
        this.setState({ numChildren: (this.state.numChildren + 1) });
        this.setState({ numGuests: (this.state.numGuests + 1) });
      } else if (type === 'infant' && e.target.innerText === '-') {
        this.setState({ numInfants: (this.state.numInfants - 1) });
      } else if (type === 'infant' && e.target.innerText === '+') {
        this.setState({ numInfants: (this.state.numInfants + 1) });
      }
    };
  }

  openDropdown(e) {
    e.preventDefault();
    const css = (this.state.openDropdown === 'hidden') ? 'show' : 'hidden';
    this.setState({ openDropdown: css });
  }

  render() {
    const adultClassMinus = (
      this.state.numGuests === 1 || this.state.numAdults === 1
        ? 'disabledbutton'
        : ''
    );

    const childClassMinus = (
      this.state.numGuests === 1 || this.state.numChildren === 0
        ? 'disabledbutton'
        : ''
    );

    const infantClassPlus = (
      this.state.numInfants === 5
        ? 'disabledbutton'
        : ''
    );

    const infantClassMinus = (
      this.state.numInfants === 0
        ? 'disabledbutton'
        : ''
    );

    return (
      <div>
        <div id="splash-pic">
          <div className="splash-search-container">
            <div className="splash-search">
              <h1>Find a place anywhere.</h1>
              <div>
                <div className="splash-search-section">
                  <span>WHERE</span>
                  <input type="text" id="splash-search-bar" placeholder="Anywhere" />
                </div>
              </div>
              <div className="splash-dates">
                <div className="splash-dates-text">
                  <span>CHECK IN</span>
                  <span>CHECK OUT</span>
                </div>
                <DateRangePicker
                  startDateId="splashStartDate"
                  endDateId="splashEndDate"
                  startDate={this.state.startDate}
                  endDate={this.state.endDate}
                  onDatesChange={({ startDate, endDate }) => { this.setState({ startDate, endDate }); }}
                  focusedInput={this.state.focusedInput}
                  onFocusChange={(focusedInput) => { this.setState({ focusedInput }); }}
                  hideKeyboardShortcutsPanel
                  small
                  showClearDates
                  reopenPickerOnClearDates
                  startDatePlaceholderText="Check in"
                  endDatePlaceholderText="Check out"
                />
              </div>
              <div className="splash-search-section">
                <span>GUESTS</span>
                <div className="splash-dropdown">
                  <button className="splash-search-dropdown-btn" onClick={this.openDropdown}>
                    {this.state.numGuests}
                    {' '}
                    {this.state.numGuests > 1 ? 'guests' : 'guest'}
                    {this.state.numInfants > 0 ? `, ${this.state.numInfants}` : null}
                    {' '}
                    {this.state.numInfants > 0 ? (this.state.numInfants === 1 ? 'infant' : 'infants') : null}
                  </button>
                  <div
                    className="splash-search-dropdown"
                    id={this.state.openDropdown}
                  >
                    <div>
                      <div id="splash-adults">
                        <div>
                          <span>Adults</span>
                        </div>
                        <div className="calc">
                          <div className={adultClassMinus} onClick={this.changeNumGuests('adult')}>-</div>
                          <span>{this.state.numAdults}</span>
                          <div onClick={this.changeNumGuests('adult')}>+</div>
                        </div>
                      </div>
                      <div id="splash-children">
                        <div className="children-text">
                          <span>Children</span>
                          <span>Ages 2-12</span>
                        </div>
                        <div className="calc">
                          <div className={childClassMinus} onClick={this.changeNumGuests('child')}>-</div>
                          <span>{this.state.numChildren}</span>
                          <div onClick={this.changeNumGuests('child')}>+</div>
                        </div>
                      </div>
                      <div id="splash-infants">
                        <div className="infants-text">
                          <span>Infants</span>
                          <span>Under 2</span>
                        </div>
                        <div className="calc">
                          <div className={infantClassMinus} onClick={this.changeNumGuests('infant')}>-</div>
                          <span>{this.state.numInfants}</span>
                          <div className={infantClassPlus} onClick={this.changeNumGuests('infant')}>+</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="splash-search-btn">
                <button>Search</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SplashPage;