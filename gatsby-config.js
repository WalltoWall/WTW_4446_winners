const path = require('path')
const dlv = require('dlv')
const slug = require('slug')

require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: 'Pele Awards',
    description:
      'Every year, the Pele Awards has recognized excellence in advertising and design in Hawaii.',
    siteUrl: 'https://winners.peleawards.com',
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-svgr',
    'gatsby-plugin-react-helmet-async',
    'gatsby-plugin-paginated-collection',
    'gatsby-plugin-sitemap',
    process.env.GOOGLE_TAGMANAGER_ID && {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: process.env.GOOGLE_TAGMANAGER_ID,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Pele Awards',
        short_name: 'Peles',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        display: 'minimal-ui',
        icon: path.resolve(__dirname, 'src/assets/manifest-icon.png'),
      },
    },
    {
      resolve: 'gatsby-plugin-imgix',
      options: {
        domain: process.env.IMGIX_DOMAIN,
        secureUrlToken: process.env.IMGIX_SECURE_URL_TOKEN,
        sourceType: 'webProxy',
        defaultImgixParams: {
          fit: 'max',
          q: 50,
          auto: { compress: true, format: true },
        },
        fields: [
          {
            nodeType: 'AirtableWinner',
            fieldName: 'images',
            getUrls: node => dlv(node, 'data.images', []).map(i => i.url),
          },
          {
            nodeType: 'AirtableWinner',
            fieldName: 'video_thumbnail',
            getUrl: node => dlv(node, 'data.video_thumbnail.0.url'),
          },
          {
            nodeType: 'AirtableWinner',
            fieldName: 'featured_image',
            getUrl: node =>
              dlv(node, 'data.video_thumbnail.0.url') ||
              dlv(node, 'data.images.0.url'),
          },
          {
            nodeType: 'AirtableAgency',
            fieldName: 'avatar',
            getUrl: node => dlv(node, 'data.avatar.0.url'),
          },
          {
            nodeType: 'AirtableAdPerson',
            fieldName: 'photo',
            getUrl: node => dlv(node, 'data.photo.0.url'),
          },
          {
            nodeType: 'AirtableImageField',
            fieldName: 'image',
            getUrl: node => dlv(node, 'data.image.0.url'),
          },
          {
            nodeType: 'AirtableSponsors',
            fieldName: 'logo',
            getUrl: node => dlv(node, 'data.logo.0.url'),
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {
        displayName: process.env.NODE_ENV !== 'production',
      },
    },
    {
      resolve: 'gatsby-source-airtable',
      options: {
        apiKey: process.env.AIRTABLE_API_KEY,
        concurrency: 10,
        tables: [
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: 'Winners',
            tableLinks: ['agency', 'category', 'show_with'],
            queryName: 'Winner',
            separateNodeType: true,
            mapping: { credits: 'text/markdown' },
            separateMapType: true,
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: 'Agencies',
            queryName: 'Agency',
            separateNodeType: true,
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: 'Ad People',
            tableLinks: ['agency'],
            queryName: 'AdPerson',
            separateNodeType: true,
            mapping: { description: 'text/markdown' },
            separateMapType: true,
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: 'Categories',
            queryName: 'Category',
            separateNodeType: true,
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: 'Text Fields',
            queryName: 'TextField',
            mapping: { rich_text: 'text/markdown' },
            separateNodeType: true,
            separateMapType: true,
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: 'Image Fields',
            queryName: 'ImageField',
            separateNodeType: true,
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: 'Links',
            queryName: 'Link',
            separateNodeType: true,
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: 'Archive',
            queryName: 'Archive',
            separateNodeType: true,
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: 'Sponsors',
            queryName: 'Sponsors',
            separateNodeType: true,
          },
        ],
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: ['gatsby-remark-breaks'],
      },
    },
    {
      resolve: 'gatsby-plugin-local-search',
      options: {
        name: 'winners',
        engine: 'lunr',
        query: `
          query {
            allAirtableWinner {
              nodes {
                recordId
                fields {
                  url
                  featured_image {
                    fluid(maxWidth: 500) {
                      aspectRatio
                      sizes
                      src
                      srcSet
                    }
                  }
                }
                data {
                  name
                  award                  
                  year
                  tags
                  special_award
                  type
                  client
                  category {
                    data {
                      line_1
                    }
                  }
                  agency {
                    fields {
                      url
                      avatar {
                        fluid(maxWidth: 80) {
                          aspectRatio
                          sizes
                          src
                          srcSet
                        }
                      }
                    }
                    data {
                      name
                    }
                  }
                }
              }
            }
          }
        `,
        index: ['name', 'tags', 'agencyName', 'client'],
        store: [
          'url',
          'name',
          'award',
          'specialAward',
          'year',
          'type',
          'categoryLine1',
          'agencyName',
          'agencyUrl',
          'agencyAvatarFluid',
          'imageFluid',
        ],
        normalizer: ({ data }) =>
          data.allAirtableWinner.nodes
            .filter(node => !node.data.show_with)
            .map(node => ({
              id: node.recordId,
              url: dlv(node, ['fields', 'url']),
              name: dlv(node, ['data', 'name']),
              year: dlv(node, ['data', 'year']),
              award: dlv(node, ['data', 'award']),
              specialAward: dlv(node, ['data', 'special_award']),
              tags: (dlv(node, ['data', 'tags']) || []).join(' '),
              type: dlv(node, ['data', 'type']),
              client: dlv(node, ['data', 'client']),
              categoryLine1: dlv(node, [
                'data',
                'category',
                0,
                'data',
                'line_1',
              ]),
              agencyName: dlv(node, ['data', 'agency', 0, 'data', 'name']),
              agencyUrl: dlv(node, ['data', 'agency', 0, 'fields', 'url']),
              agencyAvatarFluid: dlv(node, [
                'data',
                'agency',
                0,
                'fields',
                'avatar',
                'fluid',
              ]),
              imageFluid: dlv(node, ['fields', 'featured_image', 'fluid']),
            })),
      },
    },
    'gatsby-plugin-netlify-cache',
  ].filter(Boolean),
}
