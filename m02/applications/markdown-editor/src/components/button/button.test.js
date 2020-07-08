'use strict'

import React from 'react'
import renderer from 'react-test-renderer'
import Button from './index'

it('Should Button default to match snapshot', () => {
  const tree = renderer.create(
    <Button onClick={() => null}>
        Click me
    </Button>
    ).toJSON()
  expect(tree).toMatchSnapshot()
})

it('Should Button success to match snapshot', () => {
  const tree = renderer.create(
    <Button onClick={() => null} kind={'success'}>
        Click me Success
    </Button>
    ).toJSON()
  expect(tree).toMatchSnapshot()
})

it('Should Button danger to match snapshot', () => {
  const tree = renderer.create(
    <Button onClick={() => null} kind={'danger'}>
        Click me Danger
    </Button>
    ).toJSON()
  expect(tree).toMatchSnapshot()
})
