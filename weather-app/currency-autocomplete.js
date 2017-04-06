$(function() {
    var currencies = [{
            value: 'Afghanistan',
            data: 'AFN'
        },
        {
            value: 'Argentina',
            data: 'ARS'
        },
        {
            value: 'Australia',
            data: 'AUD'
        },
        {
            value: 'Bangladesh',
            data: 'BDT'
        },
        {
            value: 'Bhutan',
            data: 'BTN'
        },
        {
            value: 'Brazil',
            data: 'BRL'
        },
        {
            value: 'Bulgaria',
            data: 'BGN'
        },
        {
            value: 'Canada',
            data: 'CAD'
        },
        {
            value: 'Chile',
            data: 'CLP'
        },
        {
            value: 'China',
            data: 'CNY'
        },
        {
            value: 'Colombia',
            data: 'COP'
        },
        {
            value: 'Costa Rica',
            data: 'CRC'
        },
        {
            value: 'Croatia',
            data: 'HRK'
        },
        {
            value: 'Cuba',
            data: 'CUC'
        },
        {
            value: 'Czech',
            data: 'CZK'
        },
        {
            value: 'Egypt',
            data: 'EGP'
        },
        {
            value: 'Ethiopia',
            data: 'ETB'
        },
        {
            value: 'Ghana',
            data: 'GHS'
        },
        {
            value: 'Hong Kong',
            data: 'HKD'
        },
        {
            value: 'India',
            data: 'INR'
        },
        {
            value: 'Indonesia',
            data: 'IDR'
        },
        {
            value: 'Iran ',
            data: 'IRR'
        },
        {
            value: 'Iraq',
            data: 'IQD'
        },
        {
            value: 'Israel',
            data: 'ILS'
        },
        {
            value: 'Jamaica',
            data: 'JMD'
        },
        {
            value: 'Japan',
            data: 'JPY'
        },
        {
            value: 'Kazakhstan',
            data: 'KZT'
        },
        {
            value: 'Kenya',
            data: 'KES'
        },
        {
            value: 'North Korean',
            data: 'KPW'
        },
        {
            value: 'South Korean',
            data: 'KRW'
        },
        {
            value: 'Kuwait',
            data: 'KWD'
        },
        {
            value: 'Malaysia',
            data: 'MYR'
        },
        {
            value: 'Maldivies',
            data: 'MVR'
        },
        {
            value: 'Mexico',
            data: 'MXN'
        },
        {
            value: 'Mongolia',
            data: 'MNT'
        },
        {
            value: 'Namibia',
            data: 'NAD'
        },
        {
            value: 'Nepal',
            data: 'NPR'
        },
        {
            value: 'Netherlands',
            data: 'ANG'
        },
        {
            value: 'New Zealand',
            data: 'NZD'
        },
        {
            value: 'Nigeria',
            data: 'NGN'
        },
        {
            value: 'Pakistan',
            data: 'PKR'
        },
        {
            value: 'Philippine ',
            data: 'PHP'
        },
        {
            value: 'Romania',
            data: 'RON'
        },
        {
            value: 'Russia',
            data: 'RUB'
        },
        {
            value: 'Saudi riyal',
            data: 'SAR'
        },
        {
            value: 'Singapore',
            data: 'SGD'
        },
        {
            value: 'Somalia',
            data: 'SOS'
        },
        {
            value: 'South African',
            data: 'ZAR'
        },
        {
            value: 'Sri Lankan',
            data: 'LKR'
        },
        {
            value: 'Sweden',
            data: 'SEK'
        },
        {
            value: 'Syria',
            data: 'SYP'
        },
        {
            value: 'Taiwan',
            data: 'TWD'
        },
        {
            value: 'Tajikistani',
            data: 'TJS'
        },
        {
            value: 'Tanzanian ',
            data: 'TZS'
        },
        {
            value: 'Thai baht',
            data: 'THB'
        },
        {
            value: 'Paanga',
            data: 'TOP'
        },
        {
            value: 'Trinidad and Tobago',
            data: 'TTD'
        },
        {
            value: 'Turky',
            data: 'TRY'
        },
        {
            value: 'Ukrain',
            data: 'UAH'
        },
        {
            value: 'United Arab Emirates dirham',
            data: 'AED'
        },
        {
            value: 'Britian',
            data: 'GBP'
        },
        {
            value: 'United States',
            data: 'USD'
        },
        {
            value: 'Uzbekistan',
            data: 'UZS'
        },
        {
            value: 'Vanuatu v',
            data: 'VUV'
        },
        {
            value: 'Venezuel ',
            data: 'VEB'
        },
        {
            value: 'Vietnam',
            data: 'VND'
        },
        {
            value: 'Yemeni',
            data: 'YER'
        },
        {
            value: 'Zambian',
            data: 'ZMK'
        },
        {
            value: 'Zimbabwean',
            data: 'ZWD'
        },
    ];

    // setup autocomplete function pulling from currencies[] array
    $('#city').autocomplete({
        lookup: currencies,
       /* onSelect: function(suggestion) {
            var thehtml = 'Currency Name: ' + suggestion.value + ' 
 Symbol: ' + suggestion.data;
            $('#outputcontent').html(thehtml);
        }*/
    });


});
