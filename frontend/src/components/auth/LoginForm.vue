<script setup>
import {inject, ref} from "vue";

const { signInFormVisible } = inject('signInFormVisible');

const email = ref('');
const password = ref('');

const signIn = (closeSignInModal) => {
    console.log("Called");

    closeSignInModal();
}
</script>

<template>
    <div class="card flex justify-center">
        <Dialog
            v-model:visible="signInFormVisible"
            pt:root:class="!border-0 !bg-transparent"
            pt:mask:class="backdrop-blur-sm"
        >
            <template #container="{ closeCallback }">
                <div class="flex flex-col px-8 py-8 gap-6 rounded-2xl bg-white">
                    <h1 class="font-bold text-xl text-center">Log In</h1>

                    <div class="flex flex-col gap-8">
                        <FloatLabel>
                            <InputText id="email" v-model="email" />
                            <label for="email">Email</label>
                        </FloatLabel>

                        <FloatLabel>
                            <InputText id="password" v-model="password" />
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