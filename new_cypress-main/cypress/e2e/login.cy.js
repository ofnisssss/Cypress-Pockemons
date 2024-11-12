describe('Проверка авторизации', function () {

    it('Верный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); //зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //проверка цвета кнопки вост пароль
        cy.get('#mail').type ('german@dolnikov.ru' ); // ввели логин
        cy.get('#pass').type ('iLoveqastudio1'); //ввели пароль
        cy.get('#loginButton').click(); // нажать войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); //проверяем что авторизация успешная
        cy.get('#messageHeader').should('be.visible'); //текст виден юзеру
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //есть крестик, виден юзеру
    })
    it('Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio/'); //зашли на сайт
        cy.get('#mail').type ('german@dolnikov.ru' ); // ввели логин
        cy.get('#pass').type ('iLoveqastudio10'); //ввели неверный пароль
        cy.get('#loginButton').click(); // нажать войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //проверяем что авторизация неуспешная
        cy.get('#messageHeader').should('be.visible'); //текст виден юзеру
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //есть крестик, виден юзеру
    })
    it('Неверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); //зашли на сайт
        cy.get('#mail').type ('german@dolnikovgerman.ru' ); // ввели неверный логин
        cy.get('#pass').type ('iLoveqastudio1'); //ввели верный пароль
        cy.get('#loginButton').click(); // нажать войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //проверяем что авторизация неуспешная
        cy.get('#messageHeader').should('be.visible'); //текст виден юзеру
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //есть крестик, виден юзеру
    })
    it('Негативный тест валидации логина', function () {
        cy.visit('https://login.qa.studio/'); //зашли на сайт
        cy.get('#mail').type ('germandolnikov.ru' ); // ввели логин без @
        cy.get('#pass').type ('iLoveqastudio1'); //ввели верный пароль
        cy.get('#loginButton').click(); // нажать войти
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); //проверяем что авторизация неуспешная
        cy.get('#messageHeader').should('be.visible'); //текст виден юзеру
    })
    it('Восстановление пароля', function () {
        cy.visit('https://login.qa.studio/'); //зашли на сайт
        cy.get('#forgotEmailButton').click(); // нажать забыли пароль
        cy.get('#mailForgot').type ('german@dolnikov.ru' ); // ввести почту
        cy.get('#restoreEmailButton').click(); //нажать отправить код
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); //проверяем, что текст есть
        cy.get('#messageHeader').should('be.visible'); //текст виден юзеру
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //есть крестик, виден юзеру
    })
    it('Приведение к строчным буквам в логине', function () {
       cy.visit('https://login.qa.studio/'); //зашли на сайт
       cy.get('#mail').type ('GerMan@Dolnikov.ru' ); // ввели логин
        cy.get('#pass').type ('iLoveqastudio1'); //ввели пароль
        cy.get('#loginButton').click(); // нажать войти
      cy.get('#messageHeader').contains('Авторизация прошла успешно'); //проверяем что авторизация успешная
      cy.get('#messageHeader').should('be.visible'); //текст виден юзеру
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //есть крестик, виден юзеру
})
})
