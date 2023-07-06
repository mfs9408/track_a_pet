import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IArticle } from '../../types';

const initialState: IArticle[] | null = [
  {
    id: 1,
    header: 'Cats pneumonia',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae culpa\n' +
      '          excepturi exercitationem id impedit in maxime molestiae molestias,\n' +
      '          necessitatibus nemo obcaecati optio praesentium, qui quia quis,\n' +
      '          reiciendis sed temporibus velit!',
    link: 'foo',
    image: 'https://placekitten.com/g/200/300',
    petField: 'cat`s health',
    keyWord: 'cat',
  },
  {
    id: 2,
    header: 'Cats pneumonia',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae culpa\n' +
      '          excepturi exercitationem id impedit in maxime molestiae molestias,\n' +
      '          necessitatibus nemo obcaecati optio praesentium, qui quia quis,\n' +
      '          reiciendis sed temporibus velit!',
    link: 'foo',
    image: 'https://placekitten.com/g/200/300',
    keyWord: 'dog',
    petField: 'Dog health',
  },
  {
    id: 3,
    header: 'Cats pneumonia',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae culpa\n' +
      '          excepturi exercitationem id impedit in maxime molestiae molestias,\n' +
      '          necessitatibus nemo obcaecati optio praesentium, qui quia quis,\n' +
      '          reiciendis sed temporibus velit!',
    link: 'foo',
    image: 'https://placekitten.com/g/200/300',
    keyWord: 'fish',
    petField: 'Fish health',
  },
  {
    id: 4,
    header: 'Cats pneumonia',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae culpa\n' +
      '          excepturi exercitationem id impedit in maxime molestiae molestias,\n' +
      '          necessitatibus nemo obcaecati optio praesentium, qui quia quis,\n' +
      '          reiciendis sed temporibus velit!',
    link: 'foo',
    image: 'https://placekitten.com/g/200/300',
    keyWord: 'cat',
    petField: 'Cat health',
  },
];

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    getUser: (state, { payload }: PayloadAction<any>) => {},
  },
});

export const articlesActions = articlesSlice.actions;
export default articlesSlice;
