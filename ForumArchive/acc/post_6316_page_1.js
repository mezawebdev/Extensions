[{"Owner":"Dad72","Date":"2014-05-09T23:17:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_div_gt_hi_co__lt_/div_gt__lt_br_gt__lt_div_gt_ _lt_/div_gt__lt_br_gt__lt_div_gt_Why is there a limit to the number of light? because for a game_co_ imagine two directional to the sun but then imagine that we want spots for various lighting like lamp nights._lt_/div_gt__lt_br_gt__lt_div_gt_ _lt_/div_gt__lt_br_gt__lt_div_gt_Made in lighting_co_ we put a sun (2 directionnalLight) and a spotLight and you can not add any more lights. it does not works._lt_/div_gt__lt_br_gt__lt_div_gt_ _lt_/div_gt__lt_br_gt__lt_div_gt_Is it a bug ? It would not be possible to remove this limit is very restrictive to make a great game?_lt_/div_gt__lt_br_gt__lt_div_gt_ _lt_/div_gt__lt_br_gt__lt_div_gt_Or acceptable limits_dd__lt_/div_gt__lt_br_gt__lt_div_gt_ _lt_/div_gt__lt_br_gt__lt_div_gt_max 3 lights directionnal_lt_/div_gt__lt_br_gt__lt_div_gt_max 1 lights  hemispherique_lt_/div_gt__lt_br_gt__lt_div_gt_max  20 lights spot_lt_/div_gt__lt_br_gt__lt_div_gt_max 20 lights point_lt_/div_gt__lt_br_gt__lt_div_gt_ _lt_/div_gt__lt_br_gt__lt_div_gt_Thanks_lt_/div_gt__lt_br_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-05-09T23:32:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Because we are doing realtime 3D_dd_)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_4 simultaneous lights already produce shaders only sustainable on a DirectX10 class computer._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-05-10T00:13:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_div_gt_This is not 4 simultaneous light_co_ but 3. Therefore it may be a bug here._lt_/div_gt__lt_br_gt__lt_div_gt_ _lt_/div_gt__lt_br_gt__lt_div_gt_There is no way around it_co_ making spot lights would be less consuming or I is not sure what._lt_/div_gt__lt_br_gt__lt_div_gt_ _lt_/div_gt__lt_br_gt__lt_div_gt_The lights were put up to 3 and the following does not work. most of the engines accept unlimited numbers of light_co_ why Babylon accepts 3. is very poor light._lt_/div_gt__lt_br_gt__lt_div_gt_ _lt_/div_gt__lt_br_gt__lt_div_gt_I think there is something to reflect on that_co_ because this limit is very very restrictive._lt_/div_gt__lt_br_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-05-10T00:31:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_You can set up 1 millions lights but on a specific object no more than 4 (Yes 4_dd_ see this demo _dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs.com/index.html?LIGHTS_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs.com/index.html?LIGHTS_lt_/a_gt_ --&gt_sm_ 3 points and 1 directional)) _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Babylon.js 1.12 will introduce range for lights_dd_ This will be use to attenuate lights over distance._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_We could think about a way to not take in account a light when out of range and then free a spot for another one_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-05-10T00:38:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_You can also use light.excludeMeshes to exclude specific meshes from specific lights to try to keep 4 lights per mesh_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-05-10T00:45:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_div_gt_I have only 3 light on my ground_co_ the 4 _lt_sup_gt_ième_lt_/sup_gt_ not Works. there must be a bug then._lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_ah ok_co_ so in the grounds I can not put that 4 lights_co_ but I can use 4 different light to illuminate a boxing is what you tell me._lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_I love an idea _dd__lt_/div_gt__lt_div_gt__lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt__gt__lt_div_gt_We could think about a way to not take in account a light when out of range and then free a spot for another one_lt_p_gt_ _lt_/p_gt__lt_/div_gt__lt_/blockquote_gt__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_In doing my idea was to be able to make a public lighting by outdoor lamps with sports that illuminates the path of a park or village at night. it takes more than 3 to illuminate the ground while the 5 meters_co_ for example._lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_J_t_imagine en gros une allée avec une 10 ene de spot qui éclaire le parc (donc le terrain) je ne voie pas d_t_idée la dessus._lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-05-10T00:48:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_You should think about not using dynamic lighting but static lighting (using emissive textures)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Could you create a jsfiddle to repro the bug with your ground ?  Is it a regular StandardMaterial used here?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-05-10T00:56:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_div_gt_As I made my 2 Directional that simulates a sun can cast shadows. then I want sUse spot to make public and PointLight lighting to illuminate the interior of the house nights._lt_/div_gt__lt_br_gt__lt_div_gt_ _lt_/div_gt__lt_br_gt__lt_div_gt_This is just to make nice atmosphere at night._lt_/div_gt__lt_br_gt__lt_div_gt_ _lt_/div_gt__lt_br_gt__lt_div_gt_For bug_dd__lt_/div_gt__lt_br_gt__lt_div_gt_I_co_ unwanted material from the WorldMonger coupling to standard material default to add the material of gaps WorldMonger. This may be because of that?_lt_/div_gt__lt_br_gt__lt_div_gt_ _lt_/div_gt__lt_br_gt__lt_div_gt_Thank you also for all your helpful advice._lt_/div_gt__lt_br_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-05-10T01:00:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_the ground uses a standardMaterial?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-05-10T01:03:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_no and yes.  _lt_span style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_standardMaterial +  _lt_/span_gt_GroundMaterial of _lt_span style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_WorlMonger (les 2 sont mélanger)_lt_/span_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-05-10T01:35:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_could be the problem_dd_)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-05-10T11:26:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Oh no_co_ there are no bug. Alright already_co_ I have 3 light on my scene. I forget that I am using a pointLinht on the Moon + 2 directionnalLight on my Sun. so I could add only a single light more._lt_br_gt_ _lt_br_gt_I was tired I think yesterday evening. Sorry Deltakosh_lt_br_gt_ _lt_br_gt_But I totally agree your idea here_dd_ (You plan to add to the 1.12?)_lt_br_gt__lt_strong_gt_We could think about a way to not take in account a light when out of range and then free a spot for another one_lt_/strong_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-05-10T19:27:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_for your idea DK _co_ you think add in 1.12?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2014-05-10T22:12:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Did you see the streetlights demo in _lt_u_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/2571-the-wingnut-chronicles/?p_eq_35213_qt__gt_this post_lt_/a_gt__lt_/u_gt__co_ dad72?  It is not real lights_co_ but it is a pretty good fake_co_ yes?  And you can put 1000 of those light poles all over a 3D town_co_ and not use any _t_real_t_ lights to do that.  Each light pole has a small piece of _t_ground_t_ for itself.  If these fake lights were on a grass sports field or on grass in a park_co_ you would need to texture the ground for the light poles... with a bright circle of grass texture_co_ of course._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Ok_co_ sorry to interrupt... continue as wanted.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_  I hope you guys are having a good weekend._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-05-10T22:55:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_div_gt_This seems like a great idea your artificial lights. Thank you_co_ I had not seen this post._lt_/div_gt__lt_br_gt__lt_div_gt_however_co_ your link to download the zip is unavailable. Could you send a zip file containing all of this demo to see how you did._lt_/div_gt__lt_br_gt__lt_div_gt_ _lt_/div_gt__lt_br_gt__lt_div_gt_Thank you Wingnut. Good weekend to you also_lt_/div_gt__lt_br_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2014-05-10T23:13:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thanks dad72.  _lt_u_gt__lt_a href_eq__qt_http_dd_//urbanproductions.com/wingy/babylon/lights/streetlights/streetlights02.zip_qt_ rel_eq__qt_external nofollow_qt__gt_Zip url_lt_/a_gt__lt_/u_gt_ is fixed.  I need to pay more attention to what I am doing.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I have many .hasAlpha settings in there... on opacityTexture_co_ on reflectionTexture... probably too many.  So_co_ I am saying that my code is not very good.  I am not very experienced with textures.  You will maybe have to improve things_co_ as you are really good with textures. This demo is what they sometimes call a _qt_proof of concept_qt_.  Written to see if it can be done... but probably not done wisely.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Each pole has 6 parts.  pole1 (the base and parent)_co_ pole1a - the upright_co_ scaled 10 tall_co_ pole1b - the arm_co_ scaled 7 wide_co_ pole1c - the light cone_co_ pole1d - the light bulb_co_ and pole1e - the textured little piece of ground with transparency/alpha. Each is created in a function._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_A FOR-loop calls the function 15 times.  That_t_s all I remember about it.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-05-11T00:30:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt__lt_span style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_Thanks Wingnut. _lt_/span_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]