import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import schemas from './schemas/schema'



export default defineConfig({
  
  title: 'Portfolio feb1',

  projectId: 'gid2l38z',
  dataset: 'production',

  plugins: [deskTool()],
  schema: {
	  types: schemas
  },
})
