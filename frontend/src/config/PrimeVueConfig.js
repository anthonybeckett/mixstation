import Ripple from 'primevue/ripple';
import Badge from 'primevue/badge';
import InputText from 'primevue/inputtext';
import Avatar from 'primevue/avatar';
import Menubar from 'primevue/menubar';
import Image from 'primevue/image';
import OverlayBadge from 'primevue/overlaybadge';
import Button from 'primevue/button';
import PrimeVue from "primevue/config";
import Lara from "@primevue/themes/lara";
import Dialog from 'primevue/dialog';
import FloatLabel from "primevue/floatlabel";
import TieredMenu from 'primevue/tieredmenu';


export default function setupPrimeVue(app) {
    app.use(PrimeVue, {
        theme: {
            preset: Lara,
            options: {
                darkModeSelector: '.my-app-dark',
            }
        },
        ripple: true,
    });

    app.component('Badge', Badge);
    app.component('InputText', InputText);
    app.component('Avatar', Avatar);
    app.component('Menubar', Menubar);
    app.component('Image', Image);
    app.component('Button', Button);
    app.component('OverlayBadge', OverlayBadge);
    app.component('Dialog', Dialog);
    app.component('FloatLabel', FloatLabel);
    app.component('TieredMenu', TieredMenu);

    app.directive('ripple', Ripple);
}
