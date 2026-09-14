import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';

export default defineConfig({
  name: 'jhp-enterprise',
  title: 'JHP Enterprise CMS',
  projectId: 'jf8d77mn',
  dataset: 'production',
  basePath: '/admin',
  plugins: [structureTool()],
  schema: {
    types: [
      {
        name: 'homepage',
        title: 'Homepage Content',
        type: 'document',
        fields: [
          {
            name: 'heroTitle',
            title: 'Hero Headline',
            type: 'string',
            initialValue: 'MAKE INDIA YOUR NEXT MOVE —',
          },
          {
            name: 'heroDesc',
            title: 'Hero Description',
            type: 'text',
          },
          {
            name: 'heroImage',
            title: 'Hero Image',
            type: 'image',
            options: { hotspot: true },
          },
          {
            name: 'aboutHeading',
            title: 'About Heading',
            type: 'string',
            initialValue: 'Rooted in Korea. Focused on India.',
          },
          {
            name: 'aboutBody',
            title: 'About Body Text',
            type: 'text',
          },
          {
            name: 'aboutImage',
            title: 'About Image',
            type: 'image',
            options: { hotspot: true },
          },
        ],
      },
    ],
  },
});
