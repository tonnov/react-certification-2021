import React from 'react';
// import { render } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { GlobalContext, GlobalProvider, useGlobal } from './';


const state = { query: 'wizeline', darkTheme: false };
const dispatch = jest.fn();

const wrapper = ({ children }) => (
    <GlobalContext.Provider value={{ state, dispatch }}>{children}</GlobalContext.Provider>
  )

describe('Global Provider', () => {

    it('should toggle theme mode', () => {
        const { result } = renderHook(() => useGlobal(), { wrapper } )

        // result.current.dispatch({ type: 'update_search_query', payload: 'string upd' });
        // console.log(result.current);
        const { query } = result.current.state;

        expect(query).toBe('wizeline');
    })

})