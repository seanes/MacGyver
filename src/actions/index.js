import { sessionService } from 'redux-react-session';

export * from './user';
export * from './partcipants';
export * from './tags';


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