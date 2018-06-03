//import {handleError} from 'utils/toastUtils';

export const CONTACTFORM_SUCCESS = 'CONTACTFORM_SUCCESS';
export const CONTACTFORM_ERROR = 'CONTACTFORM_ERROR';


export function ContactFormSuccessAction (data) {
	return {type: CONTACTFORM_SUCCESS, data};
}

export function ContactFormErrorAction (error) {
	return {type: CONTACTFORM_ERROR, error};
}

export function contactFormAction (data) {
	return {
		data
	}.then(function(response){
		deleteDomainSuccessAction(response.data);
		return Promise.resolve(response.data);
	}).catch(function(error) {
		deleteDomainErrorAction(error.data);
		handleError(error);
		return Promise.reject(error.data);
	})
}