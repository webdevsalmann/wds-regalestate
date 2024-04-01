const propertySeed = [
    {
        _type: 'property',
        description: [
            {
                _type: 'block',
                children: [
                    {
                        _type: 'span',
                        text: 'Beautifully renovated home with stunning views.'
                    }
                ],
                markDefs: [],
                style: 'normal'
            }
        ],
        address: '123 Main St',
        city: 'New York',
        state: 'NY',
        home_size: 2500,
        lot_size: 0.5,
        bedroom: 4,
        bathroom: 3,
        kitchen: 1,
        built_year: 2005,
        parking: 2,
        status: 'available',
        amenities: ['Swimming Pool', 'Gym', 'Fireplace']
    },
    {
        _type: 'property',
        description: [
            {
                _type: 'block',
                children: [
                    {
                        _type: 'span',
                        text: 'Spacious condo in the heart of downtown.'
                    }
                ],
                markDefs: [],
                style: 'normal'
            }
        ],
        address: '456 Elm St',
        city: 'Los Angeles',
        state: 'CA',
        home_size: 1800,
        lot_size: 0.3,
        bedroom: 2,
        bathroom: 2,
        kitchen: 1,
        built_year: 2010,
        parking: 1,
        status: 'rented',
        amenities: ['Balcony', 'Walk-in Closet', 'Security System']
    },
    {
        _type: 'property',
        description: [
            {
                _type: 'block',
                children: [
                    {
                        _type: 'span',
                        text: 'Luxurious villa with panoramic ocean views.'
                    }
                ],
                markDefs: [],
                style: 'normal'
            }
        ],
        address: '789 Beach Blvd',
        city: 'Miami',
        state: 'FL',
        home_size: 4000,
        lot_size: 1.2,
        bedroom: 6,
        bathroom: 5,
        kitchen: 2,
        built_year: 2015,
        parking: 3,
        status: 'available',
        amenities: ['Private Beach Access', 'Pool', 'Home Theater']
    },
    {
        _type: 'property',
        description: [
            {
                _type: 'block',
                children: [
                    {
                        _type: 'span',
                        text: 'Charming cottage nestled in a serene countryside setting.'
                    }
                ],
                markDefs: [],
                style: 'normal'
            }
        ],
        address: '101 Willow Lane',
        city: 'Aspen',
        state: 'CO',
        home_size: 1500,
        lot_size: 0.8,
        bedroom: 3,
        bathroom: 2,
        kitchen: 1,
        built_year: 1990,
        parking: 2,
        status: 'sold',
        amenities: ['Garden', 'Deck', 'Fire Pit']
    },
    {
        _type: 'property',
        description: [
            {
                _type: 'block',
                children: [
                    {
                        _type: 'span',
                        text: 'Modern loft apartment in a vibrant urban neighborhood.'
                    }
                ],
                markDefs: [],
                style: 'normal'
            }
        ],
        address: '210 Pine Street',
        city: 'San Francisco',
        state: 'CA',
        home_size: 1200,
        lot_size: 0,
        bedroom: 1,
        bathroom: 1,
        kitchen: 1,
        built_year: 2018,
        parking: 1,
        status: 'rented',
        amenities: ['Exposed Brick', 'City Views', 'Fitness Center']
    },
    {
        _type: 'property',
        description: [
            {
                _type: 'block',
                children: [
                    {
                        _type: 'span',
                        text: 'Contemporary penthouse with breathtaking skyline views.'
                    }
                ],
                markDefs: [],
                style: 'normal'
            }
        ],
        address: '500 Highrise Avenue',
        city: 'Chicago',
        state: 'IL',
        home_size: 3000,
        lot_size: 0.5,
        bedroom: 3,
        bathroom: 4,
        kitchen: 1,
        built_year: 2019,
        parking: 2,
        status: 'under_offer',
        amenities: ['Roof Deck', 'Spa', 'Concierge Service']
    },
    {
        _type: 'property',
        description: [
            {
                _type: 'block',
                children: [
                    {
                        _type: 'span',
                        text: 'Historic townhouse in a charming cobblestone alley.'
                    }
                ],
                markDefs: [],
                style: 'normal'
            }
        ],
        address: '77 Heritage Lane',
        city: 'Boston',
        state: 'MA',
        home_size: 2200,
        lot_size: 0.2,
        bedroom: 4,
        bathroom: 3,
        kitchen: 2,
        built_year: 1920,
        parking: 1,
        status: 'pending',
        amenities: ['Fireplace', 'Gourmet Kitchen', 'Library']
    },
    {
        _type: 'property',
        description: [
            {
                _type: 'block',
                children: [
                    {
                        _type: 'span',
                        text: 'Spectacular waterfront estate with private boat dock.'
                    }
                ],
                markDefs: [],
                style: 'normal'
            }
        ],
        address: '150 Oceanfront Drive',
        city: 'Seattle',
        state: 'WA',
        home_size: 5000,
        lot_size: 2,
        bedroom: 5,
        bathroom: 6,
        kitchen: 2,
        built_year: 2008,
        parking: 3,
        status: 'sold',
        amenities: ['Boat Slip', 'Outdoor Kitchen', 'Home Office']
    },
    {
        _type: 'property',
        description: [
            {
                _type: 'block',
                children: [
                    {
                        _type: 'span',
                        text: 'Elegant townhouse with a spacious backyard garden.'
                    }
                ],
                markDefs: [],
                style: 'normal'
            }
        ],
        address: '123 Garden Grove',
        city: 'Portland',
        state: 'OR',
        home_size: 2800,
        lot_size: 0.3,
        bedroom: 3,
        bathroom: 2,
        kitchen: 1,
        built_year: 2000,
        parking: 2,
        status: 'under_renovation',
        amenities: ['Garden', 'Patio', 'Wood Floors']
    },
    {
        _type: 'property',
        description: [
            {
                _type: 'block',
                children: [
                    {
                        _type: 'span',
                        text: 'Quaint cottage retreat nestled in the mountains.'
                    }
                ],
                markDefs: [],
                style: 'normal'
            }
        ],
        address: '789 Mountain View Drive',
        city: 'Denver',
        state: 'CO',
        home_size: 1800,
        lot_size: 1,
        bedroom: 2,
        bathroom: 1,
        kitchen: 1,
        built_year: 1985,
        parking: 1,
        status: 'coming_soon',
        amenities: ['Mountain Views', 'Deck', 'Fireplace']
    },
    {
        _type: 'property',
        description: [
            {
                _type: 'block',
                children: [
                    {
                        _type: 'span',
                        text: 'Modern apartment with panoramic city skyline views.'
                    }
                ],
                markDefs: [],
                style: 'normal'
            }
        ],
        address: '555 Cityscape Blvd',
        city: 'Dallas',
        state: 'TX',
        home_size: 1500,
        lot_size: 0,
        bedroom: 1,
        bathroom: 1,
        kitchen: 1,
        built_year: 2017,
        parking: 1,
        status: 'expired',
        amenities: ['City Views', 'Fitness Center', 'Concierge']
    },
    {
        _type: 'property',
        description: [
            {
                _type: 'block',
                children: [
                    {
                        _type: 'span',
                        text: 'Spacious family home in a quiet suburban neighborhood.'
                    }
                ],
                markDefs: [],
                style: 'normal'
            }
        ],
        address: '456 Oakwood Lane',
        city: 'Atlanta',
        state: 'GA',
        home_size: 3200,
        lot_size: 0.4,
        bedroom: 4,
        bathroom: 3,
        kitchen: 1,
        built_year: 2002,
        parking: 2,
        status: 'pending',
        amenities: ['Backyard', 'Deck', 'Fireplace']
    },
    {
        _type: 'property',
        description: [
            {
                _type: 'block',
                children: [
                    {
                        _type: 'span',
                        text: 'Cozy studio apartment in a vibrant arts district.'
                    }
                ],
                markDefs: [],
                style: 'normal'
            }
        ],
        address: '789 Artisan Avenue',
        city: 'Austin',
        state: 'TX',
        home_size: 800,
        lot_size: 0,
        bedroom: 0,
        bathroom: 1,
        kitchen: 1,
        built_year: 2015,
        parking: 1,
        status: 'available',
        amenities: ['Art Studio', 'Community Garden', 'Walking Trails']
    },
    {
        _type: 'property',
        description: [
            {
                _type: 'block',
                children: [
                    {
                        _type: 'span',
                        text: 'Stunning luxury penthouse with panoramic city views.'
                    }
                ],
                markDefs: [],
                style: 'normal'
            }
        ],
        address: '101 Skyline Drive',
        city: 'San Diego',
        state: 'CA',
        home_size: 4000,
        lot_size: 0,
        bedroom: 3,
        bathroom: 4,
        kitchen: 1,
        built_year: 2018,
        parking: 2,
        status: 'sold',
        amenities: ['Rooftop Terrace', 'Home Theater', 'Wine Cellar']
    },
    {
        _type: 'property',
        description: [
            {
                _type: 'block',
                children: [
                    {
                        _type: 'span',
                        text: 'Rustic farmhouse with breathtaking mountain views.'
                    }
                ],
                markDefs: [],
                style: 'normal'
            }
        ],
        address: '123 Farm Road',
        city: 'Boise',
        state: 'ID',
        home_size: 2800,
        lot_size: 2,
        bedroom: 5,
        bathroom: 3,
        kitchen: 1,
        built_year: 1995,
        parking: 3,
        status: 'available',
        amenities: ['Mountain Views', 'Wraparound Porch', 'Barn']
    },
    {
        _type: 'property',
        description: [
            {
                _type: 'block',
                children: [
                    {
                        _type: 'span',
                        text: 'Sleek urban condo in the heart of downtown.'
                    }
                ],
                markDefs: [],
                style: 'normal'
            }
        ],
        address: '456 Downtown Blvd',
        city: 'Charlotte',
        state: 'NC',
        home_size: 1200,
        lot_size: 0,
        bedroom: 2,
        bathroom: 2,
        kitchen: 1,
        built_year: 2010,
        parking: 1,
        status: 'rented',
        amenities: ['City Views', 'Fitness Center', 'Concierge']
    },
    {
        _type: 'property',
        description: [
            {
                _type: 'block',
                children: [
                    {
                        _type: 'span',
                        text: 'Historic brownstone with modern interior finishes.'
                    }
                ],
                markDefs: [],
                style: 'normal'
            }
        ],
        address: '789 Historic Avenue',
        city: 'Philadelphia',
        state: 'PA',
        home_size: 2200,
        lot_size: 0.1,
        bedroom: 4,
        bathroom: 3,
        kitchen: 2,
        built_year: 1925,
        parking: 1,
        status: 'sold',
        amenities: ['Hardwood Floors', 'Fireplace', 'Wine Cellar']
    }
];
