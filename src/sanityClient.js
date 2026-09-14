import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Sanity Client Configuration with your project ID
export const client = createClient({
  projectId: 'jf8d77nn',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2026-09-01',
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
