import React from 'react';
// import { render } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks';
import { GlobalProvider, useGlobal } from './Global.provider';

const wrapper = ({ children }) => <GlobalProvider>{children}</GlobalProvider>;

// beforeEach(() => {

//     const { result } = renderHook(() => useGlobal(), { wrapper } );

//     return result;

// })

describe('Global Provider', () => {
  it('should update the query state', () => {
    const { result } = renderHook(() => useGlobal(), { wrapper });

    const { dispatch } = result.current;

    act(() => {
      dispatch({ type: 'update_search_query', payload: 'probando test hook' });
    });

    const { query } = result.current.state;

    expect(query).toBe('probando test hook');
  });

  it('should toggle the darkTheme state', () => {
    const { result } = renderHook(() => useGlobal(), { wrapper });

    const { state, dispatch } = result.current;

    const { darkTheme: initialValue } = state;

    act(() => {
      dispatch({ type: 'toggle_theme', payload: true });
    });

    const { darkTheme: afterDispatchValue } = result.current.state;

    expect(initialValue).not.toBe(afterDispatchValue);
  });
});
