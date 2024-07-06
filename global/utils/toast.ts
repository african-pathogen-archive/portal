import toastify from 'react-hot-toast';

export enum ToastType {
	SUCCESS,
	ERROR,
}

export default function toast(type: ToastType, message: string) {
	if (type === ToastType.ERROR) {
		return toastify.error(message, {
			position: 'top-center',
		});
	} else if (type === ToastType.SUCCESS) {
		return toastify.success(message, {
			position: 'top-center',
		});
	}
}
