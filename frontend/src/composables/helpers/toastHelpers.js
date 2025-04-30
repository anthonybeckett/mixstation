import {useToast} from "primevue/usetoast";

function useShowError() {
    const errorToast = useToast();

    return function(message, duration = 5000) {
        errorToast.add({severity: 'error', summary: 'Error', detail: message, life: duration});
    }
}

function useShowSuccess() {
    const successToast = useToast();

    return function(message, duration = 2000) {
        successToast.add({severity: 'success', summary: 'Success', detail: message, life: duration});
    }
}

export {
    useShowError,
    useShowSuccess
}