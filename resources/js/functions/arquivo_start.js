$(document).ready(function () {
    $('#jetTest').form({
        fields: {
            nameForm: {
                identifier: 'nameForm',
                rules: [{
                    type: 'empty',
                    prompt: 'O campo "{name}" é obrigatório.'
                }]
            },
            subjectForm: {
                identifier: 'subjectForm',
                rules: [{
                    type: 'empty',
                    prompt: 'O campo "{name}" é obrigatório.'
                }]
            },
            messageForm: {
                identifier: 'messageForm',
                rules: [{
                    type: 'empty',
                    prompt: 'O campo "{name}" é obrigatório.'
                }]
            },
            email: {
                identifier: 'email',
                rules: [{
                    type: 'email',
                    prompt: 'Digite um email válido'
                }]
            },
            phoneForm: {
                identifier: 'phoneForm',
                rules: [
                    {
                        type: 'empty',
                        prompt: 'Digite um telefone válido'
                    },
                    {
                        type: 'minLength[14]',
                        prompt: 'Digite um telefone válido'
                    },
                    {
                        type: 'maxLength[15]',
                        prompt: 'Digite um telefone válido'
                    }
                ]
            }
        }
    });
    $("#jetTest input, #jetTest textarea").on("keyup", function () {
        let valor = $(this).val();
        let campo = $(this).attr('id') + "Inpage";
        $("#" + campo).text(valor);
    });
    $(document).on("click", "#submitFrontPage", function (e) {
        if ($('#jetTest').form('is valid') === true) {
            var tbForm = JSON.stringify($("#jetTest").serializeArray());
            sessionStorage.setItem("tbForm", tbForm);
        }
    });
    $(document).on("click", "#recoveryForm", function (e) {
        let jsonForm = sessionStorage.getItem("tbForm");
        if (jsonForm === null) {
            swal({
                text: "Sem registros",
                type: "warning",
                showCancelButton: false,
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'OK'
            }).then(function () { });
        }
        jsonForm = JSON.parse(jsonForm);
        $.each(jsonForm, function (i, formObject) {
            $('#jetTest').form('set value', formObject.name, formObject.value);
            $("#" + formObject.name + "Inpage").text(formObject.value);
        });
    });
});