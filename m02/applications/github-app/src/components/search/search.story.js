'use strict'

import { storiesOf, action } from '@kadira/storybook'
import React from 'react'
import Search from './index'

const stories = storiesOf('Search', module)
stories.add('with handleSearch and disabled prop', () => (
  <Search
    handleSearch={action('Handle search')}
    isDisabled
  />
))
