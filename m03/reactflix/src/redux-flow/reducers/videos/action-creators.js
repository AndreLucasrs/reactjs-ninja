'use strict'

import { ADD_VIDEO } from './actions'
import { db } from 'config/firebase'

export const registerVideo = ({ id, title }) => async (dispatch) => {
  console.log('register video ...')
  await db.ref('videos').child(id).update({ id, title })
  console.log('video cadastrado ...')
  dispatch(addVideo(id, title))
}

export const addVideo = ({ id, title }) => ({
  type: ADD_VIDEO,
  payload: { id, title }
})

export const fetchVideos = () => (dispatch) => {
  db.ref('videos').orderByChild('title').on('child_added', (child, prevKey) => {
    dispatch(addVideo(child.val()))
  })
  // db.ref('videos').on('value', (snapshot) => {
  //   console.log('snapshot: ', snapshot.val())
  //   snapshot.forEach((child) => {
  //     dispatch(addVideo(child.val()))
  //   })
  // })
}
