[{"Owner":"Pryme8","Date":"2016-02-25T03:46:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI know I have access to settings like\n_lt_/p_gt_\n\n_lt_p_gt_\n\texposure_co_ decay_co_ weight_co_ density_co_ and process Ratios when I access VolumetricLightScatteringPostProcess_lt_br_gt__lt_br_gt_\n\tI figured most of the time to extend or limit the rays you would use most likely decay?  I have messed with all of the settings several time but have run into the in ability to extend the effect to the range that I need._lt_br_gt_\n\tI want to be able to simulate extreme amounts of lumens or smalls amounts.  I have come across this problem while trying to trouble shoot the way I am rendering different classes of stars. _lt_br_gt__lt_br_gt_\n\tI have the basic settings for what I have decided is a good look for a _qt_Solar Lumen_qt_ and now am trying to be able to manipulate it to match what stars at different classifications would look like._lt_br_gt_\n\tthere are instances where it will need to be multiplied by upwards of 100000 and down to 0.015 which I know is a high variance_co_ but is how I am going to simulate correct Stars..._lt_br_gt__lt_br_gt_\n\tI don_t_t want to make two spheres because I want to keep the _qt_wash out_qt_ even for planets that are far from the star but still within the Effective Luminance range..._lt_br_gt__lt_br_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#SI34M%230_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#SI34M#0_lt_/a_gt__lt_br_gt__lt_br_gt_\n\tf12 to see more information on the star..._lt_br_gt__lt_br_gt_\n\tyou can change everything by just changing the seed here_dd__lt_br_gt__lt_br_gt_\n\tln582_dd_ StarSystem _eq_ new Celest(_qt_seed_qt_)_sm__lt_br_gt__lt_br_gt_\n\tYou can use anything but Zero... well you could type Zero but not 0\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Luaacro","Date":"2016-02-26T11:34:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWow ! This is a great playground with a lot of lines ! ahah\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAccording to the documentation I can find_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_        /**\n        * Controls the overall intensity of the post-process\n        * @type {number}\n        */\n        public exposure _eq_ 0.3_sm_\n        /**\n        * Dissipates each sample_t_s contribution in range [0_co_ 1]\n        * @type {number}\n        */\n        public decay _eq_ 0.96815_sm_\n        /**\n        * Controls the overall intensity of each sample\n        * @type {number}\n        */\n        public weight _eq_ 0.58767_sm_\n        /**\n        * Controls the density of each sample\n        * @type {number}\n        */\n        public density _eq_ 0.926_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tThe decay is definitely more likely in the range [0.9_co_ 1.0]. 1.0 means that the rays will _qt_never_qt_ decay_co_ where 0.9 means that the light rays will decay quickly. You are right_co_ I_t_ll update the documentation _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/p_gt_\n\n_lt_p_gt_\n\tThe decay can play the role of the light power (intensity) in your case.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNow_co_ I_t_m not able to give you a magic equation because I don_t_t know enough about solar systems _lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt__gt__lt_br_gt_\n\tBecause you love mathematics_co_ you can read this article from nvidia and try to understand how you can adapt your equations with their _dd_ _lt_a href_eq__qt_http_dd_//http.developer.nvidia.com/GPUGems3/gpugems3_ch13.html_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//http.developer.nvidia.com/GPUGems3/gpugems3_ch13.html_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe equation about the final luminance is in part 13.3.1 (controlling the summation)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2016-02-26T17:11:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWhat I ended up doing is setting all my settings to what their absolute max settings would be_co_ then figured out the value I had to subtract from them to make them how appear at the smallest value I want.  Then multiply the percent of the actual value from my lumence range from the subtractive number to get the real value so.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tx _eq_ a - (b*c)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI realized once I thought in terms of AU scale the Rays were definitely  big enough. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tNow I want to interpolate my percentage none linearly and incorporate a Eulers Curve\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]