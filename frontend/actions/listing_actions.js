import * as ListingApiUtil from '../util/listing_api_util';

export const RECEIVE_LISTINGS = 'RECEIVE_LISTINGS';
export const RECEIVE_LISTING = 'RECEIVE_LISTING';

export const receiveListings = listings => ({
  type: RECEIVE_LISTINGS,
  listings,
});

export const receiveListing = ({ listing, user }) => ({
  type: RECEIVE_LISTING,
  listing,
  user,
});

export const fetchListings = () => dispatch => (
  ListingApiUtil.fetchListings()
    .then(listings => dispatch(receiveListings(listings)))
);
export const fetchListing = listingId => dispatch => (
  ListingApiUtil.fetchListing(listingId)
    .then(listing => dispatch(receiveListing(listing)))
);
