import { MockWebSocket, renderHook, act } from 'TestUtils';
import { useLazyWebSocket } from '../index.js';

describe('useWebSocket tests', () => {
  let mockSocket;

  beforeEach(() => {
    mockSocket = new MockWebSocket(1);
  });

  afterEach(() => {
    mockSocket = null;
  });

  it('Calls onOpen callback on open', () => {
    let onOpenStub = jest.fn();

    let {
      result: { current: socket },
    } = renderHook(() =>
      useLazyWebSocket(() => mockSocket, {
        onOpen: onOpenStub,
      })
    );

    act(() => {
      socket.open();
    });

    expect(onOpenStub).toBeCalledTimes(1);
  });
});
