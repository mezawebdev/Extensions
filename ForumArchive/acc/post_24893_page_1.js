[{"Owner":"mache","Date":"2016-08-31T15:41:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am having trouble with the shadow generator_co_ this playground illustrate my problem _eq_&gt_sm_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#DAKLR%234_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#DAKLR#4_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI made a room with a window. Then I add two lights with a shadowgenerator for each one_co_ the two sphere show their position into the scene. The one outside the room act properly (you can see light pass through the window)_co_ but the one inside the room light nothing.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf you comment line 97 -&gt_sm_ 104 (remove the roof) the light inside act properly.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jellix","Date":"2016-08-31T16:48:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tBoth lights are directional lights so you cannot say that one light is inside the room.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo everything works correct.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-08-31T17:24:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi guys!  To expand on that notion...  _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#DAKLR%235_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#DAKLR#5_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am moving/animating the directional light1 .position... to see WHY directionalLights even _lt_u_gt_have_lt_/u_gt_ a .position property.  What is it used for?  I needed to do tests.  (curiosity_co_ ya know?)  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tAs you can see_co_ moving dirLight 1 far away_co_ DOES do things.  Shadow edges get distorted_co_ lighting gets dimmer_co_ etc.  Not sure why.  Line 130... I experimented with light1.range... no affect seen.  hmm.  Switching usePoissonSampling to _lt_em_gt_false_lt_/em_gt_... does even more fun things.  I HAVE heard that certain types of sampling... don_t_t work well at great distances (like the distance to the Sun)  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-08-31T20:29:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tBy default directionlight_t_s position is used to define where the virtual camera used to render shadow maps should be positioned.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSince bjs 2.3_co_ this position is automatically computed by Babylon.js (it takes the closer position where all the scene can be seen). But as always_co_ you can also consider doing it by yourself.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"mache","Date":"2016-09-01T12:38:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHelo guys_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks for your reply _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/21403-jellix/?do_eq_hovercard_qt_ data-mentionid_eq__qt_21403_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/21403-jellix/_qt_ rel_eq__qt__qt__gt_@jellix_lt_/a_gt_ Directional light in babylon.js are using shadow mapping so as said Deltakosh it_t_s possible to define a position. Nevertheless I am still a beginner in 3D_co_ the directional light don_t_t seem to be the right choice. What would be an adapted indoor light to fit a scene such as my playground?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_ Yeah I also notice some fun things with the sampling _dd_\n_lt_/p_gt_\n_lt_iframe data-embedcontent_eq__qt__qt_ frameborder_eq__qt_0_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/23906-is-it-possible-for-a-mesh-to-receive-and-create-shadows/?do_eq_embed_qt__gt__lt_/iframe_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ Ok I_t_ll give a try to see what can I get.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]