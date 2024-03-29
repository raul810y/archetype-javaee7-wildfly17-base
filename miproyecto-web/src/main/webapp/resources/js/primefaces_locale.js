/**
 * Javascript que define las leyendas de Primefaces en idioma español de México.
 * Lo anterior conforme a la documentación oficial de Primefaces.
 * Para mayor detalle consulte: https://github.com/primefaces/primefaces/wiki/Locales
 * Autor: Raúl Soto
 */
PrimeFaces.locales ['es_MX'] = {
    closeText: 'Cerrar',
    prevText: 'Previo',
    nextText: 'Siguiente',
    monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre' ],
    monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic' ],
    dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
    dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'],
    dayNamesMin: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
    weekHeader: 'Semana',
    weekNumberTitle: 'S',
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix:'',
    timeOnlyTitle: 'Solo hora',
    timeText: 'Tiempo',
    hourText: 'Hora',
    minuteText: 'Minuto',
    secondText: 'Segundo',
    currentText: 'Fecha actual',
    ampm: false,
    month: 'Mes',
    week: 'semana',
    day: 'Día',
    allDayText: 'Todo el día',
    messages: {  //optional for Client Side Validation
        'javax.faces.component.UIInput.REQUIRED': '{0}: Error de validación: El valor es requerido.',
        'javax.faces.converter.IntegerConverter.INTEGER': '{2}: \'{0}\' debe ser un numero consistente de uno o más dígitos.',
        'javax.faces.converter.IntegerConverter.INTEGER_detail': '{2}: \'{0}\' debe ser un número entre -2147483648 y 2147483647 Ejemplo: {1}',
        'javax.faces.converter.DoubleConverter.DOUBLE': '{2}: \'{0}\' debe ser un número consistente de uno o más dígitos.',
        'javax.faces.converter.DoubleConverter.DOUBLE_detail': '{2}: \'{0}\' debe ser un número entre 4.9E-324 y 1.7976931348623157E308 Ejemplo: {1}',
        'javax.faces.converter.BigDecimalConverter.DECIMAL': '{2}: \'{0}\' debe ser un número con decimales.',
        'javax.faces.converter.BigDecimalConverter.DECIMAL_detail': '{2}: \'{0}\' debe ser un número con decimales el cual consiste de cero o más dígitos, que puede ser seguido de un punto decimal y una fracción. Ejemplo: {1}',
        'javax.faces.converter.BigIntegerConverter.BIGINTEGER': '{2}: \'{0}\' debe ser un número que consta de uno o más dígitos.',
        'javax.faces.converter.BigIntegerConverter.BIGINTEGER_detail': '{2}: \'{0}\' debe ser un número que consta de uno o más dígitos. Ejemplo: {1}',
        'javax.faces.converter.ByteConverter.BYTE': '{2}: \'{0}\' debe ser un número entre 0 y 255.',
        'javax.faces.converter.ByteConverter.BYTE_detail': '{2}: \'{0}\' debe ser un número entre 0 y 255. Ejemplo: {1}',
        'javax.faces.converter.CharacterConverter.CHARACTER': '{1}: \'{0}\' debe ser un carácter válido.',
        'javax.faces.converter.CharacterConverter.CHARACTER_detail': '{1}: \'{0}\' debe ser un carácter ASCII valido.',
        'javax.faces.converter.ShortConverter.SHORT': '{2}: \'{0}\' debe ser un número que consta de uno1 o más dígitos.',
        'javax.faces.converter.ShortConverter.SHORT_detail': '{2}: \'{0}\' debe ser un número entre -32768 y 32767 Ejemplo: {1}',
        'javax.faces.converter.BooleanConverter.BOOLEAN': '{1}: \'{0}\' debe ser \'true\' o \'false\'',
        'javax.faces.converter.BooleanConverter.BOOLEAN_detail': '{1}: \'{0}\' debe ser \'true\' o \'false\'.  Cualquier calor que no sea \'true\' será evaluado como \'false\'.',
        'javax.faces.validator.LongRangeValidator.MAXIMUM': '{1}: Error de validación: El valor es mayor que el máximo permitido de \'{0}\'',
        'javax.faces.validator.LongRangeValidator.MINIMUM': '{1}: Error de validación: El valor es inferior al mínimo permitido de \'{0}\'',
        'javax.faces.validator.LongRangeValidator.NOT_IN_RANGE': '{2}: Error de validación: El atributo especificado no se encuentra entre los valores esperados de {0} y {1}.',
        'javax.faces.validator.LongRangeValidator.TYPE={0}': 'Error de validación: El valor no es del tipo correcto.',
        'javax.faces.validator.DoubleRangeValidator.MAXIMUM': '{1}: Error de validación: El valor es superior que el máximo permitido de \'{0}\'',
        'javax.faces.validator.DoubleRangeValidator.MINIMUM': '{1}: Error de validación: El valor es inferior que el mínimo permitido de \'{0}\'',
        'javax.faces.validator.DoubleRangeValidator.NOT_IN_RANGE': '{2}: Error de validación: El atributo especificado no se encuentra entre los valores esperados de {0} y {1}',
        'javax.faces.validator.DoubleRangeValidator.TYPE={0}': 'Error de validación: El valor no es del tipo correcto',
        'javax.faces.converter.FloatConverter.FLOAT': '{2}: \'{0}\' debe ser un número que consta de uno o más dígitos.',
        'javax.faces.converter.FloatConverter.FLOAT_detail': '{2}: \'{0}\' debe ser un número entre 1.4E-45 y 3.4028235E38  Ejemplo: {1}',
        'javax.faces.converter.DateTimeConverter.DATE': '{2}: \'{0}\' no puede entenderse como una fecha.',
        'javax.faces.converter.DateTimeConverter.DATE_detail': '{2}: \'{0}\' no puede entenderse como una fecha. Ejemplo: {1}',
        'javax.faces.converter.DateTimeConverter.TIME': '{2}: \'{0}\' no puede entenderse como una hora.',
        'javax.faces.converter.DateTimeConverter.TIME_detail': '{2}: \'{0}\' no puede entenderse como una hora. Ejemplo: {1}',
        'javax.faces.converter.DateTimeConverter.DATETIME': '{2}: \'{0}\' no puede entenderse como una fecha y hora.',
        'javax.faces.converter.DateTimeConverter.DATETIME_detail': '{2}: \'{0}\' no puede entenderse como una fecha y hora. Ejemplo: {1}',
        'javax.faces.converter.DateTimeConverter.PATTERN_TYPE': '{1}: El atributo \'patrón\' o \'tipo\' debe esecificarse para convertir el valor \'{0}\'', 
        'javax.faces.converter.NumberConverter.CURRENCY': '{2}: \'{0}\' no puede enternderse como un valor de moneda.',
        'javax.faces.converter.NumberConverter.CURRENCY_detail': '{2}: \'{0}\' no puede enternderse como un valor de moneda. Ejemplo: {1}',
        'javax.faces.converter.NumberConverter.PERCENT': '{2}: \'{0}\' no puede entenderse como un porcentaje.',
        'javax.faces.converter.NumberConverter.PERCENT_detail': '{2}: \'{0}\' no puede entenderse como un porcentaje. Ejemplo: {1}',
        'javax.faces.converter.NumberConverter.NUMBER': '{2}: \'{0}\' no puede entenderse como una fecha.',
        'javax.faces.converter.NumberConverter.NUMBER_detail': '{2}: \'{0}\' no es un número. Ejemplo: {1}',
        'javax.faces.converter.NumberConverter.PATTERN': '{2}: \'{0}\' no es un patrón númerico.',
        'javax.faces.converter.NumberConverter.PATTERN_detail': '{2}: \'{0}\' no es un patrón númerico. Ejemplo: {1}',
        'javax.faces.validator.LengthValidator.MINIMUM': '{1}: Error de validación: La longitud es inferior al mínimo permitido de \'{0}\'',
        'javax.faces.validator.LengthValidator.MAXIMUM': '{1}: Error de validación: La longitud es superior al máximo permitido de \'{0}\'',
        'javax.faces.validator.RegexValidator.PATTERN_NOT_SET': 'Se debe establecer el patrón Regex.',
        'javax.faces.validator.RegexValidator.PATTERN_NOT_SET_detail': 'Se debe establecer el patrón Regex en un valor no vacío.',
        'javax.faces.validator.RegexValidator.NOT_MATCHED': 'No coincide con el patrón',
        'javax.faces.validator.RegexValidator.NOT_MATCHED_detail': 'No coincide con el patrón \'{0}\' ',
        'javax.faces.validator.RegexValidator.MATCH_EXCEPTION': 'Error en la expresión regular.',
        'javax.faces.validator.RegexValidator.MATCH_EXCEPTION_detail': 'Error en la expresión regular, \'{0}\'',
        //optional for bean validation integration in client side validation
        'javax.faces.validator.BeanValidator.MESSAGE': '{0}',
        'javax.validation.constraints.AssertFalse.message': 'debe ser falso',
        'javax.validation.constraints.AssertTrue.message': 'debe ser verdadero',
        'javax.validation.constraints.DecimalMax.message': 'debe ser menor o igual a {0}',
        'javax.validation.constraints.DecimalMin.message': 'debe ser mayor o igual a {0}',
        'javax.validation.constraints.Digits.message': 'el valor numérico está fuera del límite (<{0} dígitos>.<{1} dígito> esperado)',
        'javax.validation.constraints.Future.message': 'debe estar en futuro',
        'javax.validation.constraints.Max.message': 'debe ser menor o igual que {0}',
        'javax.validation.constraints.Min.message': 'debe ser mayor o igual a {0}',
        'javax.validation.constraints.NotNull.message': 'no puede ser vacío',
        'javax.validation.constraints.Null.message': 'puede ser vacío',
        'javax.validation.constraints.Past.message': 'debe estar en pasado',
        'javax.validation.constraints.Pattern.message': 'Debe tener la estructura "{0}"',
        'javax.validation.constraints.Size.message': 'el tamaño debe estar entre {0} y {1}',
        //mensajes del datatable	
        'javax.el.ValueExpression':'No se encuentran registros',
    }
};