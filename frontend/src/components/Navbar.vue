<template>
    <div class="card">
        <Menubar :model="items">
            <template #start>
                <Logo :size="90" />
            </template>

            <template #item="{ item, props, hasSubmenu, root }">
                <router-link :to="item.to" v-ripple class="flex items-center" v-bind="props.action">
                    <span :class="item.icon" />
                    <span class="ml-1">{{ item.label }}</span>
                    <Badge v-if="item.badge" :class="{ 'ml-auto': !root, 'ml-2': root }" :value="item.badge" />
                    <span v-if="item.shortcut" class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1">{{ item.shortcut }}</span>
                    <i v-if="hasSubmenu" :class="['pi pi-angle-down', { 'pi-angle-down ml-2': root, 'pi-angle-right ml-auto': !root }]"></i>
                </router-link>
            </template>

            <template #end>
                <div class="flex items-center gap-2">
                    <InputText placeholder="Search" type="text" class="w-32 sm:w-auto" />

                    <OverlayBadge value="2" size="small" severity="info" class="cursor-pointer">
                        <i class="pi pi-bell cursor-pointer mx-2" style="font-size: 1.25rem"></i>
                    </OverlayBadge>

                    <Avatar label="AB" size="large" shape="circle" class="cursor-pointer mx-2" />
                </div>
            </template>
        </Menubar>
    </div>
</template>

<script setup>
import { ref } from "vue";
import Logo from "@/components/assets/Logo.vue";

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
