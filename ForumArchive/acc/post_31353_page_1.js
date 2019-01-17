[{"Owner":"PixelPush","Date":"2017-06-29T12:25:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI have a large model with various points of interest. I_t_d to use an arc rotate camera so that users can freely rotate around the model.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe other part involves users clicking on a certain model area_co_ which will then animate the camera to a pre determined position and distance from the selected point of interest.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCan anyone give me a clue as to the best animation type to use float/vector 3 interpolarion etc and how I might go about this.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThere will be three values which need to be _qt_tweened_qt_ ie - alpha_co_ beta and radius.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAs always thanks in advance _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-06-29T15:16:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere is what you can do_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t1. Find where you want to go (ie. targetPosition (vector3))\n_lt_/p_gt_\n\n_lt_p_gt_\n\t2. Save current alpha_co_ beta and radius\n_lt_/p_gt_\n\n_lt_p_gt_\n\t3. Call camera.setPosition(targetPosition) and save alpha_co_ beta and radius\n_lt_/p_gt_\n\n_lt_p_gt_\n\t4. Restore previous alpha_co_ beta and radius\n_lt_/p_gt_\n\n_lt_p_gt_\n\t5.Create float animations for the three values\n_lt_/p_gt_\n\n_lt_p_gt_\n\t6. Enjoy\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"PixelPush","Date":"2017-06-29T18:44:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks very much Deltakosh. Would I need three separate animation to handle the float change for each value \n_lt_/p_gt_\n\n_lt_p_gt_\n\tie _dd_ one for alpha another for beta and another for radius etc?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd if so_co_ would these automatically run at the same time_co_ despite being 3 separate lines of code?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-06-29T21:32:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tYes and yes _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"PixelPush","Date":"2017-06-30T16:41:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tGot it_co_ Thanks !\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]