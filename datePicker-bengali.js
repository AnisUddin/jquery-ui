/* Bengli/BD initialisation for the jQuery UI date picker plugin. */
/* Written by Mohammad Anis Uddin. */
(function (factory) {
    if (typeof define === "function" && define.amd) {

        // AMD. Register as an anonymous module.
        define(["../widgets/datepicker"], factory);
    } else {

        // Browser globals
        factory(jQuery.datepicker);
    }
}(function (datepicker) {

    datepicker.regional["en-bn"] = {
        closeText: "সম্পন্ন হয়েছে",
        prevText: "পেছনে",
        nextText: "সামনে",
        currentText: "আজ",
        monthNames: ["জানুয়ারি", "ফেব্রুয়ারি", "মার্চ", "এপ্রিল", "মে", "জুন",
        "জুলাই", "আগস্ট", "সেপ্টেমবর", "অক্টোবর", "নভেম্বর", "ডিসেম্বর"],
        monthNamesShort: ["জানু", "ফেব্রু", "মার্চ", "এপ্রিল", "মে", "জুন",
        "জুলাই", "আগ", "সেপ্ট", "অক্টো", "নভে", "ডিসে"],
        dayNames: ["রবিবার", "সোমবার", "মঙ্গলবার", "বুধবার", "বৃহঃপতিবার", "শুক্রবার", "শনিবার"],
        dayNamesShort: ["রবি", "সোম", "মঙ্গল", "বুধ", "বৃহঃ", "শুক্র", "শনি"],
        dayNamesMin: ["রবি", "সোম", "মঙ্গল", "বুধ", "বৃহঃ", "শুক্র", "শনি"],
        weekHeader: "সপ্তাহ",
        dateFormat: "dd/mm/yy",
        firstDay: 7,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ""
    };
    datepicker.setDefaults(datepicker.regional["en-bn"]);

    return datepicker.regional["en-bn"];

}));