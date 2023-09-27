const mongose = require('mongoose');



try {
    mongose.connect("mongodb://0.0.0.0/uninersidade").then(() =>
        console.log("database conect")).catch((error) =>
            console.log("Erro ao conect database"));
}
catch (error) {
    console.log("error ao ligar base de dados");
};





Identificación del paciente:

Nombre completo
Número de identificación (ID)
Fecha de nacimiento
Género
Dirección
Número de teléfono
Correo electrónico
Información de contacto de emergencia:

Nombre del contacto de emergencia
Relación con el paciente
Número de teléfono del contacto de emergencia
Información médica:

Historia clínica
Diagnósticos
Tratamientos anteriores
Alergias
Medicamentos actuales
Resultados de pruebas médicas (radiografías, análisis de sangre, etc.)
Problemas de salud crónicos
Información de seguros:

Compañía de seguros
Número de póliza de seguro
Información de contacto de la compañía de seguros
Registro de visitas:

Fechas de visitas médicas
Nombre del médico o profesional de la salud
Motivo de la visita
Notas y observaciones del médico

