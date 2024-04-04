import imageUrlBuilder from '@sanity/image-url';
import { client } from '../../sanity/lib/client';

const builder = imageUrlBuilder(client);

class SanityService {
    async getAllProperties() {
        const query = `
            *[_type=="property"]{
                _id,
                slug,
                images,
                address,
                status,
                bedroom,
                bathroom,
                kitchen,
                home_size,
            }
        `;
        try {
            return await client.fetch(query);
        } catch (error) {
            console.error("Error fetching properties:", error);
            throw error;
        }
    }

    async getPropertyById(id) {
        const query = `
            *[_type=="property" && _id == "${id}"][0]{
                _id,
                images,
                address,
                city,
                state,
                description,
                status,
                bedroom,
                bathroom,
                kitchen,
                parking,
                built_year,
                lot_size,
                home_size,
                amenities,
            }
        `;
        try {
            return await client.fetch(query);
        } catch (error) {
            console.error("Error fetching property by ID:", error);
            throw error;
        }
    }

    async getPropertyBySlug(slug) {
        const query = `
            *[_type=="property" && slug.current == "${slug}"][0]{
                _id,
                slug,
                images,
                address,
                city,
                state,
                description,
                status,
                bedroom,
                bathroom,
                kitchen,
                parking,
                built_year,
                lot_size,
                home_size,
                amenities,
            }
        `;
        try {
            return await client.fetch(query);
        } catch (error) {
            console.error("Error fetching property by ID:", error);
            throw error;
        }
    }

    async getSimilarPropertyByStatus(status) {
        const query = `
            *[_type=="property" && status == "${status}"]{
                _id,
                slug,
                images,
                address,
                status,
                bedroom,
                bathroom,
                kitchen,
                home_size,
            }
        `;
        try {
            return await client.fetch(query);
        } catch (error) {
            console.error("Error fetching property by ID:", error);
            throw error;
        }
    }

    getImageUrl(source) {
        return builder.image(source);
    }
}

const sanityService = new SanityService();
export default sanityService;
