[{"Owner":"dbawel","Date":"2017-12-17T04:00:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ve not been working in BJS for a while now_co_ and am back on a job. I_t_ve imported loads of OBJ files into babylon.js_co_ and never had an issue. However_co_ I must have forgotten everything already. I need to have the OBJ file into babylon.js tomorrow_co_ and m stuck. I know it_t_s an idiot issue_co_ but I_t_m too stupid to sort out why this OBJ won_t_t load.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//qedsoft.com/DEMOS2017/obj_loader/index.html_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//qedsoft.com/DEMOS2017/obj_loader/index.html_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDB\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOr better yet - if I import an OBJ file into Blender_co_ the mesh imports as a completely black material with no texture. How do I correct this? It all imorts fine into Maya_co_ which is what I normally use. However_co_ it seems that I_t_m the only one using Maya in WebGL production_co_ and there is no compatibility between Maya and babylon.js - not that I_t_ve ever found reliable. Could someone PLEASE write a reliable FBX converter to babylon.js? Everyone_t_s been asking for this for many years now. I wish I had the skills to write it and support it.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"davrous","Date":"2017-12-17T07:41:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCan you please describe more precisely what happens with your OBJ? Is there something in F12 console?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThere is a Maya exporter currently being worked on_dd_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Exporters/tree/master/Maya_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Exporters/tree/master/Maya_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tRegarding FBX_co_ it_t_s complex the format is not simple and freely documented. Have you shared the issues you_t_ve got with the current FBX exporter?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDavid \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MarianG","Date":"2017-12-17T08:10:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi. There could be a mtl format problem.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBy the way_co_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#28YUR5_qt_ rel_eq__qt_external nofollow_qt__gt_this_lt_/a_gt_ demo from _lt_a href_eq__qt_https_dd_//doc.babylonjs.com/how_to/obj_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//doc.babylonjs.com/how_to/obj_lt_/a_gt_ doesn_t_t work _lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2017-12-17T18:46:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5482-davrous/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5482_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5482-davrous/_qt_ rel_eq__qt__qt__gt_@davrous_lt_/a_gt_-\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe link in my first post is the complete test scene. There is no messages or errors in the console of any browser I_t_ve tested. Any other methods to import the mesh and textures into babylon.js - or into Blender where the model and texture can be seen?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDB\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2017-12-17T19:26:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI tested your scene with the dev tools (network tab) and I can_t_t see the emitted request to the object to be downloaded. Are you sure that you download it in your code ?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"davrous","Date":"2017-12-18T11:10:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tYeah_co_ I_t_ve just looked to the code_co_ you_t_re never calling the createScene() function_co_ so nothing will happen _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2017-12-19T21:50:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5482-davrous/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5482_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5482-davrous/_qt_ rel_eq__qt__qt__gt_@davrous_lt_/a_gt_-\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDUH! I_t_ve been working in PHP way too long_co_ and overlooked such a basic task as defining the engine correctly and calling the function to initialize the scene. I_t_ll make the simple changes this morning_co_ and let you know if there are any other issues. But as I mentioned in the title of this post - I knew I was asking an obviously stupid question. But now I feel even dumber than I initially thought I would_co_ as this is scripting 101. Thanks_co_ and I_t_ll post the scene if all works for both the .OBJ and .babylon file. I have alo discovered issues with importing different formats into Blender_co_ and maintaining textures. However_co_ I seem to have found a quick fix for this without the need to re-apply the UV mapping - which is a nightmare. So I_t_ll post this if all goes well so that others don_t_t need to struggle over importing textures from applications into Blender.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks again_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDB\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/12295-mariang/?do_eq_hovercard_qt_ data-mentionid_eq__qt_12295_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/12295-mariang/_qt_ rel_eq__qt__qt__gt_@MarianG_lt_/a_gt_- You found what I found as well - which is that the demo for loading OBJ files into babylon is no longer working. But than you for all your help - including _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/8492-jcpalmer/?do_eq_hovercard_qt_ data-mentionid_eq__qt_8492_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/8492-jcpalmer/_qt_ rel_eq__qt__qt__gt_@JCPalmer_lt_/a_gt_ as well. It takes time to read through and assist others on the forum_co_ so thank you all very much for taking your valuable time to help. Without this forum_co_ many devs could never find the answers they need to meet their deadlines which is why babylon.js is by far the best framework in the industry these days. And fortunately_co_ the core team supporting BJS really cares about their community. I hope all of you who are new to the framework remember all of the help you required and received_co_ and one day returns to assist all of the newbies who will certainly come here to learn the best WebGL framework in existence. Just keep in mind that those developers you will be helping are probably only 6 or 7 years old right now. But one day soon_co_ they will have newer versions of WebGL_co_ hardware_co_ and computing power which to us right now -  can not yet be realized in any way. SO fortunately_co_ we_t_ll also be learning from them as well. Just remember this_co_ as all things come back around - both the good and the bad - so if you receive help now_co_ remember that one day you_t_ll personally  benefit greatly by passing on the help you_t_ve been given today. That_t_s how it works_co_ folks.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCheers to you all_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDB\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2017-12-20T20:56:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tNot quite sure why I am in this thread_co_ but looks like it could be marked solved.  Also the link in the first post gets a 404.  Maybe remove it at the same time.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]