[{"Owner":"Modos","Date":"2018-09-28T11:33:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi everybody_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\ti want to know what Babylon can do what Unity can_t_t do and vice versa. This is not about which tool is better like _qt_babylon is for web-development and using less ressources and unity is programmed with C#_qt__co_ but more about the functionality of the tools. Are there special functions that can be mentioned?_lt_br /_gt_\n\tFor example_dd_ Unity has the function NavMeshObstacle for objects to avoid by AI agents. Does Babylon has a similar function?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI ask this with the background thoughts of a multi-agent system which should be built_co_ _lt_span lang_eq__qt_en_qt_ xml_dd_lang_eq__qt_en_qt__gt_which I already mentioned in a thread_dd__lt_/span_gt__lt_br /_gt_\n\t_lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/37290-the-question-about-multiple-scenes-again/_qt_ rel_eq__qt__qt__gt_http_dd_//www.html5gamedevs.com/topic/37290-the-question-about-multiple-scenes-again/_lt_/a_gt__lt_br /_gt_\n\t_lt_span lang_eq__qt_en_qt_ xml_dd_lang_eq__qt_en_qt__gt_As part of my work_co_ I_t_d like to compare the capabilities of these tools through their API (Babylon_dd_ _lt_/span_gt__lt_a href_eq__qt_https_dd_//doc.babylonjs.com/api/_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//doc.babylonjs.com/api/_lt_/a_gt__lt_span lang_eq__qt_en_qt_ xml_dd_lang_eq__qt_en_qt__gt_ Unity_dd_ _lt_/span_gt__lt_a href_eq__qt_https_dd_//docs.unity3d.com/530/Documentation/ScriptReference/index.html_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//docs.unity3d.com/530/Documentation/ScriptReference/index.html_lt_/a_gt__lt_span lang_eq__qt_en_qt_ xml_dd_lang_eq__qt_en_qt__gt_ ) (the only way I can think of to compare functions) and_co_ of course_co_ I don_t_t want anyone else to do my work_co_ but I thought if anyone already had the knowledge_co_ I could use this approach._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI hope this kind of question fits in this forum._lt_br /_gt_\n\tThanks in advance.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nodragem","Date":"2018-09-28T15:46:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou can probably check this_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylontoolkit.com_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylontoolkit.com_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThat is basically an advanced Unity exporter to BabylonJS where you can use the Component/GameObject paradigm of Unity to build a BabylonJS project.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere is a list of what that Unity exporter supports_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//doc.babylonjs.com/resources/intro#toolkit-features_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//doc.babylonjs.com/resources/intro#toolkit-features_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Modos","Date":"2018-10-01T10:21:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks for your reply.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn fact_co_ I have already seen this and even tried it out a bit.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI just thought that someone might know some significant differences or advantages of the functions.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-10-01T16:32:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWe don_t_t have a precise list per se but if you give us a list of features in unity_co_ we can tell you if we have something similar\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Modos","Date":"2018-10-15T14:20:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI_t_m about to compare them and can now list some of them_dd__lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_AvatarBuilder_lt_/strong_gt_ - _lt_em_gt_This class allows you to create custom avatars for your animated characters entirely via script_co_ in a similar way to what goes on behind the scenes in the Unity Editor when you create an avatar from the model import inspector._lt_/em_gt__lt_br /_gt_\n\t_lt_br /_gt_\n\t_lt_strong_gt_BillboardAsset_lt_/strong_gt_ - _lt_u_gt__lt_em_gt_Billboards are a level-of-detail (LOD) method of drawing complicated 3D objects in a simpler manner if they are further away. Because the object is further away_co_ there is often less requirement to draw the object at full detail due to its size on-screen and low likelihood of being a focal point in the Camera view._lt_/em_gt__lt_/u_gt__lt_br /_gt_\n\t_lt_br /_gt_\n\t_lt_strong_gt_CharacterController_lt_/strong_gt_ -_lt_em_gt_ _lt_u_gt_A CharacterController allows you to easily do movement constrained by collisions without having to deal with a rigidbody. A CharacterController is not affected by forces and will only move when you call the Move funtion. It will then carry out the movement but be constrained by collisions._lt_/u_gt__lt_/em_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_NavMeshObstacle_lt_/strong_gt_ - _lt_u_gt__lt_em_gt_A NavMeshObstacle is cylindrical in shape and can move around the surface of the NavMesh with a specified velocity. By default_co_ the obstacle will only affect the agent_t_s avoidance behaviour rather than the pathfinding. This means that the agent will ignore the obstacle when plotting a path but will sidestep around it while moving along the path._lt_/em_gt__lt_/u_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt__lt_span_gt_UnityEngine.Networking _lt_/span_gt__lt_/strong_gt__lt_span_gt_- it generally contains classes for network connections_co_ player connections_co_ player communication_co_ matchmaking etc._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_QualitySettings_lt_/strong_gt_ -_lt_em_gt_ _lt_u_gt_There can be an arbitrary number of quality settings. The details of each are set up in the project_t_s _lt_a href_eq__qt_https_dd_//docs.unity3d.com/Manual/class-QualitySettings.html_qt_ rel_eq__qt_external nofollow_qt__gt_Quality Settings_lt_/a_gt_. At run time_co_ the current quality level can be changed using this class._lt_/u_gt_ _lt_/em_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_SystemInfo_lt_/strong_gt_ - _lt_u_gt_ _lt_em_gt_Use this class to figure out capabilities of the underlying platform and hardware. For example_co_ you can check which _lt_a href_eq__qt_https_dd_//docs.unity3d.com/ScriptReference/RenderTexture.html_qt_ rel_eq__qt_external nofollow_qt__gt_RenderTexture_lt_/a_gt_ formats are supported (_lt_a href_eq__qt_https_dd_//docs.unity3d.com/ScriptReference/SystemInfo.SupportsRenderTextureFormat.html_qt_ rel_eq__qt_external nofollow_qt__gt_SupportsRenderTextureFormat_lt_/a_gt_)_co_ how many CPU threads are available (_lt_a href_eq__qt_https_dd_//docs.unity3d.com/ScriptReference/SystemInfo-processorCount.html_qt_ rel_eq__qt_external nofollow_qt__gt_processorCount_lt_/a_gt_)_co_ and so on. _lt_/em_gt__lt_/u_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tor some functions to make a scene more realistic_dd__lt_br /_gt_\n\t_lt_strong_gt_Cloth _lt_/strong_gt_- _lt_em_gt__lt_u_gt_The Cloth class provides an interface to cloth simulation physics. _lt_/u_gt__lt_/em_gt__lt_br /_gt_\n\t_lt_strong_gt_WindZone_lt_/strong_gt__lt_em_gt_ - _lt_u_gt_ Wind Zones add realism to the trees you create by making them wave their branches and leaves as if blown by the wind. _lt_/u_gt__lt_/em_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI think this is engough to read for now. I chose these functions_co_ because i couldn_t_t find the corresponding counterparts in babylon._lt_br /_gt_\n\tIt seems Unity has more functions for AI and gaming._lt_br /_gt_\n\t_lt_br /_gt_\n\tIs there a date or at least a year where babylon was published?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-10-15T16:38:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThe ones we can do out of the box_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong style_eq__qt_background-color_dd_#ffffff_sm_ color_dd_#353c41_sm_ font-size_dd_14px_sm_ text-align_dd_start_qt__gt_BillboardAsset_lt_/strong_gt__lt_span style_eq__qt_background-color_dd_#ffffff_sm_ color_dd_#353c41_sm_ font-size_dd_14px_sm_ text-align_dd_start_qt__gt__lt_span_gt_ _lt_/span_gt__lt_/span_gt__dd_ We support LOD and billboard mode so this is doable\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong style_eq__qt_background-color_dd_#ffffff_sm_ color_dd_#353c41_sm_ font-size_dd_14px_sm_ text-align_dd_start_qt__gt_QualitySettings_lt_/strong_gt__lt_span style_eq__qt_background-color_dd_#ffffff_sm_ color_dd_#353c41_sm_ font-size_dd_14px_sm_ text-align_dd_start_qt__gt__lt_span_gt_ _lt_/span_gt__lt_/span_gt__dd_ _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/how_to/how_to_use_sceneoptimizer_qt_ ipsnoembed_eq__qt_true_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/how_to/how_to_use_sceneoptimizer_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_SystemInfo_dd__lt_/strong_gt__lt_a href_eq__qt_http_dd_//doc.babylonjs.com/api/classes/babylon.engine#getcaps_qt_ ipsnoembed_eq__qt_true_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/api/classes/babylon.engine#getcaps_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tWe are not doing _lt_strong_gt_AI_lt_/strong_gt_ or _lt_strong_gt_network_lt_/strong_gt__co_ this is not the goal of Babylon.js.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_Cloth _lt_/strong_gt_and _lt_strong_gt_Windzone_lt_/strong_gt_ could probably be done with our physics engine_dd_ _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/how_to/using_advanced_physics_features#cloth-simulation_qt_ ipsnoembed_eq__qt_true_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/how_to/using_advanced_physics_features#cloth-simulation_lt_/a_gt_ / _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/how_to/using_the_physics_engine#further-functionality-of-the-impostor-class_qt_ ipsnoembed_eq__qt_true_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/how_to/using_the_physics_engine#further-functionality-of-the-impostor-class_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor _lt_strong_gt_character_lt_/strong_gt_ management_co_ we have some features_dd_ _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/how_to/how_to_use_bones_and_skeletons_qt_ ipsnoembed_eq__qt_true_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/how_to/how_to_use_bones_and_skeletons_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut the goal is not to compare to Unity_co_ we are on a different scale _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Modos","Date":"2018-10-17T12:10:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThank you very much for your help!_lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe keyword was _t_LOD_t__co_ so i think the counterpart for BillboardAsset is MeshLODLevel?\n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tQuote\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tBut the_lt_span_gt_﻿_lt_/span_gt_ _lt_span_gt_﻿_lt_/span_gt_goal is not to compare to Unity_co_ we are on a differe_lt_span_gt_﻿_lt_/span_gt_nt scal_lt_span_gt_﻿_lt_/span_gt_e_lt_span_gt_﻿_lt_/span_gt_ _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tWell_co_ to compare them is MY goal! _lt_span_gt__lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tQuote\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tWe are not doing _lt_strong_gt_AI_lt_/strong_gt_ or _lt_strong_gt_network_lt_/strong_gt__co_ this is not the goal of Babylon.js.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tBabylon has at least a pathfinder for AI_co_ if i remember correctly. I think it was NavigationMesh._lt_br /_gt_\n\t_lt_br /_gt_\n\tWhere exactly is the difference between Babylon and Unity? I always read that Babylon was meant for creating 3D games and so is unity.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have also seen that Babylon_t_s first commit was on June 27_co_ 2013. I guess I can take that as release date.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-10-17T14:00:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWe do not have a Unity editor_dd_) that is the main difference_dd_) \n_lt_/p_gt_\n\n_lt_p_gt_\n\tNavigation Mesh is an extension (ie. Maintained by the community) and you should check all the hard work done by _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/24012-mackeyk24/?do_eq_hovercard_qt_ data-mentionid_eq__qt_24012_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/24012-mackeyk24/_qt_ rel_eq__qt__qt__gt_@MackeyK24_lt_/a_gt_ here_dd__lt_a href_eq__qt_http_dd_//doc.babylonjs.com/resources/intro_qt_ ipsnoembed_eq__qt_true_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/resources/intro_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe main difference is also that Babylon.js is a community open source project_co_ entirely free_co_ built by passionate people. Unity is a commercial product _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt_ so obviously Unity will have more features _lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-10-17T14:02:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI forgot about the release date question. Yes that date is correct _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Modos","Date":"2018-10-17T16:00:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAlthough I have marked the thread as solved_co_ I still have one last question regarding the statement that babylon is on a different scale._lt_br /_gt_\n\tYou mentioned that network and AI is not the goal of Babylon._lt_br /_gt_\n\tWhat is the goal of Babylon_co_ if there is any? (If that is something that can be described as development is community based)_lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-10-18T19:59:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWe basically deal with rendering and sounds (WebGL/WebVR/WebXR/WebAudio)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf you want to provide extensions that deal with Network or AI_co_ we will obviously welcome them on our extensions repo.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf you look at physics for instance_co_ we support it through plugins_co_ we are not doing the physics per se. So AI or network could be introduced this way if we wanted to\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nodragem","Date":"2018-10-20T10:08:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_231986_qt_ data-ipsquote-contentid_eq__qt_40314_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1539784807_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn 10/17/2018 at 3_dd_00 PM_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tWe do not have a Unity editor_dd_) that is the main difference_dd_) \n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tAlthough it is missing some features_co_ we do have the start of a good editor here_dd_ _lt_a href_eq__qt_http_dd_//editor.babylonjs.com_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//editor.babylonjs.com_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Spankied","Date":"2018-10-21T20:39:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThe unity editor has a good solution for setting up navigation_co_ editing meshes_co_ and building worlds. Like Nodragem said_co_ theres and editor for babylon_co_ in which you can add particle systems_co_ create and edit animations_co_ and manage sounds. Currently_co_ there are no features in the babylon editor to setup navigation_co_ build an avatar_co_ or build a world. I haven_t_t used the editor_sm_ not really sure how.  \n_lt_/p_gt_\n\n_lt_p_gt_\n\tBecause babylon is opensource_co_  anyone can extend the functionalities offered.  Here are some projects that inspire me.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSataGuru_t_s  _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/34477-babylonjs-charactercontroller/_qt_ rel_eq__qt__qt__gt_Character Controller_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSamuel_t_s _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/36692-energyjs-on-github/_qt_ rel_eq__qt__qt__gt_EnergyJS_lt_/a_gt_  \n_lt_/p_gt_\n\n_lt_p_gt_\n\tMackey_t_s  _lt_a href_eq__qt_https_dd_//www.babylontoolkit.com/_qt_ rel_eq__qt_external nofollow_qt__gt_Babylon Tool Kit_lt_/a_gt_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tSergey_t_s _lt_a href_eq__qt_http_dd_//xn--https-rfa//www.youtube.com/watch?v_eq_H5wRM2TU8sQ&amp_sm_amp_sm_lc_eq_z233zttgxsqiw1f0aacdp435uzppzjto5bgzhabcdwhw03c010c.1540028719519549_qt_ rel_eq__qt_external nofollow_qt__gt_Power Planner_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor better or worse_co_ Unity has some well defined ways of implementing game features. Babylon does not. Unity encourages developers to use the Entity-Component-System pattern to develop your game. You will find zero ECS implementations for babylon (except _lt_a href_eq__qt_https_dd_//github.com/Spankyed/sched-proto_qt_ rel_eq__qt_external nofollow_qt__gt_this_lt_/a_gt_ one(shamless plug))\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]