[{"Owner":"JCPalmer","Date":"2014-08-01T20:57:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I am kind of thinking not.  As my mesh flies away_co_ it just disappears.  Am using FreeCamera &amp_sm_ calling_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_camera.lockedTarget _eq_ scene.getLastEntryByID(_qt_Cloth_qt_)_sm__lt_/pre_gt__lt_p_gt_Camera has mesh right in center at beginning_co_ &amp_sm_ is not movable by mouse.  Maybe my expectation are too high. _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ alt_eq__qt__dd_(_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_   Would gladly hear that I am just not doing it right._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2014-08-01T21:28:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Now looking at the source code for FreeCamera.  saw a property noRotationConstraint _eq_ false_sm_  I changed it true.  Did nothing.  At the end of my thing_co_ I happened to click_co_ and suddenly the mesh was back in the middle of the canvas._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I tried running and clicking every so often_co_ and the camera crudely shifted.  So it looks like my answer may be yes.  Is there a way which avoids the clicking repeatedly?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Jeff_lt_br_gt_ _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2014-08-01T21:57:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Fixed it! Well for Automatons_co_ anyway.  I just started calling methods of FreeCamera in my beforeRender.  Will need to get smarter_co_ like only doing so when movement occurred.  If I am just screwed up_co_ &amp_sm_ should _t_just do this_t__co_ then please let me know.  Thanks_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]