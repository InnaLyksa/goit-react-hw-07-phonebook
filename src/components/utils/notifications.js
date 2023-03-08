import { toast } from 'react-toastify';
const options = {
  position: 'top-center',
  autoClose: 2000,
  theme: 'colored',
};

export const Notification = item =>
  toast.warn(`${item} is already in contacts`, options);

export function Error() {
  toast.error('Something is wrong. Try again', options);
}
