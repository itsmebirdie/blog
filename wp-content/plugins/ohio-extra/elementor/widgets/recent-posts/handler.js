jQuery( window ).on('elementor/frontend/init', () => {
    elementorFrontend.hooks.addAction('frontend/element_ready/ohio_recent_posts.default', ( $element ) => {
        jQuery(window).trigger('ohio:handle_bg_images');

        if (AOS) {
            AOS.init();
        }
    });
});