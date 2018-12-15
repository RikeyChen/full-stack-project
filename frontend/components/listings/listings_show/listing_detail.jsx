import React from 'react';

const ListingDetail = ({ listing }) => {
  const kitchenLogo = listing.kitchen ? 'K' : null;
  const heatingLogo = listing.heating ? 'H' : null;
  const wifiLogo = listing.wifi ? 'W' : null;
  const petsLogo = listing.pets ? 'P' : null;
  const parkingLogo = listing.parking ? 'P' : null;
  const tvLogo = listing.tv ? 'T' : null;
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
          <div className="listing-detail-amenities-logos">
            <div>
              <div>{kitchenLogo}</div>
              {listing.kitchen ? 'Kitchen' : null}
            </div>
            <div>
              <div>{heatingLogo}</div>
              {listing.heating ? 'Heating' : null}
            </div>
            <div>
              <div>{wifiLogo}</div>
              {listing.wifi ? 'Wifi' : null}
            </div>
            <div>
              <div>{petsLogo}</div>
              {listing.pets ? 'Pets' : null}
            </div>
            <div>
              <div>{parkingLogo}</div>
              {listing.parking ? 'Parking' : null}
            </div>
            <div>
              <div>{tvLogo}</div>
              {listing.tv ? 'Tv' : null}
            </div>
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
