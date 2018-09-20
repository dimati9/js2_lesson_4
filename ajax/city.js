(function($) {
    $(function(){
        $.getJSON('city.json', function(data) {
            $.each(data, function(key, val) {
                $('#countries').append('<option value="' + val + '">' + key + '</option>');
            });
        });
    });
})(jQuery);


