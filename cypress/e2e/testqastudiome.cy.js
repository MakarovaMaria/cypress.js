describe('Тестирование login.qa.studio', function () {
    
    it('1.1 Правильный логин и пароль', function () {
        cy.visit('https://testqastudio.me/');
        cy.get('.post-11342 > .product-inner > .product-summary > .woocommerce-loop-product__title > .woocommerce-LoopProduct-link').click();
        cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase').click();
        cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase').click();
        cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
        cy.visit('https://testqastudio.me/');
        cy.get('.post-11337 > .product-inner > .product-summary > .woocommerce-loop-product__title > .woocommerce-LoopProduct-link').click();
        cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
        cy.wait(3000);
        cy.get('.checkout').click();
        cy.get('#billing_first_name').type('Мария');
        cy.get('#billing_last_name').type('Макарова');
        cy.get('#billing_address_1').type('Блюхера 2');
        cy.get('#billing_city').type('Казань');
        cy.get('#billing_state').type('Татарстан');
        cy.get('#billing_postcode').type('420095');
        cy.get('#billing_phone').type('+79625555945');
        cy.get('#billing_email').type('qa.makarova@gmail.com');
        cy.get('#place_order').click();
        cy.contains('Ваш заказ принят. Благодарим вас.').should('be.visible');
       
         })

})