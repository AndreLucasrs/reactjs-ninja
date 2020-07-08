'use strict'

import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { Counter } from './index'

const stories = storiesOf('Counter', module)

stories.add('Counter', () => (
  <Counter counter={1} increment={action('increment')} decrement={action('decrement')} />
))
