<template>
    <div class="card">
        <Menubar :model="items">
            <template #start>
                <router-link to="/">
                    <Logo :size="90"/>
                </router-link>
            </template>

            <template #item="{ item, props, hasSubmenu, root }">
                <router-link :to="item.to" v-ripple class="flex items-center" v-bind="props.action">
                    <span :class="item.icon"/>
                    <span class="ml-1">{{ item.label }}</span>
                    <Badge v-if="item.badge" :class="{ 'ml-auto': !root, 'ml-2': root }" :value="item.badge"/>
                    <span v-if="item.shortcut"
                          class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1">{{
                            item.shortcut
                        }}</span>
                    <i v-if="hasSubmenu"
                       :class="['pi pi-angle-down', { 'pi-angle-down ml-2': root, 'pi-angle-right ml-auto': !root }]"></i>
                </router-link>
            </template>

            <template #end>
                <div class="flex items-center gap-4">
                    <InputText placeholder="Search" type="text" class="w-32 sm:w-auto"/>

                    <!--                    <OverlayBadge value="2" size="small" severity="info" class="cursor-pointer">-->
                    <!--                        <i class="pi pi-bell cursor-pointer" style="font-size: 1rem"></i>-->
                    <!--                    </OverlayBadge>-->

                    <div v-if="userLoggedIn">
                        <Avatar label="AB" size="medium" shape="circle" class="cursor-pointer" />
                    </div>
                    <div v-else>
                        <Button
                            label="Register"
                            text severity="info"
                            icon="pi pi-users"
                            @click="registerFormVisible = true"
                        />
                        <Button
                            label="Login"
                            text severity="info"
                            icon="pi pi-sign-in"
                            @click="signInFormVisible = true"
                        />
                    </div>
                </div>
            </template>
        </Menubar>

        <LoginForm />
        <RegisterForm />
    </div>
</template>

<script setup>
import Logo from "@/components/assets/Logo.vue";
import {ref, provide} from "vue";
import LoginForm from "@/components/auth/LoginForm.vue";
import RegisterForm from "@/components/auth/RegisterForm.vue";

const signInFormVisible = ref(false);
const registerFormVisible = ref(false);
const userLoggedIn = ref(false);

provide('signInFormVisible', { signInFormVisible });
provide('registerFormVisible', { registerFormVisible });

const items = ref([
    {
        label: 'Dashboard',
        icon: 'pi pi-home',
        to: '/'
    },
    {
        label: 'Test',
        icon: 'pi pi-star',
        to: '/test'
    },
]);
</script>
