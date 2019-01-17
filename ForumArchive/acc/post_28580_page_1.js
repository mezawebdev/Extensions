[{"Owner":"vladimr","Date":"2017-02-21T11:52:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co__lt_br /_gt__lt_br /_gt_\n\tIn corporate environment I tried to run a very basic babylon.js scene in a Win7 Chrome browser using my own_co_ Python 3.x and node.js simple HTTP servers - without any success._lt_br /_gt_\n\tI always get the same error_dd_ _qt_Error while trying to load texture_dd_ ..._qt_ for texture and height map files._lt_br /_gt_\n\tThese and all other project files (html_co_ js_co_ css_co_ images) reside in the same directory for simplicity and HTTP servers were run from the same place._lt_br /_gt_\n\tAll other files are loaded successfully. I tried to run Chrome browser with a HTTP server on the same and different computers - not helped._lt_br /_gt_\n\tNo any Chrome add-on which could prevent to load these files + incognito mode didn_t_t  help too._lt_br /_gt__lt_br /_gt_\n\tThe same scene I can run successfully in Internet Explorer on the same computers and in iPhone Chrome browser via wi-fi too._lt_br /_gt_\n\tAll other our applications (not babylon.js applications) have no any problem with Chrome browser_co_ they are using XMLHttpRequest and Websocket protocols._lt_br /_gt_\n\tI tried all suggestions which I found in Internet regarding this error - nothing helped in my case.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAny advice ?_lt_br /_gt__lt_br /_gt_\n\tThanks_co__lt_br /_gt_\n\tVladimir\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMy code (map.tif and ground.tif images cannot be loaded)_dd__lt_br /_gt_\n\t..._lt_br /_gt_\n\tvar ground _eq_ BABYLON.Mesh.CreateGroundFromHeightMap(_qt_ground_qt__co_ _qt_map.tif_qt__co_ 100_co_ 100_co_ 100_co_ 0_co_ 10_co_ scene_co_ false)_sm__lt_br /_gt_\n\tvar groundMaterial _eq_ new BABYLON.StandardMaterial(_qt_ground_qt__co_ scene)_sm__lt_br /_gt_\n\tgroundMaterial.diffuseTexture _eq_ new BABYLON.Texture(_qt_ground.tif_qt__co_ scene)_sm__lt_br /_gt_\n\t..._lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"vladimr","Date":"2017-02-21T14:29:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tJust fixed it - now all working properly after I have replaced tif files with png files ( _lt_span style_eq__qt_color_dd_rgb(39_co_42_co_52)_sm_font-family_dd__t_Helvetica Neue_t__co_ Helvetica_co_ Arial_co_ sans-serif_sm_font-size_dd_14px_sm_font-style_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(255_co_255_co_255)_sm_float_dd_none_sm__qt__gt_map.png_co_ ground.png instead of _lt_/span_gt_ map.tif_co_ _lt_span style_eq__qt_color_dd_rgb(39_co_42_co_52)_sm_font-family_dd__t_Helvetica Neue_t__co_ Helvetica_co_ Arial_co_ sans-serif_sm_font-size_dd_14px_sm_font-style_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(255_co_255_co_255)_sm_float_dd_none_sm__qt__gt_ground.tif_lt_/span_gt_)._lt_br /_gt_\n\tIt_t_s very strange that iPhone Chrome and Win7 Chrome differently working with tif-files._lt_br /_gt_\n\tOur native files are tif - from this are used them _dd_-)_lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-02-21T17:29:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tGood news _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ regarding performance try to use png instead of tif (they are smaller and thus faster to download)\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]