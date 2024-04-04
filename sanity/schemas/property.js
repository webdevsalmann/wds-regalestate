import { defineType } from "sanity";


export const property = defineType({
    name: 'property',
    title: 'Property',
    type: 'document',
    fields: [
        {
            name: 'images',
            title: 'Add Images',
            type: 'array',
            of: [{ type: 'image' }]
        },
        {
            name: 'description',
            title: 'Description',
            type: 'array',
            of: [{ type: 'block' }]
        },
        {
            name: 'address',
            title: 'Address',
            type: 'string'
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'address',
                maxLength: 200, // will be ignored if slugify is set
                slugify: input => input
                    .toLowerCase()
                    .replace(/\s+/g, '-')
                    .slice(0, 200)
            }
        },
        {
            name: 'city',
            title: 'City',
            type: 'string'
        },
        {
            name: 'state',
            title: 'State',
            type: 'string'
        },
        {
            name: 'property_type',
            title: 'Property Type',
            type: 'string',
            options: {
                list: [
                    { title: "Residential", value: "residential" },
                    { title: "Apartment", value: "apartment" },
                    { title: "Condo", value: "condo" },
                    { title: "Townhouse", value: "townhouse" },
                    { title: "Single Family Home", value: "single_family_home" },
                    { title: "Duplex", value: "duplex" },
                    { title: "Villa", value: "villa" },
                    { title: "Mobile Home", value: "mobile_home" },
                    { title: "Multi-Family", value: "multi_family" },
                    { title: "Commercial", value: "commercial" },
                    { title: "Industrial", value: "industrial" },
                    { title: "Land", value: "land" }
                ]
            }
        },
        {
            name: 'home_size',
            title: 'Home Size (in square-feet)',
            type: 'number'
        },
        {
            name: 'lot_size',
            title: 'Lot Size (in acres)',
            type: 'number'
        },
        {
            name: 'bedroom',
            title: 'Number of bedroom/s',
            type: 'number'
        },
        {
            name: 'bathroom',
            title: 'Number of bathroom/s',
            type: 'number'
        },
        {
            name: 'kitchen',
            title: 'Number of kitchen/s',
            type: 'number'
        },
        {
            name: 'built_year',
            title: 'Built year',
            type: 'number'
        },
        {
            name: 'parking',
            title: 'Number of parking garage',
            type: 'number'
        },
        {
            name: 'status',
            title: 'Current Status',
            type: 'string',
            options: {
                list: [
                    { title: "Available", value: "available" },
                    { title: "Rented", value: "rented" },
                    { title: "Sold", value: "sold" },
                    { title: "Under Offer", value: "under-offer" },
                    { title: "Pending", value: "pending" },
                    { title: "Off Market", value: "off-market" },
                    { title: "Coming Soon", value: "coming-soon" },
                    { title: "Reduced Price", value: "reduced-price" },
                    { title: "Expired", value: "expired" },
                    { title: "Withdrawn", value: "withdrawn" },
                    { title: "Under Renovation", value: "under-renovation" },
                    { title: "Foreclosure", value: "foreclosure" }
                ]
            }
        },
        {
            name: 'amenities',
            title: 'Amenities',
            type: 'array',
            of: [{ type: 'string' }]
        },
    ]
})