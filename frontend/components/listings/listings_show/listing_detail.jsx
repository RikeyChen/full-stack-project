import React from 'react';

const ListingDetail = ({ listing }) => {
  const kitchenLogo = (
    listing.kitchen ? (
      <div>
        <div id="kitchen-logo" />
        <span>Kitchen</span>
      </div>
    ) : null
  );

  const heatingLogo = (
    listing.heating ? (
      <div>
        <div id="heating-logo" />
        <span>Heating</span>
      </div>
    ) : null
  );

  const wifiLogo = (
    listing.wifi ? (
      <div>
        <div id="wifi-logo" />
        <span>Wifi</span>
      </div>
    ) : null
  );

  const petsLogo = (
    listing.pets ? (
      <div>
        <div id="pets-logo" />
        <span>Pets</span>
      </div>
    ) : null
  );

  const parkingLogo = (
    listing.parking ? (
      <div>
        <div id="parking-logo" />
        <span>Parking</span>
      </div>
    ) : null
  );

  const tvLogo = (
    listing.tv ? (
      <div>
        <div id="tv-logo" />
        <span>TV</span>
      </div>
    ) : null
  );

  return (
    <div className="listing-detail-master">
      <div className="listing-detail-main-section">
        <header className="listing-detail-header">
          <div className="listing-detail-header-main">
            <div className="listing-detail-title-city">
              <h1>{listing.name}</h1>
              <span>{listing.city}</span>
            </div>
            <div className="listing-detail-core-amenities">
              <div id="guestsLogo" />
              <span className="core-amenities-count">{listing.max_guests}</span>
              <span>
                {listing.max_guests > 1 ? 'guests' : 'guest'}
              </span>
              <div id="bedroomsLogo" />
              <span className="core-amenities-count">{listing.num_bedrooms}</span>
              <span>
                {listing.num_bedrooms > 1 ? 'bedrooms' : 'bedroom'}
              </span>
              <div id="bedsLogo" />
              <span className="core-amenities-count">{listing.num_beds}</span>
              <span>
                {listing.num_beds > 1 ? 'beds' : 'bed'}
              </span>
              <div id="bathLogo" />
              <span className="core-amenities-count">{listing.num_bathrooms}</span>
              bath
            </div>
          </div>
          <div className="listing-detail-host-pic">
            <img src="" alt="Host Profile" />
          </div>
        </header>
        <div className="listing-detail-description">{listing.description}</div>
        <div className="listing-detail-info-btn">
          Read more about the space
          <i className="arrow down" />
        </div>
        <br />
        <br />
        <div className="listing-detail-contact-btn">
          Contact Host
        </div>
        <hr />
        <section className="listing-detail-amenities">
          <h1>Amenities</h1>
          <br />
          <div className="listing-detail-amenities-logos">
            {kitchenLogo}
            {heatingLogo}
            {wifiLogo}
            {petsLogo}
            {parkingLogo}
            {tvLogo}
          </div>
        </section>
        <hr />
      </div>
      <div className="listing-detail-book-box-spacer">
        <div className="listing-detail-book-box">Booking Box Form Goes inside this Div</div>
      </div>
    </div>
  );
};

export default ListingDetail;
