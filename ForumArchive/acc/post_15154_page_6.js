[{"Owner":"Wingnut","Date":"2015-07-01T15:07:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_You love it_co_ and you know it.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_  It_t_s like a crossword puzzle with three words yet unanswered.  It keeps you coming back_co_ and often obsessively_co_ right?  The sign of a great project._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Billlboard mode.  hmmm.  I think you should say goodbye to it.   Maybe it_t_s time to use statics._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_BABYLON.SolidParticleSystem.ROTATIONMODE_X  et al._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__x _y _z _xy _xz _yz _all _none _random_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Then_co_ for particle rotation speed... allow value or random as well... and allow zero... which would be the same as ROATATIONMODE_NONE_co_ right?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_In fact_co_ it would be nice if ALL of BJS... allowed Math.Random() to be abbreviated IN THE CODE... with ?  ...a question mark.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_  Hey ECMA._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Good luck on your bug find_co_ ParticleMan!  Don_t_t try to find it too quick... or you_t_ll need to think-up yet another feature.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Oh crap_co_ I didn_t_t cover BILLBOARD in my list of particle rotation constants.  Yep_co_ we still got trouble.  Rotation modes aside_co_ there_t_s still three axes that could be told to face the camera.  hmm.  *scratch scratch*  And the many billboard modes could _qt_fight_qt_ against the particle rotation modes.  Crap!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_User has sps rotationMode set to all_co_ but billboardmode_x set... and is in the forum_co_ asking why their particles won_t_t rotate on the x axis.  Trouble._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Okay_co_ ignore me and this post.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-07-01T15:18:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_but I have another just-backed nice feature _dd_ the per particle texture ! _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_from a single BJS classic texture_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_something you can set either in _lt_em_gt_initParticles()_lt_/em_gt_ either in _lt_em_gt_setParticles()_lt_/em_gt_ ... yes_co_ live texturing in the render loop if you want !_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_It already works_lt_/p_gt__lt_p_gt_But I want to fix this f$*%§@#king billboard mode for plane particles. My afternoon on it and ... nothing_co_ pffff_lt_/p_gt__lt_p_gt_I give up for today._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-07-02T14:45:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi guys !_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_What is the worst bug you ever had to fix ? the bug that doesn_t_t exist !_lt_/p_gt__lt_p_gt_I wasted my afternoon yesterday trying to fix the billboard mode... that wasn_t_t broken._lt_/p_gt__lt_p_gt_Let_t_s forget this..._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_So at last_co_ today_co_ here is the new feature I wanted to introduce you yesterday _dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#2KSQ1R%2332_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#2KSQ1R#32_lt_/a_gt__lt_/p_gt__lt_p_gt_Here are some textured and colored quad particles slowly rotating in billboard mode. You should recognize the wise old man and his famous tongue in the picture._lt_/p_gt__lt_p_gt_As you can see at the line 24_co_ it_t_s a very classical BJS Texture what is then then applied to the SPS mesh material (line 34)._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Let_t_s now use a new particle property that I called _lt_em_gt_uvs_lt_/em_gt_ for now (may a better name would be needed). This _lt_em_gt_uvs_lt_/em_gt_ property is just an array with 4 numeric elements _lt_em_gt_[u0_co_ v0_co_ u1_co_ v1]._lt_/em_gt__lt_/p_gt__lt_p_gt__lt_em_gt_u0_co_ v0_lt_/em_gt_ are the _qt_coordinates_qt_ of the upper left point from where you want to crop the particle image in the loaded texture_lt_/p_gt__lt_p_gt__lt_em_gt_u1_co_ v1_lt_/em_gt_ are the _qt_coordinates_qt_ of the lower right point down to where you want to crop the particle image in the loaded texture_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_em_gt_u0_co_ v0_co_ u1_co_ v1_lt_/em_gt_ are just expressed in percentages of the original texture_co_ it is to say with values between 0 and 1._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Dont talk_co_ show !_lt_/p_gt__lt_p_gt_Line 50_co_ in the initParticles function_co_ I set random values to _lt_em_gt_uvs_lt_/em_gt_ for each particles _dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#2KSQ1R%2333_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#2KSQ1R#33_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Of course_co_ it would be better to have a real image with many different patterns (like a texture atlas) and to set them to each particle. But I don_t_t have such a file here_co_ sorry._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Does this work only in _lt_em_gt_initParticles() _lt_/em_gt_?_lt_/p_gt__lt_p_gt_No_co_ sir_co_ it can work at run time !_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Line 56_co_ in the _lt_em_gt_updateParticle() _lt_/em_gt_method. Beware if you are epilectic _dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#2KSQ1R%2334_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#2KSQ1R#34_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Note _dd_ API changed and _lt_em_gt_billboard_lt_/em_gt_ is now a SPS property that can be changed at any time._lt_/p_gt__lt_p_gt_There are also other new  available methods to optimize the SPS setParticles() method if you know you don_t_t need (even temporarily) some features _dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_SPS.enableParticleRotation()        // prevent from computing particle.rotationSPS.disableParticleRotation()      // re-activate particle.rotation computingSPS.enableParticleTexture()         // prevent from computing particle.uvsSPS.disableParticleTexture()       // re-activate particle.uvs computingSPS.enableParticleColor()           // prevent from computing particle.colorSPS.disableParticleColor()         // re-activate particle.color computing_lt_/pre_gt__lt_p_gt_Everything is unfrozen by default._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_doc updated _dd_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJSX/SolidParticleSystem_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJSX/SolidParticleSystem_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_[EDIT] all _lt_em_gt_freezeXXX()_lt_/em_gt_ method names changed into _lt_em_gt_enableXXX()_lt_/em_gt_ because they don_t_t keep the last values hypothetically used._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-07-02T15:37:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Huge!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-07-02T18:55:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_a few my nephew !_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-07-02T19:12:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_and since it is a mesh_co_ we can texture it as a mesh... with bump for instance _dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#2KSQ1R%2335_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#2KSQ1R#35_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_only one mesh and one texture here_co_ please take a look at the debug button_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_[edit] can_t_t stop playing _dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#2KSQ1R%2336_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#2KSQ1R#36_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-07-03T09:37:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I stole a sprite atlas somewhere on the Web just to show you how a single texture can make different particle images _dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#2KSQ1R%2337_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#2KSQ1R#37_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_As you can see_co_ the original image contains 6 x 4 sprites _dd_ _lt_a href_eq__qt_http_dd_//jerome.bousquie.fr/BJS/images/spriteAtlas.png_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//jerome.bousquie.fr/BJS/images/spriteAtlas.png_lt_/a_gt__lt_/p_gt__lt_p_gt_So in the initParticles() function_co_ I simply set random sprites to each particle (line 46)_lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_      var hSpriteNb _eq_  6_sm_  // 6 sprites per raw      var vSpriteNb _eq_  4_sm_  // 4 sprite raws      var u _eq_ Math.floor(Math.random() * hSpriteNb) / hSpriteNb_sm_      var v _eq_ Math.floor(Math.random() * vSpriteNb) / vSpriteNb_sm_      this.particles[p].uvs _eq_ [u_co_ v_co_ u + 1 / hSpriteNb_co_ v + 1 /vSpriteNb]_sm__lt_/pre_gt__lt_p_gt_easy_co_ isn_t_t it ? _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-07-03T09:41:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Did I say the per particle texturing worked also for solid particles also ?_lt_/p_gt__lt_p_gt_I didn_t_t ... but it does _dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#2KSQ1R%2338_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#2KSQ1R#38_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-07-03T15:57:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_This is just COOOOOL._lt_/p_gt__lt_p_gt_Could you add it as an official extension?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I added you as admin on this repo_dd_)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-07-03T16:27:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_thanks_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_It_t_s not finished yet (almost)_lt_/p_gt__lt_p_gt_then I_t_ll do it_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_are extensions in TS only ? I won_t_t have time to port it_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2015-07-03T16:59:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_It_t_s not TS only. bGUI is fully in JS for example._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"iiceman","Date":"2015-07-03T18:41:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I keep checking the thread now and then.. when it_t_s done I might try to create a really cool space scene with god ray sun_co_ partcle paralax stars in the background_co_ some planets orbiting the sun and a cool spaceship in an asteroid filed._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Can your Mesh Particle System do that? I mean a really cool asteroid field? and derbies from the spaceship that got hit by the asteroids? I assume it can. This will be AWESOME! _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-07-03T20:09:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_The SPS can do _dd__lt_/p_gt__lt_ul_gt__lt_li_gt_asteroid fields_lt_/li_gt__lt_li_gt_scraps blown for an explosion_lt_/li_gt__lt_li_gt_liquid drops flowing_lt_/li_gt__lt_li_gt_immobile buildings in the distance_lt_/li_gt__lt_li_gt_music 3D vu-meter_lt_/li_gt__lt_li_gt_luck in games_lt_/li_gt__lt_li_gt_professional success_lt_/li_gt__lt_li_gt_love regain_lt_/li_gt__lt_li_gt_coffee_lt_/li_gt__lt_/ul_gt__lt_p_gt_ _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Well_co_ it_t_s just one single mesh with many accessible parts._lt_/p_gt__lt_p_gt_Just see SPS as an API to program these parts._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-07-03T20:25:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_It_t_s almost done anyway_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I would love to add _dd__lt_/p_gt__lt_p_gt_- the ability to dispose the SPS_lt_/p_gt__lt_p_gt_- the ability for the end user to dynamically morph each particle _lt_/p_gt__lt_p_gt_- (maybe) the ability to sort particles according to the particle-camera distance in order to solve the exotic case of vertices with alpha wrongly z-sorted... not sure it_t_s worth it because of the performance cost._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_BTW_co_ in the current SPS I re-implemented some BJS internal methods (like_lt_em_gt_ Matrix.RotationYawPitchRoll_lt_/em_gt_ or _lt_em_gt_Quaternion.toMatrix_lt_/em_gt_) with no temporary local variables._lt_/p_gt__lt_p_gt_I did it because I noticed the GC can deal pretty well with temp variable allocations if we call these methods_co_ say_co_ dozen times per frame._lt_/p_gt__lt_p_gt_But since in SPS we do CPU side things that usually happens GPU side (like to compute each position and rotation of each vertex of each particle...and we may have 10K particles !)_co_ we need to call _lt_em_gt_rotationYawPitchRoll_lt_/em_gt_ dozen of thousands times each frame... and it quickly reaches an amount of temp memory allocation that has a significative effect on the GC._lt_/p_gt__lt_p_gt_That_t_s why many SPS private properties are set just for storing temporary values and to never allocate/free the related memory. The re-implemented functions then use these private properties._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2015-07-04T12:28:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_This is looking great.  Your demos run surprisingly well on my 3 year old Nokia 822 windows phone._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_How hard would it be to get skeletons/animations working with this?  I wonder if that would just kill the performance gains you have achieved._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-07-04T14:21:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_No idea_lt_/p_gt__lt_p_gt_I don_t_t know anything about skeletons _dd_-(_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-07-06T13:49:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Extensions can be on javascript_dd_)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-07-06T14:17:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_cool_lt_/p_gt__lt_p_gt_step after step (and my steps are shorter with such a hot weather here) _dd__lt_/p_gt__lt_p_gt_first finish it_lt_/p_gt__lt_p_gt_then push it to official extension repo_lt_/p_gt__lt_p_gt_then maybe... port it to TS if you want it in BJS.... but this may keep optional_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-07-06T17:47:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I WOULD LOVE IT in bjs _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-07-06T19:17:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_added to my monstrous backlog  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_tongue.png_qt_ alt_eq__qt__dd_P_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/tongue@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I will have to re-think many things because the current SPS re-implement some dedicated local GC-optimized legacy BJS functions_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-07-07T13:13:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_just some news _dd_ this topic is not dead ..._lt_/p_gt__lt_p_gt_Things go on under hood very slowly because it_t_s very hot here and I have another real job to do _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Well_co_ added _dd__lt_/p_gt__lt_p_gt__lt_em_gt_SPS.dispose()_lt_/em_gt_ to free the memory if you don_t_t need the SPS anylonger_lt_/p_gt__lt_p_gt_and internal refactoring to get rid off parameter variables in re-implemented legacy BJS rotation functions... a serious hunt to every case where the GC could wake up_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2015-07-07T14:22:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Is SPS still considered a particle system as far as LOD levels are concerned?  RenderGroups working for it?  (like I know what ANY of these things are)  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-07-07T15:02:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_ _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_laugh.png_qt_ alt_eq__qt__dd_lol_dd__qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-07-08T12:31:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi guys_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_em_gt__qt_a feature a day keeps the DK away_qt__lt_/em_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Let_t_s go today for the particle rotation quaternion _dd__lt_br_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#2KSQ1R%2339_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#2KSQ1R#39_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Here_co_ I just set a classic SPS. Just note I don_t_t call for now the _lt_em_gt_setParticles()_lt_/em_gt_ method in the render loop (line 78)_co_ so it doesn_t_t call the _lt_em_gt_updateParticle()_lt_/em_gt_ method each frame._lt_/p_gt__lt_p_gt_Take a look at _lt_em_gt_initParticles()_lt_/em_gt_ (line 49) and  _lt_em_gt_updateParticle()_lt_/em_gt_ (from line 65)._lt_/p_gt__lt_p_gt_As you can see_co_ I don_t_t use any longer the particle _lt_em_gt_rotation_lt_/em_gt_ property (which still exists_co_ don_t_t worry) but a new property called _lt_em_gt_quaternion_lt_/em_gt_ in order to set each particle rotation quaternion (amazing_co_ isn_t_t it ?)._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Why a quaternion and not just a rotation ?_lt_/p_gt__lt_p_gt_Because it could be easier sometimes to define a rotation around an axis than from euler angles only._lt_/p_gt__lt_p_gt_If you look at the _lt_em_gt_updateParticle() _lt_/em_gt_code_co_ you will see that I give each particle a rotation (zero for now) around the axis origin-particle position. So each particle will then rotate around the axis what starts at the origin and what holds the particle._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Let_t_s uncomment the line 78 _dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#2KSQ1R%2340_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#2KSQ1R#40_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_It_t_s not that easy to check_co_ but each particle now rotates around a radius (O-particle)... maybe slower (sorry DK for this one-more-PG _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ ) _dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#2KSQ1R%2341_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#2KSQ1R#41_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_[EDIT] _dd_ added radius lines so it is easier to understand _dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#2KSQ1R%2342_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#2KSQ1R#42_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_As for standard BJS meshes_co_ if you define a particle quaternion_co_ its rotation property is ignored._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_updated doc _dd_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJSX/SolidParticleSystem_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJSX/SolidParticleSystem_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-07-08T14:59:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi people_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_As usual_co_ here is the second feature of the day _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Well_co_ as this one is really powerful and complex (imHo)_co_ it is not enabled by default._lt_/p_gt__lt_p_gt_Let_t_s go _dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#2KSQ1R%2343_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#2KSQ1R#43_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_You can see a usual SPS with 100 cubes and 50 spheres orbiting._lt_/p_gt__lt_p_gt_Line 71 _dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_PS.enableParticleVertex()_sm__lt_/pre_gt__lt_p_gt_This will  make the user custom _lt_em_gt_updateParticleVertex(particle_co_ vertex_co_ i)_lt_/em_gt_ to be called on each vertex of each particle !_lt_/p_gt__lt_p_gt__lt_em_gt_particle_lt_/em_gt_ is the current particle_lt_/p_gt__lt_p_gt__lt_em_gt_vertex_lt_/em_gt_ the current vertex_lt_/p_gt__lt_p_gt__lt_em_gt_i_lt_/em_gt_ the index of the current (i-th) vertex_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_What is this for ?_lt_/p_gt__lt_p_gt_Well you can now morph your particles dynamically !_lt_/p_gt__lt_p_gt_line 64 _co_ let_t_s define a custom function _dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_        PS.updateParticleVertex _eq_ function(particle_co_ vertex_co_ i) {            if (particle.shapeId _eq__eq_ 1) {              vertex.x +_eq_ 1.2 * Math.cos( ang * i / 1000 )_sm_            }      }_sm__lt_/pre_gt__lt_p_gt_Here_co_ I set a new_lt_em_gt_ x_lt_/em_gt_ value to each vertex of particles with shapeId equal to 1 (my spheres). Since I can access the vertex index_co_ I use this value to multiply it by an increasing angle _dd__lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#2KSQ1R%2344_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#2KSQ1R#44_lt_/a_gt_ _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_tongue.png_qt_ alt_eq__qt__dd_P_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/tongue@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Well_co_ the example may be not be that pertinent because the morph function is really simple here_co_ but you can see that only spheres are morphed._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Does it still work with other properties like rotation ?_lt_/p_gt__lt_p_gt_Yes_co_ sir _dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#2KSQ1R%2345_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#2KSQ1R#45_lt_/a_gt__lt_/p_gt__lt_p_gt_line 59_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Have fun !_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I think this will be the last feature of the SPS as I it is quite versatile now_co_ being able to redo almost a BJS like particle system if you use only quads with no normals and other optimizations (with _lt_em_gt_disableXXX()_lt_/em_gt_ methods) to some complex slower and parametrable 3D shape system with all mesh properties._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]