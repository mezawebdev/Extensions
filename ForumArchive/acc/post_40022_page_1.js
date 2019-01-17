[{"Owner":"Azariel","Date":"2018-09-15T18:00:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI was wondering if there was a way to change or turn off the gravitational forces applied to a specific object. Right now my janky solution is to change the object_t_s mass_co_ but when setting it to 0 it appears that collision detection no longer works (at least when both objects involved in a collision have 0 mass). Are there any better solutions out there?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-09-17T15:58:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThis is tricky as the physics simulation is a whole system where all the actors live according to the same rules.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo changing gravity only for a specific object is kind of unsupported.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tcan you tell us what you try to achieve?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-09-21T12:02:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi guys.  Sorry to interrupt.  Testing playground_dd_  _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#15EUZJ%2312_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#15EUZJ#12_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOk_co_ for THAT PG_co_ line 70 is an _qt_anti-gravity engine_qt_ for red sphere1. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tLines 54-57 add mass to gray sphere2... after 8 seconds.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t*shrug*  Red sphere CAN still have impact and recoil (restitution)... but Y-axis gravity-pull_co_ is nulled/counter-acted.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_228229_qt_ data-ipsquote-contentid_eq__qt_40022_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1537034456_qt_ data-ipsquote-userid_eq__qt_32711_qt_ data-ipsquote-username_eq__qt_Azariel_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn 9/15/2018 at 1_dd_00 PM_co_ Azariel said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tat least when both objects involved in a collision have 0 mass\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tYep_co_ this is true.  _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#15EUZJ%2315_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#15EUZJ#15_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn #15 PG..._lt_br /_gt_\n\t- I have set a TINY amount of mass on red sphere (line 32).  I think it automatically rounds-up to .01 mass_co_ so the line 72 anti-gravity line is still needed.  _lt_br /_gt_\n\t- The gray sphere2 has no mass.  So_co_ I must _qt_pull_qt_ the gray sphere2 downward (to test collision with red sphere1).  Lines 73/74 do that.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCollision works_co_ restitution/recoil works_co_ but it HAS TO HAVE line 32 mass.  Remove line 32_co_ activate line 31_co_ and re-run... to test.\n_lt_/p_gt_\n\n_lt_p_gt_\n\thmm.  Yep_co_ when _lt_u_gt_both_lt_/u_gt_ physicsBody_t_s have 0 mass... no colliding done.  Darn. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tOk_co_ now we got a playground for the forum_t_s mad scientists to experiment-with. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI think the direction of study will be... trying to teach the physics engine to ignore gravity on a _qt_custom physicsBody_qt_. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tWe will probably need to overload the _lt_a href_eq__qt_http_dd_//schteppe.github.io/cannon.js/docs/classes/Body.html_qt_ rel_eq__qt_external nofollow_qt__gt_Cannon _qt_body_qt_ object_lt_/a_gt_ with a boolean like _qt_.ignoreGravity_qt__co_ and then teach Cannon how to watch-for bodies with .ignoreGravity _eq_ true_co_ and then do special no-gravity processing for those collisions.  Erf.  Rough.  hmm. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis would be a for-one-project hack_co_ and not a core-level thing (unless you/we can convince _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5907-schteppe/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5907_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5907-schteppe/_qt_ rel_eq__qt__qt__gt_@schteppe_lt_/a_gt_ into supporting such a thing... in core CannonJS future versions).   Anyway_co_ sorry for the interrupt.  Continuing with...\n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_228434_qt_ data-ipsquote-contentid_eq__qt_40022_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1537199892_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn 9/17/2018 at 10_dd_58 AM_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tcan you tell us what you try to achieve?\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]