import Ripple from 'primevue/ripple';
import Badge from 'primevue/badge';
import InputText from 'primevue/inputtext';
import Avatar from 'primevue/avatar';
import Menubar from 'primevue/menubar';
import PrimeVue from "primevue/config";
import Lara from "@primevue/themes/lara";

export default function setupPrimeVue(app) {
    app.use(PrimeVue, {
        theme: {
            preset: Lara
        },
        ripple: true,
    });

    app.component('Badge', Badge);
    app.component('InputText', InputText);
    app.component('Avatar', Avatar);
    app.component('Menubar', Menubar);
    app.directive('ripple', Ripple);
}
