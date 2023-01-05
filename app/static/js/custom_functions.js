
$("#contact_form").submit(function(event){
    event.preventDefault();

    var validations_state = validate_inputs_email("#contact_form");

    if(validations_state != false && validations_state != undefined){
        var json_params = "&function_name=send_email&" + $(this).serialize();

        $.post("/ajax-request", json_params, function(data){
            data = JSON.parse(data);
            if(data.status == true){
                $("#message_content #email_message").removeClass("alert-danger");
                $("#message_content #email_message").addClass("alert-success");
            }
            else if(data.status == false) {
                $("#message_content #email_message").removeClass("alert-success");
                $("#message_content #email_message").addClass("alert-danger");
            }
            
            $("#message_content #email_message strong").text(data.title);
            $("#message_content #email_message > span").text(data.message);
            $("#message_content #email_message").show();
        });
    }
});

// NEW CUSTOM QUERYS

function showvalue(arg) {
    alert(arg);
}

function show_gallery(){
    var gallery = [{img: "sample.png", type: "electrical", description: "Consetetur sadipscing elitr, sed diam nonumy"}];
    
    $.each(gallery, function(index, value){

        var html = '<div class="col-lg-3 col-md-6 col-sm-12 element-item '+value.type+'" data-category="'+value.type+'">' +
        '<div class="gallery-item">' +
        '<div class="item-media">' +
        '<img src="static/images/services gallery/'+value.img+'" alt="" />' +
        '<div class="media-links">' +
        '<div class="links-wrap">' +
        '<a href="static/images/services gallery/'+value.img+'" class="p-link example-image-link" data-lightbox="example-set" data-title="Electrical">' +
        '<i class="fa fa-expand" aria-hidden="true"></i>' +
        '</a>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="item-content">' +
        '<h6 class="item-meta greylinks">' +
        '<a href="gallery-single.html">'+value.description+'</a>' +
        '</h6>' +
        '</div>' +
        '</div>' +
        '</div>';
        $("#gallery_grid").append(html);
    });
}

// Document ready functions
$(document).ready(function() {
    try {
        oHandler = $(".mydds, .selectcity").msDropDown().data("dd");
        $("#ver").html($.msDropDown.version);
    } catch (e) {
        alert("Error: " + e.message);
    }

    // Load gallery
    if(validate_exist_object("#gallery")){
        show_gallery();
    }

    $(function(){
        if( window.location.pathname == "/Home")
            $(".navigation ul li#home_button").addClass('active');
        else if( window.location.pathname == "/About%20Us")
            $(".navigation ul li#about_button").addClass('active');
        else if( window.location.pathname == "/Our%20Services")
            $(".navigation ul li#service_button").addClass('active');
        else if( window.location.pathname == "/Contact")
            $(".navigation ul li#contact_button").addClass('active');
    });

});