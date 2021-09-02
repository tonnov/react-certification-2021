import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import { GlobalProvider, useGlobal } from './Global.provider';
import { isVideoFavorite } from '../../utils/favsHelper';

const wrapper = ({ children }) => <GlobalProvider>{children}</GlobalProvider>;

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

  it('should storage session data', () => {
    const { result } = renderHook(() => useGlobal(), { wrapper });

    const { dispatch } = result.current;

    act(() => {
      dispatch({ type: 'update_session_data', payload: { id: 123, userName: 'admin' } });
    });

    const { sessionData } = result.current.state;

    expect(sessionData.userName).toBe('admin');
  });

  it('add video to favorites', () => {
    const { result } = renderHook(() => useGlobal(), { wrapper });

    const { dispatch } = result.current;

    act(() => {
      dispatch({ type: 'add_to_favorites', payload: { id: '123', snippet: {} } });
    });

    const { userFavorites } = result.current.state;

    const isInFavorites = isVideoFavorite(userFavorites, '123');

    expect(isInFavorites).toBe(true);
  });

  it('remove video from favorites', () => {
    const { result } = renderHook(() => useGlobal(), { wrapper });

    const { dispatch } = result.current;

    act(() => {
      dispatch({ type: 'remove_from_favorites', payload: '123' });
    });

    const { userFavorites } = result.current.state;

    const isInFavorites = isVideoFavorite(userFavorites, '123');

    expect(isInFavorites).toBe(false);
  });
});
