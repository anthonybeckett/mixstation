<script setup>
import {inject, ref} from "vue";
import Logo from "@/components/assets/Logo.vue";
import { useAuthStore } from "@/stores/AuthStore.js";
import { useToast } from "primevue/usetoast";

const authStore = useAuthStore();
const toast = useToast();

const { signInFormVisible } = inject('signInFormVisible');

const email = ref('');
const password = ref('');

const showErrorMessage = (errorMessage) => {
    toast.add({ severity: 'error', summary: 'Error', detail: errorMessage, life: 5000 });
};

const showSuccessMessage = (errorMessage) => {
    toast.add({ severity: 'success', summary: 'Success', detail: 'Logged in. Welcome to Mix Station', life: 2000 });
};

const signIn = async (closeSignInModal) => {
    const loginResult = await authStore.login({
        email: email.value,
        password: password.value
    });

    if (!loginResult.success) {
        showErrorMessage(loginResult.error.data.message);

        return false;
    }

    email.value = '';
    password.value = '';

    showSuccessMessage();

    return closeSignInModal();
}
</script>

<template>
    <div class="card flex justify-center">
        <Toast />
        <Dialog
            v-model:visible="signInFormVisible"
            pt:root:class="!border-0 !bg-transparent"
            pt:mask:class="backdrop-blur-sm"
        >
            <template #container="{ closeCallback }">
                <div class="flex flex-col px-8 py-8 gap-2 rounded-2xl bg-white">
                    <div class="flex justify-center">
                        <Logo :size="120" class="flex justify-center" />
                    </div>

                    <h1 class="font-bold text-xl text-center">Log In</h1>

                    <div class="flex flex-col gap-8">
                        <FloatLabel>
                            <InputText id="email" v-model="email" />
                            <label for="email">Email</label>
                        </FloatLabel>

                        <FloatLabel>
                            <InputText id="password" type="password" v-model="password" />
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
                            text></Button>
                    </div>
                </div>
            </template>
        </Dialog>
    </div>
</template>