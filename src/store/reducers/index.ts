export const setInfo = (
  state = '',
  action: { type: string; data: unknown }
) => {
  const { type, data } = action;

  if (type === 'xxx') {
    return data;
  }

  return state;
};
