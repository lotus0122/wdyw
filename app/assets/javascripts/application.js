// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .

$ (function () {
    $('.main_button').on('click', function () {
        $('.main_modal_wrapper').show();
        $('.main_modal').show();
        $('.create_main_modal').show();
    })
    $('.fa_wrapper').on('click', function () {
        $('.main_modal_wrapper').hide();
        $('.main_modal').hide();
        $('.main_modal_content').hide();
    })

    $('.category1_button').on('click', function () {
        $('.category1_modal_wrapper').show();
        $('.category1_modal').show();
        $('.create_category1_modal').show();
    })
    $('.fa_wrapper').on('click', function () {
        $('.category1_modal_wrapper').hide();
        $('.category1_modal').hide();
        $('.category1_modal_content').hide();
    })

    $('.category2_button').on('click', function () {
        $('.category2_modal_wrapper').show();
        $('.category2_modal').show();
        $('.create_category2_modal').show();
    })
    $('.fa_wrapper').on('click', function () {
        $('.category2_modal_wrapper').hide();
        $('.category2_modal').hide();
        $('.category2_modal_content').hide();
    })

    $('.category3_button').on('click', function () {
        $('.category3_modal_wrapper').show();
        $('.category3_modal').show();
        $('.create_category3_modal').show();
    })
    $('.fa_wrapper').on('click', function () {
        $('.category3_modal_wrapper').hide();
        $('.category3_modal').hide();
        $('.category3_modal_content').hide();
    })

    $('.category4_button').on('click', function () {
        $('.category4_modal_wrapper').show();
        $('.category4_modal').show();
        $('.create_category4_modal').show();
    })
    $('.fa_wrapper').on('click', function () {
        $('.category4_modal_wrapper').hide();
        $('.category4_modal').hide();
        $('.category4_modal_content').hide();
    })

    $('.category5_button').on('click', function () {
        $('.category5_modal_wrapper').show();
        $('.category5_modal').show();
        $('.create_category5_modal').show();
    })
    $('.fa_wrapper').on('click', function () {
        $('.category5_modal_wrapper').hide();
        $('.category5_modal').hide();
        $('.category5_modal_content').hide();
    })

    $('.category6_button').on('click', function () {
        $('.category6_modal_wrapper').show();
        $('.category6_modal').show();
        $('.create_category6_modal').show();
    })
    $('.fa_wrapper').on('click', function () {
        $('.category6_modal_wrapper').hide();
        $('.category6_modal').hide();
        $('.category6_modal_content').hide();
    })
    
});