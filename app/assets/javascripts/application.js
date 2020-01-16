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

//-----------------------------------------------main_category_ajax_top-------------------------------------------


$(function () {
    $('#main_submit').off('click');
    $('#main_submit').on('click', function (e) {
        e.preventDefault();

        $(document).off('click', ".main_delete2");
        var params = $("#new_main").serialize();

        var main_category = $('#main_category_main_category_name').val();
        console.log(main_category)
        $.ajax({
            url: "../main_categories",
            type: 'POST',
            data: params,
            /*
            data: {
                artist: artist
            },
            */
            dataType: 'json',
        })
            .done(function (data) {
                console.log(data)
                $('.main_wrapper').prepend('<span>' + data.main_category_name + '<button type="button" name="削除" value="' + data.id + '"class="main_delete2">削除</button></span>');
                $('#main_category_main_category_name').val("");
                $('<option>').attr({
                    value: data.id,
                }).html(data.main_category_name).appendTo('#content_main_category_id');

            })
            .fail(function (data) {
                console.log(data)
            })
            .always(function (data) {
                $('.submit-btn').prop('disabled', false);　//ここで解除している
            })
    })
});

//---------------------------------------------main_category_ajax_bottom------------------------------------------

//------------------------------------------------category1_ajax_top----------------------------------------------



$(function () {
    $('#category1_submit').off('click');
    $('#category1_submit').on('click', function (e) {
        e.preventDefault();

        $(document).off('click', ".category1_delete2");
        var params = $("#new_category1").serialize();

        var category1 = $('#category1_category1_name').val();
        console.log(category1)
        $.ajax({
            url: "../category1s",
            type: 'POST',
            data: params,
            /*
            data: {
                artist: artist
            },
            */
            dataType: 'json',
        })
            .done(function (data) {
                console.log(data)
                $('.category1_wrapper').prepend('<span>' + data.category1_name + '<button type="button" name="削除" value="' + data.id + '"class="category1_delete2">削除</button></span>');
                $('#category1_category1_name').val("");
                $('<option>').attr({
                    value: data.id,
                }).html(data.category1_name).appendTo('#content_category1_id');

            })
            .fail(function (data) {
                console.log(data)
            })
            .always(function (data) {
                $('.submit-btn').prop('disabled', false);　//ここで解除している
            })
    })
});

//---------------------------------------------category1_ajax_bottom------------------------------------------

//---------------------------------------------category2_ajax_top---------------------------------------------


$(function () {
    $('#category2_submit').off('click');
    $('#category2_submit').on('click', function (e) {
        e.preventDefault();

        $(document).off('click', ".category2_delete2");
        var params = $("#new_category2").serialize();

        var category2 = $('#category2_category2_name').val();
        console.log(category2)
        $.ajax({
            url: "../category2s",
            type: 'POST',
            data: params,
            /*
            data: {
                artist: artist
            },
            */
            dataType: 'json',
        })
            .done(function (data) {
                console.log(data)
                $('.category2_wrapper').prepend('<span>' + data.category2_name + '<button type="button" name="削除" value="' + data.id + '"class="category2_delete2">削除</button></span>');
                $('#category2_category2_name').val("");
                $('<option>').attr({
                    value: data.id,
                }).html(data.category2_name).appendTo('#content_category2_id');

            })
            .fail(function (data) {
                console.log(data)
            })
            .always(function (data) {
                $('.submit-btn').prop('disabled', false);　//ここで解除している
            })
    })
});

//---------------------------------------------category2_ajax_bottom------------------------------------------

//---------------------------------------------category3_ajax_top---------------------------------------------



