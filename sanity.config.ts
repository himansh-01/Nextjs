'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\app\studio\[[...tool]]\page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig,} from 'sanity'
import {structureTool} from 'sanity/structure'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './sanity/env'
import {schema} from './sanity/schemaTypes'
import {structure} from './sanity/structure'
import {markdownSchema} from "sanity-plugin-markdown"
import { author } from './sanity/schemaTypes/author'
import { startup } from './sanity/schemaTypes/startup'

export default defineConfig({
  basePath: '/studio',
  projectId: 'oabauoqq',
  dataset: 'production',
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema: {
    types: [author, startup]
  },
  plugins: [
    structureTool({structure}),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: apiVersion}),
    markdownSchema()
  ],
})
