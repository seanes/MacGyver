import { sessionService } from 'redux-react-session';

export * from './user';
export * from './partcipants';
export * from './tags';

export const serverUrl = 'http://146.185.155.128:8989';

export const dispatchable = (type, payLoad) => ({
  type,
  payLoad
});

export const handle403 = data => {
  if (data.response) {
    if (data.response.status == 403) {
      sessionService.deleteSession();
      sessionService.deleteUser();
    }
  };
}