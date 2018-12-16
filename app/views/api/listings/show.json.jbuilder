json.listing do
  json.extract! @listing,
    :id,
    :name,
    :host_id,
    :description,
    :price,
    :num_bedrooms,
    :max_guests,
    :num_beds,
    :num_bathrooms,
    :kitchen,
    :heating,
    :wifi,
    :pets,
    :parking,
    :tv,
    :city,
    :zip_code,
    :country,
    :lat,
    :lng
  json.photo_url @listing.images.map { |file| url_for(file) }
end

json.user do
  json.partial! "api/users/user", user: @user
end