import React from 'react';
// import { render } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks';
import { GlobalProvider, useGlobal } from './Global.provider';



const wrapper = ({ children }) => (
    <GlobalProvider>{children}</GlobalProvider>
  )

describe('Global Provider', () => {

    it('should update the query state', () => {
        const { result } = renderHook(() => useGlobal(), { wrapper } );

        const { dispatch } = result.current;

        act(() => {
            dispatch({ type: 'update_search_query', payload: 'probando test hook' });
        })
        
        const { query } = result.current.state;

        expect(query).toBe('probando test hook');
    });


    it('should toggle the darkTheme state', () => {
        const { result } = renderHook(() => useGlobal(), { wrapper } );

        const { dispatch } = result.current;

        act(() => {
            dispatch({ type: 'toggle_theme', payload: true });
        })
        
        const { darkTheme } = result.current.state;

        expect(darkTheme).toBe(true);
    })

})