$(function () {
    $('#category3_submit').off('click');
    $('#category3_submit').on('click', function (e) {
        e.preventDefault();

        $(document).off('click', ".category3_delete2");
        var params = $("#new_category3").serialize();

        var category3 = $('#category3_category3_name').val();
        console.log(category3)
        $.ajax({
            url: "../category3s",
            type: 'POST',
            data: params,
            /*
            data: {
                artist: artist
            },
            */
            dataType: 'json',
        })
            .done(function (data) {
                console.log(data)
                $('.category3_wrapper').prepend('<span>' + data.category3_name + '<button type="button" name="削除" value="' + data.id + '"class="category3_delete2">削除</button></span>');
                $('#category3_category3_name').val("");
                $('<option>').attr({
                    value: data.id,
                }).html(data.category3_name).appendTo('#content_category3_id');

            })
            .fail(function (data) {
                console.log(data)
            })
            .always(function (data) {
                $('.submit-btn').prop('disabled', false);　//ここで解除している
            })
    })
});

//---------------------------------------------category3_ajax_bottom------------------------------------------

//---------------------------------------------category4_ajax_top---------------------------------------------



$(function () {
    $('#category4_submit').off('click');
    $('#category4_submit').on('click', function (e) {
        e.preventDefault();

        $(document).off('click', ".category4_delete2");
        var params = $("#new_category4").serialize();

        var category4 = $('#category4_category4_name').val();
        console.log(category4)
        $.ajax({
            url: "../category4s",
            type: 'POST',
            data: params,
            /*
            data: {
                artist: artist
            },
            */
            dataType: 'json',
        })
            .done(function (data) {
                console.log(data)
                $('.category4_wrapper').prepend('<span>' + data.category4_name + '<button type="button" name="削除" value="' + data.id + '"class="category4_delete2">削除</button></span>');
                $('#category4_category4_name').val("");
                $('<option>').attr({
                    value: data.id,
                }).html(data.category4_name).appendTo('#content_category4_id');

            })
            .fail(function (data) {
                console.log(data)
            })
            .always(function (data) {
                $('.submit-btn').prop('disabled', false);　//ここで解除している
            })
    })
});

//---------------------------------------------category4_ajax_bottom------------------------------------------

//---------------------------------------------category5_ajax_top---------------------------------------------



$(function () {
    $('#category5_submit').off('click');
    $('#category5_submit').on('click', function (e) {
        e.preventDefault();

        $(document).off('click', ".category5_delete2");
        var params = $("#new_category5").serialize();

        var category5 = $('#category5_category5_name').val();
        console.log(category5)
        $.ajax({
            url: "../category5s",
            type: 'POST',
            data: params,
            /*
            data: {
                artist: artist
            },
            */
            dataType: 'json',
        })
            .done(function (data) {
                console.log(data)
                $('.category5_wrapper').prepend('<span>' + data.category5_name + '<button type="button" name="削除" value="' + data.id + '"class="category5_delete2">削除</button></span>');
                $('#category5_category5_name').val("");
                $('<option>').attr({
                    value: data.id,
                }).html(data.category5_name).appendTo('#content_category5_id');

            })
            .fail(function (data) {
                console.log(data)
            })
            .always(function (data) {
                $('.submit-btn').prop('disabled', false);　//ここで解除している
            })
    })
});

//---------------------------------------------category5_ajax_bottom------------------------------------------

//---------------------------------------------category6_ajax_top---------------------------------------------



$(function () {
    $('#category6_submit').off('click');
    $('#category6_submit').on('click', function (e) {
        e.preventDefault();

        $(document).off('click', ".category6_delete2");
        var params = $("#new_category6").serialize();

        var category6 = $('#category6_category6_name').val();
        console.log(category6)
        $.ajax({
            url: "../category6s",
            type: 'POST',
            data: params,
            /*
            data: {
                artist: artist
            },
            */
            dataType: 'json',
        })
            .done(function (data) {
                console.log(data)
                $('.category6_wrapper').prepend('<span>' + data.category6_name + '<button type="button" name="削除" value="' + data.id + '"class="category6_delete2">削除</button></span>');
                $('#category6_category6_name').val("");
                $('<option>').attr({
                    value: data.id,
                }).html(data.category6_name).appendTo('#content_category6_id');

            })
            .fail(function (data) {
                console.log(data)
            })
            .always(function (data) {
                $('.submit-btn').prop('disabled', false);　//ここで解除している
            })
    })
});

//---------------------------------------------category6_ajax_bottom------------------------------------------
