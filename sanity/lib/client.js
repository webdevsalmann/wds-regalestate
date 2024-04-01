import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token: 'skMNpTFX4KY23XUzFOiNXrM6FzE4cFhnRVfmxNKr2fFVkdsNRWAUpnxmS7WIHiBQ7qDAYAh3XjNc1mxR5asYr0H96Nk8w0l2xE1rs05RvbKlgJDujYNiAxLE2RvJ1CzUR7GS5g03EIaTIbYWYedpOnZSs2M5tWrcdOAC93uWiy9b0dmMhv80'
})
