import {httpMethods} from '@core/services/http';
import {EndPoints} from '@shared/endPoints';

export const getBills = async () => {
  const response = await httpMethods.get({
    path: EndPoints.bills,
  });
  return response;
};

export const keysQuery = {
  getBills: 'useGetBills',
};
