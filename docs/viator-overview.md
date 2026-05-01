<style type='text/css'>
code { white-space: nowrap; }
a { font-weight: bold; }

figure {
  width: 100%;
  text-align: center;
  font-style: italic;
  font-size: smaller;
  text-indent: 0;
  border: thin silver solid;
  margin: 0.5em;
  padding: 0.5em;
}
</style>

## Updates

### Latest updates: 

| Date        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|-------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 13 Feb 2025 | Added `videos` object to [/products/{product-code}](#operation/products), [/products/modified-since](#operation/productsModifiedSince), [/products/bulk](#operation/productsBulk), [/products/search](#operation/productsSearch) and [/search/freetext](#operation/searchFreeText) responses.                                                                                                                                                                                                                                                                                                                                        |
| 4 Feb 2025  | Added `AED`, `ARS`, `CLP`, `CNY`, `COP`, `FJD`, `IDR`, `ILS`, `ISK`, `KRW`, `MXN`, `MYR`, `PEN`, `PHP`, `PLN`, `RUB`, `THB`, `TRY` and `VND` as currency options in the request to [/products/search](#operation/productsSearch) and [/search/freetext](#operation/searchFreeText).                                                                                                                                                                                                                                                                                                                                                  
| 11 Sep 2025 | Updated [/bookings/modified-since](#operation/bookingsModifiedSince) response with new `eventTypes` and enabled endpoint access to all partner types.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
| 01 Jul 2025 | Added [/amendment/check/{booking-reference}](#operation/amendmentCheck), [/amendment/quote](#operation/amendmentQuote) and [/amendment/amend/{quote-reference}](#operation/amendmentAmend) endpoints to [Bookings](#tag/Bookings) section                                                                                                                                                                                                                                                                                                                                                                                            
| 27 Mar 2025 | Update [/search/freetext](#operation/searchFreeText) request section add filtering by tags for "searchType": "PRODUCTS"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
| 20 Mar 2025 | Added [/products/recommendations](#operation/productsRecommendations) to [Products](#tag/Products) section. This endpoint will provide product-to-product recommendations to users.                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 19 Mar 2025 | Updated endpoints [/availability/schedules/{product-code}](#operation/availabilitySchedules), [/availability/schedules/bulk](#operation/availabilitySchedulesBulk), [/availability/schedules/modified-since](#operation/availabilitySchedulesModifiedSince), [/availability/check](#operation/availabilityCheck), [/search/freetext](#operation/searchFreeText), [/products/search](#operation/productsSearch), [/bookings/cart/hold](#operation/bookingsCartHold) and [/bookings/hold](#operation/bookingsHold) as well as [Inclusions & exclusions](#section/Appendices/Inclusions-and-exclusions) with `Extra Charges` information |
| 11 Feb 2025 | Removed `TRANSACTION_NOT_ALLOWED`, `CARD_INACTIVE` and `CARD_RESTRICTED` rejection reasons from [/bookings/cart/book](#tag/Bookings/operation/bookingsCartBook).                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 4 Dec 2024  | Updated [/bookings/cart/book](#tag/Bookings/operation/bookingsCartBook) response with the following new rejection reason: `PROCESSOR_ISSUE_WITH_PAYMENT`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 19 Nov 2024 | Updated [/bookings/cart/book](#tag/Bookings/operation/bookingsCartBook) response with the following new rejection reasons: `SUSPECTED_FRAUD`, `SOFT_DECLINE`, `HARD_DECLINE`, `THREE_D_SECURE_REQUIRED`, `INTERNAL_ERROR`, `PROCESSOR_UNAVAILABLE`.                                                                                                                                                                                                                                                                                                                                                                                  |
| 24 Oct 2024 | Deprecated [/v1/product/photos](#operation/v1ProductPhotos) endpoint                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 23 Oct 2024 | Added [/attractions/search](#operation/attractionsSearch) and [/attractions/{attraction-id}](#operation/attractions) to [Attractions](#tag/Attractions) section<br/>Added [/destinations](#operation/destinations) to [Auxiliary](#tag/Auxiliary) section<br/>Updated [Access to endpoints](#section/Access-to-endpoints) section to include new endpoints and removed the ones marked for deprecation<br/>Updated [Resolving references](#section/Workflows/Resolving-references) section                                                                                                                                           |
| 21 Oct 2024 | Removed `VIATOR_EXCLUSIVE` flag from product search endpoints                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 1 Oct 2024  | Removed COVID-19 safety attributes from `AdditionalInfo` schema (part of product content response; e.g., from [/products/{product-code}](#operation/products) endpoint)                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 6 Aug 2024  | Changes to behaviour with `DEFAULT` tour grade for product, availability, book hold and confirm endpoints. See note at end of section [Product Option Code](#section/Key-concepts/Product-options). Note: these changes are backwards compatible.                                                                                                                                                                                                                                                                                                                                                                                    |
| 29 Jul 2024 | Updated [/bookings/modified-since](#operation/bookingsModifiedSince) response with new eventType: CUSTOMER_CANCELLATION, for Customer initiated cancellations.                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 14 Mar 2024 | Updated [/bookings/cart/book](#tag/Bookings/operation/bookingsCartBook) response with the following new rejection reasons: `INSUFFICIENT_FUNDS`, `INVALID_PAYMENT_DETAILS`, `TRANSACTION_NOT_ALLOWED`, `CARD_INACTIVE` and `CARD_RESTRICTED`.<br/> Updated [/bookings/status](#tag/Bookings/operation/bookingsStatus) response with `ON_HOLD` status                                                                                                                                                                                                                                                                                 |
| 13 Feb 2024 | Updated [/suppliers/search/product-codes](#operation/suppliersSearchProductCodes) with the following new attributes: `supplierAgreedToLegalCompliance`, `registrationCountry`, `tradeRegisterName` and `registeredBusinessNumber`. Also updated the `ContactDetails` schema with a new attribute `countryCode`.                                                                                                                                                                                                                                                                                                                      |
| 11 Sep 2023 | Added support for PDF vouchers. Made bookerInfo firstName required to match definition.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 5 Jul 2023  | Added [/bookings/cart/hold](#operation/bookingsCartHold) and [/bookings/cart/book](#operation/bookingsCartBook) to [Bookings](#tag/Bookings) section<br />Added [/v1/checkoutsessions/{sessionToken}/paymentaccounts](#operation/paymentsCreateToken) to [Payments](#tag/Payments) section                                                                                                                                                                                                                                                                                                                                           |
| 15 May 2023 | Modified [Accept-Language-header-parameter](#section/Localization/Accept-Language-header-parameter) section to accurately reflect currently allowed values                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 16 Mar 2023 | Added [/search/freetext](#operation/searchFreeText) and [/suppliers/search/product-codes](#operation/suppliersSearchProductCodes) to [Access to endpoints](#section/Access-to-endpoints) section                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 6 Mar 2023  | Added Canadian dollars (CAD) as currency option in request and response to [/bookings/hold](#operation/bookingsHold), [/bookings/book](#operation/bookingsBook) and [/bookings/status](#operation/bookingsStatus) endpoints                                                                                                                                                                                                                                                                                                                                                                                                          |
| 6 Jan 2023  | Added two new COVID-19 safety attributes to `AdditionalInfo` schema (part of product content response; e.g., from [/products/{product-code}](#operation/products) endpoint)                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 4 Jan 2023  | Updated or created `ProductSearchFiltering`, `ProductSummary`, `ProductSearchSorting`, `ProductSearchFlag`, `TranslationDetails`, `SearchDurationInfo` and `SearchRatingInfo` schemata for the [/products/search](#operation/productsSearch) endpoint request/response, updated example request and merchant and affiliate response examples, and updated [Postman collections](#section/Testing/Postman-collections-for-testing) in line with these changes                                                                                                                                                                         |
| 3 Jan 2023  | Updated example request and response for [/search/freetext](#operation/searchFreeText) endpoint                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 12 Dec 2022 | Added [/search/freetext](#operation/searchFreeText) endpoint                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 10 Nov 2022 | Updated [/bookings/hold](#tag/Bookings/operation/bookingsHold) and [/bookings/modified-since/acknowledge](#tag/Bookings/operation/bookingsModifiedSinceAcknowledge) descriptions                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
  


### Update history: 

- All significant modifications made to this document since its creation can be found in the [Update history](#section/Appendices/Update-history) section.

# Support

## Onboarding / integration

If you require help or technical advice while you are carrying out your integration, please contact the onboarding team via email at: affiliateapi@tripadvisor.com

### Integration guides

Our onboarding specialists have put together [in-depth guides](https://partnerresources.viator.com/travel-commerce/implementation/?source=specs) covering various topics to help you during your integration. 

### Site certification for merchant partners

If you are a merchant partner, once your API integration has been completed, it must pass certification prior to going live in order to ensure data integrity and the appropriate use of API services. Please peruse and bear in mind [our certification requirements](https://partnerresources.viator.com/travel-commerce/merchant/certification/?source=specs) prior to and during development.

## Operational support

If are a merchant partner, have completed your integration and your site is operational, please see the [Partner Help Center - Merchant partner support](https://partnerhelp.viator.com/en/categories/37-merchant-partner-support?source=specs) page for information about what to do if you encounter a problem and require support.

# About

## Viator Partner-API v2

### What is it?

The Viator Partner API v2 comprises a set of endpoints that can support the operation of a fully-featured tours and experiences booking website or application; or, it can be integrated with your existing travel-booking software.

The API exposes a variety of services that allow the retrieval of all product details, such as descriptive text and structured metadata, pricing, terms and conditions, photos and reviews. This data can either be ingested and managed on your local system, or calls can be made in real time to retrieve content in response to your users' activity on your systems.

The API allows product content, pricing and availability data to be retrieved in bulk or queried in real-time, it can perform pricing calculations according to the number and type of traveler and product option combinations available, and it supports availability and pricing holds as part of its booking and booking-cancellation functionality. 

### Who is it for?

The Viator Partner-API is a designed for use by organizations partnered with Viator as [Affiliate partners](https://partnerresources.viator.com/travel-commerce/affiliate/) or [Merchant partners](https://partnerresources.viator.com/travel-commerce/merchant/).

#### Affiliate partners


Affiliate partners have full access to the areas of the API relating to content, but sales of Viator products must be carried out on the Viator site itself. 

When a customer wishes to book a product from an affiliate's site, they are instead redirected to the relevant product page on [viator.com](https://viator.com) via a unique URL in order to complete the purchase. Once on the Viator site, a cookie is set such that all transactions will accrue a commission for that partner until the cookie expires.

Purchases of products originating from the affiliate's site are recorded and a commission on these sales is paid periodically.

For more information on this partner type, see: [Viator's Affiliate API Solution](https://partnerresources.viator.com/travel-commerce/affiliate/)

#### Merchant partners

The merchant partner relationship is one in which the partner is the **merchant of record**; i.e., the partner takes full responsibility for all financial records and transactions carried out by their users, as well as providing customer support with regard to providing general assistance, processing cancellations and refunds, and liaising between suppliers and customers when the need to communicate arises.

For more information on this partner type, see: [Viator's Merchant API Solution](https://partnerresources.viator.com/travel-commerce/merchant/)


## New features in this version

The Viator Partner-API v2.0 is a fully-redesigned system with regard to our previous API products. It includes all key fuctionality available in previous versions, but now provides nearly fully-structured data elements, and a more modern, concise and easily-understandable interface.

In addition, we have made significant improvements to performance across all functions of the API, and particularly in the area of product content and availability data ingestion.

### Simplified and optimized data ingestion 

Data ingestion has been greatly improved over previous versions of this API. Now, partners need only perform a single initial ingestion of data; then, only new and updated product content, availability and pricing information is retrieved as a 'delta update' as it becomes available.

In addition:
- A single end-point allows both bulk ingestion and delta updates, which can be controlled using a pagination cursor or with a time-stamp parameter to allow for point-in-time ingestion of any new updates and easy recovery from ingestion failure
- The structure of a product's pricing and availability schedules has been simplified to reduce response size

#### Product content

- All pricing is standardized to the supplier's currency, avoiding the need to update on account of exchange rate fluctuations 
- Structured location, tag, booking question, review and photo data is available from separate endpoints to allow for parallel ingestion, and resusable data can be ingested once and applied globally

#### Availability schedule information

Improvements to availability schedule ingestion performance and usability have been achieved:

- Availability is now communicated by providing an overall schedule season and specifying *unavailable* dates instead of available dates, a significantly more compact format that improves transfer speeds and minimizes storage needs  

- Availability and pricing information is given on a days-of-the-week basis, which can help with filtering and improving visibility of product availability for customers.

- Information about special pricing periods that may be running throughout a product's seasons is included and is easy to interpret, allowing partners to surface promotions to customers.

- Accurate pricing and applicability information for products that have 'per unit' (group) pricing is now included in the availability & pricing response; whereas support for this pricing model was limited in previous versions of this API. This allows partners to improve pricing exposure for these products.

### Structure-rich content

Providing structured content is a major focus of this API. Product information that was previously stored as natural-language descriptions in a single, lengthy field is now represented in intuitively-structured, machine-interpretable schemata that empowers partners to apply finely-grained merchandising control, including:

- Tour itineraries with comprehensive location data to allow for graphical display and advanced search
- Tour details, inclusions and dynamic health & safety information to support changing requirements due to global pandemic response initiatives
- Machine-parseable booking questions and answers

### Improved real-time availability and pricing checking

The [real-time availability check endpoint](#operation/availabilityCheck):
- Allows you to check availability and pricing in real-time for a specific product / [product-option](#section/Key-concepts/Product-options) / date / starting time / pax mix combination
- Returns the ticket availability status along with a pricing breakdown (by age band) and total price (all age bands) in a simplified format to reduce response size
- Pricing components are stated explicitly, including the Recommended Retail Price (RRP), partner net price, special-offer pricing and booking fee component details

### Improved booking workflow

The [booking workflow](#section/Booking-concepts/Making-a-booking) now includes an optional booking-hold step, which allows you greater predictability of a successful booking, thereby increasing conversion rates by decreasing friction in the booking flow.

The [booking hold](#operation/bookingsCartHold) endpoint supports two kinds of hold:
- Inventory/availability hold (increased likelihood of receiving a booking confirmation)
- Pricing hold (mitigates against pricing changes at the time of booking)

The [real-time availability and pricing endpoint](#operation/availabilityCheck) also delivers \~5% faster performance than previous versions of this API.

# Access to endpoints

The API endpoints accessible to you depend on which kind of partner you are; affiliate or merchant. 

**Basic-access Affiliate partners** have access to a limited subset of the non-transactional endpoints of the Viator Partner API. The basic-access tier allows affiliates to quickly get started building their site with fewer complexities. The following step-by-step guide explains how to do it: [Golden Path – Basic Access Affiliate Partners](https://partnerresources.viator.com/travel-commerce/affiliate/basic-access/golden-path/?source=specs) 

**Full-access Affiliate partners** have access to all non-transactional endpoints; i.e., everything except booking, booking hold and booking cancellation endpoints. This access model applies equally to whitelabel partners.

**Full-access + Booking Affiliate partners** have access to all the same endpoints as **Full-access Affiliate partners** as well as transactional endpoints. i.e., including cart booking, cart booking hold and booking cancellation endpoints.

**Merchant partners** have access to all endpoints.

The following table describes which partner types have access to which endpoints:

| Endpoint                                                                                | Basic-access Affiliate | Full-access Affiliate | Full-access + Booking Affiliate | Merchant |
|-----------------------------------------------------------------------------------------|:-----------------:|:----------------:|:------------:|:------------:|
| [/products/modified-since](#operation/productsModifiedSince)                            | ❌ | ✅ | ✅ | ✅ |
| [/products/bulk](#operation/productsBulk)                                               | ❌ | ✅ | ✅ | ✅ |
| [/products/{product-code}](#operation/products)                                         | ✅ | ✅ | ✅ | ✅ |
| [/products/tags](#operation/productsTags)                                               | ✅ | ✅ | ✅ | ✅ |
| [/products/booking-questions](#operation/productsSearch)                                | ❌ | ❌ | ✅ | ✅ |
| [/products/search](#operation/productsSearch)                                           | ✅ | ✅ | ✅ | ✅ |
| [/products/recommendations](#operation/productsRecommendations)                         | ❌ | ✅ | ✅ | ✅ |
| [/attractions/search](#operation/attractionsSearch)                                     | ✅ | ✅ | ✅ | ✅ |
| [/attractions/{attraction-id}](#operation/attractions)                                  | ✅ | ✅ | ✅ | ✅ |
| [/availability/check](#operation/checkAvailability)                                     | ❌ | ✅ | ✅ | ✅ |
| [/availability/schedules/{product-code}](#operation/availabilitySchedules)              | ✅ | ✅ | ✅ | ✅ |
| [/availability/schedules/bulk](#operation/availabilitySchedulesBulk)                    | ❌ | ✅ | ✅ | ✅ |
| [/availability/schedules/modified-since](#operation/availabilitySchedulesModifiedSince) | ❌ | ✅ | ✅ | ✅ |
| [/bookings/cart/hold](#operation/bookingsCartHold)                                      | ❌ | ❌ | ✅ | ✅ |
| [/bookings/cart/book](#operation/bookingsCartBook)                                      | ❌ | ❌ | ✅ | ✅ |
| [/bookings/hold](#operation/bookingsHold)                                               | ❌ | ❌ | ❌ | ✅ |
| [/bookings/book](#operation/bookingsBook)                                               | ❌ | ❌ | ❌ | ✅ |
| [/bookings/status](#operation/bookingsBook)                                             | ❌ | ❌ | ✅ | ✅ |
| [/bookings/cancel-reasons](#operation/bookingsCancelReasons)                            | ❌ | ❌ | ✅ | ✅ |
| [/bookings/{booking-reference}/cancel-quote](#operation/bookingsCancelQuote)            | ❌ | ❌ | ✅ | ✅ |
| [/bookings/{booking-reference}/cancel](#operation/bookingsCancel)                       | ❌ | ❌ | ✅ | ✅ |
| [/bookings/modified-since](#operation/bookingsModifiedSince)                            | ✅ | ✅ | ✅ | ✅ |
| [/bookings/modified-since/acknowledge](#operation/bookingsModifiedSinceAcknowledge)     | ❌ | ❌ | ✅ | ✅ |
| [/amendment/check/{booking-reference}](#operation/amendmentCheck)                       | ❌ | ❌ | ✅ | ✅ |
| [/amendment/quote](#operation/amendmentQuote)                                           | ❌ | ❌ | ✅ | ✅ |
| [/amendment/amend/{quote-reference}](#operation/amendmentAmend)                         | ❌ | ❌ | ✅ | ✅ |
| [/v1/checkoutsessions/{sessionToken}/paymentaccounts](#operation/paymentsCreateToken)   | ❌ | ❌ | ✅ | ❌ |
| [/search/freetext](#operation/searchFreeText)                                           | ✅ | ✅ | ✅ | ✅ |
| [/destinations](#operation/destinations)                                                | ✅ | ✅ | ✅ | ✅ |
| [/locations/bulk](#operation/locationsBulk)                                             | ✅ | ✅ | ✅ | ✅ |
| [/exchange-rates](#operation/exchangeRates)                                             | ✅ | ✅ | ✅ | ✅ |
| [/reviews/product](#operation/reviewsProduct)                                           | ❌ | ✅ | ✅ | ✅ |
| [/suppliers/search/product-codes](#operation/suppliersSearchProductCodes)               | ❌ | ✅ | ✅ | ✅ |


# Authentication

## API-key

Access to the API is managed using an **API key** that is included as a **header parameter** to every call made to all API endpoints described in this document.

| Header parameter name | Example value |
|-----------------------|---------------|
| exp-api-key | bcac8986-4c33-4fa0-ad3f-75409487026c |

If you do not know the API key for your organization, please contact your business development account manager for these details.

Please note that language localization is now controlled on a per-call basis. Previously, localization settings were configured per API-key; whereas, under the present scheme, organizations have a **single API key**. 

Language localization is accomplished by specifying the desired language as a header parameter (`Accept-Language`). See [Accept-Language header](#section/Localization/Accept-Language-header-parameter) for available language codes.

# Localization

## Accept-Language header parameter

The `Accept-Language` header parameter specifies into which language the natural language fields in the response from each endpoint will be translated.

**Note:** All partners using the V2 endpoints have access to all supported languages for their partner type.

### Languages available to all partners

| Language | Accept-Language parameter value |
|----------|-------|
| English | `en`, `en-US` `en-AU`, `en-CA`, `en-GB`, `en-HK`, `en-IE`, `en-IN`, `en-MY`, `en-NZ`, `en-PH`, `en-SG`, `en-ZA` |
| Danish | `da` |
| Dutch | `nl`, `nl-BE` |
| Norwegian | `no` |
| Spanish | `es`, `es-AR`, `es-CL`, `es-CO`, `es-MX`, `es-PE`, `es-VE` |
| Swedish | `sv`|
| French | `fr`, `fr-BE`, `fr-CA`, `fr-CH` |
| Italian | `it`, `it-CH` |
| German | `de`, `de-DE` |
| Portuguese | `pt`, `pt-BR` |
| Japanese | `ja` |

### Additional languages available to merchant partners only

| Language | Accept-Language parameter value |
|----------|-------|
| Chinese (traditional) | `zh-TW` |
| Chinese (simplified) | `zh-CN` |
| Korean | `ko`, `ko-KR` |

## API versioning strategy

In order to ensure the predictability of the behavior of this software, we have implemented a versioning strategy to handle updates to the API contract, as well as a mechanism to specify which version of the API you wish to access.

When we release a new version of this API, partners have the option of continuing to use the existing version or migrating to the updated version when they are ready.

  - **Note**: The version of this API that this document pertains to is that indicated in the title of this document.

The approach to versioning for this API is as follows:

### Global versioning

- Version numbers are global across all endpoints. When a new version of this API is released, **all** endpoints will increment to the latest version. Viator does not support a heterogenous implementation with calls being made to different endpoints with different version numbers.

### Version release and deprecation

- New versions of this software are released on an ad-hoc basis. Breaking changes will always result in a version increment.
- Viator will inform partners about all version releases, including details about the new features available and any breaking changes that have been introduced.
- Once a version of the API is deprecated, you will have a minimum of 12 months from the date of receiving notice of the change in which to modify your systems. Requests made to deprecated endpoint versions may result in a **400 Bad Request** response after 12 months.

### Release candidates

- Release candidate (RC) versions of this API may be made available to allow partners to preview changes in a non-production (sandbox) environment. When available, RC versions will be announced in this documentation, however these will not be subject to version control and breaking changes may be introduced prior to official release.

### Release criteria

#### Backward-compatible changes

The following types of change are considered backward-compatible, and will not result in a version release when introduced. Therefore, partners must ensure their implementation can handle such changes gracefully. 

These changes comprise:

  - Introduction of new API endpoints
  - Addition of any properties to an endpoint's response schema
  - Addition of non-required properties to an endpoint's request schema
  - Unexpected receipt of an HTTP redirect response code (**301 Moved Permanently** or **302 Found**)
  - Addition of new HTTP methods (POST, GET, PUT, PATCH, DELETE, etc.)
  - Addition of new key values to existing fields that represent a set, insofar as no operating logic is likely to be affected

#### Breaking changes

The following types of change are considered breaking changes and will result in the release of an incremented version of this software:

 - Addition of required properties to an endpoint's request schema
 - Removal of required properties from an endpoint's request or response schemata
 - Changing the data-type or format (e.g., date format) of an existing field in an endpoint's request or response schemata
 - Adding, removing or changing the meaning of the HTTP status codes in an endpoint's response
 - Removing or modifying the **Content-Type** on existing endpoints
 - Modifying or removing field key values in a set
 - Modifying the **operationId** of an endpoint

### Version specification mechanism

It is mandatory to specify which version of the API you wish to use via the **'Accept' header parameter** in the **request** to each API endpoint; e.g.,  `Accept: application/json;version=2.0`. Omitting the version parameter will result in a **400 Bad Request** response.

**Example valid request**:

```bash
curl --location --request GET 'https://api.sandbox.viator.com/partner/products/modified-since?cursor=MTU5MjM1NTM0MXwxMTM5ODZQNA==' \
--header 'exp-api-key: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx' \
--header 'Accept-Language: en-US' \
--header 'Accept: application/json;version=2.0'
```

**Example error response**:

```json
{
  "code":"INVALID_HEADER_VALUE",
  "message":"Accept header  is missing or has invalid version information",
  "timestamp":"2020-09-02T03:43:23.303946Z",
  "trackingId":"3D45567E:2D25_0A5D03AB:01BB_5F4F14A5_394639:3DB7"
}
```

## Accept-Encoding

This API supports gzip compression. Therefore, if you include `gzip` in the `Accept-Encoding` header parameter in the request, the API will respond with a gzip-compressed response.

## Endpoint timeout settings

If you wish to implement internal timeout settings for calls to this API, **we recommend a setting of 120s**.

This is due to the fact that some of the products in our inventory rely on the operation of external supplier systems, which we do not control. Because of that, it may take up to 120s to receive a response when making a booking. In rare cases, booking response times in excess of 120s can sometimes occur.

This means that a booking may have actually succeeded even if the [/bookings/book](#operation/bookingsBook) or [/bookings/cart/book](#operation/bookingsCartBook) endpoints time-out or respond with a HTTP 500 error. 

Therefore, it is strongly recommended that you check the status of the booking using the [/bookings/status](#operation/bookingsStatus) endpoint to make sure the booking was not created before you attempt to make the booking again.

Furthermore, you can avoid creating duplicate bookings by making sure that you supply the same value for `partnerBookingRef` in the request to [/bookings/book](#operation/bookingsBook) or [/bookings/cart/book](#operation/bookingsCartBook) as you did for the booking you believe may have failed. The `partnerBookingRef` value must be unique; therefore, a duplicate booking will not be created.

# Key concepts

## Product content and availability endpoints

### Product content endpoints

You can retrieve the core product-content details from the following endpoints:

- [/products/{product-code}](#operation/products): Retrieve content for a single product in real time when the product is selected by the customer 
  - **Used by**: API partners who <u>do not</u> ingest the product database, but instead get each product's details only when required
- [/products/modified-since](#operation/productsModifiedSince): Retrieve content for all products with filtering according to modification date 
  - **Used by**: API partners who ingest the entire product catalog into a local database and perform regular delta updates via this endpoint to keep their local data in-sync with Viator's
- [/products/bulk](#operation/productsBulk): Retrieve content for multiple products, as specified in the request. 
  - **Please note**: This endpoint **must not** be used for ingestion; rather, it should only be used to retrieve product details for the selected products when needed.

### Availability schedules endpoints

You can retrieve the availability schedules for products using the following endpoints:

- [/availability/schedules/{product-code}](#operation/availabilitySchedules): Retrieve availability schedules for a single product in real time when the product is selected by the customer.
  - **Used by**: API partners who <u>do not</u> ingest the availability database, but instead get the availability schedules associated with a product at the time that it is required
- [/availability/schedules/modified-since](#operation/availabilitySchedulesModifiedSince): Retrieve future availability schedules for all products with filtering according to modification date 
  - **Used by**: API partners who ingest all availability schedules into a local database and perform regular delta updates via this endpoint to keep their local data in-sync with Viator's
- [/availability/schedules/bulk](#operation/availabilitySchedulesBulk): Retrieve availability schedules for all products specified in the request.
  - **Please note**: This endpoint **must not** be used for ingestion; rather, it should only be used to retrieve the availability schedules for the selected products when needed.

## Product options

Any particular product may consist of a number of variants, each of which is referred to as a 'product option'. In previous versions of this API, and in the tours and activities sector in general, product options are also referred to as 'tour grades'.

For example, product options might represent different departure times, tour routes, or packaged extras like additional meals, transport and so forth.

The product options available for a product can be found in the `productOptions` array in the responses from any of the [product content endpoints](#section/Key-concepts/Product-content-and-availability-endpoints).
 
An example `productOptions` array for the product **5010SYDNEY** is as follows:

```json
"productOptions": [
    {
        "productOptionCode": "48HOUR",
        "description": "Duration: 2 days: FREE BONUS ENTRY to Sydney Tower with every Deluxe ticket end 31st March<br/>48 Hour Premium Ticket: Unlimited use on Big Bus Sydney & Bondi Tour for 48 hours from time of first use PLUS a guided walking tour of The Rocks, Syd",
        "title": "48 Hour Premium Ticket ",
        "languageGuides": [...]
    },
    {
    "productOptionCode": "TG1",
        "description": "Hop-on Hop-Off and Attractions: 48hr Big Bus Tours, 1-day Hop-On Hop-Off Harbour Cruise, 4 Attractions: Tower Eye, Madame Tussauds, Wildlife Zoo, Aquarium<br/>Duration: 2 days<br/>Complimentary Walking Tours: Complimentary English-speaking guided walking tour of “The Rocks” historic and harbourside precinct.",
        "title": "48Hour Deluxe PLUS Attractions",
        "languageGuides": [...]
    },
    {
        "productOptionCode": "24HOUR",
        "description": "Unlimited use on Big Bus Sydney & Bondi Hop-on Hop-off Tour for 24 hours from time of first use",
        "title": "24 Hour Classic Ticket ",
        "languageGuides": [...]
    },
    {
        "productOptionCode": "DELUXE",
        "description": "Big Bus and Habour Cruise: Combine two great Sydney experiences into one with a hop-on hop off Big Bus Tours and a hop-on hop-off Sydney Harbour cruise <br/>Duration: 2 days: FREE BONUS ENTRY to Sydney Tower with every Deluxe ticket end 31st March<br/>Complimentary Walking Tour: Complimentary English-speaking 90-minute guided walking tour of “The Rocks” historic and harbourside precinct.",
        "title": "48 Hour Deluxe Bus and Cruise",
        "languageGuides": [...]
    }
]
```

This product has four product options, each with an identifying code given in the `productOptionCode` field:

- `"48HOUR"`
- `"TG1"`
- `"24HOUR"`
- `"DELUXE"`

Product options are essentially a subcategory of the tour or activity. You will need to specify the product option you wish to book when making a booking.


**Note on `DEFAULT` productOptionCodes:**

Previously, `DEFAULT` productOptionCodes were treated differently from other tour grades and were omitted from requests/responses when only one “DEFAULT” tour grade was present. This special treatment has been removed. All tour grades can be handled consistently. For backward compatibility, `DEFAULT` codes can still be omitted from some requests, but it is recommended to avoid this practice.


## Availability schedules

The [availability schedules endpoints](#section/Key-concepts/Product-content-and-availability-endpoints) provide information about the availability of a product (along with its various product options and starting times, if they exist) and its pricing in the supplier's currency.

This section explains how to interpret the response from the [availability schedules endpoints](#section/Key-concepts/Product-content-and-availability-endpoints).

Example response snippet from [/availability/schedules/10212P2](#operation/availabilitySchedules) (some starting times were removed for brevity):

```json
{
    "productCode": "10212P2",
    "bookableItems": [
        {
            "productOptionCode": "TG45",
            "seasons": [
                {
                    "startDate": "2019-05-01",
                    "endDate": "2021-12-31",
                    "pricingRecords": [
                        {
                            "daysOfWeek": [
                                "MONDAY",
                                "TUESDAY",
                                "WEDNESDAY",
                                "THURSDAY",
                                "FRIDAY",
                                "SATURDAY",
                                "SUNDAY"
                            ],
                            "timedEntries": [
                                {
                                    "startTime": "11:00",
                                    "unavailableDates": [
                                        {
                                            "date": "2020-09-16",
                                            "reason": "SOLD_OUT"
                                        },
                                        {
                                            "date": "2020-09-23",
                                            "reason": "SOLD_OUT"
                                        },
                                        {
                                            "date": "2020-09-22",
                                            "reason": "SOLD_OUT"
                                        },
                                        {
                                            "date": "2020-09-27",
                                            "reason": "SOLD_OUT"
                                        },
                                        {
                                            "date": "2020-09-29",
                                            "reason": "SOLD_OUT"
                                        },
                                        {
                                            "date": "2020-09-30",
                                            "reason": "SOLD_OUT"
                                        }
                                    ]
                                },
                                {
                                    "startTime": "10:00",
                                    "unavailableDates": [
                                        {
                                            "date": "2020-09-25",
                                            "reason": "SOLD_OUT"
                                        },
                                        {
                                            "date": "2020-09-26",
                                            "reason": "SOLD_OUT"
                                        },
                                        {
                                            "date": "2020-09-28",
                                            "reason": "SOLD_OUT"
                                        },
                                        {
                                            "date": "2020-09-27",
                                            "reason": "SOLD_OUT"
                                        },
                                        {
                                            "date": "2020-09-30",
                                            "reason": "SOLD_OUT"
                                        },
                                        {
                                            "date": "2020-09-29",
                                            "reason": "SOLD_OUT"
                                        }
                                    ]
                                },
                                {...}
                            ],
                            "pricingDetails": [
                                {
                                    "pricingPackageType": "PER_PERSON",
                                    "minTravelers": 1,
                                    "ageBand": "INFANT",
                                    "price": {
                                        "original": {
                                            "recommendedRetailPrice": 0.00,
                                            "partnerNetPrice": 0.00,
                                            "bookingFee": 0.00,
                                            "partnerTotalPrice": 0.00
                                        }
                                    }
                                },
                                {
                                    "pricingPackageType": "PER_PERSON",
                                    "minTravelers": 1,
                                    "ageBand": "ADULT",
                                    "price": {
                                        "original": {
                                            "recommendedRetailPrice": 100.02,
                                            "partnerNetPrice": 79.89,
                                            "bookingFee": 4.79,
                                            "partnerTotalPrice": 84.68
                                        },
                                        "special": {
                                            "recommendedRetailPrice": 90.02,
                                            "partnerNetPrice": 71.90,
                                            "bookingFee": 4.31,
                                            "partnerTotalPrice": 76.21,
                                            "offerStartDate": "2020-08-28",
                                            "offerEndDate": "2020-09-30"
                                        }
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ],
    "currency": "USD",
    "summary": {
        "fromPrice": 100.02
    }
}
```

- Each item in the `bookableItems[]` array contains the availability and pricing data for one of the product's product-options (`productOptionCode`).
- Each item in the `seasons[]` array describes the availability and pricing for the product-option during the 'season' (period of time) delimited by `startDate` and `endDate`. If `endDate` is not present, this means the season extends 384 days (approximately 12.5 months) into the future from the current date.
- Each item in the `pricingRecords[]` array describes which days of the week (`daysOfWeek[]`) the availability and pricing data pertains to during the season, as well as which starting times are in operation (`timedEntries[]`) and on which dates (`unavailableDates[]`) each starting time is unavailable (e.g., due to being sold out).
- Each item in the `pricingDetails[]` array describes the pricing that applies to each age-band during the season.

### Interpreting the availability schedule

We can thereby interpret the availability schedule snippet above as follows:

- For the product-option code `"TG45"` of product `"10212P2"`, during the period from `"2019-05-01"` to `"2021-12-31"`, on **all days of the week**, there are starting times at **10:00** and **11:00**.
- The **11:00** starting time is unavailable due to being 'sold out' on the following dates:
  - 2020-09-16
  - 2020-09-22
  - 2020-09-23
  - 2020-09-27
  - 2020-09-29
  - 2020-09-30
- The **10:00** starting time is unavailable due to being 'sold out' on the following dates:
  - 2020-09-25
  - 2020-09-26
  - 2020-09-27
  - 2020-09-28
  - 2020-09-29
  - 2020-09-30
- Infant tickets are free (USD 0)
- Adults are charged per-person; the normal recommended retail price (`original`) is USD 100.02
- A **pricing special** (`special`) is in effect for adults between 2020-08-28 and 2020-09-30; the special recommended retail price is USD 90.02 

Using this information, a complete schedule – including which product-codes and starting times are available on which dates and the pricing (including special discounts) that applies on each date - can be constructed in your database.

## Itineraries

The itinerary for a product is used to communicate to customers what to expect with regard to where they will go when participating in the tour or activity. On the [Viator.com website](https://viator.com), this information is displayed in the **What to expect** section on each product's product display page.

Itinerary information is available from this API in a machine-interpretable, structured format that facilitates graphical display and advanced search, should you choose to implement it.

The itinerary information for each product is contained in the `itinerary` object in the response from any of the [product content endpoints](#section/Key-concepts/Product-content-and-availability-endpoints).

There are five types of itinerary, and the type is specified in the `itinerary.itineraryType` field. They are as follows:

| Itinerary type | `itineraryType` | Meaning |
|----------------|-----------------------|---------|
| <a href="#standard-itinerary">**Standard**</a> | `"STANDARD"` | A tour-based product (focused on visiting and viewing) that occurs at a single location or proceeds through a set of locations on a single day.  |
| <a href="#activity-itinerary">**Activity**</a> | `"ACTIVITY"` | An activity-based product (focused on the activity rather than the location) that occurs at a single location or proceeds through a set of locations on a single day |
| <a href="#multi-day-tour-itinerary">**Multi-day tour**</a> | `"MULTI_DAY_TOUR"` | A tour or activity that occurs over multiple days, and therefore includes food and accommodation |
| <a href="#hop-on--hop-off-itinerary">**Hop-on / hop-off**</a> | `"HOP_ON_HOP_OFF"` | A tour that operates continuously, such as a bus tour, wherein passengers can use their ticket to board and alight as they please at any of the stops along the route |
| <a href="#unstructured-itinerary">**Unstructured**</a> | `"UNSTRUCTURED"` | Not all suppliers have upgraded the itinerary information for their products from a text-based description to structured data; therefore, the itinerary information for a small number of products remains unparseable for the time being. | 

### Common elements

The `itinerary` object is polymorphic depending on the `itineraryType`, but all variants contain standard information, as follows:

| Field name | Meaning |
|------------|---------|
| `skipTheLine` | `true` if a ticket for this product allows participants to attend a location without having to obtain a separate ticket on the occasion itself |
| `privateTour` | `true` if only the travelers who have booked this product will be present; `false` if it is a shared tour |
| `maxTravelersInSharedTour` | If `privateTour` is `false`, this value represents the maximum number of people that will be able to participate in the tour or activity. |
| `unstructuredDescription` | In the event that structured information is not available, this field will contain a plain-text description of the itinerary. |

All other elements in the `itinerary` object differ slightly according to the value of `itineraryType`.

### Standard itinerary

Products with a `"STANDARD"` itinerary type are tour-based products (focused on visiting and viewing) that occur at a single location or proceed through a set of locations on a single day.

An example of a `"STANDARD"` itinerary product is [Barossa Valley Highlights from Barossa Valley Including Wine and Cheese Tasting (21381P1)](https://www.viator.com/tours/Barossa-Valley/Barossa-Valley-Highlights-from-Adelaide-or-Barossa-Valley-Including-Wine-and-Cheese-Tasting/d5623-21381P1).

The `itinerary` object in the product-content response for this tour is as follows (truncated to the first three items for brevity):

```json
"itinerary": {
  "itineraryType": "STANDARD",
  "skipTheLine": false,
  "duration": {
    "fixedDurationInMinutes": 360
  },
  "itineraryItems": [
    {
      "pointOfInterestLocation": {
        "location": {
          "ref": "LOC-5620ab70-c813-4904-ad13-bcf527540d3e"
        },
        "attractionId": 17873
      },
      "duration": {
        "fixedDurationInMinutes": 45
      },
      "passByWithoutStopping": false,
      "admissionIncluded": "YES",
      "description": "Guests will experience the majesty of (...) "
    },
    {
      "pointOfInterestLocation": {
        "location": {
          "ref": "LOC-7ae41705-fd91-4500-8cde-bbe9b3a00df4"
        }
      },
      "duration": {
        "fixedDurationInMinutes": 40
      },
      "passByWithoutStopping": false,
      "admissionIncluded": "YES",
      "description": "Guests will enjoy a truly unique offering (...)"
    },
    {
      "pointOfInterestLocation": {
        "location": {
          "ref": "LOC-9494c4cf-f4e4-4e7f-8213-0cf1b9980097"
        }
      },
      "duration": {
        "fixedDurationInMinutes": 30
      },
      "passByWithoutStopping": false,
      "admissionIncluded": "YES",
      "description": "No trip to the Barossa would be complete without (...)"
    }
    (...)
  ]
}
```
The `itineraryItems[]` array describes the itinerary of locations for this tour and can be used in conjunction with the [/locations/bulk](#operation/locationsBulk) endpoint to contruct a **What to expect** section, similar to what is seen for this product on [viator.com](https://www.viator.com/tours/Barossa-Valley/Barossa-Valley-Highlights-from-Adelaide-or-Barossa-Valley-Including-Wine-and-Cheese-Tasting/d5623-21381P1), as in the following screen-shot:

<figure>
    <img src="img/standard-itinerary.png" alt="Standard itinerary example from viator.com"/>
    <figcaption>Standard itinerary example from viator.com</figcaption>
</figure>

The elements highlighted in red boxes are sourced as follows:

**"Stop At: Seppeltsfield"**

The name of each location (in the highlighted case, 'Seppeltsfield') is not included in the response and must be determined by submitting the location reference code in the `pointOfInterestLocation.location.ref` field to the [/locations/bulk](#operation/locationsBulk) endpoint.

The location reference is `"LOC-5620ab70-c813-4904-ad13-bcf527540d3e"`:

```json
"pointOfInterestLocation": {
  "location": {
    "ref": "LOC-5620ab70-c813-4904-ad13-bcf527540d3e"
}
```

Submitting this code to the [/locations/bulk](#operation/locationsBulk) endpoint yields the following response:

```json
{
  "locations": [
    {
      "provider": "TRIPADVISOR",
      "reference": "LOC-5620ab70-c813-4904-ad13-bcf527540d3e",
      "name": "Seppeltsfield",
      "address": {
        "street": "730 Seppeltsfield Rd",
        "administrativeArea": "Seppeltsfield",
        "state": "South Australia",
        "country": "Australia",
        "countryCode": "AU",
        "postcode": "5355"
      },
      "center": {
        "latitude": -34.489162,
        "longitude": 138.91866
      }
    }
  ]
}
```

The name of the location is in the `name` element; i.e., `"Seppeltsfield"`.

**Description**

The description for each itinerary stop is given in the `description` field; in this case:

```json
"description": "Guests will experience the majesty of the Seppeltsfield Winery Estate, an historic icon of the Barossa and integral part of its storied history. Learn the story of the Seppelt family, the phenomenal fortified wines upon which they have built their reputation and taste a broad range of their current wine offerings. Don’t forget to ask about the Centennial collection, the only wine collection of wines of its type in the world with more than 120 years of consecutive vintages currently stored in the barrel. "
```

**"Duration: 45 minutes"**

The duration spent at an itinerary location is given in the `duration` element. This can be a fixed duration, as in this example and indicated by the `fixedDurationInMinutes` field being filled; i.e.:

```json
"duration": {
  "fixedDurationInMinutes": 45
},
```

Or, the time spent at the location might be variable, in which case only the `variableDurationFromMinutes` and `variableDurationToMinutes` fields will appear; e.g.:

```json
"duration": {
  "variableDurationFromMinutes": 10,
  "variableDurationToMinutes": 30
},
```

**"Admission Ticket Included"**

This item of information indicates to the traveler whether or not they will be required to pay for admission to a location or whether admission is included in the price of the tour. It is indicated by the `admissionIncluded` field; which in this case is:

```json
  "admissionIncluded": "YES"
```
The possible values this field can take are:
- `"YES"`
- `"NO"`
- `"NOT_APPLICABLE"`

**Pass by without stopping**

In this example, the `passByWithoutStopping` element is `false` for all locations. On some tours, however, the vehicle will merely pass by a certain location, without stopping, for viewing purposes. If that is the case, this field will be `true`.

### Activity itinerary

The "activity" itinerary is designed for products where the focus of the experience is the activity itself (e.g., cooking classes), rather than the location(s) at which it occurs.

The `itinerary` object for this type of product includes the `activityInfo` and `foodMenus` objects, which contain details about the activity and any meals being served (or created), respectively.

**Example activity experience**: [Traditional Cooking Class - 114869P3](https://www.viator.com/tours/Yogyakarta/Traditional-Cooking-Class/d22560-114869P3)

```json
"itinerary": {
  "itineraryType": "ACTIVITY",
  "skipTheLine": false,
  "privateTour": true,
  "duration": {
    "fixedDurationInMinutes": 240
  },
  "pointsOfInterest": [
    {
       "ref": "LOC-o0AXGEKPN4wJ9sIG0RAn5C7cXoFi13Pb8aiiiEWiVprM1MtQdt/DIeeb7ErQo1SK"
    }
  ],
  "activityInfo": {
    "location": {
       "ref": "LOC-dwbUKYXwDvt911EeSQVjwo4itqM47D/JrJBMhEHXctp6Yj8SzOvLCGbeQQ0arbNw8FHTuTEi0SU9RbKNpLx7bw8HP6Pnh1pBwy27irN3vKoTexOgxSlj2+xv9x3k6fZnPrb/zhY5RImUibPpbTET/+atZD8crT0DlPf5hg21QPWNam1RsZKgzF5gb1fPZ6d7WNWIWYsu3m54y2TFqiHaAbo1d2Ps2LFK+DCctmyDmqbgSV7FDpLXv5sL/e0R/Mg+7vLX0lMV8HGW4jisRxqYD5oThATP9j1NRY98SvhXpEI="
    },
    "description": "Embark on a culinary adventure unlocking the secrets of authentic Javanese cooking, utilizing traditional ingredients and preparation methods.\nYour day starts early at the local markets, where you can pick from fresh herbs & spices, crisp vegetables and choice cuts of meat. \nAfter exploring at the traditional market, you will be warmly welcomed and expertly guided by your host, who will help you to discover how to create your very own delicious authentic Javanese dishes. \nYour hard work is rewarded when you sit down to have lunch on your tasty creations.\nAll classes are conducted in English by Javanese chefs fully conversant with Javanese cuisine and culture...and in a relaxed, friendly atmosphere in the beautiful kitchen-garden."
  },
  "foodMenus": [
    {
       "course": "MAIN",
       "dishName": "Gado-gado",
       "dishDescription": "Mixed vegetables with peanut sauce"
    },
    {
       "course": "MAIN",
       "dishName": "Opor Ayam",
       "dishDescription": "Braised Chicken in Coconut Milk"
    }
  ]
}
```

All information for the 'What to Expect' section on the product display page on Viator.com is can be sourced from this object.

### Multi-day tour itinerary

Products with a `"MULTI_DAY_TOUR"` itinerary type are tours or activities that occur over multiple days, and therefore include a breakdown of the itinerary for each day of the tour, as well as extra information about food and accommodation.

**Example multi-day tour**: [Active Winter Adventure in Yukon | 5 days (7110P7)](https://www.viator.com/tours/Whitehorse/5-Day-Active-Winter-Adventure-in-Yukon/d5420-7110P7)

Screenshot of 'What to expect' section from the viator.com site:

<figure>
    <img src="img/multi-day-tour-itinerary.png" alt="Multi-day tour itinerary example from viator.com"/>
    <figcaption>Multi-day tour itinerary example from viator.com</figcaption>
</figure>

Snippet of the `itinerary` object in the product content response for 7110P7 (truncated to first two items of `days[]` array):

```json
"itinerary": {
  "itineraryType": "MULTI_DAY_TOUR",
  "skipTheLine": false,
  "duration": {
    "fixedDurationInMinutes": 7200
  },
  "days": [
    {
      "title": "Arrival Whitehorse",
      "dayNumber": 1,
      "items": [
        {
          "pointOfInterestLocation": {
            "location": {
              "ref": "LOC-99b0f435-fa6a-469f-8f96-f983b82f74c5"
            }
          },
          "duration": {},
          "admissionIncluded": "NOT_APPLICABLE",
          "description": "From the airport we drive you to your hotel located in the centre of Whitehorse."
        }
      ],
      "accommodations": [
        {
          "description": "Overnight in downtown Whitehorse Hotel"
        }
      ]
    },
    {
      "title": "Wildlife and Hot Springs, a Bird's-Eye-View and Northern Lights",
      "dayNumber": 2,
      "items": [
        {
          "pointOfInterestLocation": {
            "location": {
              "ref": "LOC-799e6c90-d0bb-4ec4-9cf6-c40459ff0463"
            },
            "attractionId": 25942
          },
          "duration": {
            "fixedDurationInMinutes": 90
          },
          "admissionIncluded": "YES",
          "description": "Later we drive to the Yukon Wildlife Preserve where we can see up close inhabitant game like the Elk, Moose, Caribou, Mountain Goats and Porcupines in their natural surrounding."
        },
        {
          "pointOfInterestLocation": {
            "location": {
              "ref": "LOC-cf8d0f7a-54d6-4cc1-9911-480b4934c752"
            },
            "attractionId": 25951
          },
          "duration": {
            "fixedDurationInMinutes": 90
          },
          "admissionIncluded": "YES",
          "description": "Not far from here we will visit the Takhini Hotsprings and endulge ourself in the natural hot waters and relax in a breathtaking winter mountain setting."
        },
        {
          "pointOfInterestLocation": {
            "location": {
              "ref": "LOC-3251a39d-aa69-4229-9ba4-57d5b417e6db"
            }
          },
          "duration": {
            "fixedDurationInMinutes": 240
          },
          "admissionIncluded": "YES",
          "description": "After a relaxed dinner in Whitehorse, you’ll be back on the road again, this time to seek views of the stunning Northern Lights. Relax in sheltered comfort, or under the starry sky beside a warm fire at one of our tailor-made aurora viewing locations. "
        }
      ],
      "accommodations": [
        {
          "description": "Overnight in downtown Whitehorse Hotel"
        }
      ]
    },
    (...)
  ]
}
```

Within the `days[]` array, each day of the multi-day tour is described. The `items[]` array within each item of the `days[]` array largely follows the structure of the items in the `itineraryItems[]` array of the `"STANDARD"` itinerary and can be interpreted for display.

The `fixedDurationInMinutes` in the `itinerary[]` array represents the total duration of the tour. 

**Note**: The example above does not include the `foodAndDrinks[]` element, as it is not relevant to this product.

### Hop-on / hop off itinerary

A hop-on/hop-off product is one that typically operates continuously during its hours of operation, such as a bus tour, and passengers can use their ticket to board and alight as they please at any of the stops along the route.

Such products may also operate multiple routes simultaneously.

**Example hop-on / hop-off tour**:[Big Bus Sydney and Bondi Hop-on Hop-off Tour (5010SYDNEY)](https://www.viator.com/tours/Sydney/Sydney-and-Bondi-Hop-on-Hop-off-Tour/d357-5010SYDNEY)

<figure>
    <img src="img/hop-on-hop-off-itinerary.png" alt="Hop-on / hop-off itinerary example from viator.com"/>
    <figcaption>Hop-on / hop-off itinerary example from viator.com</figcaption>
</figure>

Snippet of `itinerary` object in the product content response for 5010SYDNEY (`operatingSchedule`, `stops` and `pointsOfInterest` truncated in first route):

```json
"itinerary": {
  "itineraryType": "HOP_ON_HOP_OFF",
  "skipTheLine": false,
  "privateTour": false,
  "duration": {
    "fixedDurationInMinutes": 120
  },      
  "routes": [
    {
      "operatingSchedule": "1st bus departs from Stop 1 Circular Quay at 9.00am.. (...)",
      "duration": {
        "fixedDurationInMinutes": 120
      },
      "name": "Red Route - Sydney Icons",
      "stops": [...],
      "pointsOfInterest": [...]
      ]
    },
    {
      "operatingSchedule": "1st bus departs from Stop 12/24 Central Station at 10.00am.\nFrequency every 60 minutes\nLast bus departs from stop 12/24 at 4.00pm",
      "duration": {
        "fixedDurationInMinutes": 120
      },
      "name": "Blue Route - Bondi Lifestyle",
      "stops": [
        {
          "stopLocation": {
            "ref": "LOC-o0AXGEKPN4wJ9sIG0RAn5Psa0O7zv6as2RgNgIaUx0EFjKH/7fL3wV6nAS8iPXkO"
          },
          "description": "Central Station, Pitt Street, Bus Bay 18"
        },
        {
          "stopLocation": {
            "ref": "LOC-RaYlfRSLaIsd0SlazqDQk19G5f6qNrg0gjGUG4TKX09ebeQFQmF/tcZGYdP+hZ8qHiX/vcPkkKKpDcocShqAYEgNFI1CfF3En+N9VrOAxKQUrgoRQ1Va78q0+ItmaNr/WbsMTE8jgepUMa6GSjKvLkRhjHJbm/8KZDt9vri/bomquCnoZMFCjkrjxqrlpEp5m2qWwkCxg5iRffRLuhG/YQ=="
          },
          "description": "Australian Museum "
        },
        {
          "stopLocation": {
            "ref": "LOC-o0AXGEKPN4wJ9sIG0RAn5Nh4BzPY4JhOxIuD4/Do8pUJ7t+9MCl62rbq6KVnaek/"
          },
          "description": ""
        },
        {
          "stopLocation": {
            "ref": "LOC-o0AXGEKPN4wJ9sIG0RAn5HyrAalNU3M4hS1T1NGhMtCdFsSEh+RkFpJBmFZX9No8"
          },
          "description": ""
        },
        {
          "stopLocation": {
            "ref": "LOC-o0AXGEKPN4wJ9sIG0RAn5ADNeEAMR25x+3AtosA/mPk102O66T1JygFmomnS5cve"
          },
          "description": ""
        },
        {
          "stopLocation": {
            "ref": "LOC-o0AXGEKPN4wJ9sIG0RAn5DlsAklW6JtKr4LQsnhsvv7JxEYbLQWAsKDqTrCu41p4"
          },
          "description": ""
        },
        {
          "stopLocation": {
            "ref": "LOC-o0AXGEKPN4wJ9sIG0RAn5BLsCa3M6INxXNpkE2r1BTHxvB0gY1MP6WB9Yxso16Ot"
          },
          "description": ""
        },
        {
          "stopLocation": {
            "ref": "LOC-o0AXGEKPN4wJ9sIG0RAn5PrdhQ/J96Gq+dweFD3sOSrkBFH5QSJjP1VJ0a/86OPO"
          },
          "description": ""
        }
      ],
      "pointsOfInterest": [
        {
          "location": {
            "ref": "LOC-6eKJ+or5y8o99Qw0C8xWyIiKlXuqcCaUR/8Ng7CZSLI="
          },
          "attractionId": 14159
        },
        {
          "location": {
            "ref": "LOC-6eKJ+or5y8o99Qw0C8xWyOEUrjaNrfQuPK4sfYmEGio="
          }
        },
        {
          "location": {
            "ref": "LOC-6eKJ+or5y8o99Qw0C8xWyPTry/4ZvItH2jj+ziZ16zY="
          }
        },
        {
          "location": {
            "ref": "LOC-6eKJ+or5y8o99Qw0C8xWyCs+n26oP6pvXz2mRpQ6QlA="
          }
        },
        {
          "location": {
            "ref": "LOC-6eKJ+or5y8o99Qw0C8xWyI5+u+JgfxCzNB+Yaph1xug="
          }
        }
      ]
    }
  ]
}
```

By comparing the response snippet with the screenshot above, you can see that:

- There are two routes – "Red Route - Sydney Icons" and "Blue Route - Bondi Lifestyle"
- The Blue Route has 8 stops and 5 points of interest
- Only the first two stops on the Blue Route have descriptive text entered by the supplier, as seen in the screenshot and in the snippet (`description` field)

All location details (including the name) must be retrieved by sending the location reference to the [/locations/bulk](#operation/locationsBulk) endpoint. 

The total duration of the tour can be found in the `itinerary[]` array. 
If all tour routes have the same duration, the `fixedDurationInMinutes` field will be returned. 
When tour routes have different duration, only the `variableDurationFromMinutes` and `variableDurationToMinutes` fields will appear.

### Unstructured itinerary

Although our systems have been upgraded to support structured itinerary information, this feature is only availabe once the supplier manually updates their product details. A small number of suppliers have not yet made these updates. As such, some products retain their legacy itinerary information, and this case is handled with the `"UNSTRUCTURED"` itinerary type.

Snippet of `itinerary` object in the product content response for [5524GOLD - Private Tour: 4-Day Golden Triangle Trip to Agra and Jaipur from Delhi](https://www.viator.com/tours/New-Delhi/Private-Tour-4-Day-Golden-Triangle-Trip-to-Agra-and-Jaipur-from-Delhi/d804-5524GOLD):

```json
"itinerary": {
  "itineraryType": "UNSTRUCTURED",
  "skipTheLine": false,
  "privateTour": false,
  "unstructuredDescription": "Please read the Itinerary section for details on your Golden Triangle tour from Delhi to Agra and Jaipur.",
  "unstructuredItinerary": " Day 1: Delhi – AgraMorning departure from your hotel in Delhi. Traveling in the comfort your own air-conditioned vehicle, accompanied by a driver, the journey to Agra will take approximately four to five hours. Upon arrival in Agra, check in at your hotel. In Agra, your local guide who will take you to visit the famous and majestic Red Agra Fort, followed by the romantic Taj Mahal at sunset. The remainder of the evening is free for your own personal exploration.\n\nOvernight: 3- or 4-star hotel in Agra\n\nDay 2: Agra – Jaipur (B)After breakfast, travel by road to Fatehpur Sikri, located approximately 40 kilometers from Agra. Fatehpur Sikri was the capital of the Mughal Empire between 1571 and 1585 during the reign of Akbar. Continue to the 'pink city' of Jaipur. The rest of your day is free for your own exploration of Jaipur's action packed streets and magnificent palaces. Jaipur is a shopper's paradise. There is an amazing range of crafts available, and Jaipur is also famous for its precious and semi-precious stones. \n\nOvernight: 3- or 4-star hotel in Jaipur\n\nDay 3: Jaipur (B)After breakfast, visit Amber Fort located 12 kilometers from Jaipur. The magnificent Amber Fort is a fine blend of Hindu and Muslim architecture. Return to Jaipur and visit the City Palace, situated in the heart of Jaipur's old city. The palace is a blend of Rajput and Mughal architecture; it houses a 7-storied Chandra Mahal in the center. Also visit Hawa Mahal (Palace of Winds), Jaipur's most distinctive landmark. Built in 1799, this is an amazing example of Rajput architecture.\n\nOvernight: 3- or 4-star hotel in Jaipur\n\nDay 4: Jaipur – Delhi (B)After breakfast, travel back to your Delhi hotel or the airport.",
  "duration": {
    "fixedDurationInMinutes": 5760
  },
  "pointOfInterestLocations": [
    {
      "location": {
        "ref": "LOC-6eKJ+or5y8o99Qw0C8xWyJUIMZqLxZiFQx5hWjqMeXg="
      }
    }
  ]
},
```

Use the `unstructuredDescription` and `unstructuredItinerary` fields to create the section on your site that corresponds to the **What to expect** section on the Viator product display page. Note that the `unstructuredItinerary` field is not always populated – in that case, just use the `unstructuredDescription` field.

All products with an `"UNSTRUCTURED"` itinerary type are in the process of being updated to the appropriate structured type. Eventually, all products will support structured itinerary information.

## Protecting unique content

In order to prevent our unique content from being utilized by unauthorized third parties, we require that you design your site in such a way that this content will not be indexed by search engines.

The content that must be protected comprises:

- **Product reviews** – This includes all review text (from any provider) as obtained via the [/reviews/product](#operation/reviewsProduct) endpoint; and, that in the `reviews` element in the product content response. 
- **Viator unique content** – This includes all data in all elements within the `viatorUniqueContent` element in the product content response.

### Guidelines to prevent indexing of unique content

In order to properly protect reviews and other unique content, you must ensure that the protected content **never** appears directly in the source code of the loaded page. This includes both HTML and Javascript.

In order to do this correctly, the unique content must be loaded via a call to an **external** Javascript, and that Javascript must be blocked in [robots.txt](https://moz.com/learn/seo/robotstxt) so that search engines can not see or index it.

### How to check

A simple way to check that the unique content does not appear in the source code of the loaded page – and, therefore, cannot be indexed – is to copy a snippet of the unique content text that is displayed when you load the page normally in your browser. Approximately 10 words will suffice.

Then, access the source code of that page using the **View Source** feature in your browser. Use your browser's in-page search feature to search for the text snippet copied in the previous step. If the text is found anywhere in the source code of the page, then your implementation is **not** correctly protecting the content, as it will be able to be indexed by search enginges. 

### Example implementations

❌ **Unacceptable implementation**: pure HTML

Here the protected content appears directly in the HTML and can be indexed by search engines:

```html
<html>
  <head>
  </head>
  <body>
    <div>”I had a great time at this hotel”</div>
  </body>
</html>
```

❌ **Unacceptable implementation**: Javascript in the page source

Here, the protected content still appears in the page source, even though it is in the 'script' section, and will therefore be indexed by search engines:


```html
<html>
  <head>
  <script>
    var review_content = ”I had a great time at this hotel”;
    $(“review”).html(review_content);
  </script>
  </head>
  <body>
    <div id=”review”></div>
  </body>
</html>
```

✅ **Acceptable implementation:** protected content is loaded using an **external** Javascript and access to that endpoint is blocked using robots.txt:

```html
<html>
  <head>
    <script>
      var review_content = $.ajax(“https://api.hello.xyz/getReviewContentForHotel/123/”);
      $(“review”).html(review_content);
    </script>
  </head>
  <body>
    <div id=”review”></div>
  </body>
</html>
```

Robots.txt in the document root for `https://api.hello.xyz`:

```bash
User-Agent: *
Disallow: /getReviewContentForHotel
```

**Note**: The robots.txt file must be in the root directory for whichever domain or subdomain the call is being made to. Please review the [robots.txt guidelines](https://developers.google.com/search/docs/advanced/robots/create-robots-txt) to determine the correct syntax for your site.

## Review authenticity

### Viator performs checks on reviews

You can only submit a review or rating of an experience to Viator if you were the person who made the booking through Viator. Before publication, each review goes through an automated tracking system, which collects information for each of the following criteria: who, what, how, and when. 

If the system detects something that contradicts our publication criteria, the review is not published. When the system detects a problem with a review, it may be automatically rejected, sent to the reviewer for validation, or manually reviewed by our team of content specialists who work 24/7 to maintain the quality of the reviews on our site. In some cases, we will also send Viator customers an email asking them to validate their review before it is published. <br /><br />All Viator customers need to do is to click on the link provided in the email. 

After publication, our team checks each review reported to it as not meeting our publication criteria. Tripadvisor reviews that appear on the Viator site are subject to the same checks and moderation processes as set out above. It is not necessary to have booked an experience through Viator (or Tripadvisor) to submit a review of an experience to the Tripadvisor site.

# Booking concepts

## Working with age bands

### Why have age bands?

Tour and experience product suppliers can set different prices for (and impose different rules on) customers according to how old they are. 

For example, suppliers might choose to charge people 18 years and older ('adults') the full ticket price, while 'children' can book at a lower price. 

Or, the tour operator may only allow children to make a group booking for the tour so long as the group contains 'at least one adult'.

Viator provides six age-band categories that product suppliers can use to segregate travelers into age groups (the limits of which they also define) in order to set pricing and traveler-count participation rules for their product according to the age band categories.

The age-bands available for a particular product, such as *adult*, *child*, *infant*, etc., are returned by the [/products/{product-code}](#operation/products) service. Your customer should be able to select a different number of people from each available age-band during the price check and checkout process.

To learn more about how to implement age bands, see the following guide: [Implementing age bands & pax mix](https://partnerresources.viator.com/travel-commerce/merchant/agebands-pax-mix?source=specs)

### Age-band categories

The age bands supported by the Viator API are as follows:

| bandId | Description |
|------:|-------|
| `"ADULT"` | Adult |
| `"CHILD"` | Child |
| `"INFANT"` | Infant |
| `"YOUTH"` | Youth |
| `"SENIOR"` | Senior |
| `"TRAVELER`" | Catch-all age-band for unit-priced products |

Note that the `"TRAVELER"` is only used for bookings with [unit pricing](#section/Booking-concepts/Per-person-and-unit-pricing), in which case it will be the only age-band available.

The exact age range to which each category pertains is defined by the supplier, and the maximum and minimum ages that each age band describes for each product can be found in the product content response; e.g.:

```json
"ageBands": [
  {
      "ageBand": "INFANT",
      "startAge": 0,
      "endAge": 2,
      "minTravelersPerBooking": 0,
      "maxTravelersPerBooking": 15
  },
  {
      "ageBand": "CHILD",
      "startAge": 3,
      "endAge": 11,
      "minTravelersPerBooking": 0,
      "maxTravelersPerBooking": 15
  },
  {
      "ageBand": "ADULT",
      "startAge": 12,
      "endAge": 80,
      "minTravelersPerBooking": 1,
      "maxTravelersPerBooking": 15
  }
]

```

For this product, the age bands have been defined as follows:

| `ageBand` | `ageFrom` | `ageTo` |
|:--------:|:-------:|:-----:|
| ADULT | 13 | 64 |
| SENIOR | 65 | 99 |
| CHILD | 4 | 12 |


Product suppliers must define at least one age band for their tour, and there are no 'default' age ranges. Therefore, if the supplier has only specified a single 'adult' age band covering ages 18-99, it must be assumed that only people aged 18-99 are eligible to book the tour, essentially excluding children and centenarians in this case.

### When you will use age-bands

The age-band of a customer needs to be communicated via the API in the following situations:

1. When placing a booking-hold
  - you will need to supply the age-band of each of the travelers being booked for in the `paxMix` element in the request to [/bookings/hold](#operation/bookingsHold) or [/bookings/cart/hold](#operation/bookingsCartHold).
2. When making a booking 
  - As with the booking hold, age-bands must be supplied in the `paxMix` element 
  - If the supplier has specified `"AGEBAND"` as a booking question, you must additionally provide these details in the `bookingQuestionAnswers` array in the request to [/bookings/book](#operation/bookingBook) or [/bookings/cart/book](#operation/bookingsCartBook). Note that these details are verified by the booking server and the booking will be rejected if the details do not match. For more information about answering the `"AGEBAND"` booking question, see [Booking concepts – Booking questions](#section/Booking-concepts/Booking-questions).

## Cancellation policy

**Note**: This section applies to affiliate partners with API access level "Full Access + Booking" and merchant partners only.

As well as *making* bookings, affiliate and merchant partners are also able to *cancel* bookings through the Viator API using the [/bookings/cancel-reasons](#operation/bookingsCancelReasons), [/bookings/{booking-ref}/cancel-quote](#operation/bookingsCancelQuote) and [/bookings/{booking-ref}/cancel](#operation/bookingsCancel) endpoints. Items cancelled via the [/bookings/{booking-ref}/cancel](#operation/bookingsCancel) endpoint will be cancelled in full, and only one booking can be cancelled at a time.

For more information about how to perform cancellations using this API, see the [Cancellation API workflow](#section/Booking-concepts/Cancellation-API-workflow) section and our in-depth guide about cancellation policies and how to handle cancellations: [All you need to know about cancellation policies](https://partnerresources.viator.com/travel-commerce/merchant/cancellation-policies?source=specs).


### Cancellation policies

All products can be cancelled by the affiliate or merchant partner; however, the refund granted by the supplier depends on the cancellation policy for the product in question.

There are <u>three</u> cancellation policy categories, **standard**, **custom** and **all sales final**, indicated by the `type` element of the `cancellationPolicy` object in the responses from the [product content endpoints](#section/Key-concepts/Product-content-and-availability-endpoints).

**Note:** *These policies are those provided by Viator to you, the merchant partner. As the merchant of record, you can choose whether to extend these terms to your customers unchanged; or, set your own cancellation terms. For example, you might choose to make all products non-refundable; or, you might extend the full-refund cancellation window to 72 hours instead of 24 hours, and so forth. However, you will still be invoiced according to Viator's cancellation policies communicated via the API*

### Standard cancellation policy (`"STANDARD"`)
Products in this category can be cancelled up to 24 hours before the travel time (local supplier time) and a full refund will be granted. However, a <u>100% cancellation penalty</u> applies for cancellations submitted less than 24 hours before the start time. Most products (about 85%) fall into this category.

#### Example response snippet

- **Source endpoint**: [/products/{product-code}](#operation/products)
- **Product**: `5010SYDNEY`

```json
{
    "cancellationPolicy": {
        "type": "STANDARD",
        "description": "For a full refund, cancel at least 24 hours before the scheduled departure time.",
        "cancelIfBadWeather": false,
        "cancelIfInsufficientTravelers": false,
        "refundEligibility": [
            {
                "dayRangeMin": 1,
                "percentageRefundable": 100
            },
            {
                "dayRangeMin": 0,
                "dayRangeMax": 1,
                "percentageRefundable": 0
            }
        ]
    },
```

This product has the *standard* cancellation policy; i.e., when a booking is cancelled:

| Policy | `dayRangeMin` | `dayRangeMax` | Logic | `percentageRefundable` |
|--------|:-----------:|:-----------:|-------|:--------------------------:|
| *less than* <u>one</u> day (24 hours) before the start time | 0 | 1 | (product_start_time - cancellation_time) >= 0 days && (product_start_time - cancellation_time) < 1 days | 0 |
| *more than* <u>one</u> day (24 hours) before the start time | 1 | (absent) | (product_start_time - cancellation_time) >= 1 day | 100 |

### Custom cancellation policy (`"CUSTOM"`)
The refund amount for products in this category varies depending on how long before its start time the product is cancelled. Many products on a custom policy are multi-day tours, which require more sophisticated planning on the supplier’s end. Only a small number of products (around 5%) fall into this category.

 - **Note**: the `description` field contains a natural-language (and therefore language-localized) description of the policy described in the `refundEligibility` array. You can use this description for customer-messaging directly, or implement your own natural-language generation techique. With the cancellation policy encoded in a structured way, it would also be possible to display this information graphically.

#### Example response snippet

- **Source endpoint**: [/products/{product-code}](#operation/products)
- **Product**: `40944P355`

```json
"cancellationPolicy": {
        "type": "CUSTOM",
        "description": "If you cancel at least 30 day(s) in advance of the scheduled departure, there is no cancellation fee.<br>If you cancel between 10 and 29 day(s) in advance of the scheduled departure, there is a 50 percent cancellation fee.<br>If you cancel within 9 day(s) of the scheduled departure, there is a 100 percent cancellation fee.",
        "cancelIfBadWeather": false,
        "cancelIfInsufficientTravelers": false,
        "refundEligibility": [
          {
            "dayRangeMin": 10,
            "dayRangeMax": 30,
            "percentageRefundable": 50
          },
          {
            "dayRangeMin": 30,
            "percentageRefundable": 100
          },
          {
            "dayRangeMin": 0,
            "dayRangeMax": 10,
            "percentageRefundable": 0
          }   
        ]
    },
```

This product has a complex cancellation policy; where cancellations processed:

| Policy | `dayRangeMin` | `dayRangeMax` | Logic | `percentageRefundable` |
|--------|:-----------:|:-----------:|-------|:--------------------------:|
| <u>30</u> days or more before the start time | 30 | (absent) | (product_start_time - cancellation_time) >= 30 days | 100 |
| <u>10</u> days and *less than* <u>30</u> days (10 to 30 days) *before* the start time or more | 10 | 30 | (product_start_time - cancellation_time) >= 10 days && (product_start_time - cancellation_time) < 30 days | 50 |
| *less than* <u>10</u> days *before* the start time | 0 | 10 | (product_start_time - cancellation_time) < 10 days | 0 |

**Note:** When the `dateRangeMax` field is absent, this means infinity. Therefore, the second element in the `refundEligibility` array above indicates that the time period begins infinitely far in the past *until* 30 days prior to the tour or activity commencing.

### `3` – All sales final (100% cancellation penalty / no refund offered)

Products in this category cannot be cancelled or amended without incurring a 100% penalty; i.e., the refund amount will be zero. Around 10% of products fall into this category.

#### Example response snippet

- **Source endpoint**: [/products/{product-code}](#operation/products)
- **Product**: `100014P7`

```json
{
    "cancellationPolicy": {
        "type": "ALL_SALES_FINAL",
        "description": "All sales are final and incur 100% cancellation penalties",
        "cancelIfBadWeather": false,
        "cancelIfInsufficientTravelers": false,
        "refundEligibility": [
            {
                "dayRangeMin": 0,
                "percentageRefundable": 0
            }
        ]
    },
```

Products in this category can be cancelled, but no refund will be granted.

### startTimeStamp and endTimeStamp

Within the `cancellationPolicy` object in the response from [/bookings/book](#operation/bookingsBook) or [/bookings/cart/book](#operation/bookingsCartBook), the `refundEligibility.startTimestamp` and `refundEligibility.endTimestamp` fields contain time-stamps (UTC) that indicate the exact times between which the different cancellation refund rates apply.

**Note**: 
 * `refundEligibility.startTimestamp` will always be further in the past than `refundEligibility.endTimestamp`. 
 * Please use `startTimestamp` and `endTimestamp`, rather than `dayRangeMin` and `dayRangeMax`, to determine which cancellation policy is in effect.

**Example response snippet from [/bookings/book](#operation/bookingsBook) and [/bookings/cart/book](#operation/bookingsCartBook)**:

```json
"cancellationPolicy": {
  "type": "STANDARD",
  "description": "For a full refund, cancel at least 24 hours before the scheduled departure time.",
  "cancelIfBadWeather": false,
  "cancelIfInsufficientTravelers": false,
  "refundEligibility": [
    {
      "dayRangeMin": 1,
      "percentageRefundable": 100,
      "startTimestamp": "2020-08-25T00:36:49.69005Z",
      "endTimestamp": "2020-11-28T13:00:00Z"
    },
    {
      "dayRangeMin": 0,
      "dayRangeMax": 1,
      "percentageRefundable": 0,
      "startTimestamp": "2020-11-28T13:00:00Z",
      "endTimestamp": "2020-11-29T13:00:00Z"
    }
  ]
}
```

### Post-travel cancellations

Occasionally, customers seek a refund for a product **after** completing their travels.

The reason for this might be because they were unable to attend the tour due to the supplier having cancelled the tour due to bad weather or other reasons beyond the customer's control; or, the customer might have been extremely dissatisfied with the tour itself, felt that it was misrepresented in its advertising, or some other serious complaint.

When this occurs, you will need to [send a refund request by email to dpsupport](mailto:dpsupport@viator.com) and include both "CANCEL" and the booking reference number in the subject line.

For **all** post-travel cancellation requests, you will need to include a detailed description of the issue. 

Except in cases of known service interruptions (e.g., due to extreme weather events), we will first verify the issue and seek authorization from the product supplier. 

Once a decision regarding the refund has been made, we will notify your Customer Services Department with this information. You will then need to advise your customer directly and process the refund if granted.

### Partial refunds

While we recommend that merchant partners support the processing of partial refunds for their customers, it is ultimately up to the partner whether to implement this functionality. 

If you would prefer to only grant the full (100%) refund that is offered on most products so long as the cancellation is processed more than 24 hours prior to the product's start time, we recommend that you implement logic that checks whether a 100% refund is available for the product at the time the customer wishes to cancel their booking.

| **Type 1: Standard policy** (`cancellationPolicy.type` is `"STANDARD"`) |
|-------------------------------------------------------------|
| The 100% refund is available so long as the cancellation is performed more than 24 hours prior to the product start time |

| **Type 2: Custom policy** (`cancellationPolicy.type` is `"CUSTOM"`) |
|-----------------------------------------------------------|
| You will need to check whether any of the canellation policy objects in the `refundEligibility` array have: <ul><li>a `percentageRefundable` value that is non-zero, and</li><li>`dayRangeMin` and `dayRangeMax` describe an epoch that includes the present time</li></ul> |

| **Type 3: All sales final** (`cancellationPolicy.type` is `"ALL_SALES_FINAL"`)|
|-------------------------------------------------------------|
| No refunds are available (except in the case of manual confirmation products that are still in a 'pending' state and special exceptions for post-trip cancellations); therefore, under normal conditions, if you grant a refund to your customer for this kind of product, it will be solely at *your* expense (i.e., you will still be invoiced for the cost of the product by Viator). Therefore, we recommend that you do not allow refunds for products with this policy. |

## Per-person and unit pricing

**Note**: This section applies to affiliate partners with API access level "Full Access + Booking" and merchant partners only.

The products in our catalogue fall into two pricing categories: **per-person** and **unit** pricing.

A product's pricing category is given in the `pricingInfo.type` field of the product content response. Depending on whether the product has per-person or unit pricing, this value will be `"PER_PERSON"` or `"UNIT"`, respectively.

For more information, see this article: [Per-person and unit pricing](https://partnerresources.viator.com/travel-commerce/merchant/pricing/?source=specs#per-person-unit-pricing).

### Per-person pricing

If the pricing is *per-person*, then the total price of the booking will be directly proportional to the number of participants (passengers) of each age-band type that are being booked for the product; i.e., a direct multiple of the per-person price.

For example:

```json
"pricingInfo": {
   "type": "PER_PERSON",
   "ageBands": [
      {
        "ageBand": "CHILD",
        "startAge": 3,
        "endAge": 12,
        "minTravelersPerBooking": 0,
        "maxTravelersPerBooking": 6
      },
      {
        "ageBand": "ADULT",
        "startAge": 13,
        "endAge": 99,
        "minTravelersPerBooking": 2,
        "maxTravelersPerBooking": 6
      }
   ]
},
```

### Per-unit pricing

If the product has *unit* pricing, then the total price of the booking will depend on the number of units (groups) and types of unit that ideally accommodate the participant mix. Additionally, the `pricingInfo` object in the response will specify the type of unit in the `unitType` field; e.g., in this case, `"VEHICLE"`:

```json
"pricingInfo": {
  "type": "UNIT",
  "ageBands": [
    {
       "ageBand": "TRAVELER",
       "startAge": 0,
       "endAge": 99,
       "minTravelersPerBooking": 1,
       "maxTravelersPerBooking": 8
    }
  ],
  "unitType": "VEHICLE"
}
``` 

The `unitType` will be one of:


| `unitType`  | Example product | Meaning |
|-------------|-----------------|---------|
| `"GROUP"` | [10847P42](https://www.viator.com/tours/Berlin/In-Search-of-Jewish-Berlin-3-hour-Private-History-Tour-with-a-Scholar-Guide/d488-10847P42) | **Per-group** pricing – the unit price is calculated according to the number of groups the specified passenger mix will fit into rather than the exact number of participants. `minTravelersPerBooking` and `maxTravelersPerBooking` must be considered as these fields relate to the available group sizes. |
| `"ROOM"` | [16621P2](https://www.viator.com/tours/Maharashtra/Stay-package-with-amusement-park-for-2pax-for-2-nights/d25170-16621P2) | **Per-room** pricing relates the room price, which depends on the number of participants making the booking. |
| `"PACKAGE"` | [186385P1](https://www.viator.com/tours/Slovenia/VIP-wellness-to-rent/d734-186385P1) | **Per-package** pricing refers to products that are sold as part of a package; for example a family package stipulating a passenger mix of two adults and two children. |
| `"VEHICLE"` | [10175P10](https://www.viator.com/tours/Cannes/Private-Departure-Transfer-from-Cannes-to-Nice-Airport/d786-10175P10) | **Per-vehicle** pricing is calculated according to the number of vehicles required for the specified passenger mix rather than the exact number of participants. `minTravelersPerBooking` and `maxTravelersPerBooking` must be considered as these fields relate to the occupancy limitations for each vehicle. The minimum price will depend on the rate for a single vehicle. |
| `"BIKE"` | [153074P3](https://www.viator.com/tours/Adelaide/Adelaide-90-Minute-Pedicab-Tour-Scenic-Green-and-River-Experience/d376-16810P4) | **Per-bike** pricing – identical to "per vehicle", but refers specifically to vehicles that are bikes. |
| `"BOAT"` | [35157P2](https://www.viator.com/tours/British-Virgin-Islands/Private-Sunset-Sail/d809-35157P2) | **Per-boat** pricing – identical to "per vehicle", but refers specifically to vehicles that are boats. |
| `"AIRCRAFT"` | [14876P5](https://www.viator.com/tours/Niagara-Falls-and-Around/Air-Taxi-Tour-from-Niagara-to-Toronto-including-Ground-Transport-from-Niagara-Hotels/d773-14876P5) | **Per-aircraft** pricing – identical to "per vehicle", but refers specifically to vehicles that are aircraft. |  


## Low-margin products

**Note**: This section applies to affiliate partners with API access level "Full Access + Booking" and merchant partners only.

When setting the price at which you sell products on your site, it’s important to remember that the `recommendedRetailPrice` is just the price at which the product is currently advertised on the Viator site and is only a recommendation. 

However, the `recommendedRetailPrice` may be **less than** the `partnerTotalPrice` (i.e., the amount you will be invoiced for the sale).

If you sell the product for less than the `partnerTotalPrice`, <u>you will make a loss on that sale</u>.

Therefore, to ensure that you sell the product at a price which guarantees that you receive at least as much as you will be invoiced for, as well as any extra profit margin that you desire to generate, we recommend you include logic to check that these requirements are satisfied by comparing `recommendedRetailPrice` and `partnerTotalPrice` and adjusting the price at which you advertise and sell the product accordingly.

**For example:** If the `partnerTotalPrice` for a product is $100, the `recommendedRetailPrice` is $101, and you require a minimum margin of 5%, you should adjust the price at which you advertise the product to $105.

While we do recommend that you set your prices according to the value of `recommendedRetailPrice`, it is ultimately up to you what price you set for the product, bearing in mind that the amount Viator will invoice you for the sale will be the value of `partnerTotalPrice`.

For more information, see this article about how to deal with [Low-margin products](https://partnerresources.viator.com/travel-commerce/merchant/pricing/?source=specs#low-margin-products).

## Supplier communications

**Note**: This section applies to affiliate partners with API access level "Full Access + Booking" and merchant partners only.

### How can suppliers communicate with end customers?

Suppliers occasionally need to reach out to customers for a variety of reasons, such as:

* Requesting pickup locations, flight details or passenger weight information
* Providing weather alerts, sold-out notifications or general messaging

To allow suppliers to contact customers directly, Viator provides **Closed-Loop Communication (CLC)**.

### How to set up CLC for a booking

The recipient(s) of suppliers' CLC messages is set for each booking at the time of booking by supplying the customer’s email address (`email`) as well as their phone number (`phone`) in the `communication` object in the request sent to the [/booking/book](#operation/bookingsBook) or [/bookings/cart/book](#operation/bookingsCartBook) endpoints when making a booking.

This will direct CLC messages sent by suppliers directly to that customer's email; no action from your support team will be necessary for suppliers to communicate with customers.

Partners choosing this option should mention to their customers that they are purchasing a product from a third-party supplier, and that they may, therefore, receive communications regarding the purchase directly from that supplier.

#### Note:

* To have a CC of each message a supplier sends to their customer sent to *your* (the partner's) customer support email address (in case further assistance is required) you must include your customer support email address in the `email` field, after the customer's email and separated from that address with a comma.


#### Example request body snippet to enable direct CLC
```json
{
    ...
    "communication": {
      "email": "john.smith@tripadvisor.com",
      "phone": "+61 4121121121"
}
```

#### Example request body snippet to enable direct CLC with a CC of each message sent to your customer support
```json
{
    ...
    "communication": {
      "email": "john.smith@tripadvisor.com,customersupport@bookatrip4me.com",
      "phone": "+61 4121121121"
}
```


### Supplier communications without CLC

To have CLCs from the supplier sent <u>only</u> to your (the merchant's) customer support team, supply the email address of your customer support function in the `email` field of the `communication` object in the request to the [/bookings/book](#operation/bookingsBook) or [/bookings/cart/book](#operation/bookingsCartBook) endpoints when making a booking.

**Note:** Utilizing this option requires you, the merchant, to manage the final loop of communication with the end customer to ensure that their tour/activity can be fulfilled successfully.

#### Example request body snippet to disable CLC
```json
{
    ...
    "communication": {
      "email": "customersupport@bookatrip4me.com",
      "phone": "+61 4121121121"
}
```

### Default behavior

If an email address is not supplied in the communications object, the default behavior will be to use the partner's customer support email address for correspondence regarding this booking. Please contact your account manager to set or change the customer support email address for your organization. 

#### Example request body snippet that would trigger the default behavior

```json
{
    ...
    "communication": {
      "phone": "+61 4121121121"
}
```

### More information

For additional information about all communications sent by Viator, including CLC, see: [All you need to know about cancellation policies – Managing Communications](https://partnerresources.viator.com/travel-commerce/merchant/cancellation-policies?source=specs#managing-communications).

## Booking questions

**Note**: This section applies to affiliate partners with API access level "Full Access + Booking" and merchant partners only.

The booking-questions functionality of this API allows vital information specified by the supplier about the individual travelers or the group as a whole to be sent to the supplier as part of the request when making a booking using the [/bookings/book](#operation/bookingsBook) or [/bookings/cart/book](#operation/bookingsCartBook) endpoints.

The booking questions available for a product are specified in the `bookingQuestions` array in the response from any of the [product content endpoints](#section/Key-concepts/Product-content-and-availability-endpoints) for that product. For example, for the product [10212P2 (Taste of Miami Helicopter Tour)](https://www.viator.com/tours/Miami/Taste-of-Miami-Helicopter-Tour/d662-10212P2), the `bookingQuestions` array is as follows:

```json
"bookingQuestions": [
    "FULL_NAMES_LAST",
    "SPECIAL_REQUIREMENTS",
    "FULL_NAMES_FIRST",
    "WEIGHT",
    "AGEBAND"
],
```
Each key string (`"FULL_NAMES_LAST"`, etc.) identifies a booking question, details about which can be found in the response from the [/products/booking-questions](#operation/productsBookingQuestions) endpoint.

Relevant booking question details in example response snippet from [/products/booking-questions](#operation/productsBookingQuestions):

```json
"bookingQuestions": [
    {
        "legacyBookingQuestionId": 23,
        "id": "WEIGHT",
        "type": "NUMBER_AND_UNIT",
        "group": "PER_TRAVELER",
        "label": "Traveler weight in pounds or kilograms (required for safety reasons)",
        "hint": "E.g. 130lbs, 60kg",
        "units": [
            "kg",
            "lbs"
        ],
        "required": "MANDATORY"
    },
    {
        "legacyBookingQuestionId": 24,
        "id": "FULL_NAMES_FIRST",
        "type": "STRING",
        "group": "PER_TRAVELER",
        "label": "First name",
        "required": "MANDATORY"
    },
    {
        "legacyBookingQuestionId": 25,
        "id": "FULL_NAMES_LAST",
        "type": "STRING",
        "group": "PER_TRAVELER",
        "label": "Last name",
        "required": "MANDATORY"
    },
    {
        "legacyBookingQuestionId": 30,
        "id": "AGEBAND",
        "type": "STRING",
        "group": "PER_TRAVELER",
        "label": "Age band",
        "allowedAnswers": [
            "ADULT",
            "SENIOR",
            "YOUTH",
            "CHILD",
            "INFANT",
            "TRAVELER"
        ],
        "required": "MANDATORY"
    },
    {
        "legacyBookingQuestionId": 27,
        "id": "SPECIAL_REQUIREMENTS",
        "type": "STRING",
        "group": "PER_BOOKING",
        "label": "Special requirements",
        "required": "OPTIONAL"
        },
    ...
]
```

The `required` field indicates whether an answer to the booking question must be provided in the booking request. It is necessary to provide an answer to all specified booking questions for which `required` is `MANDATORY`. 

Additionally, the `group` field indicates whether an answer to the booking question must be answered for each traveler (`"PER_TRAVELER"`) or for the booked group as a whole (`"PER_BOOKING"`).

In this case:

| Booking question id | required | group |
|---------------------|----------|-------|
| `"WEIGHT"` | `"MANDATORY"` | `"PER_TRAVELER"` |
| `"FULL_NAMES_FIRST"` | `"MANDATORY"` | `"PER_TRAVELER"` |
| `"FULL_NAMES_LAST"` | `"MANDATORY"` | `"PER_TRAVELER"` |
| `"AGEBAND"` | `"MANDATORY"` | `"PER_TRAVELER"` |
| `"SPECIAL_REQUIREMENTS"` | `"OPTIONAL"` | `"PER_BOOKING"` |

Therefore, to book this product, you must provide an answer to the `"WEIGHT"`, `"FULL_NAMES_FIRST"`,`"FULL_NAMES_LAST"` and `"AGEBAND"` questions for each traveler, and, optionally (if specified by the user at the time of booking) `"SPECIAL_REQUIREMENTS"` for the booked group.

Answers to the booking questions are sent in the `bookingQuestionAnswers[]` array in the request to [/bookings/book](#operation/bookingsBook) or [/bookings/cart/book](#operation/bookingsCartBook). The following example shows a valid and complete set of booking-question answers for this product.

| Traveler number | First name | Last name | age band |
|-----------------|------------|-----------|----------|
| 1 | John | Smith | ADULT |
| 2 | Mary | Jones | ADULT | 

```json
"bookingQuestionAnswers": [  
    {
      "question": "AGEBAND",
      "answer": "ADULT",
      "travelerNum": 1
    },
    {
      "question": "FULL_NAMES_LAST",
      "answer": "Smith",
      "travelerNum": 1
    },
    {
      "question": "FULL_NAMES_FIRST",
      "answer": "John",
      "travelerNum": 1
    },
    {
      "question": "AGEBAND",
      "answer": "ADULT",
      "travelerNum": 2
    },
    {
      "question": "FULL_NAMES_LAST",
      "answer": "Jones",
      "travelerNum": 2
    },
    {
      "question": "FULL_NAMES_FIRST",
      "answer": "Mary",
      "travelerNum": 2
    },
    {
      "question": "SPECIAL_REQUIREMENTS",
      "answer": "NO"
    }
]
```

### When to use `travelerNum`

Please note that `travelerNum` indicates which traveler the answer pertains to. All `PER_TRAVELER` questions must be answered for all travelers in the booking. `travelerNum` **must** be omitted for `PER_BOOKING` booking questions.

### Booking questions with units

Some booking questions require you to specify the unit type when providing an answer to the questions.

**Example: 'HEIGHT' booking question**


Definition of question from [/products/booking-questions](#operation/productsBookingQuestions):
```json
{
    "legacyBookingQuestionId": 2,
    "id": "HEIGHT",
    "type": "NUMBER_AND_UNIT",
    "group": "PER_TRAVELER",
    "label": "Traveler height in feet or centimeters (required for safety reasons)",
    "hint": "E.g. 5'2\", 158cm",
    "units": [
        "cm",
        "ft"
    ],
    "required": "MANDATORY"
},
```

A valid answer to this booking question for a traveler who is 193 centimetres tall is as follows:

```json
"bookingQuestionAnswers": [  
    {
      "question": "HEIGHT",
      "answer": "193",
      "unit": "cm",
      "travelerNum": 1
    }
]
```

**Example: 'WEIGHT' booking question**

Definition of question from [/products/booking-questions](#operation/productsBookingQuestions):

```json
{
  "legacyBookingQuestionId": 23,
  "id": "WEIGHT",
  "type": "NUMBER_AND_UNIT",
  "group": "PER_TRAVELER",
  "label": "Traveler weight in pounds or kilograms (required for safety reasons)",
  "units": [
      "kg",
      "lbs"
  ],
  "required": "MANDATORY",
  "maxLength": 50
},
```

A valid answer to this booking question for a traveler who weighs 69 kilograms would be as follows:

```json
"bookingQuestionAnswers": [  
    {
      "question": "WEIGHT",
      "answer": "69",
      "unit": "kg",
      "travelerNum": 1
    }
]
```


### Booking questions with allowed answers

Some booking questions must be answered in a specific way. These questions include an `allowedAnswers` array containing the set of valid answers to the question.

Example booking question with allowed answers:

```json
{
    "legacyBookingQuestionId": 31,
    "id": "TRANSFER_ARRIVAL_MODE",
    "type": "STRING",
    "group": "PER_BOOKING",
    "label": "Arrival mode",
    "allowedAnswers": [
        "AIR",
        "RAIL",
        "SEA",
        "OTHER"
    ],
    "required": "MANDATORY"
}
```

A valid answer to this booking question would be:

```json
{
    "question": "TRANSFER_ARRIVAL_MODE",
    "answer": "AIR"
},
```

Note:

- Not all allowed answers are applicable to all products, so you should not always display all 4 arrival/departure modes for all products. You should validate the arrival/departure modes based on the presence of questions applicable to a specific arrival/departure mode for each product.
- These questions will help you identify arrival modes available for a product:
  + `"AIR"`: `"TRANSFER_AIR_ARRIVAL_AIRLINE"`, `"TRANSFER_AIR_ARRIVAL_FLIGHT_NO"`
  + `"SEA"`: `"TRANSFER_PORT_ARRIVAL_TIME"` (`"TRANSFER_PORT_CRUISE_SHIP"` applies also to departure mode)
  + `"RAIL"`: `"TRANSFER_RAIL_ARRIVAL_LINE"`, `"TRANSFER_RAIL_ARRIVAL_STATION"`
- If any of these questions is returned (even just one), the relevant option for arrival mode applies. Once an arrival mode is selected, travellers are required to answer all questions related to the selected arrival mode that are returned for the product in the bookingQuestions array (see the table below).
- The same applies in case of departure modes, you need to look for these questions specific to each departure mode:
  + `"AIR"`: `"TRANSFER_AIR_DEPARTURE_AIRLINE"`, `"TRANSFER_AIR_DEPARTURE_FLIGHT_NO"`
  + `"SEA"`: `"TRANSFER_PORT_DEPARTURE_TIME"` (`"TRANSFER_PORT_CRUISE_SHIP"` applies also to arrival mode)
  + `"RAIL"`: `"TRANSFER_RAIL_DEPARTURE_LINE"`, `"TRANSFER_RAIL_DEPARTURE_STATION"`
- If these questions are not returned, the departure mode doesn't apply. Once a departure mode is selected, travellers are required to answer all questions related to the selected departure mode that are returned for the product in the bookingQuestions array (see the table below).

We recommend partners to translate these answers to natural language on their platforms, see recommendation below:

- `"AIR"` - airport
- `"RAIL"` - train station
- `"SEA"` - port
- `"OTHER"` - hotel / specific address

<a id="conditional-booking-questions"></a>
### Conditional booking questions

There are some booking questions that may or may not have to be answered, depending on the presence of – or answer to – another booking question. These questions are 'conditional', as indicated by the `required` field containing `"CONDITIONAL"`; e.g.:

```json
{
    "legacyBookingQuestionId": 7,
    "id": "TRANSFER_AIR_ARRIVAL_AIRLINE",
    "type": "STRING",
    "group": "PER_BOOKING",
    "label": "Name of arrival airline",
    "hint": "E.g. United Airlines",
    "required": "CONDITIONAL",
    "maxLength": 255
},
```

So, when is an answer to a `"CONDITIONAL"` booking question required?

At present, the logic cannot be inferred from the response from the [/products/booking-questions](#operation/productsBookingQuestions) endpoint, but it can be explained here. You will need to hard-code this logic into your implementation in order to correctly present the required booking questions to the user.

The logic runs as follows:

| For this booking question | if the user's answer is | these questions must also be answered |
|--------------------|----------------|-------------------------------|
| `"TRANSFER_ARRIVAL_MODE"` | `"AIR"` | `"TRANSFER_AIR_ARRIVAL_AIRLINE"`<br />`"TRANSFER_AIR_ARRIVAL_FLIGHT_NO"`<br />`"TRANSFER_ARRIVAL_TIME"`<br />`"TRANSFER_ARRIVAL_DROP_OFF"` (see condition 1)<br />`"PICKUP_POINT"` (see condition 1) |
| `"TRANSFER_ARRIVAL_MODE"` | `"RAIL"` | `"TRANSFER_RAIL_ARRIVAL_LINE"`<br />`"TRANSFER_RAIL_ARRIVAL_STATION"`<br />`"TRANSFER_ARRIVAL_TIME"`<br />`"TRANSFER_ARRIVAL_DROP_OFF"` |
| `"TRANSFER_ARRIVAL_MODE"` | `"SEA"` | `"TRANSFER_PORT_ARRIVAL_TIME"`<br />`"TRANSFER_PORT_CRUISE_SHIP"`<br />`"TRANSFER_ARRIVAL_DROP_OFF"` (see condition 2) <br />`"PICKUP_POINT"` (see condition 2)|
| `"TRANSFER_ARRIVAL_MODE"` | `"OTHER"` | `"PICKUP_POINT"` (see condition 3) |
| `"TRANSFER_DEPARTURE_MODE"` | `"AIR"` | `"TRANSFER_AIR_DEPARTURE_AIRLINE"`<br />`"TRANSFER_AIR_DEPARTURE_FLIGHT_NO"`<br />`"TRANSFER_DEPARTURE_DATE"`<br />`"TRANSFER_DEPARTURE_TIME"`<br />`"TRANSFER_DEPARTURE_PICKUP"` |
| `"TRANSFER_DEPARTURE_MODE"` | `"RAIL"` | `"TRANSFER_RAIL_DEPARTURE_LINE"`<br />`"TRANSFER_RAIL_DEPARTURE_STATION"`<br />`"TRANSFER_DEPARTURE_DATE"`<br />`"TRANSFER_DEPARTURE_TIME"`<br />`"TRANSFER_DEPARTURE_PICKUP"` |
| `"TRANSFER_DEPARTURE_MODE"` | `"SEA"` | `"TRANSFER_PORT_CRUISE_SHIP"`<br />`"TRANSFER_DEPARTURE_DATE"`<br />`"TRANSFER_PORT_DEPARTURE_TIME"`<br />`"TRANSFER_DEPARTURE_PICKUP"`|
| `"TRANSFER_DEPARTURE_MODE"` | `"OTHER"` | n/a (see condition 4) |

**Conditions**:

1. Rule applies only if `logistics.travelerPickup.locations[]` includes an item with `pickupType`: `"AIRPORT"`; **or**, if `logistics.travelerPickup.allowCustomTravelerPickup` is **true**. `"PICKUP_POINT"` answer must be a location for which `pickupType` is `"AIRPORT"` if answer to `"TRANSFER_ARRIVAL_MODE"` is `"AIR"`.
2. Rule applies only if `logistics.travelerPickup.locations[]` includes an item with `pickupType`: `"PORT"`; **or**, if `logistics.travelerPickup.allowCustomTravelerPickup` is **true**. `"PICKUP_POINT"` answer must be a location for which `pickupType` is `"PORT"` if answer to `"TRANSFER_ARRIVAL_MODE"` is `"SEA"`.
3. Rule applies only if `logistics.travelerPickup.locations[]` includes an item with `pickupType`: `"HOTEL"` or `pickupType`: `"LOCATION"` or `pickupType`: `"OTHER"`; **or**, if `logistics.travelerPickup.allowCustomTravelerPickup` is **true**.
4. This question may only be answered `"OTHER"` if `"OTHER"` is also an available option for the `"TRANSFER_ARRIVAL_MODE"` booking question.

**Extra notes**:

- Not all allowed answers are applicable to all products, so you don’t have to always display all 4 arrival/departure modes. For each prodyct, you must validate if arrival/departure modes apply  by checking if questions applicable to a specific arrival/departure are present. Read more about this validation here: [Booking questions with allowed answers](#section/Booking-concepts/Booking-questions).
- All `"CONDITIONAL"` booking questions that depend on the answer given to either `"TRANSFER_ARRIVAL_MODE"` or `"TRANSFER_DEPARTURE_MODE"` (i.e., those questions in the right-hand column in the table above) should be considered `"MANDATORY"` if they are stipulated in the `"bookingQuestions"` array of the product content response, and the respective transfer mode question **is not** stipulated. That is to say, for example, if `"TRANSFER_AIR_ARRIVAL_AIRLINE"` is present, but `"TRANSFER_ARRIVAL_MODE"` is absent from `"bookingQuestions"`, then `"TRANSFER_AIR_ARRIVAL_AIRLINE"` should be considered `"MANDATORY"`.
- The `"TRANSFER_PORT_CRUISE_SHIP"` question is required to be answered when the customer's response to either `"TRANSFER_ARRIVAL_MODE"` or `"TRANSFER_DEPARTURE_MODE"` is `"SEA"`; however, this question must only be answered **once** per booking. I.e., the answer for `"TRANSFER_PORT_CRUISE_SHIP"` pertains to both questions. There is no provision for the customer to specify different cruise ships for arrival and departure.
- Please note that the inclusion of the `"TRANSFER_ARRIVAL_MODE"`, `"TRANSFER_DEPARTURE_MODE"` or their corollary conditional booking questions **does not necessarily imply that pickup is offered** for the product or product option being booked. It may be that these relate to another aspect of the service being offered; for example, an airport greeting product. When returned for a product, these questions must be answered.
- The `"TRANSFER_ARRIVAL_DROP_OFF"` and `"TRANSFER_DEPARTURE_PICKUP"` questions are related to locations (arrival drop off and departure pickup) however there are no specific location references or conditions that apply to these questions (see the table). Therefore, customers should be provided with a freetext input field for these questions and the answers must include the FREETEXT designation if the customer answered freely, via text.
- Whether or not pickup is available should be determined at the product level by the value of `logistics.travelerPickup.pickupOptionType` being either `"PICKUP_EVERYONE"` or `"PICKUP_AND_MEET_AT_START_POINT"` and not `"MEET_EVERYONE_AT_START_POINT"`; or, the presence of the phrase `"pickup included"` in the `productOptions[].description` field for the product option.
- Pickup must be validated on the product option level. It’s possible that the product has multiple product options with a different setup for each one - i.e. one product option offers pickup, another product option requires to meet at the meeting point. The correct validation must be applied as described here: [How to determine if a product option supports pickup.](#section/Booking-concepts/Booking-questions)
- `logistics.travelerPickup.pickupOptionType` in the product content response could return `"PICKUP_AND_MEET_AT_START_POINT"` for products that don't have product options. In such cases travelers should be allowed to either select a pickup location, or decide to meet at the meeting point.
- Pickup locations shouldn't be displayed at checkout for product options without pickup (this includes the option to contact the supplier later). Please refer to the 'Pickup point question' section below for further details on how to handle pickups.

### Pickup point question

The booking question that requests the location for pickup is as follows:

```json
{
    "legacyBookingQuestionId": 6,
    "id": "PICKUP_POINT",
    "type": "LOCATION_REF_OR_FREE_TEXT",
    "group": "PER_BOOKING",
    "label": "Hotel pickup",
    "hint": "E.g. 1234 Cedar Way, Brooklyn NY 00123",
    "units": [
        "LOCATION_REFERENCE",
        "FREETEXT"
    ],
    "required": "CONDITIONAL",
    "maxLength": 1000
}
```

As you can see, this question can be answered using a location reference or 'freetext' (i.e., a written address in this context). Whether freetext is allowed for this answer depends on the value of `logistics.travelerPickup.allowCustomTravelerPickup` in the response from any of the [product content endpoints](#section/Key-concepts/Product-content-and-availability-endpoints). If `true`, freetext is allowed. Otherwise, a location reference – in particular, one of the location references included in the `logistics.travelerPickup.locations[]` array – must be supplied.

Example `"FREETEXT"` answer:

```json
"bookingQuestionAnswers": [  
    {
      "question": "PICKUP_POINT",
      "answer": "1234 Cedar Way, Brooklyn NY 00123",
      "unit": "FREETEXT"
    }
]
```

Example `"LOCATION_REFERENCE"` answer:

```json
"bookingQuestionAnswers": [  
    {
      "question": "PICKUP_POINT",
      "answer": "LOC-6cb31b00-1fb4-4218-9b50-63f66531d735",
      "unit": "LOCATION_REFERENCE"
    }
]
```

#### Special pickup-point location references

The `logistics.travelerPickup.locations[]` array in the response from the product content endpoints contains the location references for all available pickup locations for a product.

As well as standard location reference codes; e.g., "LOC-6cb31b00-1fb4-4218-9b50-63f66531d735", there are two special codes that specify **instructions** rather than locations. 

These are:

- `"MEET_AT_DEPARTURE_POINT"`
- `"CONTACT_SUPPLIER_LATER"`

When selecting available pickup points, our suppliers also have the option of specifying one or both of these pseudo-locations. These instruct the customer to either meet at one of the locations specified in `logistics.start[]`, or to contact the supplier later to arrange a pickup point, respectively.

When building a list of available pickup locations for the customer to select at the time of booking, the descriptive text for these locations can be used. This is available from the [/locations/bulk](#operation/locationsBulk) endpoint in the `name` field, as follows:

```json
{
    "locations": [
        {
            "provider": "TRIPADVISOR",
            "reference": "CONTACT_SUPPLIER_LATER",
            "name": "I will contact the supplier later"
        },
        {
            "provider": "TRIPADVISOR",
            "reference": "MEET_AT_DEPARTURE_POINT",
            "name": "I will meet at the departure point"
        }
    ]
}
```

Or, you can provide a selection button in your UI, as we have done on the [viator.com](https://viator.com) site:

<figure>
    <img src="img/pick-up-point.png" alt="I will select my pickup location later button"/>
    <figcaption>"I will select my pickup location later" example from viator.com</figcaption>
</figure>

This button appears when the `"CONTACT_SUPPLIER_LATER"` location reference is included in the `logistics.travelerPickup.locations[]` array.

<a id="product-option-pickup"></a>
#### How to determine if a product option supports pickup

When the value of `logistics.travelerPickup.pickupOptionType` in the product content response is `"PICKUP_AND_MEET_AT_START_POINT"`, it means that the product includes both 'hotel pickup' and 'meet at the departure point' variants in its product options; e.g., one product option may be for hotel pickup while another is for meeting at the start/departure point.

To determine which product options offer what, it is necessary to inspect each product option's details in the `productOptions[]` array in the product content response.

If pickup is included for a product option, the phrase `Pickup included` will be present in the `productOptions[].description` field, as well as any other comments provided by the supplier. For example, the following two product options from product [8374P24](https://www.viator.com/tours/Bangkok/Train-Market-and-Damnoensaduak-Floating-Market-with-small-group/d343-8374P24) both offer pickup:

```json
"productOptions": [
  {
      "productOptionCode": "TG5",
      "description": "Private tour: Private tour only your group<br/>Pickup included",
      "title": "Private tour",
      "languageGuides": [
          {
              "type": "GUIDE",
              "language": "en",
              "legacyGuide": "en/SERVICE_GUIDE"
          }
      ]
  },
  {
      "productOptionCode": "TG4",
      "description": "Pickup included",
      "title": "Hotel pick up included",
      "languageGuides": [
          {
              "type": "GUIDE",
              "language": "en",
              "legacyGuide": "en/SERVICE_GUIDE"
          }
      ]
  },
  ...
]
```

When booking a **product option with pickup included**, such as this, you must collect a pickup point from the user that corresponds to one of the entries in the `logistics.travelerPickup.locations[]` array in the product content response.

All booking questions related to arrival/departure must be displayed as normal to allow customers to select the desired arrival/departure mode and provide all relevant information to the supplier before travel.

All answers provided by the customer must be captured and submitted in the booking request following the logic for conditional booking questions from the [table in the API documentation](#section/Booking-concepts/Booking-questions).

If the `productOptions[].description` field **does not** contain the phrase `Pickup included`, this indicates that this product option does not include pickup and should be considered to follow a `"MEET_AT_DEPARTURE_POINT"` arrangement. 

For example, the following product option (also from product [8374P24](https://www.viator.com/tours/Bangkok/Train-Market-and-Damnoensaduak-Floating-Market-with-small-group/d343-8374P24)) requires meeting at the departure point and does not include pickup:

```json
"productOptions": [
  {
      "productOptionCode": "TG3",
      "description": "Meeting point: Meet the group at River City Bangkok , drop off will be MBK Mall. Time slot 9.00 am.<br/>Starting point:<br/>River City Bangkok, 23 Soi Charoen Krung 24, Khwaeng Talat Noi, Khet Samphanthawong, Krung Thep Maha Nakhon 10100, Thailand",
      "title": "River City Bangkok",
      "languageGuides": [
          {
              "type": "GUIDE",
              "language": "en",
              "legacyGuide": "en/SERVICE_GUIDE"
          }
      ]
  },
  ...

```

In case of product options without pickup, you shouldn't ask arrival or departure-related questions at checkout (but you will still need to answer the questions returned in the API using values hardcoded into your implementation). If you wish, you can display at checkout the meeting point location(s) for informational purposes (not collecting answers) but not the pickup locations and no questions related to arrival/departure should be displayed in that case.

The option to contact the supplier later (`"CONTACT_SUPPLIER_LATER"`) doesn't apply to this scenario either and should not be present as it applies only to product options with pickup.

In the answer to the `"PICKUP_POINT"` question, you will need to send the location reference `"MEET_AT_DEPARTURE_POINT"` (returned under `travelerPickup.locations`). In case the product returns the `"TRANSFER_ARRIVAL_MODE"` or `"TRANSFER_DEPARTURE_MODE"` questions, these must be answered with `"OTHER"`. Product examples for testing: [9025P51](https://www.viator.com/tours/Belize-City/Private-Cave-Tubing-and-Zipline-Adventure-from-Belize-City/d5094-9025P51), [62450P1](https://www.viator.com/tours/Curacao/Guided-paddleboarding-SUP-mangrove-ECO-tour-for-beginners/d725-62450P1).

**When other product options support transfer pickup**: 

While you might be booking a product option that **does not** support pickup, if the overall product itself supports, for example, pickup from an airport, in one of its *other* product options, it will contain the `"TRANSFER_ARRIVAL_MODE"` booking question in the `bookingQuestions[]` array in the product content response. 

This means that this booking question, because it is `"MANDATORY"`, **must be answered** in order to make a valid booking, even though such information would be irrelevant in this context.

Transfer arrival mode question details from [/products/booking-questions](#operation/productsBookingQuestions):

```json
{
    "legacyBookingQuestionId": 31,
    "id": "TRANSFER_ARRIVAL_MODE",
    "type": "STRING",
    "group": "PER_BOOKING",
    "label": "Arrival mode",
    "allowedAnswers": [
        "AIR",
        "RAIL",
        "SEA",
        "OTHER"
    ],
    "required": "MANDATORY"
}
```

As you can see, one of the allowed answers to this question is `"OTHER"`.

Therefore, in the case that you must answer this booking question because it is stipulated at the product level, but it does not pertain to the product option being booked, **please do not prompt the user to provide an answer to this question**, rather, have your internal logic send the value `"OTHER"` as the answer; i.e.:

  ```json
"bookingQuestionAnswers": [  
    {
      "question": "TRANSFER_ARRIVAL_MODE",
      "answer": "OTHER"
    },
    ...
]
```

The same applies for the `"TRANSFER_DEPARTURE_MODE"` booking question, as it is also mandatory and can be validly answered as `"OTHER"`. 

The only `"CONDITIONAL"` booking question that must be answered for a product option without pickup (in addition to `"MANDATORY"` questions) is `"PICKUP_POINT"` (answer: `"MEET_AT_DEPARTURE_POINT"`)

**Examples of booking requests**

Product: 9025P51

Product option details returned in the product content response:

  ```json
"productOptions": [
  {
    "productOptionCode": "TG1",
    "description": "share Group",
    "title": "Share Group Tour",
    "languageGuides": [
      {
      "type": "GUIDE",
      "language": "en",
      "legacyGuide": "en/SERVICE_GUIDE"
      },
      {
      "type": "GUIDE",
      "language": "es",
      "legacyGuide": "es/SERVICE_GUIDE"
      }
    ]
  },
  {
    "productOptionCode": "TG2",
    "description": "From 2 to 25 people traveling together on a private tour <br/>Pickup included",
    "title": "Private Tour",
    "languageGuides": [
      {
        "type": "GUIDE",
        "language": "en",
        "legacyGuide": "en/SERVICE_GUIDE"
      },
      {
        "type": "GUIDE",
        "language": "es",
        "legacyGuide": "es/SERVICE_GUIDE"
      }
    ]
  }
],
```

Example booking request for product option with pickup (TG2):

  ```json
{
  "productCode": "9025P51",
  "productOptionCode": "TG2",
  "startTime": "08:00",
  "currency": "USD",
  "travelDate": "2024-11-27",
  "paxMix": [
    {
      "ageBand": "ADULT",
      "numberOfTravelers": 2
    }
  ],
  "partnerBookingRef": "test123456",
  "languageGuide": {
    "type": "GUIDE",
    "language": "en"
  },
  "bookerInfo": {
    "firstName": "XXXX",
    "lastName": "XXXX"
  },
  "bookingQuestionAnswers": [
    {
      "question": "FULL_NAMES_FIRST",
      "answer": "XXXX",
      "travelerNum": 1
    },
    {
      "question": "FULL_NAMES_LAST",
      "answer": "XXXX",
      "travelerNum": 1
    },
    {
      "question": "AGEBAND",
      "answer": "ADULT",
      "travelerNum": 1
    },
    {
      "question": "AGEBAND",
      "answer": "ADULT",
      "travelerNum": 2
    },
    {
      "question": "FULL_NAMES_FIRST",
      "answer": "XXXX",
      "travelerNum": 2
    },
    {
      "question": "FULL_NAMES_LAST",
      "answer": "XXXX",
      "travelerNum": 2
    },
    {
      "question": "TRANSFER_ARRIVAL_MODE",
      "answer": "OTHER"
    },
    {
      "question": "TRANSFER_DEPARTURE_MODE",
      "answer": "OTHER"
    },
    {
      "question": "PICKUP_POINT",
      "answer": "LOC-6eKJ+or5y8o99Qw0C8xWyGStvfcGJMWF/jrN0iaZD8s=",
      "unit": "LOCATION_REFERENCE"
    }
  ],
  "communication": {
    "phone": "+44 987667889",
    "email": "noreply@test.com"
  },
  "additionalBookingDetails": {
    "voucherDetails": {
      "companyName": "Test",
      "email": "customerservice@test.com",
      "phone": "+44 876778998",
      "voucherText": "Thank you for booking with us!"
    }
  }
}
```

Example booking request for product option without pickup (TG1):

  ```json
{
  "productCode": "9025P51",
  "productOptionCode": "TG1",
  "startTime": "08:00",
  "currency": "USD",
  "travelDate": "2024-11-27",
  "paxMix": [
    {
      "ageBand": "ADULT",
      "numberOfTravelers": 2
    }
  ],
  "partnerBookingRef": "test12345",
  "languageGuide": {
    "type": "GUIDE",
    "language": "en"
  },
  "bookerInfo": {
    "firstName": "XXXX",
    "lastName": "XXXX"
  },
  "bookingQuestionAnswers": [
    {
      "question": "FULL_NAMES_FIRST",
      "answer": "XXXX",
      "travelerNum": 1
    },
    {
      "question": "FULL_NAMES_LAST",
      "answer": "XXXX",
      "travelerNum": 1
    },
    {
      "question": "AGEBAND",
      "answer": "ADULT",
      "travelerNum": 1
    },
    {
      "question": "AGEBAND",
      "answer": "ADULT",
      "travelerNum": 2
    },
    {
      "question": "FULL_NAMES_FIRST",
      "answer": "XXXX",
      "travelerNum": 2
    },
    {
      "question": "FULL_NAMES_LAST",
      "answer": "XXXX",
      "travelerNum": 2
    },
    {
      "question": "TRANSFER_ARRIVAL_MODE",
      "answer": "OTHER"
    },
    {
      "question": "TRANSFER_DEPARTURE_MODE",
      "answer": "OTHER"
    },
    {
      "question": "PICKUP_POINT",
      "answer": "MEET_AT_DEPARTURE_POINT",
      "unit": "LOCATION_REFERENCE"
    }
  ],
  "communication": {
    "phone": "+44 987667889",
    "email": "noreply@test.com"
  },
  "additionalBookingDetails": {
    "voucherDetails": {
      "companyName": "Test",
      "email": "customerservice@test.com",
      "phone": "+44 876778998",
      "voucherText": "Thank you for booking with us!"
    }
  }
}
```

To learn more about booking questions and get a step-by-step guide on how to implement conditional booking questions, see this guide: <a href="https://partnerresources.viator.com/travel-commerce/merchant/implementing-booking-questions/" target="blank">Implementing Booking Questions</a>.

### Age-bands

If `"AGEBAND"` is specified as a booking question in the `bookingQuestions` array in the product content response, you must supply the age-band for each traveler in `bookingQuestionAnswers` when making the booking using [/bookings/book](#operation/bookingsBook) or [/bookings/cart/book](#operation/bookingsCartBook). 

Furthermore, the answer(s) to the `"AGEBAND"` booking question that you submit in the request to [/bookings/book](#operation/bookingsBook) or [/bookings/cart/book](#operation/bookingsCartBook) must match the age-bands given in the `paxMix` element in the request to [/bookings/hold](#operation/bookingsHold) or [/bookings/cart/hold](#operation/bookingsCartHold). Otherwise, the booking server will reject the booking on account of the booking and booking-hold not matching.

The valid age-bands for the product are given in the `pricingInfo` array in the product content response; e.g.:

```json
"pricingInfo": {
  "type": "PER_PERSON",
  "ageBands": [
    {
      "ageBand": "INFANT",
      "startAge": 0,
      "endAge": 4,
      "minTravelersPerBooking": 0,
      "maxTravelersPerBooking": 9
    },
    {
      "ageBand": "CHILD",
      "startAge": 5,
      "endAge": 15,
      "minTravelersPerBooking": 0,
      "maxTravelersPerBooking": 9
    },
    {
      "ageBand": "ADULT",
      "startAge": 16,
      "endAge": 99,
      "minTravelersPerBooking": 0,
      "maxTravelersPerBooking": 9
    }
  ]
},
```

Note that if `bookingRequirements.requiresAdultForBooking` is `true` in the product content response, at least one traveler must have an `"ADULT"` or `"SENIOR"` age-band.

To learn more about how age-bands are used during the booking process, see the following guide: [Implementing age bands & pax mix](https://partnerresources.viator.com/travel-commerce/merchant/agebands-pax-mix?source=specs).

#### Age-bands with unit pricing

In the case that the product uses unit pricing; i.e., pricing based on the number of groups of travelers, then the product will have a single available age-band: `"TRAVELER"`, as given in the `pricingInfo` array in the product content response; e.g.:

```json
"pricingInfo": {
  "type": "UNIT",
  "ageBands": [
    {
      "ageBand": "TRAVELER",
      "startAge": 0,
      "endAge": 99,
      "minTravelersPerBooking": 1,
      "maxTravelersPerBooking": 10
    }
  ],
  "unitType": "GROUP"
}
```

For such products, even if `"AGEBAND"` is specified as a booking question, the only applicable age-band is `"TRAVELER"`. However, you must still supply this value for the age-band booking question for each traveler when making the booking using [/bookings/book](#operation/bookingsBook) or [/bookings/cart/book](#operation/bookingsCartBook). Even if `bookingRequirements.requiresAdultForBooking` is `true` for such products, you must still supply the `"TRAVELER"` value.

## Booking cutoff times

**Note**: This section applies to affiliate partners with API access level "Full Access + Booking" and merchant partners only.

This section describes how the booking cutoff time information given by the product supplier, which may affect a product's availability (and therefore its ability to be booked) is communicated via this API. While you are welcome to develop logic to support the display and utilisation of this information, **it is not necessary to do so**. Indeed, as most implementations are unlikely to benefit, we recommend simply using the real-time [/availability/check](#operation/availabilityCheck) endpoint as the primary means to determine and communicate a product's availability in your product booking workflow.

Many products in our inventory are subject to a booking cutoff time. Tickets for such products may only be purchased up until a certain time. This information is given in the `bookingConfirmationSettings` object in the [product content response](#section/Key-concepts/Product-content-and-availability-endpoints).

Example `bookingConfirmationSettings` object:

```json
"bookingConfirmationSettings": {
  "bookingCutoffType": "START_TIME",
  "bookingCutoffInMinutes": 0,
  "confirmationType": "INSTANT"
},
```

There are four booking cutoff types, indicated by the value of the `bookingCutoffType` element; they are:
  - `"START_TIME"` – booking cutoff is relative to the product's start time
  - `"OPENING_TIME"` – booking cutoff is relative to the product's opening time
  - `"CLOSING_TIME"` – booking cutoff is relative to the product's closing time
  - `"FIXED_TIME"` – booking cutoff is relative to the time given in the `bookingCutoffFixedTime` element

In addition, the booking cutoff time may be offset by the number of minutes given in `bookingCutoffInMinutes`; for example, product 57377P9's booking cutoff is 120 minutes prior to its start time:

```json
"bookingConfirmationSettings": {
  "bookingCutoffType": "START_TIME",
  "bookingCutoffInMinutes": 120,
  "confirmationType": "INSTANT"
}
```

The availability of products that have a `bookingCutoffType` of `"START_TIME"` can be determined by inspecting the `pricingRecords[].timedEntries[].startTime` field in the response from [/availability/schedules/{product-code}](#operation/availabilitySchedules). This type of product can be booked up until `bookingCutoffInMinutes` prior to its starting time in the time-zone in which the product operates, which is given in the `timeZone` field in the [product content response](#section/Key-concepts/Product-content-and-availability-endpoints).

The booking cutoff time for products with a `"FIXED_TIME"` type is that given in the `bookingCutoffFixedTime` element, offset by the number of minutes given in `bookingCutoffInMinutes`. In the fixed time scenario, `bookingCutoffInMinutes` can only be 0, 1440 (24 hours) or 2880 (48 hours). This means that the booking cutoff time is at a certain time on the day on which the product operates; or, at that same time but one or two days before the tour date, respectively.

In the following example, the booking cutoff is 10:00am on the day before the tour or activity operates:

```json
"bookingConfirmationSettings": {
    "bookingCutoffType": "FIXED_TIME",
    "bookingCutoffInMinutes": 1440,
    "confirmationType": "INSTANT",
    "bookingCutoffFixedTime": "10:00:00"
}
```

You may not be able to book a product (using [/bookings/book](#operation/bookingsBook) or [/bookings/cart/book](#operation/bookingsCartBook)) or place a booking hold on a product using [/bookings/hold](#operation/bookingsHold) or [/bookings/cart/hold](#operation/bookingsCartHold) after it is past the booking cutoff time. However, this is not always the case. Always check real-time availability using the [/availability/check](#operation/availabilityCheck) endpoint.

Nonetheless, in displaying the availability of a product on your site, you may wish to mark products as 'unavailable' for a particular day or starting time if it is presently past the booking cutoff time if you feel that doing so will improve your site's UX.

However, because the availability schedule data in general can rapidly fall out of date, **we again encourage you to always utilise the real-time [/availability/check](#operation/availabilityCheck) endpoint as the primary means to determine and communicate a product's availability in your product booking workflow.**

## Booking confirmation types

**Note**: This section applies to affiliate partners with API access level "Full Access + Booking" and merchant partners only.

A product's booking confirmation type indicates whether the booking will be confirmed or rejected immediately and automatically; or, whether it will remain in a 'pending' state until actioned manually by the supplier.

The product's booking confirmation type can be identified by the value of `bookingConfirmationSettings.confirmationType` in the product content response. There are three confirmation types: **instant**, **manual** and **instant-then-manual**, represented by the `confirmationType` values `"INSTANT"`, `"MANUAL"` and `"INSTANT_THEN_MANUAL"`, respectively.

### Booking confirmation type in the API

#### Instant confirmation:

Instant confirmation products are confirmed automatically at the time of booking, and the customer should be charged immediately.

E.g. (product-code: 5010SYDNEY):

```json
"bookingConfirmationSettings": {
  "bookingCutoffType": "CLOSING_TIME",
  "bookingCutoffInMinutes": 0,
  "confirmationType": "INSTANT"
}
```

#### Manual confirmation

Manual confirmation products are those that only operate at the discretion of the supplier, who must confirm or reject each booking request manually. Once the booking is requested, it will remain in a 'pending' state until actioned by the supplier; or, if no action is taken by the supplier, the time-out period (72 hours) is exceeded. The customer should only be charged once confirmation is received.

E.g. (product-code: 161500P1):

```json
"bookingConfirmationSettings": {
    "bookingCutoffType": "START_TIME",
    "bookingCutoffInMinutes": 1440,
    "confirmationType": "MANUAL"
}
```

#### Instant-then-manual confirmation

Instant-then-manual confirmation products behave like instant confirmation products up until a certain time prior to the product's starting time. From that point on, the product will require manual confirmation by the supplier.

E.g. (product-code: 100035P1):

```json
"bookingConfirmationSettings": {
    "bookingCutoffType": "START_TIME",
    "bookingCutoffInMinutes": 720,
    "confirmationType": "INSTANT_THEN_MANUAL",
    "manualConfirmationPeriod": 2880
}
```

The `manualConfirmationPeriod` indicates when the product changes from instant to manual confirmation. In the example above, this period is 2880 minutes (48 hours or 2 days). Therefore, this product will be confirmed instantly if the booking is made more than 2 days in advance of the start time (in the time zone in which the product operates); if the booking is made less than 2 days in advance, it will require manual confirmation from the supplier.

### How to support manual confirmation products

In order to support manual confirmation products on your site, you will need to introduce support for an asynchronous flow that monitors the booking's status, determines when its status changes and notifies the customer when their booking has been confirmed or rejected by the supplier.

You will need to:

- Create back-end logic that periodically checks the status of pending bookings using the [/bookings/status](#operation/bookingsStatus) endpoint (we recommend polling no more than once every 3 minutes)
- Establish and support an extra, email-based communications channel with your customers
- Create email templates for the various scenarios that may arise
- Ensure that your platform's front end accommodates the extra steps required in the booking process
- Ensure that customers clearly understand that they are booking a product that will not be confirmed or charged immediately

#### Product detail page

Managing customer expectations is a key factor in supporting manual confirmation products on your booking platform. 

Make clear mention on the product detail page that confirmation will not be received immediately, but rather within 72 hours of making the booking.

You are free to include this note in the **Additional Info** section, or elsewhere on your product display page; for example:

<figure>
    <img src="img/additional-info-on-request-clause.jpg" alt="Manual confirmation info displayed on a product page on the Viator site"/>
    <figcaption>Manual confirmation info displayed on a product page on the Viator site
     </figcaption>
</figure>

#### Check-out

As you will only charge the customer's credit card once the booking is confirmed by the product's supplier, it's best to display a message to this effect at a prominent point of the check-out flow for all manual confirmation products.

<figure>
    <img src="img/checkout-flow-confirmation-info.jpg" alt="Example checkout-flow instruction on the Viator site"/>
    <figcaption>Example checkout-flow instruction on the Viator site</figcaption>
</figure>

In this way, customers can be reassured that they are not being charged for a booking that may never be confirmed, thereby helping to reduce the number of calls to your customer service team.

#### Combination purchases

If your customer has both instant and manual booking confirmation products in their shopping cart, only the amount for the confirmed booking(s) should be charged immediately; the portion corresponding to the pending bookings should be held as a pre-authorization against the customer’s credit card, and the transaction completed only once confirmation is received. 

It is important that you clearly differentiate between bookings that have been confirmed and those that are pending confirmation and communicate the status of each item. Also, be sure to make clear that the pre-authorization will only finalize once the manual confirmation bookings are confirmed.

#### Confirmation page

Changes will need to be made to your confirmation page because it will not be possible for your customer to download their voucher immediately after completing a manual confirmation booking. Rather, the voucher will be made available after the booking is confirmed.

Vouchers for instant confirmation products, however, must be made available immediately following the completion of the booking process.

#### Customer communications

Confirmation message (e.g., email) templates for manual confirmation bookings should indicate that the item is pending confirmation from the supplier; and, that confirmation for this activity will take up to 72 hours, depending on availability.

You will also need to create templates for the following scenarios:

- When the manual confirmation booking is confirmed by the supplier (this time including the voucher details)
- If the manual confirmation booking is rejected
- If multiple manual confirmation products have been booked:
    + When all items have been accepted/confirmed
    + When there are mixed statuses; i.e., 'pending' + 'rejected' + 'canceled'
    + If all items were rejected
- If a mixture of instant and manual confirmation products are booked at the same time; i.e., in the same cart

<u>**Note**</u>: When a booking is declined, it is useful to mention that the customer's card was not charged.

##### Example email for a manual confirmation booking pending confirmation:

<figure>
    <img src="img/on-request-confirmation-email-1.jpg" alt="Viator website showing translation attribution"/>
    <img src="img/on-request-confirmation-email-2.jpg" alt="Viator website showing translation attribution"/>
    <img src="img/on-request-confirmation-email-3.jpg" alt="Viator website showing translation attribution"/>
</figure>

### Confirmation time-outs resulting in rejection

As mentioned above, when a booking request for a manual confirmation product is made, it will have a status of 'pending' until it is confirmed by the supplier. The supplier has the option of confirming or rejecting the booking.

If the supplier does not confirm the booking within 72 hours – or, if they have not confirmed the booking by the time it reaches `bookingCutoffInMinutes` from the product's start time or whichever is specified in the `bookingCutoffType` – our systems will automatically reject the booking, and this will be reflected in the response from the [/bookings/status](#operation/bookingsStatus) endpoint.

### Building in the sandbox environment

Upgrading your booking platform to support manual confirmation products will require you to build and test this functionality in the sandbox environment.

The testing workflow depends on which endpoint you’re using to perform bookings:


#### [/bookings/book](#operation/bookingsBook) Endpoint
In the sandbox environment, booking requests are not sent to the supplier’s system.

By default, manual-confirmation products behave like instant-confirmation products and return:

- `bookingStatus = CONFIRMED`

To simulate the correct manual-confirmation behavior, you must set the request header:

- `exp-demo: false`

When `exp-demo` is set to `false, the response will return:

- `bookingStatus = PENDING` (expected behavior for manual-confirmation products)

#### [/bookings/cart/book](#operation/bookingsCartBook) Endpoint
For manual-confirmation products, you must set the following request header:

- `exp-demo: false`

The response will return:

- `bookingStatus = PENDING` (expected manual-confirmation behavior)

#### Completing the Test Flow

To simulate the final supplier decision, contact API Tech Support at apitechsupport@viator.com and provide the bookingRef to request a status update to:

- `CONFIRMED`, or
- `REJECTED`

## Making a booking

**Note**: This section applies to affiliate partners with API access level "Full Access + Booking" and merchant partners only.

Broadly speaking, to book a product via this API, you must do the following:

1. **Check availability and pricing**: Determine that a ticket for the desired tour or activity is available for a specific date, time and passenger mix combination using the [/availability/check](#operation/availabilityCheck) endpoint. Accurate pricing details in the currency that you wish to be invoiced in (one of GBP, EUR, USD, CAD or AUD) are also returned in the response from this endpoint. This includes `recommendedRetailPrice` and `partnerNetPrice`.<br/><br/>
2. **Request a booking hold**: If a ticket is available, request a pricing/availability hold for the booking using the [/bookings/hold](#operation/bookingsHold) or [/bookings/cart/hold](#operation/bookingsCartHold) endpoints.<br/><br/>
3. **Collect payment**: With a booking hold requested and suitable to proceed, collect payment using the <a href="https://partnerresources.viator.com/travel-commerce/api-payments/#iframe" target="blank">iframe solution</a> or via your own payment details form and submit using the <a href="https://partnerresources.viator.com/travel-commerce/api-payments/#api" target="blank">API solution</a>. Note: These payment options are only available to affiliate partners with API access level "Full Access + Booking".<br/><br/>
4. **Confirm the booking**: Confirm/finalize the held booking using the [/bookings/book](#operation/bookingsBook) or [/bookings/cart/book](#operation/bookingsCartBook) endpoints.

See <a href="https://partnerresources.viator.com/travel-commerce/technical-guide/#/availability-schedules" target="_blank">Getting availability and pricing for products</a> and <a href="https://partnerresources.viator.com/travel-commerce/technical-guide/#/booking-workflow" target="_blank">Creating a seamless booking experience</a> for more information.

<!-- 
### 1. Check availability

A product's availability schedules indicate whether or not a product (including its product options) is scheduled to operate on a certain date and time. This information should be retrieved and kept up-to-date using any of the [availability schedule endpoints]((#section/Key-concepts/Product-content-and-availability-endpoints). 

However, as last-minute sales or availability changes by the supplier can result in a product that is scheduled to operate becoming unavailable immediately prior to booking, it is necessary to perform a final check to determine whether tickets remain available for sale or have been sold out. This is accomplished using the [/availability/check](#operation/availabilityCheck) endpoint.

This endpoint should be called once the customer has selected a **date**, a **pax-mix** and one of the following:

| Criteria | [/availability/check](#operation/availabilityCheck) response |
|----------|--------------------------------------------------------------|
| a **product** | availability for the product, product options and/or start times |
| a **product** and a **start time** | availability for the product at that start time |
| a **product** and a **product option** | availability for the product option or the product option start times, if applicable |
| a **product**, **product option** and a **start time** | availability for the product option's start time |

In order to keep processing fast, call the [/availability/check](#operation/availabilityCheck) endpoint with as much information as you are able to specify; e.g., if you wish to display the availability for all product options and start times of a product, then only **date**, **pax-mix** and **product** are required. If you wish to check whether a specific start-time is available for a product, then the **start time** should also be included. 

**Note**: These are the only points in the workflow where the real-time availability check service should be used. For building calendars and other bulk operations, the [availability schedule endpoints]((#section/Key-concepts/Product-content-and-availability-endpoints) should be used.

The information required to build a valid request for the availability check service is as follows:

| Request parameter | Source |
|-------------------|--------|
| `productCode` | `productCode` in response from in the response from any of the [product content endpoints](#section/Key-concepts/Product-content-and-availability-endpoints) |
| `paxMix.ageBand` | One of the `ageBand` values (`"CHILD"`, `"INFANT"`, `"ADULT"` etc.) in the `pricingInfo.ageBands` array in the response from any of the [product content endpoints](#section/Key-concepts/Product-content-and-availability-endpoints) |
| `paxMix.numberOfTravelers` | Selected by user |
| `currency` | Determined by partner |
| `productOptionCode` | If specified, the availability results will be restricted to this product-option code, one of `bookableItems[].productOptionCode` in the response from any of the [availability schedule endpoints](#section/Key-concepts/Product-content-and-availability-endpoints). If omitted, availability information for all product options will be returned. See [Product options](#section/Key-concepts/Product-options) for more information. |
| `startTime` | If specified, the availability results will be restricted to a certain starting time, one of `bookableItems[].seasons[].pricingRecords[].timedEntries[].startTime` in the response from any of the [availability schedule endpoints](#section/Key-concepts/Product-content-and-availability-endpoints). | 
| `travelDate` | The desired date of travel that is an available date according to the response from any of the [availability schedule endpoints](#section/Key-concepts/Product-content-and-availability-endpoints). See [Availability schedules](#section/Key-concepts/Availability-schedules) for more information. |

#### Example availability check for product [3857NYCNIA - 2-Day Niagara Falls and Tannersville Tour from New York by Bus](https://www.viator.com/tours/New-York-City/2-Day-Niagara-Falls-Tour-from-New-York-by-Bus/d687-3857NYCNIA)

**Example request to [/availability/check](#operation/availabilityCheck)**:

```json
{
  "productCode": "3857NYCNIA",
  "productOptionCode": "NIA",
  "travelDate": "2021-04-01",
  "currency": "AUD",
  "startTime": "06:30",
  "paxMix": [
    {
      "ageBand": "ADULT",
      "numberOfTravelers": 2
    }
  ]
}
```

**Example response from [/availability/check](#operation/availabilityCheck)**:

```json
{
    "currency": "AUD",
    "productCode": "3857NYCNIA",
    "travelDate": "2021-04-01",
    "bookableItems": [
        {
            "productOptionCode": "NIA",
            "startTime": "06:30",
            "available": true,
            "lineItems": [
                {
                    "ageBand": "ADULT",
                    "numberOfTravelers": 2,
                    "subtotalPrice": {
                        "price": {
                            "recommendedRetailPrice": 977.54,
                            "partnerNetPrice": 752.70
                        }
                    }
                }
            ],
            "totalPrice": {
                "price": {
                    "recommendedRetailPrice": 977.54,
                    "partnerNetPrice": 752.71,
                    "bookingFee": 45.16,
                    "partnerTotalPrice": 797.87
                }
            }
        }
    ]
}
```

The response above indicates that this combination of **product**, **product-option**, **date**, **start-time** and **pax-mix** IS available (`"available": true`). 

Note that the availability check only applies to the exact combination of the above. If any change is made to the **product**, **product-option**, **date**, **start-time** or **pax-mix**, it is necessary to call [/availability/check](#operation/availabilityCheck) again with the updated information prior to requesting a booking hold. 

With this affirmative result, you can move onto the next step.

### 2. Request a booking hold

The request object that you will send to the [/bookings/hold](#operation/bookingsHold) endpoint is identical to that of the request sent to the [/availability/check](#operation/availabilityCheck) endpoint in the previous step, whereas the request for the [/bookings/cart/hold](#operation/bookingsCartHold) contains the same information but in a different format as it allows for multiple bookable items.

**Example request to [/bookings/hold](#operation/bookingsHold)**:

```json
{
  "productCode": "3857NYCNIA",
  "productOptionCode": "NIA",
  "travelDate": "2021-04-01",
  "currency": "AUD",
  "startTime": "06:30",
  "paxMix": [
    {
      "ageBand": "ADULT",
      "numberOfTravelers": 2
    }
  ]
}
```

**Example response from [/bookings/hold](#operation/bookingsHold)**:

```json
{
    "bookingRef": "BR-787818552",
    "bookingHoldInfo": {
        "availability": {
            "status": "HOLD_NOT_PROVIDED"
        },
        "pricing": {
            "status": "HOLDING",
            "validUntil": "2020-09-15T03:23:27.529Z"
        }
    },
    "lineItems": [
        {
            "ageBand": "ADULT",
            "numberOfTravelers": 2,
            "subtotalPrice": {
                "price": {
                    "recommendedRetailPrice": 977.56,
                    "partnerNetPrice": 752.74
                }
            }
        }
    ],
    "totalPrice": {
        "price": {
            "recommendedRetailPrice": 977.56,
            "partnerNetPrice": 752.74,
            "bookingFee": 45.16,
            "partnerTotalPrice": 797.90
        }
    }
}
```

There are two components of the booking hold:
  - **Availability**: An availability hold ensures that the requested tickets will remain available for purchase.
  - **Pricing**: A pricing hold ensures that the requested tickets will remain at the prices quoted in the response.

The `bookingHoldInfo` object communicates the status and expiry of the pricing and availability holds.
  - `"HOLDING"` - the hold was successful
  - `"HOLD_NOT_PROVIDED"` - the hold was not successful

While an availability hold may not be granted, depending on the supplier's system, a pricing hold of 5 minutes will always be granted and is sufficient to progress to the next step, which is to finalize/confirm the booking using the [/bookings/book](#operation/bookingsBook) or [/bookings/cart/book](#operation/bookingsCartBook) endpoints.

There is no way to determine in advance of calling [/bookings/hold](#operation/bookingsHold) or [/bookings/cart/hold](#operation/bookingsCartHold) whether an availability hold can or will be granted. Around 18% of the products in our catalogue do support this feature. Most products are confirmed instantly and do not rely on the concept of a limited inventory. The availability hold is for those products with a limited inventory that regularly sell out.

### 4. Confirm the booking

To finalize the booking for which you requested a booking-hold in step three, you will use the [/bookings/book](#operation/bookingsBook) or [/bookings/cart/book](#operation/bookingsCartBook) endpoints.

This service requires all relevant booking information to be provided in the request; i.e., extra information is required compared to that which you provided in the *Check Availability* and *Request a booking hold* steps.

#### Information required to confirm the booking

Compared to the request to the [/bookings/hold](#operation/bookingsHold) endpoint, the additional information required is as follows:

| Element | Description |
|---------|-------------|
| `bookingRef` | This is the booking reference code that is generated by Viator and returned in the `bookingRef` element in the response from [/bookings/hold](#operation/bookingsHold). |
| `partnerBookingRef` | A unique booking reference code for this booking generated by you to be compatible with your local system |
| `languageGuide` | You must specify one of the valid language guide options available for the product & product option to be booked. The language guides available for each product option are given in the `productOptions[].languageGuides[]` array in the response from any of the [product content endpoints](#section/Key-concepts/Product-content-and-availability-endpoints). |
| `bookerInfo` | First and last names of the person making the booking |
| `bookingQuestionAnswers` | Answers to the [booking questions](#section/Booking-concepts/Booking-questions) stipulated in the `bookingQuestions` array in the response from any of the [product content endpoints](#section/Key-concepts/Product-content-and-availability-endpoints) |
| `communication` | Telephone number and email to be used for correspondence regarding the booking |
| `additionalBookingDetails` | Additional information to include with the booking; e.g., extra information to be included on the voucher |

**Request to [/bookings/book](#operation/bookingsBook)**:

```json
{
  "productCode": "3857NYCNIA",
  "productOptionCode": "NIA",
  "currency": "AUD",
  "partnerBookingRef": "BR-787818552",
  "travelDate": "2021-04-01",
  "paxMix": [
    {
      "ageBand": "ADULT",
      "numberOfTravelers": 2
    }
  ],
  "languageGuide": {
    "type": "GUIDE",
    "language": "en"
  },
  "bookingRef": "BR-787818552",
  "bookerInfo": {
    "firstName": "Simon",
    "lastName": "Nettle"
  },
  "startTime": "06:30",
  "bookingQuestionAnswers": [  
    {
      "question": "AGEBAND",
      "answer": "ADULT",
      "travelerNum": 1
    },
    {
      "question": "FULL_NAMES_LAST",
      "answer": "Nettle",
      "travelerNum": 1
    },
    {
      "question": "FULL_NAMES_FIRST",
      "answer": "Simon",
      "travelerNum": 1
    },
    {
      "question": "AGEBAND",
      "answer": "ADULT",
      "travelerNum": 2
    },
    {
      "question": "FULL_NAMES_LAST",
      "answer": "Sim",
      "travelerNum": 2
    },
    {
      "question": "FULL_NAMES_FIRST",
      "answer": "Linda",
      "travelerNum": 2
    }
  ],
  "communication": {
    "email": "hsimpson@tripadvisor.com",
    "phone": "+61 123456789"
  },
  "additionalBookingDetails": {
    "voucherDetails": {
      "companyName": "Booking King",
      "email": "support@bookingking.com",
      "phone": "+61400500600",
      "voucherText": "For any enquiries, please visit our customer support page at https://support.bookingking.com"
    }
  }
}
```

**Response from [/bookings/book](#operation/bookingsBook)**

```json
{
    "status": "CONFIRMED",
    "bookingRef": "BR-787818552",
    "partnerBookingRef": "BR-787818552",
    "currency": "AUD",
    "lineItems": [
        {
            "ageBand": "ADULT",
            "numberOfTravelers": 2,
            "subtotalPrice": {
                "price": {
                    "recommendedRetailPrice": 977.56,
                    "partnerNetPrice": 752.74
                }
            }
        }
    ],
    "totalPrice": {
        "price": {
            "recommendedRetailPrice": 977.56,
            "partnerNetPrice": 752.74,
            "bookingFee": 45.16,
            "partnerTotalPrice": 797.90
        }
    },
    "cancellationPolicy": {
        "type": "CUSTOM",
        "description": "If you cancel at least 6 day(s) before the scheduled departure time, you will receive a full refund.<br>If you cancel within 2 day(s) of the scheduled departure, you will receive a 0% refund.<br>If you cancel between 2 and 6 day(s) before the scheduled departure time, you will receive a 50% refund.",
        "cancelIfBadWeather": false,
        "cancelIfInsufficientTravelers": false,
        "refundEligibility": [
            {
                "dayRangeMin": 6,
                "percentageRefundable": 100,
                "startTimestamp": "2020-09-15T03:21:03.26406Z",
                "endTimestamp": "2021-03-26T10:30:00Z"
            },
            {
                "dayRangeMin": 0,
                "dayRangeMax": 2,
                "percentageRefundable": 0,
                "startTimestamp": "2021-03-30T10:30:00Z",
                "endTimestamp": "2021-04-01T10:30:00Z"
            },
            {
                "dayRangeMin": 2,
                "dayRangeMax": 6,
                "percentageRefundable": 50,
                "startTimestamp": "2021-03-26T10:30:00Z",
                "endTimestamp": "2021-03-30T10:30:00Z"
            }
        ]
    },
    "voucherInfo": {
        "url": "https://www.viator.com/ticket?code=1183891096:14dfa2898750a3a7753da82cd447be6e172aa59c392d5bfd2d21b17b1ce98d0e",
        "format": "HTML",
        "type": "STANDARD"
    }
}
```

This response (`"status": "CONFIRMED"`) indicates that the booking was successful.

**Merchant partners only**: Viator will invoice you the amount returned in the `totalPrice.price.partnerTotalPrice` field (denominated in the currency specified in the booking request) as seen above in the sample response from [/bookings/book](#operation/bookingsBook). 

You can learn more about invoicing and calculating product pricing with the Merchant API in this article: [Invoicing](https://partnerresources.viator.com/travel-commerce/merchant/pricing?source=specs#invoicing).
-->

## Cancellation API workflow

**Note**: This section applies to affiliate partners with API access level "Full Access + Booking" and merchant partners only.

All booking cancellations (except for those requested after the date of travel) must now be performed via the API. Viator no longer offers ordinary cancellation services via our customer support function. To cancel a booking after the tour or activity has occurred, please contact [Viator Partner Support](mailto:dpsupport@viator.com) 

See our in-depth guide about cancellation policies and how to handle cancellations: [All you need to know about cancellation policies](https://partnerresources.viator.com/travel-commerce/merchant/cancellation-policies/?source=specs).

### Getting cancellation reasons
<a id="getting-cancellation-reasons"></a>

When canceling a booking, you are required to submit a valid 'reason for the cancellation' to assist with Viator's internal processes. This is accomplished via the inclusion of a valid reason code in the body of the request. The reason codes can be retrieved from the [/bookings/cancel-reasons](#operation/bookingsCancelReasons) endpoint.

As the acceptable reasons for cancellation may be altered at any point, we recommend retrieving an up-to-date list from this endpoint at least weekly.

The output from the [/bookings/cancel-reasons](#operation/bookingsCancelReasons) endpoint at the time of writing is as follows:

```json
{
    "reasons": [
        {
            "cancellationReasonText": "Supplier No Show",
            "cancellationReasonCode": "Customer_Service.Supplier_no_show"
        },
        {
            "cancellationReasonText": "Chose a different/cheaper tour",
            "cancellationReasonCode": "Customer_Service.Chose_a_different_cheaper_tour"
        },
        {
            "cancellationReasonText": "Unexpected medical circumstances",
            "cancellationReasonCode": "Customer_Service.Unexpected_medical_circumstances"
        },
        {
            "cancellationReasonText": "Weather",
            "cancellationReasonCode": "Customer_Service.Weather"
        },
        {
            "cancellationReasonText": "Booked wrong tour date",
            "cancellationReasonCode": "Customer_Service.Booked_wrong_tour_date"
        },
        {
            "cancellationReasonText": "Duplicate Booking",
            "cancellationReasonCode": "Customer_Service.Duplicate_Booking"
        },
        {
            "cancellationReasonText": "Significant global event",
            "cancellationReasonCode": "Customer_Service.Significant_global_event"
        },
        {
            "cancellationReasonText": "I canceled my entire trip",
            "cancellationReasonCode": "Customer_Service.I_canceled_my_entire_trip"
        }
    ]
}
```

### Canceling a booking

#### Getting a cancellation quote

Before canceling the booking, call the [/bookings/{booking-reference}/cancel-quote](#operation/bookingsCancelQuote) endpoint to get information about whether the booking can be canceled using this endpoint and what the refund will be, for example:

```
GET https://api.viator.com/partner/bookings/BR-580254558/cancel-quote
```

- **Note**: For bookings made with v1 of this API, this code corresponds to `data.itemSummaries[].itemId` (in the response from v1's [/booking/book](https://docs.viator.com/partner-api/merchant/technical/#tag/Booking-services/paths/~1booking~1book/post) endpoint) but prepended with `BR-`. For example, if the `itemId` is `580254558`, this field should be `BR-580254558`.

You will receive a cancellation quote object, e.g.:

```json
{
    "bookingId": "BR-580254558",
    "status": "CANCELLABLE",
    "refundDetails": {
        "itemPrice": 109.77,
        "refundAmount": 109.77,
        "currencyCode": "USD",
        "refundPercentage": 100.00
    }
}
```

 **Note**: Bookings that have not been confirmed by the supplier and have a status of `"PENDING"` will report an `itemPrice`, `refundAmount` and `refundPercentage` of `0`, as no fees are charged until the booking's status is `"CONFIRMED"`.
 

The data elements in this object have meanings as follows:

| Element | Meaning | Example |
|---------|---------|---------|
| `bookingId` | the booking reference number prepended with `BR-` | `BR-580254556` |
| `status` | One of the following: <ul><li>`CANCELLABLE`: the booking is eligible to be cancelled</li><li>`CANCELLED`: the booking has already been cancelled</li><li>`NOT_CANCELLABLE`: the booking is for a product that operated in the past, and therefore cannot be cancelled using this endpoint (you will need to [send an email to dpsupport](mailto:dpsupport@viator.com) including both "CANCEL" and the booking reference number in the subject line in order to request a refund for such a booking)</li></ul> | `CANCELLABLE` |
| `refundDetails` | object containing information about the refund | |
| `itemPrice` | the **merchant net price** + **transaction fee** for this product at the time of booking in the currency specified by `currencyCode` | `109.77` |
| `refundAmount` | the amount that will be deducted from your invoice if the booking is cancelled now | `109.77` |
| `currencyCode` | the currency code for the currency in which pricing information is displayed | `USD` |
| `refundPercentage` | the refund amount expressed as a percentage of the `itemPrice` | `100.00` |


**Will there ever be a discrepancy between the amount charged for a tour and the amount refunded due to currency exchange-rate fluctuations?**

- In short: no. I.e., if the cost of the booking was USD 100 and the refund percentage is 100% (full refund, as per the response from [/bookings/{booking-reference}/cancel-quote](#operation/bookingsCancelQuote)), Viator will simply **not invoice you** for that USD 100 that we would have if the booking had not been canceled. Furthermore, we do not invoice you for the cost of a booking prior to its departure date.



#### Requesting the cancellation

If the `status` field has a value of `CANCELLABLE` and you are happy with the `refundAmount`, call the [/bookings/{booking-reference}/cancel](#operation/bookingsCancel) endpoint to cancel the booking, e.g.:

```
POST https://api.viator.com/partner/bookings/BR-580254558/cancel
```

A reason code corresponding to the reason for cancellation must be included in the request body; e.g.:

```json
{
  "reasonCode":"Customer_Service.Chose_a_different_cheaper_tour"
}
```

You should receive a response indicating that the cancellation was successful, e.g.:

```json
{
    "bookingId": "BR-580254558",
    "status": "ACCEPTED"
}
```

A `status` of `ACCEPTED` indicates that the booking was successfully canceled.


## Checking booking status

**Note**: This section applies to affiliate partners with API access level "Full Access + Booking" and merchant partners only.

Once a booking has been made, you can check on its status using the [/bookings/status](#operation/bookingsStatus) endpoint.

You can use **either** the `bookingRef` **or** `partnerBookingRef` in the request to this service.

- If the booking was made using v1 of the Viator Partner API, you will receive a HTTP 400 Bad Request response. Only bookings made using v2 or later of this API are compatible with this endpoint.
- If the booking is the subject of a booking hold (via [/bookings/hold](#operation/bookingsHold) or [/bookings/cart/hold](#operation/bookingsCartHold)) but the booking has not yet been confirmed using [/bookings/book](#operation/bookingsBook), you will receive a HTTP 404 Not Found response.
- If the booking was confirmed but later canceled, you will receive a HTTP 200 Success response that indicates the canceled status.
- If the booking has been confirmed and has not been canceled, you will receive a response with the same structure as the response from [/bookings/book](#operation/bookingsBook)

### Confirmed booking

**Example request**: Get the status of the booking with the booking reference `"BR-791143912"`

```json
{
  "bookingRef": "BR-791143912"
}
```

**Example response**: The status of this booking is `"CONFIRMED"`

```json
{
  "status": "CONFIRMED",
  "bookingRef": "BR-791143912",
  "partnerBookingRef": "BR-791143912",
  "currency": "USD",
  "lineItems": [
    {
      "ageBand": "ADULT",
      "numberOfTravelers": 2,
      "subtotalPrice": {
        "price": {
          "recommendedRetailPrice": 21.4,
          "partnerNetPrice": 20.52
        }
      }
    }
  ],
  "totalPrice": {
    "price": {
      "recommendedRetailPrice": 21.4,
      "partnerNetPrice": 20.52,
      "bookingFee": 1.23,
      "partnerTotalPrice": 21.75
    }
  },
  "cancellationPolicy": {
    "type": "STANDARD",
    "description": "For a full refund, cancel at least 24 hours before the scheduled departure time.",
    "cancelIfBadWeather": false,
    "cancelIfInsufficientTravelers": false,
    "refundEligibility": [
      {
        "dayRangeMin": 2,
        "percentageRefundable": 100,
        "startTimestamp": "2020-11-10T02:04:15Z",
        "endTimestamp": "2021-03-30T23:00:00Z"
      },
      {
        "dayRangeMin": 0,
        "dayRangeMax": 1,
        "percentageRefundable": 0,
        "startTimestamp": "2021-03-31T23:00:00Z",
        "endTimestamp": "2021-04-01T23:00:00Z"
      }
    ]
  },
  "voucherInfo": {
    "url": "https://www.viator.com/ticket?code=1187186744:8ac3e6308555ab632fe89e8a6b83c41620e840a3bc485f6e0d836192eae1ffc4",
    "format": "HTML",
    "type": "STANDARD"
  }
}
```


### Canceled booking

**Example request**: Get the status of the booking with the partner booking reference `"test-partner-ref-aejsmont-num-1604985575"`

```json
{
  "partnerBookingRef": "test-partner-ref-aejsmont-num-1604985575"
}
```

**Example response**: The status of this booking is `"CANCELED"`

```json
{
  "bookingRef": "BR-582323272",
  "status": "CANCELED",
  "partnerBookingRef": "test-partner-ref-aejsmont-num-1604985575"
}
```

# Testing

## Postman collections for testing

Please use one of the following [Postman](https://www.getpostman.com/) collections, depending on which type of partner you are. The collections are configured for the **sandbox** base URL (`api.sandbox.viator.com`).

  - [Viator Basic-access Affiliate API Postman collection](Viator-Basic-Access-Affiliate-API-v2.postman_collection.json)
  - [Viator Full-access Affiliate API Postman collection](Viator-Affiliate-API-v2.postman_collection.json)
  - [Viator Full-access + Booking Affiliate API Postman collection](Viator-Affiliate-Booking-API-v2.postman_collection.json)
  - [Viator Merchant API Postman collection](Viator-Merchant-API-v2.postman_collection.json)

To access the **production** environment, replace `api.sandbox.viator.com` with `api.viator.com` in the endpoint URLs provided in the Postman collections for testing.

**All testing must be done in Sandbox.** Production endpoints are for live bookings only and must not be used for testing under any circumstances. Sandbox provides access to the same products and functionality as Production unless stated otherwise.

### Set up the `your-api-key` environment variable

As all services in this API require that your API-key be passed as a header parameter in every request made to this API, this value has been set to reference a Postman environment variable called `your-api-key`.

Once you import the collection into Postman, [set this variable](https://learning.getpostman.com/docs/postman/environments_and_globals/variables#defining-collection-variables) to your organization's API-key and save the collection.

# Workflows

## Ingesting and updating the product catalogue

The recommended way to initialize and keep your local copy of our products database up-to-date is by using the [/products/modified-since](#operation/productsModifiedSince) endpoint in the following way:

### Initialize your local copy of our products database by ingesting all product records

Make a request to [/products/modified-since](#operation/productsModifiedSince), but only include the `count` parameter. Do not supply values for `modified-since` or `cursor`. This instructs the system to return any products modified since the beginning of time; i.e., all of them.

**Note**: This is the <u>only</u> occasion on which you will need to call [/products/modified-since](#operation/productsModifiedSince) without the `modified-since` or `cursor` parameter.

`count` specifies how many product records will be returned per page. For practical purposes, setting `count` to its maximum value (500) is advised. However, for the purposes of brevity, I am using a `count` of `5` in this example; i.e.:

```
GET https://api.sandbox.viator.com/partner/products/modified-since?count=5
```

You will receive a response similar to the following:

```json
{
    "products": [
        {
            "status": "ACTIVE",
            "productCode": "92457P4",
            "language": "en-US",
            "createdAt": "2020-06-16T12:49:29.519174Z",
            "lastUpdatedAt": "2020-11-08T16:26:16Z",
            "title": "Ecuador Parapente Quito",
            "ticketInfo": {
                "ticketTypes": [
                    "MOBILE_ONLY"
                ],
                "ticketTypeDescription": "Mobile or paper ticket accepted",
                "ticketsPerBooking": "ONE_PER_BOOKING",
                "ticketsPerBookingDescription": "One per booking"
            },
            "pricingInfo": {
                "type": "PER_PERSON",
                "ageBands": [
                    {
                        "ageBand": "INFANT",
                        "startAge": 6,
                        "endAge": 17,
                        "minTravelersPerBooking": 0,
                        "maxTravelersPerBooking": 4
                    },
                    {
                        "ageBand": "ADULT",
                        "startAge": 18,
                        "endAge": 60,
                        "minTravelersPerBooking": 0,
                        "maxTravelersPerBooking": 4
                    }
                ]
            },
            "images": [
                {
                    "imageSource": "SUPPLIER_PROVIDED",
                    "caption": "",
                    "isCover": true,
                    "variants": [...
                    ],
            "logistics": {
                "start": [
                    {
                        "location": {
                            "ref": "LOC-o0AXGEKPN4wJ9sIG0RAn5Cdd0Y9TkTxkcosDq0rJgjR12IzpogNi5POX+yGLXEoq"
                        },
                        "description": "The meeting point is on the way to Lumbisí km 1 at the entrance to La Primavera at 8:30 am."
                    }
                ],
                "end": [
                    {
                        "location": {
                            "ref": "LOC-o0AXGEKPN4wJ9sIG0RAn5Cdd0Y9TkTxkcosDq0rJgjR12IzpogNi5POX+yGLXEoq"
                        },
                        "description": "The meeting point is on the way to Lumbisí km 1 at the entrance to La Primavera at 8:30 am."
                    }
                ],
                "redemption": {
                    "redemptionType": "NONE",
                    "specialInstructions": ""
                },
                "travelerPickup": {
                    "pickupOptionType": "MEET_EVERYONE_AT_START_POINT",
                    "allowCustomTravelerPickup": true
                }
            },
            "timeZone": "America/Guayaquil",
            "description": "the only legal paragliding operator in ecuador. See an amazing view of Quito and its surroundings from above.",
            "inclusions": [
                {
                    "category": "OTHER",
                    "categoryDescription": "Other",
                    "type": "OTHER",
                    "typeDescription": "Other",
                    "otherDescription": "Paragliding Kit"
                },
                {
                    "category": "OTHER",
                    "categoryDescription": "Other",
                    "type": "OTHER",
                    "typeDescription": "Other",
                    "otherDescription": "Air-conditioned vehicle"
                }
            ],
            "additionalInfo": [
                {
                    "type": "STROLLER_ACCESSIBLE",
                    "description": "Infants and small children can ride in a pram or stroller"
                },
                {
                    "type": "NO_PREGNANT",
                    "description": "Not recommended for pregnant travelers"
                },
                {
                    "type": "NO_HEART_PROBLEMS",
                    "description": "Not recommended for travelers with poor cardiovascular health"
                },
                {
                    "type": "PHYSICAL_EASY",
                    "description": "Suitable for all physical fitness levels"
                }
            ],
            "cancellationPolicy": {
                "type": "STANDARD",
                "description": "For a full refund, cancel at least 24 hours before the scheduled departure time.",
                "cancelIfBadWeather": true,
                "cancelIfInsufficientTravelers": false,
                "refundEligibility": [
                    {
                        "dayRangeMin": 1,
                        "percentageRefundable": 100
                    },
                    {
                        "dayRangeMin": 0,
                        "dayRangeMax": 1,
                        "percentageRefundable": 0
                    }
                ]
            },
            "bookingConfirmationSettings": {
                "bookingCutoffType": "FIXED_TIME",
                "bookingCutoffInMinutes": 1440,
                "confirmationType": "INSTANT",
                "bookingCutoffFixedTime": "16:00:00"
            },
            "bookingRequirements": {
                "minTravelersPerBooking": 1,
                "maxTravelersPerBooking": 4,
                "requiresAdultForBooking": false
            },
            "bookingQuestions": [
                "FULL_NAMES_LAST",
                "PASSPORT_EXPIRY",
                "PASSPORT_PASSPORT_NO",
                "SPECIAL_REQUIREMENTS",
                "FULL_NAMES_FIRST",
                "WEIGHT",
                "AGEBAND",
                "HEIGHT",
                "PASSPORT_NATIONALITY"
            ],
            "tags": [
                20234
            ],
            "destinations": [
                {
                    "ref": "735",
                    "primary": true
                }
            ],
            "itinerary": {
                "itineraryType": "ACTIVITY",
                "skipTheLine": false,
                "privateTour": true,
                "duration": {
                    "fixedDurationInMinutes": 15
                },
                "activityInfo": {
                    "location": {
                        "ref": "LOC-o0AXGEKPN4wJ9sIG0RAn5Cdd0Y9TkTxkcosDq0rJgjR12IzpogNi5POX+yGLXEoq"
                    },
                    "description": "We take off from the hill of Lumbisi towards the City, we observe the landscape of the city of Quito you can observe the mountains. We landed at the foot of the hill.\n\nThe meeting point is on the way to Lumbisí km 1 at the entrance to La Primavera at 8:30 am. From there we got on a vehicle to the mountain. "
                }
            },
            "productOptions": [
                {
                    "productOptionCode": "TG1",
                    "description": "",
                    "title": "Ecuador Parapente Quito"
                }
            ],
            "translationInfo": {
                "containsMachineTranslatedText": false
            },
            "supplier": {
                "name": "Opeturmo - Parapente Montanita"
            }
        },
        {
            "status": "INACTIVE",
            "productCode": "141567P21",
            "language": "en-US",
            "createdAt": "2019-10-08T13:12:21.535614Z",
            "lastUpdatedAt": "2020-11-13T13:41:18Z"
        },
        {
            "status": "INACTIVE",
            "productCode": "8932P17",
            "language": "en-US",
            "createdAt": "2019-06-03T13:29:09.131851Z",
            "lastUpdatedAt": "2020-11-13T13:42:38Z"
        },
        {
            "status": "INACTIVE",
            "productCode": "58593P53",
            "language": "en-US",
            "createdAt": "2020-11-13T13:46:39.927509Z",
            "lastUpdatedAt": "2020-11-13T13:51:43Z"
        },
        {
            "status": "INACTIVE",
            "productCode": "164413P1",
            "language": "en-US",
            "createdAt": "2019-06-14T00:29:29.039245Z",
            "lastUpdatedAt": "2020-11-13T14:22:08Z"
        }
    ],
    "nextCursor": "MTYwNTI3NzMyOHwxNjQ0MTNQMXxJTkFDVElWRQ=="
}
```

The example above gives the first five product records in the catalogue, with modification dates in chronological order. Note that products with a `"status"` of `"INACTIVE"` are products that have been temporarily disabled by the supplier and are therefore unavailable – when this is the case, all other requests for this product should be avoided. 

Included in the response is the `nextCursor` element, which contains an identification code that points to the next page of product records; i.e.:

```json
"nextCursor": "MTYwNTI3NzMyOHwxNjQ0MTNQMXxJTkFDVElWRQ=="
```

In your next call to [/products/modified-since](#operation/productsModifiedSince), provide the value of `nextCursor` in the `cursor` parameter to get the next page of results:

```
GET https://api.sandbox.viator.com/partner/products/modified-since?count=500&cursor=MTYwNTI3NzMyOHwxNjQ0MTNQMXxJTkFDVElWRQ==
```

The response will be similar to the initial response shown above, except it will contain the **next** 500 product records and a new `nextCursor` that points to the following page, and so on.

Continue calling [/products/modified-since](#operation/productsModifiedSince) using the `nextCursor` value in the `cursor` parameter to retrieve all pages of results. You will eventually receive a response that contains an empty `products` array and <u>does not</u> contain a `nextCursor` element. The absence of the `nextCursor` element indicates that you have, for the time being, reached the end of the list and have received all product records from our catalogue.

**Example final page response**

```json
{
    "products": []
}
```

### Periodically update your product records

Now that you have all product records from our catalogue, you can keep it up-to-date by periodically polling the service using the most-recent `nextCursor` code you received. Regardless of how frequently you call [/products/modified-since](#operation/productsModifiedSince), you will always receive all product update information so long as you keep track of the last cursor you received and use that in your subsequent call.

You should never need to re-ingest the entire product catalogue unless you need to re-initialize your database. This may happen frequently during development, but never (or rarely) in production. Due to the large volume of data, we strongly recommend keeping it to a minimum.

Products are considered updated when the supplier makes any changes to the product's details, excluding pricing and availability changes, which are retrieved from the [availability schedules](#section/Key-concepts/Product-content-and-availability-endpoints) endpoints. 

When the supplier publishes their product detail updates, the modified product [/products/modified-since](#operation/productsModifiedSince) service will respond to this same call with newly-modified products in the `products` array and a new `nextCursor` element with which to poll the service for future updates in the same way.

It would be reasonable to poll this service on an hourly basis, updating those records in your local copy of the product catalogue as they become available.

Note that the `nextCursor` code is valid indefinitely; it will not expire.

### Filtering out products

You are free to choose which products to store on your system and sell. As the product content endpoints return all available products, you will need to perform the filtering step yourself at the time of ingestion. If a product contains attributes that you do not desire; e.g., the type of product, where it operates, etc., simply discard the update and do not add it to your database.

#### Filtering out manual-confirmation products

Unless you have established the required functionality on your site to sell [manual confirmation products](#section/Booking-concepts/Booking-confirmation-types) you will need to **exclude** all non-instant confirmation products from your catalogue.

Instant confirmation products can be identified by the value of `bookingConfirmationSettings.confirmationType` being `"INSTANT"` in the response [product content response](#section/Key-concepts/Product-content-and-availability-endpoints); e.g.:

```json
"bookingConfirmationSettings": {
  "bookingCutoffType": "CLOSING_TIME",
  "bookingCutoffInMinutes": 0,
  "confirmationType": "INSTANT"
}
```

Products wih a `confirmationType` of `"MANUAL"` or `"INSTANT_THEN_MANUAL"` should be excluded if you do not wish to sell manual confirmation products.

**Please note**:

- The product catalog must be ingested and updated using the [/products/modified-since](#operation/productsModifiedSince) endpoint, unless you are only selling a relatively small subset of the products available in the Viator catalog. If that is the case, you may prefer to use the [/products/bulk](#operation/productsBulk) endpoint to ingest your selected products. 

- **Important**: the [/products/{product-code}](#operation/products) endpoint <u>should not</u> be used for bulk ingestion purposes. Your product ingestion/update strategy is one of our certification requirements and must be verified by us prior to your accessing the production server. To find out what our certification requirements are, see: [Viator Merchant API Certification](https://partnerresources.viator.com/travel-commerce/merchant/certification/?source=specs).


## Resolving references

Some information in the product content response is not communicated explicity; but rather, by reference, and therefore requires an extra de-referencing step to acquire the full details of the element.

These data types comprise:

- locations
- destinations
- tags

The following sections describe how to de-reference these elements using the API.

### Location references

All locations within the product content response are given as a location reference; e.g.:

```json
 "activityInfo": {
    "location": {
        "ref": "LOC-o0AXGEKPN4wJ9sIG0RAn5Cdd0Y9TkTxkcosDq0rJgjR12IzpogNi5POX+yGLXEoq"
    },
```

These location references can be resolved using the [/locations/bulk](#operation/locationsBulk) endpoint; for example:

**Request**:

```json
{
  "locations": [
    "LOC-o0AXGEKPN4wJ9sIG0RAn5Cdd0Y9TkTxkcosDq0rJgjR12IzpogNi5POX+yGLXEoq",
    "LOC-6eKJ+or5y8o99Qw0C8xWyK8Z2imHSU8Ozi+NYupJVyI="
  ]
}
```

**Response**:

```json
{
  "locations": [
    {
      "provider": "GOOGLE",
      "reference": "LOC-o0AXGEKPN4wJ9sIG0RAn5Cdd0Y9TkTxkcosDq0rJgjR12IzpogNi5POX+yGLXEoq",
      "providerReference": "ChIJS1UFbTyX1ZER0vTgCLKWCEQ"
    },
    {
      "provider": "TRIPADVISOR",
      "reference": "LOC-6eKJ+or5y8o99Qw0C8xWyK8Z2imHSU8Ozi+NYupJVyI=",
      "name": "Valley of the Roses",
      "address": {
        "street": "Dades Valley, near Bouteghrar",
        "administrativeArea": "El Kelaa M'gouna",
        "country": "Morocco",
        "countryCode": "MA",
        "postcode": "43000"
      },
      "center": {
        "latitude": 34.00061,
        "longitude": -6.84494
      }
    }
  ]
}
```

Note that there are two different location information providers, `"TRIPADVISOR"` and `"GOOGLE"`, referring to locations in the Tripadvisor location database or locations provided by the [Google Maps platform](https://cloud.google.com/maps-platform/) via the [Google Places API](https://developers.google.com/maps/documentation/places/web-service/overview), respectively. 

Tripadvisor locations include full details of the location in the response from [/locations/bulk](#operation/locationsBulk), including address and geolocation information. However, you will need to use the [Google Places API](https://developers.google.com/maps/documentation/places/web-service/overview) to retrieve details for Google Maps locations.

The purpose of referring to locations by reference is to avoid the unnecessary transmission of duplicate data, as multiple products may include the same location reference. Therefore, we recommend caching the data received from this endpoint, checking this first to see if a particular location's details have been retrieved by your system in the past before making a request to [/locations/bulk](#operation/locationsBulk).

Requests can be made to [/locations/bulk](#operation/locationsBulk) asynchronously; e.g., during the content ingestion process.


### Destination references

Every product in the Viator catalogue is categorized according to the destination/locale in which it operates. 

There are multiple kinds of destination, which includes cities, regions, countries and others

**Example destinations***:

| type            | destinationId | destinationName            |
|-----------------|---------------|----------------------------|
| AREA            | 51912         | Machame                    |
| CITY            | 343           | Bangkok                    |
| COUNTRY         | 749           | Panama                     |
| COUNTY          | 51632         | Xiahe County               |
| DISTRICT        | 51921         | Hunza                      |
| HAMLET          |               |                            |
| ISLAND          | 51220         | Syros                      |
| NATIONAL PARK   | 51196         | Death Valley National Park |
| NEIGHBORHOOD    | 60465         | Kensington                 |
| PENINSULA       | 51769         | Michamwi                   |
| PROVINCE        | 51255         | Mendoza Province           |
| REGION          | 4431          | Northern China             |
| STATE           |               |                            |
| TOWN            | 50971         | Swansea                    |
| UNION TERRITORY | 51542         | Daman and Diu              |
| VILLAGE         | 51011         | Pyrgos                     |
| WARD            | 52140         | Shibuya                    |

* Notes:
  The examples above are subject to change.
  These are all currently supported destination types, though for some there are no live examples at the moment


Every product has one or more destinations associated with it by way of its destination reference. This is given in the `destinations` object in the response from any of the product content endpoints; e.g.:

```json
"destinations": [
  {
    "ref": "34198",
    "primary": true
  }
],
```

To de-reference destination identifiers, you must use our destination taxonomy, which can be retrieved from the [/destinations](#operation/destinations) endpoint.

You may wish to filter products according to destination.

A call to [/destinations](#operation/destinations) will return data for **all** available destinations. 
You must store a local copy of this mapping information, as destination data does not change frequently – i.e., new destinations are rarely added. 
On-demand updates can be done in the event you encounter a product associated to a destination reference for which you do not have the details.


**Example snippet of destination taxonomy**:

```json
{
  "destinationId": 34198,
  "name": "Seminyak",
  "type": "CITY",
  "parentDestinationId": 98,
  "lookupId": "2.15.98.34198",
  "defaultCurrencyCode": "IDR",
  "timeZone": "Asia/Makassar",
  "center": {
    "latitude": -8.68877,
    "longitude": 115.161267
  }
},
{
  "destinationId": 901,
  "name": "Buenos Aires",
  "type": "CITY",
  "parentDestinationId": 22280,
  "lookupId": "9.78.22280.901",
  "destinationUrl": "https://shop.live.rc.viator.com/x/d901-ttd?mcid=42383&pid=P00108950&medium=api&api_version=2.0",
  "defaultCurrencyCode": "ARS",
  "timeZone": "America/Argentina/Buenos_Aires",
  "iataCode": "BUE",
  "center": {
    "latitude": -34.6084175,
    "longitude": -58.3731613
  }
},
...
```

Note that destinations are organized into a hierarchy. The destination's position in the hierarchy can be determined according to the `parentDestinationId` and `lookupId` fields.

In the second example above, Buenos-Aires is a `"CITY"`, and it has a `parentDestinationId` of `22280`, which is the `destinationId` of "The Pampas" – the `"REGION"` in South America where Buenos-Aires is located.

The destination's full lineage with respect to the hierarchy is given in `lookupId`, which is a series of destination ids separated by periods - in this case:

```json
  "lookupId": "9.78.22280.901"
```

| Component | Destination name | Destination type |
|-----------|------------------|------------------|
| 9 | (unnamed) | (broad continental designation) | 
| 78 | Argentina | "COUNTRY" |
| 22280 | The Pampas | "REGION" |
| 901 | Buenos-Aires | "CITY" |

Using this information, you are able to categorize each product into its geographical location for display and search purposes.

### Tag references

Each product is also categorized according to its content, features or theme. Each attribute has a corresponding identifier called a 'tag'. The tag references for each product are contained in the `tags` array, in the response from any of the product content endpoints.

**Example tags array** (product [250380P1 – Surf lessons Bali, Canggu](https://www.viator.com/tours/Seminyak/Surf-lessons-Bali-Canggu/d34198-250380P1)): 

```json

"tags": [
  20246,
  21946,
  20244
],
```

These numeric tag identifiers can be de-referenced using information available from the [/products/tags](#operation/productsTags) endpoint. This service takes no parameters and retrieves information for **all** available tags.

To learn more about tags, see this article: [Viator tags, explained](https://partnerresources.viator.com/travel-commerce/tags?source=specs)

We recommend you store a local copy of this information, as tags do not change frequently. It is only necessary to re-ingest from this endpoint in the event you encounter a product that references a tag for which you do not have the details.

As with destinations, tags are organized into a hierarchy. A tag's relative position within that hierarchy can be determined by tracing back through its parent tag ids, which (if the tag has any) are listed in its `parentTagIds` element. Each tag can have multiple parent tags, and each tag can eventually be traced back to its parent. Parent tags are tags that have no parents; i.e., they are at the top of the hierachy.

For example, tag: **20244 (Sports Lessons)** in [/products/tags](#operation/productsTags) response:

```json
{
  "tagId": 20244,
  "parentTagIds": [
      21478,
      21909,
      21915
  ],
  "allNamesByLocale": {
      "de": "Sportkurse",
      "no": "Treningskurs",
      "sv": "Idrottslektioner",
      "pt": "Aulas de esportes",
      "en_AU": "Sports Lessons",
      "en": "Sports Lessons",
      "it": "Lezioni di sport",
      "fr": "Cours de sport",
      "en_UK": "Sports Lessons",
      "es": "Sesiones deportivas",
      "zh": "运动课",
      "zh_HK": "體育課程",
      "zh_TW": "運動課程",
      "ja": "スポーツ教室",
      "zh_CN": "运动课",
      "da": "Sportsundervisning",
      "nl": "Sportlessen"
  }
},

```

The `parentTagIds` for 20244 - Sports lessons are:

- **21478** – "Active & Outdoor Classes"
- **21909** – "Outdoor Activities"
- **21915** – "Classes & Workshops"

These three tags have no parent tags, and are therefore at the top of the hierarchy. Applying this same process to the other tags in the `tags` array, we can determine the full set of tags for this product, in this case:

- **21909** – "Outdoor Activities"
  - **21478** – "Active & Outdoor Classes"
    - **20244** - "Sports lessons"
- **21915** – "Classes & Workshops" 
- **21946** – "Good for avoiding crowds"
- **21442** – "On the water"
  - **20246** – "Surfing lessons"

By traversing the hierarchy in this way, we have surfaced seven tags that pertain to this product with different levels of generality; i.e. it is an 'active and outdoor class', and it is a 'sports lesson'. More generally, it is an 'outdoor activity', a class or workshop, and is 'good for avoiding crowds':

In this way, you can categorize products for search and recommendation purposes, or to create category display and search buttons as seen on [viator.com 'things to do' pages](https://www.viator.com/Adelaide/d363-ttd); e.g.:

![tag categories on viator.com](img/ttd-tags.png)


## Ingesting and updating availability schedules

Availability schedule information for all products is available to be ingested and updated via the [/availablity/schedules/modified-since](#operation/availabilitySchedulesModifiedSince) endpoint. This endpoint functions in a similar manner to the [/products/modified-since](#operation/productsModifiedSince) endpoint; i.e., an initial call is made that returns all availability data in bulk, and then calls are made periodically to that same endpoint, which will return a delta update.

Therefore, to initialize your local copy of our availability schedule information, make a call to [/availability/schedules/modified-since](#operation/availabilitySchedulesModifiedSince), including only the `count` query parameter, which we recommend setting to `500`. 

For the sake of brevity, in the following example, `count` is set to `5`

**Example request**

```
GET https://api.viator.com/partner/availability/schedules/modified-since?count=5
```

You will receive a response similar to the following:

```json
{
    "availabilitySchedules": [
        {
            "productCode": "3320STOLZadvaft",
            "bookableItems": [
                {
                    "seasons": [
                        {
                            "startDate": "2020-11-23",
                            "endDate": "2020-12-22",
                            "pricingRecords": [
                                {
                                    "daysOfWeek": [
                                        "WEDNESDAY",
                                        "THURSDAY",
                                        "FRIDAY",
                                        "SATURDAY",
                                        "SUNDAY"
                                    ],
                                    "timedEntries": [
                                        {
                                            "startTime": "15:30"
                                        }
                                    ],
                                    "pricingDetails": [
                                        {
                                            "pricingPackageType": "PER_PERSON",
                                            "minTravelers": 1,
                                            "ageBand": "INFANT",
                                            "price": {
                                                "original": {
                                                    "recommendedRetailPrice": 0.00,
                                                    "partnerNetPrice": 0.00,
                                                    "bookingFee": 0.00,
                                                    "partnerTotalPrice": 0.00
                                                }
                                            }
                                        },
                                        {
                                            "pricingPackageType": "PER_PERSON",
                                            "minTravelers": 1,
                                            "ageBand": "ADULT",
                                            "price": {
                                                "original": {
                                                    "recommendedRetailPrice": 17.20,
                                                    "partnerNetPrice": 11.50,
                                                    "bookingFee": 0.69,
                                                    "partnerTotalPrice": 12.19
                                                }
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ],
            "currency": "EUR"
        },
        {
            "productCode": "14093P1",
            "bookableItems": [],
            "currency": "EUR"
        },
        {
            "productCode": "3567AKL_SAF",
            "bookableItems": [],
            "currency": "NZD"
        },
        {
            "productCode": "5855RIPLEYS",
            "bookableItems": [],
            "currency": "USD"
        },
        {
            "productCode": "3033ENTRY_TR",
            "bookableItems": [],
            "currency": "USD"
        }
    ],
    "nextCursor": "MTU3ODA2Njc4NnwzMDMzRU5UUllfVFI="
}
```

The endpoint returns an array (`availabilitySchedules`) where each item contains all availabilty schedule information for a single product, and a cursor (`nextCursor`) that is to be used in subsequent calls to this endpoint to retrieve the next page of results.

For details on how to interpret the availability schedule object, see [Availability schedules](#section/Key-concepts/Availability-schedules).

**Note**: An empty `bookableItems` array means that the product indicated by `productCode` is not active, has no availability, and therefore cannot be booked. This fact will be reflected if the product details are requested from the [/products/{product-code}](#operation/products) endpoint; e.g., for product `3033ENTRY_TR`:

```json
{
    "status": "INACTIVE",
    "productCode": "3033ENTRY_TR",
    "language": "en",
    "createdAt": "2006-05-01T07:00:00Z"
}
```

### Pagination

As with the [/products/modified-since](#operation/productsModifiedSince) endpoint, you will receive as many records as requested via the `count` request parameter. Included in the response is the `nextCursor` element, which contains a code that points to the next page of availability records.

After receiving this first response, your next request to the [/availablity/schedules/modified-since](#operation/availabilitySchedulesModifiedSince) service should include the value of `nextCursor` in the `cursor` request parameter; i.e.:

```
GET https://api.sandbox.viator.com/partner/availability/schedules/modified-since?count=5&cursor=MTU3ODA2Njc4NnwzMDMzRU5UUllfVFI=
```

The response will be similar to the initial response shown above, except it will contain the next `count` number of availability schedule records and a new `nextCursor` that points to the following page.

Loop through this process until you receive a response that contains an empty `availabilitySchedules` array and <u>does not</u> contain a `nextCursor` element. The absence of the `nextCursor` element indicates that you have, for the time being, reached the end of the list and your availability information is fully up-to-date.

**Example final page response**

```json
{
    "availabilitySchedules": []
}
```

### Periodically update your availability information

Once your availability schedule information ingestion is complete, you can keep it up-to-date by periodically polling the service using the latest `nextCursor` code you received; i.e., from the page prior to the final, empty page. 

If new availability schedule information is available, the service will respond with new availability information in the `availabilitySchedules` array and a new `nextCursor` element with which to poll the service for future updates in the same way. Note that the `nextCursor` code is valid indefinitely; it will not expire.

As with the [/products/modified-since](#operation/productsModifiedSince) endpoint, we recommend polling this service on an hourly basis. The longer the interval between updates, the more likely your availability information will be out of date, raising the likelihood of availability differences when you make a real-time availability check using the [/availability/check](#operation/availabilityCheck) service.

Again, you should only need to call [/availablity/schedules/modified-since](#operation/availabilitySchedulesModifiedSince) without a `cursor` parameter **once**, for the first call of the initial ingestion. All future calls should include the `cursor` parameter and the results used to update your database.

### Filtering out availability schedules

As you may not be offering Viator's full product catalogue for sale on your site, you are only required to store availability information for the products you support. Therefore, if you are filtering out products from our catalogue, you should also perform a check with regard to the availability schedule information received from the [/availablity/schedules/modified-since](#operation/availabilitySchedulesModifiedSince) to ensure that it pertains to a product in your catalogue.

This can be done by checking the `productCode` field in the ProductAvailabilitySchedule object response.

**Please note**:

- The availability and pricing schedules must be ingested and updated using the [/availability/schedules/modified-since](#operation/availabilitySchedulesModifiedSince) endpoint, unless you are only selling a relatively small subset of the products available in the Viator catalog. If that is the case, you may prefer to use the [/availability/schedules/bulk](#operation/availabilitySchedulesBulk) endpoint to ingest your selected product availability schedules. 

- **Important**: the [/availability/schedules/{product-code}](#operation/availabilitySchedules) endpoint <u>should not</u> be used for bulk ingestion purposes. Your availability schedule ingestion/update strategy is one of our certification requirements and must be verified by us prior to your accessing the production server. To find out what our certification requirements are, see: [Viator Merchant API Certification](https://partnerresources.viator.com/travel-commerce/merchant/certification/?source=specs).


## Update frequency

We expect that your update frequency will not be more frequent than the following guidelines. More frequent updates will place an excessive burden on our systems and may result in your integration being shut off.

See section on [Rate Limiting](#section/Workflows/Rate-limiting) for more information.

### Fixed-cadence delta updates

In order to keep your local databases up-to-date without placing an excessive burden on our servers, we expect you use the following fixed cadences at which you should poll the content-ingestion endpoints:

| Endpoint                                                                                | Update cadence                                                                                                                                                                                                           |
|-----------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [/products/modified-since](#operation/productsModifiedSince)                            | Every 15-30 minutes following initial ingestion                                                                                                                                                                          |
| [/availability/schedules/modified-since](#operation/availabilitySchedulesModifiedSince) | Every 15-30 minutes following initial ingestion                                                                                                                                                                          |
| [/bookings/modified-since](#operation/bookingsModifiedSince)                            | Every 5-10 minutes following initial ingestion to stop notification emails sent by Viator for supplier cancellations of bookings made through the API (merchant partners only). <br/><br/>Hourly for all other scenarios |
| [/bookings/modified-since/acknowledge](#operation/bookingsModifiedSinceAcknowledge)     | Right after ingesting the booking modifications                                                                                                                                                                          |

### Fixed-cadence full updates

To ensure your systems reflect any removals of or changes to existing destinations, locations or booking questions, we expect that you retrieve full updates from these endpoints as follows:

| Endpoint                                                                  | Update cadence |
|---------------------------------------------------------------------------|----------------|
| [/destinations](#operation/destinations)                                  | Weekly         |
| [/attractions/search](#operation/attractionsSearch)                       | Weekly         |
| [/products/booking-questions](#operation/productsBookingQuestions)        | Monthly        |
| [/products/tags](#operation/productsTags)                                 | Weekly         | 
| [/products/recommendations](#operation/productsRecommendations)            | Weekly         | 
| [/locations/bulk](#operation/locationsBulk)                               | Monthly        |
| [/reviews/product](#operation/reviewsProduct)                             | Weekly         |
| [/bookings/cancel-reasons](#operation/bookingsCancelReasons)              | Monthly        |
| [/suppliers/search/product-codes](#operation/suppliersSearchProductCodes) | Weekly         |
| [/bookings/status](#operation/bookingsStatus)                             | Hourly         |
| [/exchange-rates](#operation/exchangeRates)                               | Daily          |

### On-demand updates

When ingesting product content, in the event that you encounter an unknown reference – i.e., a new location reference, booking question, tag or destination id – or, if you need to perform a currency conversion for which the last exchange rate you retrieved has expired, we expect you to call the relevant endpoint to resolve the new reference immediately or just after completing the product content update.

| Endpoint                                                           | When to update                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|--------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [/exchange-rates](#operation/exchangeRates)                        | Whenever you encounter a currency that you need to convert, but the last-retrieved exchange-rate for that currency-pair is no longer valid due to having expired (according to the `expiry` value in the response from this endpoint)                                                                                                                                                                                                                                         |
| [/locations/bulk](#operation/locationsBulk)                        | Whenever you encounter a location reference code that you do not yet have the details for (we recommend retrieving location details in batches using this endpoint; therefore, the retrieval of new location data can commence after all new product content is retrieved)                                                                                                                                                                                                    |
| [/products/tags](#operation/productsTags)                          | Whenever you encounter a tag reference code that you do not yet have the details for                                                                                                                                                                                                                                                                                                                                                                                          |
| [/destinations](#operation/destinations)                           | Whenever you encounter a destination id that you do not yet have the details for                                                                                                                                                                                                                                                                                                                                                                                              |
| [/products/booking-questions](#operation/productsBookingQuestions) | Whenever you encounter a booking question identifier that you do not yet have the details for                                                                                                                                                                                                                                                                                                                                                                                 |
| [/attractions/{attraction-id}](#operation/attractions)             | Whenever you encounter an attraction identifier that you do not yet have the details for                                                                                                                                                                                                                                                                                                                                                                                      |
| [/reviews/product](#operation/reviewsProduct)                      | If the number of reviews available for a product, which is reported in the `reviews.totalReviews` element in the [product content response](#section/Key-concepts/Product-content-and-availability-endpoints), has changed compared with its previous value, the reviews for that product should also be refreshed by calling the [/reviews/product](#operation/reviewsProduct) endpoint.  We request that you rate-limit your use of this service to 30 requests per minute. |
| [/bookings/status](#operation/bookingsStatus)                      | Whenever you encounter a booking waiting for manual confirmation. Must not be called more than once every 3 minutes.                                                                                                                                                                                                                                                                                                                                                          |

## Rate limiting

We impose rate limits on the usage of this API to prevent excessive demands being made of our system that might otherwise affect its availability for all users.

Our methodology involves applying a rate-limit on a per-endpoint / per-PUID (Partner Unique ID) basis; therefore, reaching the rate-limit with respect to your usage of one endpoint will only affect the availability of that endpoint, not the others.

In addition, we apply an additional security layer of rate limiting based on client IP address. This limits bursts of consecutive requests from the same IP over a short period of time and may trigger temporary request rejection even when per-endpoint / per-PUID limits have not been reached.

We do not have a universal rate limit that applies to all users. The rate limit you are required to operate within is based on a standard commensurate with the scale of your operation.

This is to say that if the volume of traffic to your site is such that under normal conditions your operations are causing you to frequently receive HTTP 429 (Too Many Requests) responses, you can ask for your rate-limit to be increased. If that is the case, please speak to your account manager to discuss whether increasing your rate limit would be the appropriate solution.

### Interpreting the HTTP 429 response

If a request to an endpoint yields an HTTP 429 (Too Many Requests) response, information regarding your present usage status can be located in the following four header fields:

- `RateLimit-Limit` 
  - Total limit of requests for this endpoint per rolling 10s time window
- `RateLimit-Remaining`:
  - The number of requests that remain available to you in the present 10s period 
- `RateLimit-Reset`:
  - How long (in seconds) from the present moment it would take for the number of available requests to reach its maximum value
- `Retry-After`:
  - A recommendation regarding how long (in seconds) it would be optimal to wait before making a subsequent call to that endpoint

**Example HTTP 429 response:**

```json
HTTP/1.1 429
...
..
RateLimit-Limit: 16
RateLimit-Remaining: 0
RateLimit-Reset: 10
Retry-After: 10
...
..
 
{ 
  "code":"TOO_MANY_REQUESTS",
  "message":"Too many requests, please try again",
  "timestamp":"2022-09-13T13:25:26.179433Z",
  "trackingId":"4badb933-ad65-4464-ae9c-c20e4a70c0d2"
}
```

This can interpreted as:

`RateLimit-Limit: 16`
- You can make 16 requests to this endpoint per 10s rolling time window

`RateLimit-Remaining: 0`
- You have no remaining requests available in the current 10s epoch (as you would expect, since it is for this reason that you are receiving this response in the first place)

`RateLimit-Reset: 10`
- If you were to wait 10s, your `RateLimit-Remaining` value would reach its maximum; which, in this case, is 16 requests

`Retry-After: 10`
- It is recommended you pause for 10s before re-attempting to call this endpoint

Note that these rate-limit-related values will also be returned in the HTTP 200 (success) response. Inspect these values if you wish to estimate whether your method of implementing this API will remain sustainable at scale.

### Concurrency-based rate limiting

While rate-limiting is imposed per API key, if our system reaches its capacity on account of high demand overall, you may be rate limited even though you have not personally exceeded your individual rate limit.

In this case, you will receive a HTTP 503 (Service Unavailable) response. The header of this response will include the `Retry-After` field. In the example below, the recommendation is to pause for 60s before retrying the request:
 e.g.:

```json
HTTP/1.1 503
...
..
Retry-After: 60
...
..
 
{"code":"SERVICE_UNAVAILABLE","message":"Service is currently unavailable, please try again","timestamp":"2022-09-13T08:52:48.693734Z","trackingId":"fc342644-e48f-4fd9-96e3-a6860607d405"}
```

# Appendices

## Inclusions & exclusions

The `inclusions` and `exclusions` arrays are returned for active products in the response from the [product content endpoints](#section/Key-concepts/Product-content-and-availability-endpoints). The array items for both `inclusions` and `exclusions` are objects defined by the same schema, `InclusionExclusionItem`.

The following table describes the mapping of the possible combinations of `category`, `categoryDescription`, `type`, and `typeDescription` elements of the object in the response that you may encounter. 

New Categories and types can be added over time, allowing flexibility for different use cases.

Note: Changes on the table below become effective by the end of April 2025, see Notes column for details.

<table>
<tr>
    <th><code>category</code></th>
    <th><code>categoryDescription</code></th>
    <th><code>type</code></th>
    <th><code>typeDescription</code></th>
    <th>notes</th>
</tr>
<tr>
    <td rowspan='10' colspan='1'><code>"FEES_AND_TAXES"</code></td>
    <td rowspan='10' colspan='1'>Fees</td>
    <td><code>"AIRPORT_AND_DEPARTURE_TAX"</code></td>
    <td>Airport/Departure Tax</td>
    <td></td>
</tr>
<tr>
    <td><code>"ALL_FEES_AND_TAXES"</code></td>
    <td>All Fees and Taxes</td>
    <td>Deprecated - April 2025</td>
</tr>
<tr>
    <td><code>"FUEL_SURCHARGE"</code></td>
    <td>Fuel surcharge</td>
    <td></td>
</tr>
<tr>
    <td><code>"GRATUITIES"</code></td>
    <td>Gratuities</td>
    <td></td>
</tr>
<tr>
    <td><code>"GST"</code></td>
    <td>GST (Goods and Services Tax)</td>
    <td>Deprecated - April 2025</td>
</tr>
<tr>
    <td><code>"LANDING_AND_FACILITY_FEES"</code></td>
    <td>Landing and facility fees</td>
    <td></td>
</tr>
<tr>
    <td><code>"PARKING_FEES"</code></td>
    <td>Parking Fees</td>
    <td></td>
</tr>
<tr>
    <td><code>"ADMISSION_FEES"</code></td>
    <td>Admission Fees</td>
    <td>New - start April 2025</td>
</tr>
<tr>
    <td><code>"ENTRANCE_FEES"</code></td>
    <td>Entrance Fees</td>
    <td>New - start April 2025</td>
</tr>
<tr>
    <td><code>"GOVERNMENT_FEES"</code></td>
    <td>Government Fees</td>
    <td>New - start April 2025</td>
</tr>
<tr>
    <td rowspan='11' colspan='1' ><code>"FOOD_AND_DRINK"</code></td>
    <td rowspan='11' colspan='1' >Food and drink</td>
    <td><code>"ALCOHOLIC_BEVRAGES"</code><br /><code>"ALCOHOLIC_BEVERAGES"</code></td>
    <td>Alcoholic Beverages</td>
    <td></td>
</tr>
<tr>
    <td><code>"BOTTLED_WATER"</code></td>
    <td>Bottled water</td>
    <td></td>
</tr>
<tr>
    <td><code>"BREAKFAST"</code></td>
    <td>Breakfast</td>
    <td></td>
</tr>
<tr>
    <td><code>"BRUNCH"</code></td>
    <td>Brunch</td>
    <td></td>
</tr>
<tr>
    <td><code>"COFFEE_AND_TEA"</code></td>
    <td>Coffee and/or Tea</td>
    <td></td>
</tr>
<tr>
    <td><code>"DINNER"</code></td>
    <td>Dinner</td>
    <td></td>
</tr>
<tr>
    <td><code>"LUNCH"</code></td>
    <td>Lunch</td>
    <td></td>
</tr>
<tr>
    <td><code>"REFRESHMENTS"</code></td>
    <td>Refreshments</td>
    <td>Deprecated - April 2025</td>
</tr>
<tr>
    <td><code>"SNACKS"</code></td>
    <td>Snacks</td>
    <td></td>
</tr>
<tr>
    <td><code>"SODA_POP"</code></td>
    <td>Soda/Pop</td>
    <td></td>
</tr>
<tr>
    <td><code>"MEALS"</code></td>
    <td>Meals</td>
    <td>New - start April 2025</td>
</tr>
<tr>
    <td rowspan='2' colspan='1' ><code>"SOUVENIRS"</code></td>
    <td rowspan='2' colspan='1' >Souvenirs</td>
    <td><code>"CERTIFICATE"</code></td>
    <td>Certificate</td>
    <td>Deprecated - April 2025</td>
</tr>
<tr>
    <td><code>"RECIPE_BOOKLET"</code></td>
    <td>Recipe booklet</td>
    <td>Deprecated - April 2025</td>
</tr>
<tr>
    <td rowspan='5' colspan='1' ><code>"TRANSPORT_AMENITIES"</code></td>
    <td rowspan='5' colspan='1' >Transportation amenities</td>
    <td><code>"AIR_CONDITIONED_VEHICLE"</code></td>
    <td>Air-conditioned vehicle</td>
    <td></td>
</tr>
<tr>
    <td><code>"PRIVATE_TRANSPORTATION"</code></td>
    <td>Private transportation</td>
    <td></td>
</tr>
<tr>
    <td><code>"RESTROOM_ON_BOARD"</code></td>
    <td>Restroom on board</td>
    <td></td>
</tr>
<tr>
    <td><code>"WIFI_ONBOARD"</code></td>
    <td>WiFi on board</td>
    <td></td>
</tr>
<tr>
    <td><code>"PUBLIC_TRANSPORTATION"</code></td>
    <td>Public transportation (bus, subway, cable car, etc.)</td>
    <td>New - start April 2025</td>
</tr>
<tr>
    <td rowspan='10' colspan='1' ><code>"EQUIPMENT"</code></td>
    <td rowspan='10' colspan='1' >Use of Equipment</td>
    <td><code>"ALL_INGREDIENTS"</code></td>
    <td>All ingredients</td>
    <td>Deprecated - April 2025</td>
</tr>
<tr>
    <td><code>"USE_OF_OTHER_EQUIPMENT"</code></td>
    <td>Other</td>
    <td>Deprecated - April 2025</td>
</tr>
<tr>
    <td><code>"USE_OF_BICYCLE"</code></td>
    <td>Use of bicycle</td>
    <td></td>
</tr>
<tr>
    <td><code>"USE_OF_COOKING_UTENSILS"</code></td>
    <td>Use of cooking utensils</td>
    <td>Deprecated - April 2025</td>
</tr>
<tr>
    <td><code>"USE_OF_SCUBA_EQUIPMENT"</code></td>
    <td>Use of SCUBA equipment</td>
    <td></td>
</tr>
<tr>
    <td><code>"USE_OF_SEGWAY"</code></td>
    <td>Use of Segway</td>
    <td></td>
</tr>
<tr>
    <td><code>"USE_OF_SNORKELING_EQUIPMENT"</code></td>
    <td>Use of snorkelling equipment</td>
    <td></td>
</tr>
<tr>
    <td><code>"USE_OF_TRIKKE"</code></td>
    <td>Trikke</td>
    <td></td>
</tr>
<tr>
    <td><code>"BOOSTER_SEAT"</code></td>
    <td>Booster seat</td>
    <td>New - start April 2025</td>
</tr>
<tr>
    <td><code>"LOCKER"</code></td>
    <td>Locker</td>
    <td>New - start April 2025</td>
</tr>
<tr>
    <td rowspan='2' colspan='1' ><code>"EXCESS_CHARGES"</code></td>
    <td rowspan='2' colspan='1' >Excess charges</td>
    <td><code>"EXCESS_BAGGAGE"</code></td>
    <td>Excess baggage</td>
    <td>New - start April 2025</td>
</tr>
<tr>
    <td><code>"OVER_WEIGHT_LIMIT"</code></td>
    <td>Over weight limit</td>
    <td>New - start April 2025</td>
</tr>
<tr>
    <td><code>"OTHER"</code></td>
    <td>Other</td>
    <td><code>"OTHER"</code></td>
    <td>Other</td>
    <td></td>
</tr>
</table>

## Update history

| Date | Description |
|------|-------------|
| 31 Oct 2022 | Removed v1-v2 migration reference section |
| 14 Sep 2022 | Revised [Workflows – Rate limiting](#section/Workflows/Rate-limiting) and HTTP 429 response description with respect to new rate-limiting policy |
| 23 Aug 2022 | Clarified new standard rate-limiting policy that applies to all endpoints in new section: [Workflows – Rate limiting](#section/Workflows/Rate-limiting) |
| 15 Aug 2022 | Altered advice regarding the recommended frequency for fixed cadence full updates for various endpoints in [Workflows – Update frequency](#section/Workflows/Update-frequency) section | 
| 3 Aug 2022 | Updated descriptions of [/products/modified-since](#operation/productsModifiedSince), [/products/bulk](#operation/productsBulk) and [/products/{product-code}](#operation/products) to highlight the polymorphism in the response / discriminator drop-down on `status` element |
| 1 Aug 2022 | Renamed **Key Concepts – Content ingestion endpoints** to [Key Concepts – Product Content and availability endpoints](#section/Key-concepts/Product-content-and-availability-endpoints) and updated this section with usage recommendations |
| 27 July 2022 | Updated [conditonal booking questions logic table](#section/Booking-concepts/Booking-questions) to include advice about `TRANSFER_DEPARTURE_MODE` booking question |
| 18 July 2022 | Modifed [/bookings/cancel-reasons](#operation/bookingsCancelReasons) endpoint to accept a query parameter to specify customer or supplier-initiated cancellation reasons |
| 18 July 2022 | Added two new endpoints to allow merchant partners to manage supplier-initiated booking cancellations: [/bookings/modified-since](#operation/bookingsModifiedSince) and [/bookings/modified-since/acknowledge](#operation/bookingsModifiedSinceAcknowledge) |
| 6 July 2022 | Improved descriptions of `lineItems` and `totalPrice` elements of `bookableItems[]` object array in [/availability/check](#operation/availabilityCheck) endpoint response |
| 30 June 2022 | Clarified conditions in conditional booking questions section of [Booking concepts - Booking questions](#section/Booking-concepts/Booking-questions) section |
| 29 June 2022 | Added `target-lander` query parameter to [/products/{product-code}](#operation/products), [/products/modified-since](#operation/productsModifiedSince), [/products/bulk](#operation/productsBulk) and [/products/search](#operation/productsSearch) endpoints |
| 23 June 2022 | Added `attractionId` to filtering options in [/products/search](#operation/productsSearch) endpoint |
| 22 June 2022 | Updated string length specifications in VoucherInfo schema and `partnerBookingRef` in [/bookings/book](#operation/bookingsBook) request object |
| 20 June 2022 | Updated maximum string length specifications for [/bookings/book](#operation/bookingsBook) request object (BookerInfo and CommunicationInfo schemata) |
| 3 June 2022 | Added new supplier search endpoint: [/suppliers/search/product-codes](#operation/suppliersSearchProductCodes) |
| 1 June 2022 | Added links to various articles on the [Viator Partner Resource Center](https://partnerresources.viator.com/) throughout document |
| 26 May 2022 | Added advice about review authenticity: [Key concepts - Review authenticity](#section/Key-concepts/Review-authenticity) |
| 23 May 2022 | Added `partnerNetFromPrice` property to `ProductSearchPricing` schema spec in response from [/products/search](#operation/productsSearch) endpoint |
| 20 May 2022 | Added advice regarding whether or not an endpoint should be used to ingest details about the entire product catalog to [/products/{product-code}](#operation/products), [/products/bulk](#operation/productsBulk), [/availability/schedules/{product-code}](#operation/availabilitySchedules) and [/availability/schedules/modified-since](#operation/availabilitySchedulesModifiedSince) endpoint descriptions. |
| 17 May 2022 | Added note about extra validation requirements for `communication.phone` field in request to [/bookings/book](#operation/bookingsBook) endpoint |
| 11 May 2022 | Modified [update frequency recommendation](#section/Workflows/Update-frequency) for [/locations/bulk](#operation/locationsBulk) endpoint from 'weekly' to 'monthly' due to the relatively changeless nature of locations data. |
| 10 May 2022 | Modified description of [/exchange-rates](#operation/exchangeRates) endpoint to include additional currencies (ARS, CLP, COP, ILS, PEN, PHP) available for conversion |
| 1 Apr 2022 | Modified note to [Booking questions – Conditional booking questions](#section/Booking-concepts/Booking-questions) (third bullet in 'Extra notes') |
| 22 Mar 2022 | Added note to [Booking questions – Conditional booking questions](#section/Booking-concepts/Booking-questions) (third bullet in 'Extra notes') |
| 8 Mar 2022 | Corrected `"OTHER_HEALTH"` to `"HEALTH_OTHER"` in `AdditionalInfo` schema used in the product response |
| 11 Feb 2022 | Removed note about no-index policy from [/v1/attraction/products](#operation/v1AttractionProducts) endpoint |
| 9 Feb 2022 | Added [Booking concepts – Low-margin products](/#section/Booking-concepts/Low-margin-products) section | 
| 1 Feb 2022 | Added [Conventions - Endpoint timeout settings](#section/Conventions/Endpoint-timeout-settings) section |
| 5 Jan 2022 | Corrected response schema details in [/bookings/{booking-reference}/cancel](#operation/bookingsCancel) and [/bookings/{booking-reference}/cancel-quote](#operation/bookingsCancelQuote) to indicate that `status` and `bookingId` are required properties |
| 15 Nov 2021 | Added Basic-access Affiliate postman collection to [Testing section](#section/Testing) |
| 5 Nov 2021 | Clarified description of exp-demo header parameter |
| 2 Nov 2021 | Added `"LOCATION"` as option for `logistics.travelerPickup.locations[].pickupType` in product content response |
| 5 Jan 2022 | Corrected response schema details in [/bookings/{booking-reference}/cancel](#operation/bookingsCancel) and [/bookings/{booking-reference}/cancel-quote](#operation/bookingsCancelQuote) to indicate that `status` and `bookingId` are required properties |
| 15 Nov 2021 | Added Basic-access Affiliate postman collection to [Testing section](#section/Testing) |
| 5 Nov 2021 | Clarified description of exp-demo header parameter |
| 2 Nov 2021 | Added `"LOCATION"` as option for `logistics.travelerPickup.locations[].pickupType` in product content response |
| 28 Oct 2021 | Updated [Booking Concepts – Booking questions – Conditional booking questions](#conditional-booking-questions) table |
| 15 Oct 2021 | Modified PriceObject schema in response from /availabililty/* endpoints to include provision for commission-payment-model merchants. See [/availability/check](#operation/availabilityCheck) for example |
| 13 Oct 2021 | Added section: [How to determine if a product option supports pickup](#product-option-pickup) |
| 7 Oct 2021 | Added `"TRANSFER_ARRIVAL_DROP_OFF"` booking question details in [Booking details – conditional booking concepts](#section/Booking-concepts/Booking-questions) section |
| 1 Oct 2021 | Changed 'standard access' to 'full access' in [Access to endpoints](#section/Access-to-endpoints) section |
| 1 Oct 2021 | Added note about `"TRANSFER_PORT_CRUISE_SHIP"` booking question to [Booking concepts – Booking questions section](#section/Booking-concepts/Booking-questions) |
| 27 Sep 2021 | Added note about time-out recommendation to [/bookings/book](#operation/bookingsBook) |
| 16 Sep 2021 | Removed `topX` and modified options for `sortOrder` request parameters in [/attraction/reviews/](#operation/v1AttractionReviews) endpoint |
| 13 Sep 2021 | Added `reference` element to `Supplier` schema of `ActiveProduct` | 
| 6 Sep 2021 | Modified available options for `sortOrder` request parameter in [/v1/taxonomy/attractions](#operation/v1TaxonomyAttractions) and [/v1/search/attractions](#operation/v1SearchAttractions) endpoints |
| 27 Aug 2021 | Added basic and full-access affiliate types to [Access to endpoints](#section/Access-to-endpoints) section |
| 26 Aug 2021 | Added [Key concepts – Protecting unique content](#section/Key-concepts/Protecting-unique-content) section |
| 23 Aug 2021 | Added [Key concepts – v1 to v2 migration reference – Mapping categories to tags](#section/Key-concepts/V1-to-V2-migration-reference) section |
| 19 Aug 2021 | Added Tripadvisor as an additional reviews provider in [/reviews/product](#operation/reviewsProduct) endpoint |  
| 12 Aug 2021 | Updated [Access to endpoints](#section/Access-to-endpoints) section to include [/products/booking-questions](#operation/productsBookingQuestions) and [/bookings/status](#operation/bookingsStatus) |
| 10 Aug 2021 | Bugfix – `provider` element in request to [/reviews/product](#operation/reviewsProduct) now listed as 'required' |
| 5 Aug 2021 | Added new sorting options to [/reviews/product](#operation/reviewsProduct) endpoint |
| 1 Jul 2021 | Added [Workflows - Update frequency](#section/Workflows/Update-frequency) section |
| 22 Jun 2021 | Deprecated [/v1/product/reviews](#operation/v1ProductReviews) endpoint |
| 21 Jun 2021 | Added [/reviews/product](#operation/reviewsProduct) endpoint |
| 18 Jun 2021 | Added [/products/search](#operation/productsSearch) endpoint |
| 9 Jun 2021 | Added [Booking concepts – supplier communications](#section/Booking-concepts/Supplier-communications)
| 9 Jun 2021 | Added [Booking concepts – working with age bands](#section/Booking-concepts/Working-with-age-bands) section |
| 4 Jun 2021 | Added premium `viatorUniqueContent` element to ActiveProduct |
| 27 May 2021 | Added [Booking-concepts – Per-person and unit pricing](#section/Booking-concepts/Per-person-and-unit-pricing) section | 
| 21 May 2021 | Added `reviews` element to responses of [product content endpoints](#section/Key-concepts/Product-content-and-availability-endpoints) |
| 14 May 2021 | Added **Age-bands** section to [Booking concepts - Booking questions](#section/Booking-concepts/Booking-questions) section |
| 5 May 2021 | Updated Conditional booking questions table in [Booking concepts - Booking questions](#section/Booking-concepts/Booking-questions) section |
| 25 Mar 2021 | Added v1 endpoints for affiliate partners |
| 23 Mar 2021 | Added [Resolving references](#section/Workflows/Resolving-references) section |
| 11 Mar 2021 | Added `campaign-value` parameter to [/products/modified-since](#operation/productsModifiedSince), [/products/bulk](#operation/productsBulk) and [/products/{product-code}](#operation/products) endpoints; added AvailabilityScheduleSummary `summary` schema to /availability/schedules/* endpoint responses |
| 16 Feb 2021 | Added [Determining ratings](#section/Workflows/Determining-ratings) section; added [Conventions - Accept-Encoding](#section/Conventions/Accept-Encoding) section |
| 21 Jan 2021 | Extended BookingBookRequest schema (used in [/bookings/book](#operation/bookingsBook)) to include new AdditionalBookingDetails schema to allow custom voucher text |
| 18 Jan 2021 | Modified `rejectionReasonCode` in responses from [/bookings/book](#operation/bookingsBook) and [/bookings/status](#operation/bookingsStatus) endpoints |
| 12 Jan 2021 | Added [Key concepts – Booking confirmation types](#section/Booking-concepts/Booking-confirmation-types) section as sale of manual confirmation products has now been enabled. |
| 7 Dec 2020 | Added DayOperatingHours schema array to BookableItemSeason schema in availability-schedules endpoints | 
| 24 Nov 2020 | Added [Key concepts – Booking cutoff times](#section/Booking-concepts/Booking-cutoff-times) section |
| 12 Nov 2020 | Added [Workflows – Checking booking status](#section/Booking-concepts/Checking-booking-status) section |
| 6 Nov 2020 | Added [/bookings/status](#operation/bookingsStatus) endpoint specification |
| 5 Nov 2020 | Added [Workflows – Ingesting and updating availability schedules](#section/Workflows/Ingesting-and-updating-availability-schedules) section |
| 4 Nov 2020 | Updated `id` values in [/products/booking-questions](#operation/productsBookingQuestions) endpoint |
| 3 Nov 2020 | Added [Key concepts – V1 to V2 migration reference](#section/Key-concepts/V1-to-V2-migration-reference) section |
| 28 Oct 2020 | Added sections for [Activity](#activity-itinerary), [Hop-on hop-off](#hop-on--hop-off-itinerary) and [Unstructured](#unstructured-itinerary) itinerary types |
| 13 Oct 2020 | - Added `maxLength` field to BookingQuestion schema in response from [/products/booking-questions](#operation/productsBookingQuestions)<br /> - Updated AdditionalInfo schema |
| 6 Oct 2020 | - Added [Appendices - Inclusions and exclusions](#section/Appendices/Inclusions-and-exclusions)<br /> - Modified ActiveProduct schema to include new required `Supplier` element |
| 1 Oct 2020 | Added [About](#section/About) section |
| 29 Sep 2020 | Added [Key concepts - Availability Schedules](#section/Key-concepts/Availability-schedules) section<br />Added legacy helper endpoints [/v1/taxonomy/destinations](#operation/v1TaxonomyDestinations), [/v1/taxonomy/attractions](#operation/v1TaxonomyAttractions), [v1/product/reviews](#operation/v1ProductReviews), [/v1/product/photos](#operation/v1ProductPhotos) |
| 28 Sep 2020 | Updated response schema for [/products/tags](#operation/productsTags) |
| 23 Sep 2020 | Added [Key concepts – Booking questions](#section/Booking-concepts/Booking-questions) section |
| 22 Sep 2020 | Added [Versioning](#section/Versioning) section |
| 22 Sep 2020 | Fixed typo in StandardItineraryItem schema (`pointsOfInterestLocation` -> `pointOfIterestLocation`); added explanation of policy window time-stamps & updated response samples in [Workflows - Cancellation policy](#section/Booking-concepts/Cancellation-policy) section | 
| 21 Sep 2020 | Added [Making a booking](#section/Booking-concepts/Making-a-booking) section under Workflows |
| 20 Sep 2020 | Added `currency` element to [/bookings/hold](#operation/bookingsHold) response schema |
| 17 Sep 2020 | Breaking change: [/exchange-rates](/#operation/exchangeRates) endpoint refactored |
| 16 Sep 2020 | <mark>**Note**: ONLY freesale products (those with a confirmation type of "INSTANT") are presently able to be booked. See [Ingesting and updating the product catalogue](#section/Workflows/Ingesting-and-updating-the-product-catalogue) (Filtering-out on-request products) for instructions on how to filter-out on-request products from your catalogue</mark> |
| 16 Sep 2020 | Breaking change: `languageGuideDetails` element in ActiveProduct schema changed to `languageGuides` (array of LanguageGuide schema) |
| 15 Sep 2020 | Breaking change: removed `travelerPickup` element from [/booking/book](#operation/bookingsBook) request |
| 10 Sep 2020 | Added [/bookings/book](#operation/bookingsBook) endpoint specification |
| 1 Sep 2020 | Added `description` element to `MultiDayTourFoodAndDrinks` and `InclusionExclusionItem` schemata; added `version=2.0` to `Accept` request header parameter across all endpoints |
| 26 Aug 2020 | `CancellationConditionType` schema key strings updated (now "STANDARD", "MODERATE", "STRICT" & "ALL_SALES_FINAL"; `PricingLineItem` updated (affects /availability/check and /bookings/hold-confirm responses); /availability/* endpoints moved to separate 'Availability' section |
| 25 Aug 2020 | <mark>**Breaking changes**</mark>: see below |
| 25 Aug 2020 | Regenerated response samples |
| 11 Aug 2020 | Updated `paxMix` schema in [/availability/check](#operation/checkAvailability) |
| 6 Aug 2020 | Added COVID-safety-measure keys to `additionalInfo` schema |
| 4 Aug 2020 | Added [/bookings/hold](#operation/bookingsHold) endpoint |
| 28 July 2020 | Added [Ingesting and updating the product catalogue](#section/Workflows/Ingesting-and-updating-the-product-catalogue) section |
| 23 July 2020 | Added [Product options](), [Cancellation policy](#section/Booking-concepts/Cancellation-policy) sections | 
| 16 Jul 2020 | Added [/bookings/hold](#operation/bookingsHold) endpoint |
| 3 Jul 2020 | Modified availability endpoint schema and regenerated examples |
| 1 Jul 2020 | Removed internal-only markup for release |
| 16 Jun 2020 | Added [Workflows->Cancellation API workflow](#section/Booking-concepts/Cancellation-API-workflow) section
| 15 Jun 2020 | Removed enum data type specification from `UnavailableDate`, `ageBand`, `CancellationQuoteBookingStatus`, `CancellationResultItemReason` and `CancellationBookingStatus` schemata |
| 18 May 2020 | Refactored LHS nav to use 'summary' name instead of operationId name |
| 28 April 2020 | Added `legacyGuide` field to `LanguageGuide` object specification |

### 25 August breaking changes

The following breaking changes have been made. Please update your OpenAPI specification by downloading from the link at the top of the page.

#### Endpoint URL changes

- /availability-schedule/{product-code} -> [/availability/schedules/{product-code}](#operation/availabilitySchedules)
- /availability-schedule/bulk -> [/availability/schedules/bulk](/#operation/availabilitySchedulesBulk)
- /availability-schedule/modified-since -> [/availability/schedules/modified-since](#operation/availabilitySchedulesModifiedSince)

#### Element name changes

A number of name changes have been made to the `Product` schema. This affects the following endpoints:

- [/products/modified-since](#operation/productsModifiedSince)
- [/products/bulk](#operation/productsBulk)
- [/products/{product-code}](#operation/products)

| Element | Old name | New name |
|----------|---------|----------|
| `cancellationPolicy.badWeather` |  `badWeather` | `cancelIfBadWeather` |   
| `cancellationPolicy.insufficientTravelers` | `insufficientTravelers` | `cancelIfInsufficientTravelers` |
| `translationInfo.translationAttributions` | `translationAttributions` | `translationAttribution` | 
| `destinations.isPrimary` | `isPrimary` | `primary` |
| `inclusions[].otherText` | `otherText` | `otherDescription` |   
| `itinerary.routes[].pois` | `pois` | `pointsOfInterest` |
| `itinerary.itineraryItems[].poiLocation` | `poiLocation` | `pointsOfInterestLocation` |
| `itinerary.routes[].duration.fixedValueinMinutes` | `fixedValueInMinutes` | `fixedDurationInMinutes` |
| `itinerary.routes[].duration.fromMinutes` | `fromMinutes` | `variableDurationFromMinutes` |
| `itinerary.routes[].duration.toMinutes` | `toMinutes` | `variableDurationToMinutes` |