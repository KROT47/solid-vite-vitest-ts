# SolidStart

Everything you need to build a Solid project, powered by [`solid-start`](https://start.solidjs.com);

- [Solid.js](https://www.solidjs.com/)
- [Solid-Start](https://start.solidjs.com/)
- [HopeUI@next](https://next--hope-ui.netlify.app/)
- [Effector](https://effector.dev/)
- [Feature Sliced Design](https://feature-sliced.design/) - kind'a
- [Supabase](https://supabase.com/)
- [Vitest](https://vitest.dev/)
- Internationalization (i18n)
- Typescript

# Add modal

1. Add modal type and component to `~/globals/modals`
2. Use:

```jsx
import { ModalTypes, useModals } from '~/globals/modals';

const { openModal } = useModals();

openModal(ModalTypes.LOGIN_MODAL);
```

<br />

# Add new lang

1. Add lang json file to `~/globals/i18n/langs`
2. Configure `~/globals/i18n/config.ts` using [this guide](http://docs.translatehouse.org/projects/localization-guide/en/latest/l10n/pluralforms.html)

<br />

# Add svg icon

1. Add icon to `src/assets/svg-icons`
2. Run `npm run build:icons`
3. Use for `icon-name.svg`:

```jsx
import { IconName } from '~/assets/icons';
import { Icon } from '~/shared/ui';

<Icon as={Llama} />;

/* or */

<Llama />;
```
