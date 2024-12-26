import {combineReducers, configureStore} from '@reduxjs/toolkit';

import {CLEAR_STORE} from './actions/constants';
import page from './slices/pageSlice';

const appReducer = combineReducers({
    page
});

type ActionType = {
    type: string;
};

const rootReducer = (
    state: ReturnType<typeof appReducer> | undefined,
    action: ActionType
) => {
    if (action.type === CLEAR_STORE) {
        state = undefined;
    }
    return appReducer(state, action);
};

export const setupStore = () =>
    configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: false
            })
    });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
