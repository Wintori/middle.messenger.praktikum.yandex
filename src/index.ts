import { Error404Page } from "./pages/404";
import { Error500Page } from "./pages/500";
import { AllPages } from "./pages/AllPages";
import { ChatPage } from "./pages/Chat";
import { ChatAddUserPage } from "./pages/ChatAddUser";
import { ChatEmptyPage } from "./pages/ChatEmpty";
import { ChatSettingsPage } from "./pages/ChatSettings";
import { ChatUploadPage } from "./pages/ChatUpload";
import { ChatZoomImagePage } from "./pages/ChatZoomImage";
import { LoginPage } from "./pages/Login";
import { ProfilePage } from "./pages/Profile";
import { ProfileChangePage } from "./pages/ProfileChange";
import { ProfileChangePasswordPage } from "./pages/ProfileChangePassword";
import { RegistrationPage } from "./pages/Registration";
import { UploadAvatarPage } from "./pages/UploadAvatar";
import { UploadAvatarErrorPage } from "./pages/UploadAvatarError";
import { UploadAvatarSuccessPage } from "./pages/UploadAvatarSuccess";
import renderDom from "./utils/renderDom";


window.addEventListener('DOMContentLoaded', () => {

    const loginPage = new LoginPage({ title: "Вход" });
    const registrationPage = new RegistrationPage({ title: "Регистрация" });
    const chatPage = new ChatPage({
        chatMessagesGroups: [
            {
                date: '666 июня',
                chatMessages: [
                    {
                        time: '10:49',
                        messageText: 'Тестовое сообщение от друга',
                        isOwner: false,
                    },
                    {
                        time: '10:50',
                        status: {
                            isViewed: false,
                            isChecked: true,
                            isPending: true,
                        },
                        messageText: 'Тестовое сообщение от пользователя',
                        isOwner: true,
                    },
                    {
                        time: '10:50',
                        image: 'https://i.pinimg.com/564x/10/0a/cd/100acd8fad813681f7cd028408152fdd.jpg',
                        isOwner: false,
                    },
                    {
                        time: '10:51',
                        image: 'https://i.pinimg.com/564x/4e/73/3b/4e733b009705024a46a49a656e5fa206.jpg',
                        isOwner: true,
                        status: {
                            isViewed: false,
                            isChecked: false,
                            isPending: false,
                        },
                    },
                    {
                        time: '10:51',
                        status: {
                            isViewed: false,
                            isChecked: false,
                            isPending: false,
                        },
                        messageText: 'Сообщение отправляется',
                        isOwner: true,
                    },
                    {
                        time: '10:52',
                        image: 'https://i.pinimg.com/564x/94/b5/a9/94b5a9033d5c2612d050f2e79847ae7c.jpg',
                        isOwner: true,
                        status: {
                            isViewed: false,
                            isChecked: false,
                            isPending: true,
                        },
                    },
                    {
                        time: '10:52',
                        status: {
                            isViewed: false,
                            isChecked: false,
                            isPending: true,
                        },
                        messageText: 'Сообщение отправлено',
                        isOwner: true,
                    },
                    {
                        time: '10:53',
                        image: 'https://i.pinimg.com/564x/7d/1d/4d/7d1d4deca6a932daa590e43b0c71ed3e.jpg',
                        isOwner: true,
                        status: {
                            isViewed: false,
                            isChecked: true,
                            isPending: true,
                        },
                    },
                    {
                        time: '10:53',
                        status: {
                            isViewed: false,
                            isChecked: true,
                            isPending: true,
                        },
                        messageText: 'Сообщение доставлено',
                        isOwner: true,
                    },
                    {
                        time: '10:54',
                        image: 'https://i.pinimg.com/564x/0b/e4/28/0be428105a4f9a01cc4ce4924b1fb92e.jpg',
                        isOwner: true,
                        status: {
                            isViewed: true,
                            isChecked: true,
                            isPending: true,
                        },
                    },
                    {
                        time: '10:54',
                        status: {
                            isViewed: true,
                            isChecked: true,
                            isPending: true,
                        },
                        messageText: 'Сообщение просмотрено',
                        isOwner: true,
                    },
                ]
            },
            {
                date: '777 июня',
                chatMessages: [
                    {
                        time: '11:21',
                        messageText: 'Тестовое сообщение от друга',
                        isOwner: false,
                    },
                    {
                        time: '11:24',
                        messageText: 'Тестовое сообщение от пользователя',
                        isOwner: true,
                    },
                    {
                        time: '11:25',
                        messageText: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?',
                        isOwner: false,
                    },
                    {
                        time: '15:55',
                        messageText: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?',
                        isOwner: true,
                        status: {
                            isViewed: false,
                            isChecked: true,
                            isPending: true,
                        },
                    }
                ]
            }
        ]
    })
    const profilePage = new ProfilePage({
        profileInputs: [
            {
                type: 'email',
                labelStyle: 'profile__label',
                label: 'Почта',
                inputStyle: 'profile__input',
                value: 'pochta@yandex.ru',
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
                value: 'ivanivanov',
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
                value: 'Иван',
                placeholder: 'Имя',
                events: {
                    change: (evt) => {
                        const value = evt.target.value;
                    },
                },
                readonly: true,
                name: 'first_name'
            },
            {
                type: 'text',
                labelStyle: 'profile__label',
                label: 'Фамилия',
                inputStyle: 'profile__input',
                value: 'Иванов',
                placeholder: 'Фамилия',
                events: {
                    change: (evt) => {
                        const value = evt.target.value;
                    },
                },
                readonly: true,
                name: 'second_name'
            },
            {
                type: 'text',
                labelStyle: 'profile__label',
                label: 'Имя в чате',
                inputStyle: 'profile__input',
                value: 'Иван',
                placeholder: 'Имя в чате',
                events: {
                    change: (evt) => {
                        const value = evt.target.value;
                    },
                },
                readonly: true,
                name: 'display_name'
            },
            {
                type: 'tel',
                labelStyle: 'profile__label',
                label: 'Телефон',
                inputStyle: 'profile__input',
                value: '+7 (909) 967 30 30',
                placeholder: 'Телефон',
                events: {
                    change: (evt) => {
                        const value = evt.target.value;
                    },
                },
                readonly: true,
                name: 'phone'
            },


        ],
        userName: 'Иван'
    })
    const profileChangePage = new ProfileChangePage()
    const profileChangePasswordPage = new ProfileChangePasswordPage()
    const uploadAvatarPage = new UploadAvatarPage({
        profileInputs: [
            {
                type: 'email',
                labelStyle: 'profile__label',
                label: 'Почта',
                inputStyle: 'profile__input',
                value: 'pochta@yandex.ru',
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
                value: 'ivanivanov',
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
                value: 'Иван',
                placeholder: 'Имя',
                events: {
                    change: (evt) => {
                        const value = evt.target.value;
                    },
                },
                readonly: true,
                name: 'first_name'
            },
            {
                type: 'text',
                labelStyle: 'profile__label',
                label: 'Фамилия',
                inputStyle: 'profile__input',
                value: 'Иванов',
                placeholder: 'Фамилия',
                events: {
                    change: (evt) => {
                        const value = evt.target.value;
                    },
                },
                readonly: true,
                name: 'second_name'
            },
            {
                type: 'text',
                labelStyle: 'profile__label',
                label: 'Имя в чате',
                inputStyle: 'profile__input',
                value: 'Иван',
                placeholder: 'Имя в чате',
                events: {
                    change: (evt) => {
                        const value = evt.target.value;
                    },
                },
                readonly: true,
                name: 'display_name'
            },
            {
                type: 'tel',
                labelStyle: 'profile__label',
                label: 'Телефон',
                inputStyle: 'profile__input',
                value: '+7 (909) 967 30 30',
                placeholder: 'Телефон',
                events: {
                    change: (evt) => {
                        const value = evt.target.value;
                    },
                },
                readonly: true,
                name: 'phone'
            },


        ],
        userName: 'Иван'
    })
    const uploadAvatarErrorPage = new UploadAvatarErrorPage({
        profileInputs: [
            {
                type: 'email',
                labelStyle: 'profile__label',
                label: 'Почта',
                inputStyle: 'profile__input',
                value: 'pochta@yandex.ru',
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
                value: 'ivanivanov',
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
                value: 'Иван',
                placeholder: 'Имя',
                events: {
                    change: (evt) => {
                        const value = evt.target.value;
                    },
                },
                readonly: true,
                name: 'first_name'
            },
            {
                type: 'text',
                labelStyle: 'profile__label',
                label: 'Фамилия',
                inputStyle: 'profile__input',
                value: 'Иванов',
                placeholder: 'Фамилия',
                events: {
                    change: (evt) => {
                        const value = evt.target.value;
                    },
                },
                readonly: true,
                name: 'second_name'
            },
            {
                type: 'text',
                labelStyle: 'profile__label',
                label: 'Имя в чате',
                inputStyle: 'profile__input',
                value: 'Иван',
                placeholder: 'Имя в чате',
                events: {
                    change: (evt) => {
                        const value = evt.target.value;
                    },
                },
                readonly: true,
                name: 'display_name'
            },
            {
                type: 'tel',
                labelStyle: 'profile__label',
                label: 'Телефон',
                inputStyle: 'profile__input',
                value: '+7 (909) 967 30 30',
                placeholder: 'Телефон',
                events: {
                    change: (evt) => {
                        const value = evt.target.value;
                    },
                },
                readonly: true,
                name: 'phone'
            },


        ],
        userName: 'Иван'
    })
    const uploadAvatarSuccessPage = new UploadAvatarSuccessPage({
        profileInputs: [
            {
                type: 'email',
                labelStyle: 'profile__label',
                label: 'Почта',
                inputStyle: 'profile__input',
                value: 'pochta@yandex.ru',
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
                value: 'ivanivanov',
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
                value: 'Иван',
                placeholder: 'Имя',
                events: {
                    change: (evt) => {
                        const value = evt.target.value;
                    },
                },
                readonly: true,
                name: 'first_name'
            },
            {
                type: 'text',
                labelStyle: 'profile__label',
                label: 'Фамилия',
                inputStyle: 'profile__input',
                value: 'Иванов',
                placeholder: 'Фамилия',
                events: {
                    change: (evt) => {
                        const value = evt.target.value;
                    },
                },
                readonly: true,
                name: 'second_name'
            },
            {
                type: 'text',
                labelStyle: 'profile__label',
                label: 'Имя в чате',
                inputStyle: 'profile__input',
                value: 'Иван',
                placeholder: 'Имя в чате',
                events: {
                    change: (evt) => {
                        const value = evt.target.value;
                    },
                },
                readonly: true,
                name: 'display_name'
            },
            {
                type: 'tel',
                labelStyle: 'profile__label',
                label: 'Телефон',
                inputStyle: 'profile__input',
                value: '+7 (909) 967 30 30',
                placeholder: 'Телефон',
                events: {
                    change: (evt) => {
                        const value = evt.target.value;
                    },
                },
                readonly: true,
                name: 'phone'
            },


        ],
        userName: 'Иван'
    })
    const chatEmptyPage = new ChatEmptyPage({})
    const chatSettingsPage = new ChatSettingsPage({
        chatMessagesGroups: [
            {
                date: '666 июня',
                chatMessages: [
                    {
                        time: '10:49',
                        messageText: 'Тестовое сообщение от друга',
                        isOwner: false,
                    },
                    {
                        time: '10:50',
                        status: {
                            isViewed: false,
                            isChecked: true,
                            isPending: true,
                        },
                        messageText: 'Тестовое сообщение от пользователя',
                        isOwner: true,
                    },
                    {
                        time: '10:50',
                        image: 'https://i.pinimg.com/564x/10/0a/cd/100acd8fad813681f7cd028408152fdd.jpg',
                        isOwner: false,
                    },
                    {
                        time: '10:51',
                        image: 'https://i.pinimg.com/564x/4e/73/3b/4e733b009705024a46a49a656e5fa206.jpg',
                        isOwner: true,
                        status: {
                            isViewed: false,
                            isChecked: false,
                            isPending: false,
                        },
                    },
                    {
                        time: '10:51',
                        status: {
                            isViewed: false,
                            isChecked: false,
                            isPending: false,
                        },
                        messageText: 'Сообщение отправляется',
                        isOwner: true,
                    },
                    {
                        time: '10:52',
                        image: 'https://i.pinimg.com/564x/94/b5/a9/94b5a9033d5c2612d050f2e79847ae7c.jpg',
                        isOwner: true,
                        status: {
                            isViewed: false,
                            isChecked: false,
                            isPending: true,
                        },
                    },
                    {
                        time: '10:52',
                        status: {
                            isViewed: false,
                            isChecked: false,
                            isPending: true,
                        },
                        messageText: 'Сообщение отправлено',
                        isOwner: true,
                    },
                    {
                        time: '10:53',
                        image: 'https://i.pinimg.com/564x/7d/1d/4d/7d1d4deca6a932daa590e43b0c71ed3e.jpg',
                        isOwner: true,
                        status: {
                            isViewed: false,
                            isChecked: true,
                            isPending: true,
                        },
                    },
                    {
                        time: '10:53',
                        status: {
                            isViewed: false,
                            isChecked: true,
                            isPending: true,
                        },
                        messageText: 'Сообщение доставлено',
                        isOwner: true,
                    },
                    {
                        time: '10:54',
                        image: 'https://i.pinimg.com/564x/0b/e4/28/0be428105a4f9a01cc4ce4924b1fb92e.jpg',
                        isOwner: true,
                        status: {
                            isViewed: true,
                            isChecked: true,
                            isPending: true,
                        },
                    },
                    {
                        time: '10:54',
                        status: {
                            isViewed: true,
                            isChecked: true,
                            isPending: true,
                        },
                        messageText: 'Сообщение просмотрено',
                        isOwner: true,
                    },
                ]
            },
            {
                date: '777 июня',
                chatMessages: [
                    {
                        time: '11:21',
                        messageText: 'Тестовое сообщение от друга',
                        isOwner: false,
                    },
                    {
                        time: '11:24',
                        messageText: 'Тестовое сообщение от пользователя',
                        isOwner: true,
                    },
                    {
                        time: '11:25',
                        messageText: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?',
                        isOwner: false,
                    },
                    {
                        time: '15:55',
                        messageText: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?',
                        isOwner: true,
                        status: {
                            isViewed: false,
                            isChecked: true,
                            isPending: true,
                        },
                    }
                ]
            }
        ]
    })
    const chatUploadPage = new ChatUploadPage({
        chatMessagesGroups: [
            {
                date: '666 июня',
                chatMessages: [
                    {
                        time: '10:49',
                        messageText: 'Тестовое сообщение от друга',
                        isOwner: false,
                    },
                    {
                        time: '10:50',
                        status: {
                            isViewed: false,
                            isChecked: true,
                            isPending: true,
                        },
                        messageText: 'Тестовое сообщение от пользователя',
                        isOwner: true,
                    },
                    {
                        time: '10:50',
                        image: 'https://i.pinimg.com/564x/10/0a/cd/100acd8fad813681f7cd028408152fdd.jpg',
                        isOwner: false,
                    },
                    {
                        time: '10:51',
                        image: 'https://i.pinimg.com/564x/4e/73/3b/4e733b009705024a46a49a656e5fa206.jpg',
                        isOwner: true,
                        status: {
                            isViewed: false,
                            isChecked: false,
                            isPending: false,
                        },
                    },
                    {
                        time: '10:51',
                        status: {
                            isViewed: false,
                            isChecked: false,
                            isPending: false,
                        },
                        messageText: 'Сообщение отправляется',
                        isOwner: true,
                    },
                    {
                        time: '10:52',
                        image: 'https://i.pinimg.com/564x/94/b5/a9/94b5a9033d5c2612d050f2e79847ae7c.jpg',
                        isOwner: true,
                        status: {
                            isViewed: false,
                            isChecked: false,
                            isPending: true,
                        },
                    },
                    {
                        time: '10:52',
                        status: {
                            isViewed: false,
                            isChecked: false,
                            isPending: true,
                        },
                        messageText: 'Сообщение отправлено',
                        isOwner: true,
                    },
                    {
                        time: '10:53',
                        image: 'https://i.pinimg.com/564x/7d/1d/4d/7d1d4deca6a932daa590e43b0c71ed3e.jpg',
                        isOwner: true,
                        status: {
                            isViewed: false,
                            isChecked: true,
                            isPending: true,
                        },
                    },
                    {
                        time: '10:53',
                        status: {
                            isViewed: false,
                            isChecked: true,
                            isPending: true,
                        },
                        messageText: 'Сообщение доставлено',
                        isOwner: true,
                    },
                    {
                        time: '10:54',
                        image: 'https://i.pinimg.com/564x/0b/e4/28/0be428105a4f9a01cc4ce4924b1fb92e.jpg',
                        isOwner: true,
                        status: {
                            isViewed: true,
                            isChecked: true,
                            isPending: true,
                        },
                    },
                    {
                        time: '10:54',
                        status: {
                            isViewed: true,
                            isChecked: true,
                            isPending: true,
                        },
                        messageText: 'Сообщение просмотрено',
                        isOwner: true,
                    },
                ]
            },
            {
                date: '777 июня',
                chatMessages: [
                    {
                        time: '11:21',
                        messageText: 'Тестовое сообщение от друга',
                        isOwner: false,
                    },
                    {
                        time: '11:24',
                        messageText: 'Тестовое сообщение от пользователя',
                        isOwner: true,
                    },
                    {
                        time: '11:25',
                        messageText: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?',
                        isOwner: false,
                    },
                    {
                        time: '15:55',
                        messageText: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?',
                        isOwner: true,
                        status: {
                            isViewed: false,
                            isChecked: true,
                            isPending: true,
                        },
                    }
                ]
            }
        ]
    })
    const chatAddUserPage = new ChatAddUserPage({
        chatMessagesGroups: [
            {
                date: '666 июня',
                chatMessages: [
                    {
                        time: '10:49',
                        messageText: 'Тестовое сообщение от друга',
                        isOwner: false,
                    },
                    {
                        time: '10:50',
                        status: {
                            isViewed: false,
                            isChecked: true,
                            isPending: true,
                        },
                        messageText: 'Тестовое сообщение от пользователя',
                        isOwner: true,
                    },
                    {
                        time: '10:50',
                        image: 'https://i.pinimg.com/564x/10/0a/cd/100acd8fad813681f7cd028408152fdd.jpg',
                        isOwner: false,
                    },
                    {
                        time: '10:51',
                        image: 'https://i.pinimg.com/564x/4e/73/3b/4e733b009705024a46a49a656e5fa206.jpg',
                        isOwner: true,
                        status: {
                            isViewed: false,
                            isChecked: false,
                            isPending: false,
                        },
                    },
                    {
                        time: '10:51',
                        status: {
                            isViewed: false,
                            isChecked: false,
                            isPending: false,
                        },
                        messageText: 'Сообщение отправляется',
                        isOwner: true,
                    },
                    {
                        time: '10:52',
                        image: 'https://i.pinimg.com/564x/94/b5/a9/94b5a9033d5c2612d050f2e79847ae7c.jpg',
                        isOwner: true,
                        status: {
                            isViewed: false,
                            isChecked: false,
                            isPending: true,
                        },
                    },
                    {
                        time: '10:52',
                        status: {
                            isViewed: false,
                            isChecked: false,
                            isPending: true,
                        },
                        messageText: 'Сообщение отправлено',
                        isOwner: true,
                    },
                    {
                        time: '10:53',
                        image: 'https://i.pinimg.com/564x/7d/1d/4d/7d1d4deca6a932daa590e43b0c71ed3e.jpg',
                        isOwner: true,
                        status: {
                            isViewed: false,
                            isChecked: true,
                            isPending: true,
                        },
                    },
                    {
                        time: '10:53',
                        status: {
                            isViewed: false,
                            isChecked: true,
                            isPending: true,
                        },
                        messageText: 'Сообщение доставлено',
                        isOwner: true,
                    },
                    {
                        time: '10:54',
                        image: 'https://i.pinimg.com/564x/0b/e4/28/0be428105a4f9a01cc4ce4924b1fb92e.jpg',
                        isOwner: true,
                        status: {
                            isViewed: true,
                            isChecked: true,
                            isPending: true,
                        },
                    },
                    {
                        time: '10:54',
                        status: {
                            isViewed: true,
                            isChecked: true,
                            isPending: true,
                        },
                        messageText: 'Сообщение просмотрено',
                        isOwner: true,
                    },
                ]
            },
            {
                date: '777 июня',
                chatMessages: [
                    {
                        time: '11:21',
                        messageText: 'Тестовое сообщение от друга',
                        isOwner: false,
                    },
                    {
                        time: '11:24',
                        messageText: 'Тестовое сообщение от пользователя',
                        isOwner: true,
                    },
                    {
                        time: '11:25',
                        messageText: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?',
                        isOwner: false,
                    },
                    {
                        time: '15:55',
                        messageText: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?',
                        isOwner: true,
                        status: {
                            isViewed: false,
                            isChecked: true,
                            isPending: true,
                        },
                    }
                ]
            }
        ]
    })
    const chatZoomImagePage = new ChatZoomImagePage({
        chatMessagesGroups: [
            {
                date: '666 июня',
                chatMessages: [
                    {
                        time: '10:49',
                        messageText: 'Тестовое сообщение от друга',
                        isOwner: false,
                    },
                    {
                        time: '10:50',
                        status: {
                            isViewed: false,
                            isChecked: true,
                            isPending: true,
                        },
                        messageText: 'Тестовое сообщение от пользователя',
                        isOwner: true,
                    },
                    {
                        time: '10:50',
                        image: 'https://i.pinimg.com/564x/10/0a/cd/100acd8fad813681f7cd028408152fdd.jpg',
                        isOwner: false,
                    },
                    {
                        time: '10:51',
                        image: 'https://i.pinimg.com/564x/4e/73/3b/4e733b009705024a46a49a656e5fa206.jpg',
                        isOwner: true,
                        status: {
                            isViewed: false,
                            isChecked: false,
                            isPending: false,
                        },
                    },
                    {
                        time: '10:51',
                        status: {
                            isViewed: false,
                            isChecked: false,
                            isPending: false,
                        },
                        messageText: 'Сообщение отправляется',
                        isOwner: true,
                    },
                    {
                        time: '10:52',
                        image: 'https://i.pinimg.com/564x/94/b5/a9/94b5a9033d5c2612d050f2e79847ae7c.jpg',
                        isOwner: true,
                        status: {
                            isViewed: false,
                            isChecked: false,
                            isPending: true,
                        },
                    },
                    {
                        time: '10:52',
                        status: {
                            isViewed: false,
                            isChecked: false,
                            isPending: true,
                        },
                        messageText: 'Сообщение отправлено',
                        isOwner: true,
                    },
                    {
                        time: '10:53',
                        image: 'https://i.pinimg.com/564x/7d/1d/4d/7d1d4deca6a932daa590e43b0c71ed3e.jpg',
                        isOwner: true,
                        status: {
                            isViewed: false,
                            isChecked: true,
                            isPending: true,
                        },
                    },
                    {
                        time: '10:53',
                        status: {
                            isViewed: false,
                            isChecked: true,
                            isPending: true,
                        },
                        messageText: 'Сообщение доставлено',
                        isOwner: true,
                    },
                    {
                        time: '10:54',
                        image: 'https://i.pinimg.com/564x/0b/e4/28/0be428105a4f9a01cc4ce4924b1fb92e.jpg',
                        isOwner: true,
                        status: {
                            isViewed: true,
                            isChecked: true,
                            isPending: true,
                        },
                    },
                    {
                        time: '10:54',
                        status: {
                            isViewed: true,
                            isChecked: true,
                            isPending: true,
                        },
                        messageText: 'Сообщение просмотрено',
                        isOwner: true,
                    },
                ]
            },
            {
                date: '777 июня',
                chatMessages: [
                    {
                        time: '11:21',
                        messageText: 'Тестовое сообщение от друга',
                        isOwner: false,
                    },
                    {
                        time: '11:24',
                        messageText: 'Тестовое сообщение от пользователя',
                        isOwner: true,
                    },
                    {
                        time: '11:25',
                        messageText: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?',
                        isOwner: false,
                    },
                    {
                        time: '15:55',
                        messageText: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?',
                        isOwner: true,
                        status: {
                            isViewed: false,
                            isChecked: true,
                            isPending: true,
                        },
                    }
                ]
            }
        ],
        zoomedImage: 'https://i.pinimg.com/564x/ce/91/a7/ce91a70b5eeda3c32c4ad1f558a7e89e.jpg'
    })
    const Error404 = new Error404Page()
    const Error500 = new Error500Page()

    const pages = [
        { link: '/login', label: 'login' },
        { link: '/registration', label: 'registration' },
        { link: '/chat', label: 'chat' },
        { link: '/chat/upload', label: 'chatUpload' },
        { link: 'chat/settings', label: 'chatSettings' },
        { link: 'chat/zoom', label: 'chatZoom' },
        { link: 'chat/addUser', label: 'chatAddUser' },
        { link: '/chat-empty', label: 'chatEmpty' },
        { link: '/profile', label: 'profile' },
        { link: '/profile/change', label: 'profileChange' },
        { link: '/profile/changePassword', label: 'profileChangePassword' },
        { link: '/profile/uploadAvatar', label: 'uploadAvatar' },
        { link: '/profile/uploadAvatar/error', label: 'uploadAvatarError' },
        { link: '/profile/uploadAvatar/success', label: 'uploadAvatarSuccess' },
        { link: '/404', label: 'Error 404' },
        { link: '/500', label: 'Error 500' },
    ];
    const allPages = new AllPages({ pages })

    switch (window.location.pathname) {
        case '/login':
            renderDom(loginPage)
            break;
        case '/registration':
            renderDom(registrationPage)
            break;
        case '/chat':
            renderDom(chatPage)
            break;
        case '/chat-empty':
            renderDom(chatEmptyPage)
            break;
        case '/chat/upload':
            renderDom(chatUploadPage)
            break;
        case '/chat/settings':
            renderDom(chatSettingsPage)
            break;
        case '/chat/addUser':
            renderDom(chatAddUserPage)
            break;
        case '/chat/zoom':
            renderDom(chatZoomImagePage)
            break;
        case '/profile':
            renderDom(profilePage)
            break;
        case '/profile/change':
            renderDom(profileChangePage)
            break;
        case '/profile/changePassword':
            renderDom(profileChangePasswordPage)
            break;
        case '/profile/uploadAvatar':
            renderDom(uploadAvatarPage)
            break;
        case '/profile/uploadAvatar':
            renderDom(uploadAvatarPage)
            break;
        case '/profile/uploadAvatar/error':
            renderDom(uploadAvatarErrorPage)
            break;
        case '/profile/uploadAvatar/success':
            renderDom(uploadAvatarSuccessPage)
            break;
        case '/404':
            renderDom(Error404)
            break;
        case '/500':
            renderDom(Error500)
            break;
        default:
            renderDom(allPages)
            break;
    }

});