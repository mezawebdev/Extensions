[{"Owner":"masterdon","Date":"2017-05-05T04:31:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi Team_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have a requirement to create a custom shaped rectangle. I am using Lines2D as the shape may not be standard rectangle. however the lines are not rendering for rectangle. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#2AVSFH%23259_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#2AVSFH#259_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMy goal is to make this rectangle as container and other objects which are represented as lines can be dragged and dropped on it. Any help would be appreciated.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks..!!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-05-08T02:21:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi again_co_ M.  Sorry for the slow replies.  We_t_ve talked in your other threads_co_ now... so some decisions can be made_co_ after reading those.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI think you should avoid canvas2d for this.  Just use basic rectangle wall sections_co_ planes.  If you were thinking about a _qt_wall_qt_ as a container_co_ and the segments get dragged into the full-wall container_co_ we can also do that with the rectangles.  You want to be able to drag the entire wall_co_ at times_co_ yes?  *nod*.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd perhaps the overall wall length (the wall container/group/parent)... automatically adjusts its length_co_ whether inserting a segment in the middle of a wall_co_ or when adding segments to either end_co_ right?  You bet.  You_t_re lookin_t_ good... we CAN create a _qt_flexible_qt_ wall container like that.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m glad_co_ now_co_ _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#DZI3R%231_qt_ rel_eq__qt_external nofollow_qt__gt_that our demo_lt_/a_gt_ from _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/30264-elements-to-be-used-for-designing-2d-content/_qt_ rel_eq__qt__qt__gt_that other thread_lt_/a_gt_... has drag-features.  It is a good testing playground.  We can make some wall segment rectangles (completely without linesMesh or canvas2D)... and start trying to drag/snap them into the flexible wall container.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe whole building might also be inside-of a group/container/parent flexi-box_co_ too.  It could also be dragged as a single entity_co_ and expand/shrink to fit.  Cooooool.  We_t_ll talk.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  I have _lt_u_gt_FRESH knowledge_lt_/u_gt_ about mesh bounding boxes.  _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt_  (see Wingnut Chronicles heightMap physics adventure_co_ as wanted)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"masterdon","Date":"2017-05-08T05:45:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi Wingut_co_ Thanks a lot for helping out in all threads. I have started creating planes on top of ground. here is the demo _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#7EJ4CM%234_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#7EJ4CM#4_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tFollowing are the issues i am facing now in above demo_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t1) how do i position such planes on top of ground. currently they are perpendicular to it. I have also tried using .rotation. however its not working.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t2) how do i set dotted borders to such planes. Do planes have property to set border. If not then should i use lines here?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t3) how do i position the camera to show only the top view. i.e. to give look and feel of 2d modelling.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-05-08T13:05:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi M.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#7EJ4CM%237_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#7EJ4CM#7_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tA little starter kit - no lines involved_co_ no canvas2d involved.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  Just good ol_t_ mesh.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tChange to camera2 in line 11_co_ if wanted.  Perhaps you can put another little box in scene corner... click it to switch cams.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tWe might need to modify the free camera (camera2) so that up/down cursor... doesn_t_t zoom_co_ but instead_co_ moves up/down (+/- z) over floor-plan.  We might want to parent the camera to an invisible box_co_ and then use cursor/arrow keys to move the box itself_co_ and the camera will come-along_co_ because it is a child of the invisible box.  (sneaky camera trick) _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tI have a small automated _qt_wall drawer_qt_ in lines 52-61... all using _lt_em_gt_createInstance_lt_/em_gt__t_s of the master box.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLater_co_ you might want to set _lt_em_gt_box.setEnabled(false)_sm_ _lt_/em_gt_to hide it from user. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_em_gt_Box_lt_/em_gt_ is your _qt_segment_master_qt__co_ and should not be used in the actual floor-plan.  Soon_co_ you will have a window_master and corner_master and half_segment_master and quarter_segment_master and half_window_master and door_master... slowly building your toolbox-of-masters... to make instances-from.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tWith me?  I hope so.  By the way_co_ mesh.rotation _eq_ new BABYLON.Vector3(1.57_co_ -Math.PI_co_ BABYLON.Tools.ToRadians(90))_sm_  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tRotation prefers having RADIANS.  Math.PI/2 _eq__eq_ 1.57 radians _eq__eq_ 90 degrees.  And -Math.PI _eq__eq_ -3.14 radians _eq__eq_ -180 degrees. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tLet_t_s pretend you keep adding more rotation to a mesh... until the mesh has rotated 360 degrees (6.28 radians).  You can keep-on adding rotation... no problems.  Rotations of 9.0_co_ 15.8_co_ 2049.0_co_ no problems_co_ but it is a waste of excess numbers when value &gt_sm_ 6.28 (Math.PI*2) or value &lt_sm_ -6.28 (-Math.PI*2).  Rotations in radians_co_ positions in units_co_ and scaling in multipliers.  (mesh.scaling _eq_ new BABYLON.Vector3(2_co_ 2_co_ 2) ... doubles its size.)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAutomated/animate rotator code (often seen inside a registerBeforeRender function)... almost ALWAYS go WAY WAY past 6.28 radians.  The mesh rotation continues just fine.  _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#7EJ4CM%239_qt_ rel_eq__qt_external nofollow_qt__gt_Here_t_s a demo_lt_/a_gt__co_ rotating your _lt_em_gt_box_lt_/em_gt__co_ with a render-loop function... in lines 63-69_sm_  Automated rotator_co_ without using a BABYLON.Animation class.  Easy. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI had some fun with random colors_co_ too_co_ but I had to say goodbye to createInstance (line 56 area).  CreateInstance() uses _lt_em_gt_box_lt_/em_gt_ material for materials on instances (so if you change instance.material.diffuseColor_co_ it changes ALL segment diffuseColors_co_ including _lt_em_gt_box_lt_/em_gt_). \n_lt_/p_gt_\n\n_lt_p_gt_\n\tTo make each segment be a different color_co_ I needed do it differently.  I used clones instead of instances_co_ but I needed to put separate materials on EACH clone.  [_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#7EJ4CM%2312_qt_ rel_eq__qt_external nofollow_qt__gt_demo_lt_/a_gt_]  Our renderloop code got bigger_co_ but still runs fast (important).  Colorful floor-plans are sort-of NEW to the world_co_ eh?  Old habits die slowly.  Thank goodness for innovators like Masterdon.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tWe_t_ll talk about dragging and snapping-into-position_co_ a bit later.  Take some time to play-with the starter kit... see if it _qt_feels ok_qt_.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  Hope this helps.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]