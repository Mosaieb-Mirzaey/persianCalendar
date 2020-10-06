

$(".auto-close-example").persianDatepicker({
    autoClose: true,
    "inline": false,
    "format": "LL",
    "viewMode": "day",
    "initialValue": true,
    "minDate":  new Date(),
    // "maxDate": 1651964959074,
    "position": "auto",
    "altFormat": " dddd  DD / MMM /YYYY",
    "altField": ".auto-close-example",
    "onlyTimePicker": false,
    "onlySelectOnDate": true,
    "calendarType": "persian",
    "inputDelay": 800,
    "observer": false,
    "calendar": {
        "persian": {
            "locale": "fa",
            "showHint": true,
            "leapYearMode": "algorithmic"
        },
        "gregorian": {
            "locale": "en",
            "showHint": true
        }
    },
    "navigator": {
        "enabled": true,
        "scroll": {
            "enabled": true
        },
        "text": {
            "btnNextText": "<",
            "btnPrevText": ">"
        }
    },
    "toolbox": {
        "enabled": true,
        "calendarSwitch": {
            "enabled": true,
            "format": "MMMM"
        },
        "todayButton": {
            "enabled": true,
            "text": {
                "fa": "امروز",
                "en": "Today"
            }
        },
        "submitButton": {
            "enabled": true,
            "text": {
                "fa": "تایید",
                "en": "Submit"
            }
        },
        "text": {
            "btnToday": "امروز"
        }
    },
    "timePicker": {
        "enabled": true,
        "step": 1,
        "hour": {
            "enabled": false,
            "step": null
        },
        "minute": {
            "enabled": false,
            "step": null
        },
        "second": {
            "enabled": false,
            "step": null
        },
        "meridian": {
            "enabled": false
        }
    },
    "dayPicker": {
        "enabled": true,
        "titleFormat": "YYYY MMMM"
    },
    "monthPicker": {
        "enabled": true,
        "titleFormat": "YYYY"
    },
    "yearPicker": {
        "enabled": true,
        "titleFormat": "YYYY"
    },
    "responsive": true

});