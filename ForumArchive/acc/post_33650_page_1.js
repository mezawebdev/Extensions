[{"Owner":"Robin","Date":"2017-10-25T19:28:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tBackground_dd_ I am reading the Babylon.js ebook - Chapter9 Collision_co_ and find a line of code_dd_ var body _eq_ mesh.setPhysicsState(BABYLON.PhysicsEngine.BoxImpostor_co_ {mass_dd_0_co_ restituion_dd_0.5_co_ friction_dd_0.5})_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis function will return an instance of the rigid body_co_ i.e. Oimo.Body.  However_co_ I run the code_co_ and an error is raised_co_ says the function setPhysicsState is undefined.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tQuestion 1_dd_  Is that true the function is removed from API forever?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tQuestion 2_dd_ Once physics impostor is added to a mesh_co_ e.g. sphere.physicsImpostor _eq_ new BABYLON.PhysicsImpostor(...)_co_ how can I move this mesh? Do I have to apply an impulse to the mesh or I can simply update the mesh position_co_ such as sphere.positon.z +_eq_ 1?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThank you.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Raggar","Date":"2017-10-25T20:43:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t1)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYes. The API has changed to_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_sphere.physicsImpostor _eq_ new BABYLON.PhysicsImpostor(sphere_co_ BABYLON.PhysicsImpostor.SphereImpostor_co_ { mass_dd_ 1_co_ restitution_dd_ 0.3 }_co_ scene)_sm_\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t2)_lt_br /_gt_\n\tYou can do both. But physics-engines prefer forces or impulses. You Can change the positions_co_ but you _qt_might_qt_ get into various issues with clipping through objects and the sorts.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]