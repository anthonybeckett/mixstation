<script setup>
import {inject, reactive} from "vue";
import Logo from "@/components/assets/Logo.vue";
import {useAuthStore} from "@/stores/AuthStore.js";
import {useShowError, useShowSuccess} from "@/composables/helpers/toastHelpers.js";

const showError = useShowError();
const showSuccess = useShowSuccess();
const authStore = useAuthStore();

const {registerFormVisible} = inject('registerFormVisible');

const form = reactive({
    name: '',
    email: '',
    password: '',
    passwordConfirmation: ''
});

const register = async (closeRegisterModal) => {
    const registerResult = await authStore.register({
        name: form.name,
        email: form.email,
        password: form.password,
        password_confirmation: form.passwordConfirmation
    });

    if (!registerResult.success) {
        showError(registerResult.error.data.message);

        return false;
    }

    resetForm();

    showSuccess('Registered successfully. Welcome to Mix Station');

    return closeRegisterModal();
}

const resetForm = () => {
    form.name = '';
    form.email = '';
    form.password = '';
    form.passwordConfirmation = '';
}
</script>

<template>
    <div class="card flex justify-center">
        <Toast/>
        <Dialog
            v-model:visible="registerFormVisible"
            pt:root:class="border-0! bg-transparent!"
            pt:mask:class="backdrop-blur-xs"
        >
            <template #container="{ closeCallback }">
                <div class="flex flex-col px-8 py-8 gap-2 rounded-2xl bg-white">
                    <div class="flex justify-center">
                        <Logo :size="120" class="flex justify-center"/>
                    </div>

                    <h1 class="font-bold text-xl text-center">Log In</h1>

                    <div class="flex flex-col gap-8">
                        <FloatLabel>
                            <InputText id="name" v-model="form.name"/>
                            <label for="name">Name</label>
                        </FloatLabel>

                        <FloatLabel>
                            <InputText id="email" v-model="form.email"/>
                            <label for="email">Email</label>
                        </FloatLabel>

                        <FloatLabel>
                            <InputText id="password" type="password" v-model="form.password"/>
                            <label for="password">Password</label>
                        </FloatLabel>

                        <FloatLabel>
                            <InputText id="password-confirmation" type="password" v-model="form.passwordConfirmation"/>
                            <label for="password-confirmation">Confirm Password</label>
                        </FloatLabel>
                    </div>

                    <div class="flex justify-between">
                        <Button
                            label="Cancel"
                            severity="info"
                            @click="closeCallback"
                            text
                        ></Button>

                        <Button
                            label="Sign-In"
                            severity="info"
                            @click="register(closeCallback)"
                            text></Button>
                    </div>
                </div>
            </template>
        </Dialog>
    </div>
</template>