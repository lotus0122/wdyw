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
//= require jquery3

//= require bootstrap-sprockets
//= require_tree .
//= require cocoon
//= require popper
//= require tether

//------------------------------------------------------------------------------------------

// $(function() {
//     $(document).on('click', '.new_button', function() {
//         $('.new_modal_wrapper').show();
//         $('.new_modal').show();
//         if ($(this).hasClass('main_button')) {
//         $('.main_modal').show();
//     } else {
//         $('.main_modal').show();
//     }
//     });
// });

// $(function() {
//     $(document).on('click', '.category1_button', function() {
//         $('.category1_modal_wrapper').show();
//         $('.category1_modal').show();
//         if ($(this).hasClass('create_category1_button')) {
//         $('.category1_modal').show();
//     }
//     });
// });

// $(function() {
//     $(document).on('click', '.new_button', function() {
//         $('.new_modal_wrapper').show();
//         $('.new_modal').show();
//         if ($(this).hasClass('category2_button')) {
//         $('.category2_modal').show();
//     } else {
//         $('.category2_modal').show();
//     }
//     });
// });

// $(function() {
//     $(document).on('click', '.new_button', function() {
//         $('.new_modal_wrapper').show();
//         $('.new_modal').show();
//         if ($(this).hasClass('category3_button')) {
//         $('.category3_modal').show();
//     } else {
//         $('.category3_modal').show();
//     }
//     });
// });

// $(function() {
//     $(document).on('click', '.new_button', function() {
//         $('.new_modal_wrapper').show();
//         $('.new_modal').show();
//         if ($(this).hasClass('category4_button')) {
//         $('.category4_modal').show();
//     } else {
//         $('.category4_modal').show();
//     }
//     });
// });

// $(function() {
//     $(document).on('click', '.new_button', function() {
//         $('.new_modal_wrapper').show();
//         $('.new_modal').show();
//         if ($(this).hasClass('category5_button')) {
//         $('.category5_modal').show();
//     } else {
//         $('.category5_modal').show();
//     }
//     });
// });

// $(function() {
//     $(document).on('click', '.new_button', function() {
//         $('.new_modal_wrapper').show();
//         $('.new_modal').show();
//         if ($(this).hasClass('category6_button')) {
//         $('.category6_modal').show();
//     } else {
//         $('.category6_modal').show();
//     }
//     });
// });

//------------------------------------------------------------------------------------------


