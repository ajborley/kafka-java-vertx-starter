/* eslint-disable import/export */
/*
 * This file will override the react testing library to allow a
 * custom global render method to be created that includes
 * required providers such as configuration. This file should be
 * imported for testing instead of @testing-libary/react.
 * Jest has been configured so this can be imported as 'test-utils'
 */
import React from 'react';
import { render } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { ConfigContextProvider } from 'Contexts';

const mockConfig = {
  topic: 'topic',
  producerPath: 'producerPath',
  consumerPath: 'consumerPath',
};

// eslint-disable-next-line react/prop-types
const AllTheProviders = ({ children }) => {
  // Wrap children with any contexts/providers we end up having
  return (
    <ConfigContextProvider value={mockConfig}>{children}</ConfigContextProvider>
  );
};

const containsTextContentGenerator = (query) => (expectedText) =>
  query((_, element) => {
    const containsText = (element) => element.textContent === expectedText;
    const thisElementContainsText = containsText(element);
    /**
     * We are looking for text content - and thus the 'lowest' element that
     * contains the whole desired string. As RTL works from top down, we need
     * to confirm the child (if any) of this element has the text content we
     * are looking for. If so, we need RTL to skip this element to find that
     * element. ie:
     *
     * <body> <span> hello world </span> </body>
     *
     * would return true as well as:
     *
     * <span> hello world </span>
     *
     * When really we are after the span (as the first element to contain the
     * whole string)
     *
     */
    const childElementContainsText =
      Array.from(element.children).filter(containsText).length > 0;
    return thisElementContainsText && !childElementContainsText;
  });

const customRender = (ui, options) =>
  render(ui, {
    wrapper: AllTheProviders,
    ...options,
  });

const customRenderHook = (callback) => {
  const { result, ...rest } = renderHook(callback);
  return {
    result: result.current,
    resultErr: result.error,
    ...rest,
  };
};

export * from '@testing-library/react';
export * from '@testing-library/jest-dom/extend-expect';
export {
  customRender as render,
  customRenderHook as renderHook,
  containsTextContentGenerator,
};
