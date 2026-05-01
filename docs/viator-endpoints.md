# Viator Partner API — Endpoint Index

- OpenAPI: 3.0.2
- Title: Viator Partner API
- Version: 2.0
- Servers:
  - https://api.viator.com/partner
  - https://api.sandbox.viator.com/partner

Total endpoints: 33

## Products

### `GET /products/modified-since`
- operationId: `productsModifiedSince`
- summary: /products/modified-since
- Get full product details for all products modified since a specified time.

### `POST /products/bulk`
- operationId: `productsBulk`
- summary: /products/bulk
- Get full product details for all requested products (limited to 500 products per request)

### `GET /products/{product-code}`
- operationId: `products`
- summary: /products/{product-code}
- Get full product details for a single product.

### `GET /products/tags`
- operationId: `productsTags`
- summary: /products/tags
- Get details for all tags (includes all languages/localizations)

### `GET /products/booking-questions`
- operationId: `productsBookingQuestions`
- summary: /products/booking-questions
- Get full details of all available preset booking questions.

### `POST /products/search`
- operationId: `productsSearch`
- summary: /products/search
- Returns a list of filtered, ordered and sorted product summaries for products that match the given search criteria.

### `POST /products/recommendations`
- operationId: `productsRecommendations`
- summary: /products/recommendations
- Retrieve a list of sorted product-to-product recommendations that match the given search criteria.

## Attractions

### `POST /attractions/search`
- operationId: `attractionsSearch`
- summary: /attractions/search
- Get a list of attractions associated with a given `destinationId`, along with all relevant information about them, including products mapped.

### `GET /attractions/{attraction-id}`
- operationId: `attractions`
- summary: /attractions/{attraction-id}
- Get all relevant information about a specific `attractionId`, including products mapped.

## Availability

### `POST /availability/check`
- operationId: `availabilityCheck`
- summary: /availability/check
- Check real-time availability and pricing for a product depending on the date, pax-mix, start time and/or product option.

### `GET /availability/schedules/{product-code}`
- operationId: `availabilitySchedules`
- summary: /availability/schedules/{product-code}
- Get availability and pricing details for all product options of the requested product. The pricing is returned in the supplier's currency. We recommend using the [/exchange-rates](#operation/exchangeRates) endpoint to get the Viator exchange rates and apply them for pricing conversion.

### `POST /availability/schedules/bulk`
- operationId: `availabilitySchedulesBulk`
- summary: /availability/schedules/bulk
- Get availability and pricing details for all product options of all requested products. The pricing is returned in the supplier's currency. We recommend using the [/exchange-rates](#operation/exchangeRates) endpoint to get the Viator exchange rates and apply them for pricing conversion.

### `GET /availability/schedules/modified-since`
- operationId: `availabilitySchedulesModifiedSince`
- summary: /availability/schedules/modified-since
- Get full future availability details for all products modified since the specified time. The pricing is returned in the supplier's currency. We recommend using the [/exchange-rates](#operation/exchangeRates) endpoint to get the Viator exchange rates and apply them for pricing conversion. Initiate a 

## Bookings

### `POST /bookings/cart/hold`
- operationId: `bookingsCartHold`
- summary: /bookings/cart/hold
- Requests the creation of a hold for each item in the cart.

### `POST /bookings/cart/book`
- operationId: `bookingsCartBook`
- summary: /bookings/cart/book
- Requests a booking for each item in the cart.

### `POST /bookings/hold`
- operationId: `bookingsHold`
- summary: /bookings/hold
- **Note**: This endpoint is only available to <u>merchant partners</u>.

### `POST /bookings/book`
- operationId: `bookingsBook`
- summary: /bookings/book
- Requests a booking for a product.

### `POST /bookings/status`
- operationId: `bookingsStatus`
- summary: /bookings/status
- **Note**: This endpoint is only available to <u>affiliate partners with API access level "Full Access + Booking"</u> and <u>merchant partners</u>.

### `GET /bookings/cancel-reasons`
- operationId: `bookingsCancelReasons`
- summary: /bookings/cancel-reasons
- Retrieves a dictionary of unique identification codes (`cancellationReasonCode`) and their associated natural-language descriptions (`cancellationReasonText`). Cancellation reasons should be cached and refreshed monthly.

### `GET /bookings/{booking-reference}/cancel-quote`
- operationId: `bookingsCancelQuote`
- summary: /bookings/{booking-reference}/cancel-quote
- Gets the cancellation quote for an existing booking.

### `POST /bookings/{booking-reference}/cancel`
- operationId: `bookingsCancel`
- summary: /bookings/{booking-reference}/cancel
- Cancels existing booking with given Viator-generated booking-reference

### `GET /bookings/modified-since`
- operationId: `bookingsModifiedSince`
- summary: /bookings/modified-since
- Gets all booking-event notifications relevant to the partner since a point in time indicated by a timestamp or pagination cursor. This endpoint should be polled hourly, except in supplier cancellation scenarios, in which case polling should occur every 5 minutes.

### `POST /bookings/modified-since/acknowledge`
- operationId: `bookingsModifiedSinceAcknowledge`
- summary: /bookings/modified-since/acknowledge
- Acknowledges receipt of one or more booking event notifications returned by the [/bookings/modified-since](#operation/bookingsModifiedSince) endpoint. Merchants who wish to assume control of the customer service workflow surrounding booking change events must carry out this step before the time indi

### `GET /amendment/check/{booking-reference}`
- operationId: `amendmentCheck`
- summary: /amendment/check/{booking-reference}
- Returns the amendability status of a given `bookingRef`, along with a list of booking components (e.g., booking details, traveller info, pickup location) that can be amended. 

### `POST /amendment/quote`
- operationId: `amendmentQuote`
- summary: /amendment/quote
- Gets the amendment quote for an existing booking.

### `POST /amendment/amend/{quote-reference}`
- operationId: `amendmentAmend`
- summary: /amendment/amend/{quote-reference}
- Amends existing booking with given Viator-generated `quoteRef`

## Payments

### `POST /v1/checkoutsessions/{sessionToken}/paymentaccounts`
- operationId: `paymentsCreateToken`
- summary: /v1/checkoutsessions/{sessionToken}/paymentaccounts
- Creates a payment token from raw credit card details for use with the [/bookings/cart/book](#operation/bookingsCartBook) endpoint.

## Auxiliary

### `POST /search/freetext`
- operationId: `searchFreeText`
- summary: /search/freetext
- Perform a search for products, attractions and/or destinations that contain a free-text search term. Product results can be filtered and sorted according to various criteria.

### `POST /locations/bulk`
- operationId: `locationsBulk`
- summary: /locations/bulk
- Get full location details for the requested location references. Locations should be cached and refreshed monthly. Additionally, the [/locations/bulk](#operation/locationsBulk) endpoint should be used on demand for any new location references returned in the product content response.

### `POST /exchange-rates`
- operationId: `exchangeRates`
- summary: /exchange-rates
- This endpoint gets the exchange rates for conversions between specified currencies.

### `POST /reviews/product`
- operationId: `reviewsProduct`
- summary: /reviews/product
- Retrieves and filters reviews <u>for a **single** product</u>

### `POST /suppliers/search/product-codes`
- operationId: `suppliersSearchProductCodes`
- summary: /suppliers/search/product-codes
- Gets a collection of supplier information objects for the provided products. Limited to 500 products per request.

### `GET /destinations`
- operationId: `destinations`
- summary: /destinations
- Get details of all destinations supported by the API. Destinations should be refreshed weekly (in addition to on-demand updates when a new destination is returned in the product content response).
