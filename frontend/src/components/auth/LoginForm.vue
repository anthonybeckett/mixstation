<script setup>
import {inject, reactive} from "vue";
import Logo from "@/components/assets/Logo.vue";
import {useAuthStore} from "@/stores/AuthStore.js";
import {useShowError, useShowSuccess} from "@/composables/helpers/toastHelpers.js";

const showError = useShowError();
const showSuccess = useShowSuccess();
const authStore = useAuthStore();

const {signInFormVisible} = inject('signInFormVisible');

const form = reactive({
    email: '',
    password: ''
});

const signIn = async (closeSignInModal) => {
    const loginResult = await authStore.login({
        email: form.email,
        password: form.password
    });

    if (!loginResult.success) {
        showError(loginResult.error.data.message);

        return false;
    }

    resetForm();

    showSuccess('Logged in. Welcome to Mix Station');

    return closeSignInModal();
}

const resetForm = () => {
    form.email = '';
    form.password = '';
}
</script>

<template>
    <div class="card flex justify-center">
        <Toast/>
        <Dialog
            v-model:visible="signInFormVisible"
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
                            <InputText id="email" v-model="form.email"/>
                            <label for="email">Email</label>
                        </FloatLabel>

                        <FloatLabel>
                            <InputText id="password" type="password" v-model="form.password"/>
                            <label for="password">Password</label>
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
                            @click="signIn(closeCallback)"
                            text
                        ></Button>
                    </div>
                </div>
            </template>
        </Dialog>
    </div>
</template>