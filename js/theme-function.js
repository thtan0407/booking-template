$(function () {

    // Submit phone send phone
    $('#form-sendPhone form').submit(function () {
        $(this).parent().addClass('hidden');
        $('#form-sendCode').removeClass('hidden');

        return false;
    });

    // Return Send Phone
    // Form send code
    $('#return-sendPhone').click(function () {
        $(this).parents('#form-sendCode').addClass('hidden');
        $('#form-sendPhone').removeClass('hidden');
    });

    $('input[name=codephone]').on("change keyup paste", function () {
        if ($(this).val() != '')
            $(this).parents('#form-sendCode').find('span.error').css('display', 'none');
    });

    $('#form-sendCode form').submit(function () {
        // Xử lý code - show error
        var valInput = $(this).find('input[name=codephone]').val();
        if (valInput != 'anhnam')
            $(this).find('span.error').css('display', 'block');
        else  {
            $(this).parent().addClass('hidden');
            $('#info-register').removeClass('hidden');
        }

        return false;
    });

    //  Xử lý step
    $('#sendInfo-step1').submit(function () {
        $(this).parents('#step1').removeClass('in active');
        $('#step2').addClass('in active');
        $('#step-two').addClass('active');
        $('#step-one').removeClass('active');

        return false;
    });

    $('#sendInfo-step2').submit(function () {
        $(this).parent().removeClass('in active');
        $('#step3').addClass('in active');
        $('#step-three').addClass('active');
        $('#step-two').removeClass('active');

        return false;
    });

    $('#return-step').click(function () {
        $(this).parents('#step2').removeClass('in active');
        $('#step1').addClass('in active');
        $('#step-one').addClass('active');
        $('#step-two').removeClass('active');
    });

    $('select[name=select-staff]').on('change', function () {
        if ($(this).val() != '')
            $('select[name=select-time]').prop('disabled', false);
        else {
            $('select[name=select-time]').prop('disabled', true);
            $('#addService').prop('disabled', true);
            $(this).parents('#sendInfo-step2').find('button#nextStep3').prop('disabled', false);
        }
    });

    $('select[name=select-time]').on('change', function () {
        if ($(this).val() != '')
            $('#addService').prop('disabled', false);
        else {
            $('#addService').prop('disabled', true);
            $(this).parents('#sendInfo-step2').find('button#nextStep3').prop('disabled', false);
        }
    });

    $('#addService').click(function () {
        $(this).parents('.box-main').find('.box-result').removeClass('hidden');
        $(this).parents('#sendInfo-step2').find('button#nextStep3').prop('disabled', false);
    });

    $('.box-close a').click(function () {
        $(this).parents('.box-result').addClass('hidden');
        $(this).parents('#sendInfo-step2').find('button#nextStep3').prop('disabled', true);
    });

//    Delete gallery
    $('.gallery-delete a').click(function () {
        $(this).parents('.col-md-4').remove();
    });
});