# Bookbnb

Bookbnb, an Airbnb clone, is a full-stack web application that allows its users to offer lodging to others. Users can search for listings and request to book a listing of their choosing. Each listing has a show page that displays all the details of the listing to help the user make their choice.

Check out Bookbnb here: <a href="https://bookbnb.herokuapp.com">Bookbnb Live</a>

# Technologies

Technologies used in this project include:
- React with Redux - frontend API
- Ruby on Rails - backend API
- PostgreSQL - database
- React-Dates - calendar API for booking and showing availability
- Google Maps API with Places: Autocomplete
- Amazon Web Services: S3 - file and image storage


# Top Application Features

## Listing Show Page

The listing show page includes unique information to each listing and its host. This page implements React-Dates and Google Maps APIs.

#### Booking Form and Calendars
React-Dates calendars were implemented which allows users to choose specific dates to make a booking. The application state is connected to the calendar which takes the user's inputted dates and rerenders to show the blocked dates when the booking is successful. A frontend validation was added that grays out and disables the dates in which the listing already has bookings for. This stops other users from creating overlapping bookings.

This code is used in the isDayBlocked prop in the React-Dates API. The API goes through each date on the calendar and marks each as gray if the listing also has booking dates that match.

```js
  isDayBlocked(day) {
    if (this.props.bookings) {
      return this.unavailableDates().some(date => (
        moment(date).isSame(day, 'day')
      ));
    } return null;
  }
```

The booking form also includes a dropdown to add additional guests to the booking. The form then displays the total pricing based on the fields applied.

#### Google Map
The page also includes a Google map that is centered around the listing's neighborhood.

![show_page](app/assets/images/readme/show_page2.gif)

#### Details and Display
Amazon Web Services - S3 was implemented to store the images displayed on the listing show page. These images are specific to each listing. Copious styling was applied to recreate the same user interface as the actual Airbnb website: image effects on hover, listing's details, additional guests dropdown, and booking form.

![show_page](app/assets/images/readme/show_page_screenshot.png)

## Listings Index Page

#### Google Maps and Places: Autocomplete

On the listings index page, the Google Map Places: Autocomplete API is connected to the search bar which then connects to the map. This allow users to search for listings in a specific city and the results will be displayed on the map. Users could also search a city on the home page which would redirect them to the listings page with the entered city's results. To do this, Google's geocoding feature is applied to parse the user's input into latitude and longitude coordinates. These coordinates are then pushed to the browser history in which the Google map parses and renders markers for listings inside those bounds.

![index_search](app/assets/images/readme/index_search.gif)

#### Here's a sample of how the browser history object was used:

```js
componentDidMount() {
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
    if (this.props.listing) {
      this.props.fetchListing(this.props.listingId);
    } else {
      this.registerListeners();
    }
    this.search = this.props.location.search;
    this.newURL = new URLSearchParams(this.search);
    const newLat = parseFloat(this.newURL.get('lat'));
    const newLng = parseFloat(this.newURL.get('lng'));
    const center = { lat: newLat, lng: newLng };

    if (this.props.location.search === '') {
      this.props.history.push(`/listings?lat=${this.state.center.lat}&lng=${this.state.center.lng}`);
    } else {
      this.setState({ center });
      this.map.setCenter(center);
    }

    this.MarkerManager.updateMarkers(this.props.listings);
  }
```

#### Filters

The listings index page includes 3 filters that is connected to the redux application state. When applied, the filters are stored and is applied through custom selectors that return the filtered listings.
  - Dates - Implemented with React-Dates. When applied, listings that have bookings within the filtered date range will not display.

  - Number of guests - Implemented with a custom dropdown. When applied, listings that have a lower maximum capacity will not display.

  - Price range - Implemented with React-Slider.Range. When applied, listings that fall out of the filtered price range will not display.

![index_filters](app/assets/images/readme/index_filters.gif)

## Sign up and Log In Modal
The form included a button to open the other form while keeping the same modal open.  To do this, the modal was connected to the Redux application state. When a user clicks on the sign up or log in button, the an action is dispatched which alters the component to be displayed. Additionally, specific features of the view such as the `X` and darkened background were connected to the application state which would close the modal should the user click outside the form or on the `X`.

![modal](app/assets/images/readme/modal.gif)

#### Here is the component portion of my custom modal framework:

```js
function Modal({ modal, closeModal }) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'Log in':
      component = <LoginFormContainer />;
      break;
    case 'Sign up':
      component = <SignupFormContainer />;
      break;
    default:
      return null;
  }

  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  modal: state.ui.modal,
});

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
```