
//
// galeria de fotos
//
$(".image_item").click(function(){

    var atr = $(this).find('img').attr('src');

    // Mudando a imagem selecionada
    $(".image_selected").find('img').attr('src', atr);

    // Mudando o thumb selecionado
    $('.image_list').find('.image_item').removeClass('selected');
    $(this).addClass('selected');

});