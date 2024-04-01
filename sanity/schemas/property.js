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
        // todo
        {
            name: 'status',
            title: 'Current Status',
            type: 'string',
            options: {
                list: [
                    { title: "Available", value: "available" },
                    { title: "Rented", value: "rented" },
                    { title: "Sold", value: "sold" },
                    { title: "Under Offer", value: "under_offer" },
                    { title: "Pending", value: "pending" },
                    { title: "Off Market", value: "off_market" },
                    { title: "Coming Soon", value: "coming_soon" },
                    { title: "Reduced Price", value: "reduced_price" },
                    { title: "Expired", value: "expired" },
                    { title: "Withdrawn", value: "withdrawn" },
                    { title: "Under Renovation", value: "under_renovation" },
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