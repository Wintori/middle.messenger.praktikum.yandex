export const profileData = {
    profileInputs: [
        {
            type: 'email',
            labelStyle: 'profile__label',
            label: 'Почта',
            inputStyle: 'profile__input',
            value: '',
            placeholder: 'Почта',
            events: {
                change: (evt) => {
                    const value = evt.target.value;
                },
            },
            readonly: true,
            name: 'email'
        },
        {
            type: 'text',
            labelStyle: 'profile__label',
            label: 'Логин',
            inputStyle: 'profile__input',
            value: '',
            placeholder: 'Логин',
            events: {
                change: (evt) => {
                    const value = evt.target.value;
                },
            },
            readonly: true,
            name: 'login'
        },
        {
            type: 'text',
            labelStyle: 'profile__label',
            label: 'Имя',
            inputStyle: 'profile__input',
            value: '',
            placeholder: 'Имя',
            events: {
                change: (evt) => {
                    const value = evt.target.value;
                },
            },
            readonly: true,
            name: 'firstName'
        },
        {
            type: 'text',
            labelStyle: 'profile__label',
            label: 'Фамилия',
            inputStyle: 'profile__input',
            value: '',
            placeholder: 'Фамилия',
            events: {
                change: (evt) => {
                    const value = evt.target.value;
                },
            },
            readonly: true,
            name: 'secondName'
        },
        {
            type: 'text',
            labelStyle: 'profile__label',
            label: 'Имя в чате',
            inputStyle: 'profile__input',
            value: '',
            placeholder: 'Имя в чате',
            events: {
                change: (evt) => {
                    const value = evt.target.value;
                },
            },
            readonly: true,
            name: 'displayName'
        },
        {
            type: 'tel',
            labelStyle: 'profile__label',
            label: 'Телефон',
            inputStyle: 'profile__input',
            value: '',
            placeholder: 'Телефон',
            events: {
                change: (evt) => {
                    const value = evt.target.value;
                },
            },
            readonly: true,
            name: 'phone'
        },
    ]
}
