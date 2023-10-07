import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import _ from 'lodash';
import { RootState } from '../store';

export type Article = {
  id: string;
  title: string;
  description: string;
  body?: string | null;
  createdAt: string;
  owner?: string | null;
}

interface ArticlesState {
  value: Article[],
}

const initialState: ArticlesState = {
  value: [],
}

export const articleSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    addArticle: (state, action: PayloadAction<Article>) => {
      const map = new Map<string, Article>();
      const articles = state.value;
      _.forEach(articles, (article) => {
        map.set(article.id, article);
      });
      map.set(action.payload.id, action.payload);
      state.value = [...map.values()];
    },
    removeArticle: (state, action: PayloadAction<string>) => {
      state.value = _.filter(state.value, (article) => article.id !== action.payload);
    },
    updateArticle: (state, action: PayloadAction<Article>) => {
      state.value = _.map(state.value, (article) => {
        if (article.id === action.payload.id) {
          return {
            ...action.payload,
          }
        }
        return article;
      });
    }
  }
});

export const { addArticle, removeArticle, updateArticle } = articleSlice.actions;

export const selectArticles = (state: RootState) => state.articles.value;
export const selectArticle = (state: RootState, id?: string) => {
  if (!id) return;
  return _.find(state.articles.value, (article: Article) => article.id === id);
}

export default articleSlice.reducer;