export * from './user';
export * from './partcipants';

export const dispatchable = (type, payLoad) => ({
  type,
  payLoad
});