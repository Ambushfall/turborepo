import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { Footer } from 'app/Footer'
import { GET_DEFAULT_URL } from 'utils/getUrl'
import Icon from 'components/favicon'

const config: DocsThemeConfig = {
  logo: <span>My Project</span>,
  project: {
    link: GET_DEFAULT_URL(),
    icon: (
      Icon
    ),

  },
  chat: {
    link: 'https://discord.com'
  },
  docsRepositoryBase:
    'https://github.com/ambushfall/experimentalapp/blob/master/apps/experimentalapp',
  footer: {
    text: 'Herlo',
    component: Footer
  },
  head: <title>Docs</title>
}

export default config
