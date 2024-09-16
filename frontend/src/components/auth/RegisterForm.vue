<script setup>
import {inject, ref} from "vue";
import Logo from "@/components/assets/Logo.vue";

const { registerFormVisible } = inject('registerFormVisible');

const name = ref('');
const email = ref('');
const password = ref('');
const passwordConfirmation = ref('');

const register = (closeRegisterModal) => {
    console.log("Called");

    closeRegisterModal();
}
</script>

<template>
    <div class="card flex justify-center">
        <Dialog
            v-model:visible="registerFormVisible"
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
                            <InputText id="name" v-model="name" />
                            <label for="name">Name</label>
                        </FloatLabel>

                        <FloatLabel>
                            <InputText id="email" v-model="email" />
                            <label for="email">Email</label>
                        </FloatLabel>

                        <FloatLabel>
                            <InputText id="password" v-model="password" />
                            <label for="password">Password</label>
                        </FloatLabel>

                        <FloatLabel>
                            <InputText id="password-confirmation" v-model="passwordConfirmation" />
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