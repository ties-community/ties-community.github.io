// leanModal v1.1 by Ray Stone - http://finelysliced.com.au
// Dual licensed under the MIT and GPL
(function($) {
    //extends the jquery library to create a function called leanModal and in the function creates a variable called options
    $.fn.extend({leanModal: function(options) {
            var defaults = { top: 100, overlay: 0.5, closeButton: null};
            //creates a variable called overlay to store the html tag for the overlay
            var overlay = $("<div id='lean_overlay'></div>");
            //adds the overlay to the body everytime the modal is opened
            $("body").append(overlay);
            //extends the options variable to contain two variables?
            options = $.extend(defaults, options);
            //overlay function
            return this.each(function() {
                //creates a local variable to store the options variable(s)
                var o = options;
                //creates a function to display the overlay everytime it is clicked
                $(this).click(function(e) {
                    //Creates the modal variable and sets it equal to the href of the a tag clicked on which happens to be the id for the modal css
                    var modal_id = $(this).attr("href");
                    //enables user to click outside the modal and call the close_modal function below
                    $("#lean_overlay").click(function() {
                        close_modal(modal_id)
                    });
                    //Enables user to click on the X and call the close_modal function below
                    $(o.closeButton).click(function() {
                        close_modal(modal_id)
                    });
                    //stores the outermost height and width of the modal into two variables
                    var modal_height = $(modal_id).outerHeight();
                    var modal_width = $(modal_id).outerWidth();
                    //displays the overlay to mask the background but sets its opacity to 0
                    $("#lean_overlay").css({
                        "display": "block",
                        opacity: 0
                    });
                    //fades the overlay in 200ms
                    $("#lean_overlay").fadeTo(200, o.overlay);
                    //displays the modal window but sets its opacity to 0 (invisible)
                    $(modal_id).css({
                        "display": "block",
                        "position": "fixed",
                        "opacity": 0,
                        "z-index": 11000,
                        "left": 50 + "%",
                        "margin-left": -(modal_width / 2) + "px",
                        "top": o.top + "px"
                    });
                    //fades in the modal window in 200ms
                    $(modal_id).fadeTo(200, 1);
                    //prevents default action of clicking on link
                    e.preventDefault()
                })
            });
            //function created to be called previously to close the modal window
            function close_modal(modal_id) {
                $("#lean_overlay").fadeOut(200);
                $(modal_id).css({
                    "display": "none"
                })
            }
        }
    })
}
)(jQuery);