$(function () {
    $(".effect div").css("opacity", "0");
    $(window).scroll(function () {
        $(".effect").each(function () {
            var imgPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > imgPos - windowHeight + windowHeight / 5) {
                $("div", this).css("opacity", "1");
            } else {
                $("div", this).css("opacity", "0");
            }
        });
    });

    $('.main_category_button').on('click', function () {
        $('.main_category_modal_wrapper').show();
        $('.main_category_modal').show();
        $('.create_main_category_modal').show();
    })
    $('.fa_wrapper').on('click', function () {
        $('.main_category_modal_wrapper').hide();
        $('.main_category_modal').hide();
        $('.main_category_modal_content').hide();
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
    $('#main_category_submit').off('click');
    $('#main_category_submit').on('click', function (e) {
        e.preventDefault();

        $(document).off('click', ".main_category_delete2");
        var params = $("#new_main_category").serialize();

        var main_category = $('#main_category_main_category_name').val();
        console.log(main_category)
        $.ajax({
            url: "../main_categories",
            type: 'POST',
            data: params,
            dataType: 'json',
        })
            .done(function (data) {
                console.log(data)
                $('.main_category_wrapper').prepend('<span>' + data.main_category_name + '<button type="button" name="削除" value="' + data.id + '"class="main_category_delete2">削除</button></span>');
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

$(function () {
    $('.main_category_delete').off('click');
    $(".main_category_delete").on('click', function (e) {
        e.preventDefault();

        var params = $("#new_main_category").serialize();
        var clickEle = $(this)

        // // 削除ボタンにユーザーIDをカスタムデータとして埋め込。
        var main_categoryID = clickEle.val();
        $.ajax({
            url: '../main_categories/' + main_categoryID,
            type: 'DELETE',

            data: params, // DELETE リクエストだよ！と教えてあげる。
            dataType: 'json'
            ,
            success: function (res) {
                // 親要素のspanを削除
                clickEle.parents('span').remove();
                console.log('delete=' + main_categoryID);

                $('select#content_main_category_id option[value=' + main_categoryID + ']').remove();
            },
            error: function (res) {
                alert('エラー');
            }
        })

    });
});

$(function ($) {
    $(document).on('click', ".main_category_delete2", function (e) {
        e.preventDefault();
        var clickEle = $(this)
        // 削除ボタンにユーザーIDをカスタムデータとして埋め込。
        var main_categoryID = clickEle.val();
        $.ajax({
            url: '../main_categories/' + main_categoryID,
            type: 'DELETE',
            data: { 'id': main_categoryID }, // DELETE リクエストだよ！と教えてあげる。
            dataType: 'json',
            success: function (res) {
                // 親要素のspanを削除
                clickEle.parents('span').remove();
                console.log('delete=' + main_categoryID);

                $('select#content_main_category_id option[value=' + main_categoryID + ']').remove();

            },
            error: function (res) {
            }
        })
    });
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

$(function () {
    $('.category1_delete').off('click');
    $(".category1_delete").on('click', function (e) {
        e.preventDefault();

        var params = $("#new_category1").serialize();
        var clickEle = $(this)

        // // 削除ボタンにユーザーIDをカスタムデータとして埋め込。
        var category1ID = clickEle.val();
        $.ajax({
            url: '../category1s/' + category1ID,
            type: 'DELETE',

            data: params, // DELETE リクエストだよ！と教えてあげる。
            dataType: 'json'
            ,
            success: function (res) {
                // 親要素のspanを削除
                clickEle.parents('span').remove();
                console.log('delete=' + category1ID);

                $('select#content_category1_id option[value=' + category1ID + ']').remove();
            },
            error: function (res) {
                alert('エラー');
            }
        })

    });
});

$(function ($) {
    $(document).on('click', ".category1_delete2", function (e) {
        e.preventDefault();
        var clickEle = $(this)
        // 削除ボタンにユーザーIDをカスタムデータとして埋め込。
        var category1ID = clickEle.val();
        $.ajax({
            url: '../category1s/' + category1ID,
            type: 'DELETE',
            data: { 'id': category1ID }, // DELETE リクエストだよ！と教えてあげる。
            dataType: 'json',
            success: function (res) {
                // 親要素のspanを削除
                clickEle.parents('span').remove();
                console.log('delete=' + category1ID);

                $('select#content_category1_id option[value=' + category1ID + ']').remove();

            },
            error: function (res) {
            }
        })
    });
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

$(function () {
    $('.category2_delete').off('click');
    $(".category2_delete").on('click', function (e) {
        e.preventDefault();

        var params = $("#new_category2").serialize();
        var clickEle = $(this)

        // // 削除ボタンにユーザーIDをカスタムデータとして埋め込。
        var category2ID = clickEle.val();
        $.ajax({
            url: '../category2s/' + category2ID,
            type: 'DELETE',

            data: params, // DELETE リクエストだよ！と教えてあげる。
            dataType: 'json'
            ,
            success: function (res) {
                // 親要素のspanを削除
                clickEle.parents('span').remove();
                console.log('delete=' + category2ID);

                $('select#content_category2_id option[value=' + category2ID + ']').remove();
            },
            error: function (res) {
                alert('エラー');
            }
        })

    });
});

$(function ($) {
    $(document).on('click', ".category2_delete2", function (e) {
        e.preventDefault();
        var clickEle = $(this)
        // 削除ボタンにユーザーIDをカスタムデータとして埋め込。
        var category2ID = clickEle.val();
        $.ajax({
            url: '../category2s/' + category2ID,
            type: 'DELETE',
            data: { 'id': category2ID }, // DELETE リクエストだよ！と教えてあげる。
            dataType: 'json',
            success: function (res) {
                // 親要素のspanを削除
                clickEle.parents('span').remove();
                console.log('delete=' + category2ID);

                $('select#content_category2_id option[value=' + category2ID + ']').remove();

            },
            error: function (res) {
            }
        })
    });
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

$(function () {
    $('.category3_delete').off('click');
    $(".category3_delete").on('click', function (e) {
        e.preventDefault();

        var params = $("#new_category3").serialize();
        var clickEle = $(this)

        // // 削除ボタンにユーザーIDをカスタムデータとして埋め込。
        var category3ID = clickEle.val();
        $.ajax({
            url: '../category3s/' + category3ID,
            type: 'DELETE',

            data: params, // DELETE リクエストだよ！と教えてあげる。
            dataType: 'json'
            ,
            success: function (res) {
                // 親要素のspanを削除
                clickEle.parents('span').remove();
                console.log('delete=' + category3ID);

                $('select#content_category3_id option[value=' + category3ID + ']').remove();
            },
            error: function (res) {
                alert('エラー');
            }
        })

    });
});

$(function ($) {
    $(document).on('click', ".category3_delete2", function (e) {
        e.preventDefault();
        var clickEle = $(this)
        // 削除ボタンにユーザーIDをカスタムデータとして埋め込。
        var category3ID = clickEle.val();
        $.ajax({
            url: '../category3s/' + category3ID,
            type: 'DELETE',
            data: { 'id': category3ID }, // DELETE リクエストだよ！と教えてあげる。
            dataType: 'json',
            success: function (res) {
                // 親要素のspanを削除
                clickEle.parents('span').remove();
                console.log('delete=' + category3ID);

                $('select#content_category3_id option[value=' + category3ID + ']').remove();

            },
            error: function (res) {
            }
        })
    });
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

$(function () {
    $('.category4_delete').off('click');
    $(".category4_delete").on('click', function (e) {
        e.preventDefault();

        var params = $("#new_category4").serialize();
        var clickEle = $(this)

        // // 削除ボタンにユーザーIDをカスタムデータとして埋め込。
        var category4ID = clickEle.val();
        $.ajax({
            url: '../category4s/' + category4ID,
            type: 'DELETE',

            data: params, // DELETE リクエストだよ！と教えてあげる。
            dataType: 'json'
            ,
            success: function (res) {
                // 親要素のspanを削除
                clickEle.parents('span').remove();
                console.log('delete=' + category4ID);

                $('select#content_category4_id option[value=' + category4ID + ']').remove();
            },
            error: function (res) {
                alert('エラー');
            }
        })

    });
});

$(function ($) {
    $(document).on('click', ".category4_delete2", function (e) {
        e.preventDefault();
        var clickEle = $(this)
        // 削除ボタンにユーザーIDをカスタムデータとして埋め込。
        var category4ID = clickEle.val();
        $.ajax({
            url: '../category4s/' + category4ID,
            type: 'DELETE',
            data: { 'id': category4ID }, // DELETE リクエストだよ！と教えてあげる。
            dataType: 'json',
            success: function (res) {
                // 親要素のspanを削除
                clickEle.parents('span').remove();
                console.log('delete=' + category4ID);

                $('select#content_category4_id option[value=' + category4ID + ']').remove();

            },
            error: function (res) {
            }
        })
    });
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

$(function () {
    $('.category5_delete').off('click');
    $(".category5_delete").on('click', function (e) {
        e.preventDefault();

        var params = $("#new_category5").serialize();
        var clickEle = $(this)

        // // 削除ボタンにユーザーIDをカスタムデータとして埋め込。
        var category5ID = clickEle.val();
        $.ajax({
            url: '../category5s/' + category5ID,
            type: 'DELETE',

            data: params, // DELETE リクエストだよ！と教えてあげる。
            dataType: 'json'
            ,
            success: function (res) {
                // 親要素のspanを削除
                clickEle.parents('span').remove();
                console.log('delete=' + category5ID);

                $('select#content_category5_id option[value=' + category5ID + ']').remove();
            },
            error: function (res) {
                alert('エラー');
            }
        })

    });
});

$(function ($) {
    $(document).on('click', ".category5_delete2", function (e) {
        e.preventDefault();
        var clickEle = $(this)
        // 削除ボタンにユーザーIDをカスタムデータとして埋め込。
        var category5ID = clickEle.val();
        $.ajax({
            url: '../category5s/' + category5ID,
            type: 'DELETE',
            data: { 'id': category5ID }, // DELETE リクエストだよ！と教えてあげる。
            dataType: 'json',
            success: function (res) {
                // 親要素のspanを削除
                clickEle.parents('span').remove();
                console.log('delete=' + category5ID);

                $('select#content_category5_id option[value=' + category5ID + ']').remove();

            },
            error: function (res) {
            }
        })
    });
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

$(function () {
    $('.category6_delete').off('click');
    $(".category6_delete").on('click', function (e) {
        e.preventDefault();

        var params = $("#new_category6").serialize();
        var clickEle = $(this)

        // // 削除ボタンにユーザーIDをカスタムデータとして埋め込。
        var category6ID = clickEle.val();
        $.ajax({
            url: '../category6s/' + category6ID,
            type: 'DELETE',

            data: params, // DELETE リクエストだよ！と教えてあげる。
            dataType: 'json'
            ,
            success: function (res) {
                // 親要素のspanを削除
                clickEle.parents('span').remove();
                console.log('delete=' + category6ID);

                $('select#content_category6_id option[value=' + category6ID + ']').remove();
            },
            error: function (res) {
                alert('エラー');
            }
        })

    });
});

$(function ($) {
    $(document).on('click', ".category6_delete2", function (e) {
        e.preventDefault();
        var clickEle = $(this)
        // 削除ボタンにユーザーIDをカスタムデータとして埋め込。
        var category6ID = clickEle.val();
        $.ajax({
            url: '../category6s/' + category6ID,
            type: 'DELETE',
            data: { 'id': category6ID }, // DELETE リクエストだよ！と教えてあげる。
            dataType: 'json',
            success: function (res) {
                // 親要素のspanを削除
                clickEle.parents('span').remove();
                console.log('delete=' + category6ID);

                $('select#content_category6_id option[value=' + category6ID + ']').remove();

            },
            error: function (res) {
            }
        })
    });
});

//---------------------------------------------category6_ajax_bottom------------------------------------------

