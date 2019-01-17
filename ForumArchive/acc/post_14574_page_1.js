[{"Owner":"dsman","Date":"2015-05-17T20:35:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_So I am integrating babylon with raytracer. And all I know is I need to provide rotation of each meshes  in (angle_co_ x_co_ y_co_ z) format. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Is this format a Quaternion in first place?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_And anyway when I tried to get rotation in quaternion format (by doing mesh.rotationQuaternion )_co_ I am getting error  as I have set mesh rotation by mesh.rotaion and not mesh.rotationQuaternion . So both the property seems exclusive to each other. How does this work ? Logically rotation is rotation by whichever method you set or get. No ?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2015-05-18T01:24:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi dsman!  Um_co_ can you use _lt_em_gt_yourmesh.rotation.toQuaternion()_lt_/em_gt_ ?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Mesh don_t_t have a .rotationQuaternion by default.  It is added when/if needed_co_ by system.  You can add one_co_ anytime..._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_mesh.rotationQuaternion _eq_ new BABYLON.Quaternion(0_co_ 0_co_ 0_co_ 1)_sm__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_But after that_co_ I _lt_u_gt_THINK_lt_/u_gt_ you must use things like..._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_        mesh.rotationQuaternion _eq_ BABYLON.Quaternion.RotationYawPitchRoll(0_co_ 0_co_ 0)_sm__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_and/or..._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_        mesh.rotate(BABYLON.Axis.X_co_ 0_co_ BABYLON.Space.LOCAL)_sm__lt_/p_gt__lt_p_gt_        mesh.rotate(BABYLON.Axis.Y_co_ 0_co_ BABYLON.Space.LOCAL)_sm__lt_br_gt_        mesh.rotate(BABYLON.Axis.Z_co_ 0_co_ BABYLON.Space.LOCAL)_sm__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Maybe this will help.  Be well. _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dsman","Date":"2015-05-18T07:16:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_If I do meshrotation _eq_ mesh.rotation.toQuaternion() _co_ how do I get angle _co_ x_co_ y_co_ z  from meshrotation object?   meshrotation has properties like meshrotation.x _co_ meshrotation.y_co_ meshrotation.z_co_ meshrotation.w  but which one is angle and which one is rest ? _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I am asking because I applied Math.PI/4    angle on x axis  (By mesh.rotation.x _eq_ Math.PI/4)  and after that if I do meshrotation_eq_ mesh.rotation.toQuaternion()_co_ meshrotation.x _eq_ 0.382683_lt_/p_gt__lt_p_gt_meshrotation.y _eq_ 0_lt_/p_gt__lt_p_gt_meshrotation.z_eq_0_lt_/p_gt__lt_p_gt_meshrotation.w  _eq_0.92387953_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Now no If I rotate at different angle _co_  .x _co_ .y_co_ .z  properties changes respectively  but .w remains the same. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_So I am wondering if this toQuternion() will give me the format that I want. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Format I want is Angle_co_ x _co_ y_co_ z . _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-05-18T09:00:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_DBawel explained here about quaternions/angles relationship _dd_ _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/14349-meshrebase/?p_eq_82414_qt__gt_http_dd_//www.html5gamedevs.com/topic/14349-meshrebase/?p_eq_82414_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_What_t_s your question _dd__lt_/p_gt__lt_p_gt_What do you know in initial state (mesh coordinates ? angles to rotate it then ?) ?_lt_/p_gt__lt_p_gt_What do you want to achieve ?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dsman","Date":"2015-05-18T09:13:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Well let me make it simpler.. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_1. I have a model converted/imported from 3D max. _lt_/p_gt__lt_p_gt_2. In babylon_co_ I am looping through all meshes and want rotation of each meshes in (angle_co_ x_co_ y_co_ z ) format. AS  I need to provide it to other ray tracing application. _lt_/p_gt__lt_p_gt_3. I am doing meshrotation _eq_ mesh.rotation.toQuaternion() .  I realized (meshrotation.w * 180 ) becomes my _t_angle_t_  _lt_/p_gt__lt_p_gt_4. Now _co_ I only need to know what does meshrotation.x  _co_ meshrotation.y _co_ meshrotation.z  is actually ? If the given mesh has rotation of 45 degree on all axis_co_ then  I get value of meshrotation.x _eq_ 6.1232 _co_ meshrotation.y _eq_ 6.1232 _co_ meshrotation.z _eq_ 6.1232  .. So what does  6.1232 tell us here ?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_All I want is mesh_t_s rotation in (angle_co_ x_co_y_co_ z) format (where x_co_y_co_z  is axis around which rotation is to be made_co_ according to raytracer specification)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Here I have figured out the angle part. Only this x_co_y_co_z is mystery . I read the link you gave. But I am still not able to get how to I get the rotation axis x_co_y_co_z  . _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-05-18T12:18:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_ok_lt_/p_gt__lt_p_gt_In BJS_co_ mesh.rotation.x_co_ y_co_ z are properties valuing the mesh rotation around its local x_co_ y_co_ z axis (y first_co_ then x_co_ finally z) not around a given other axis._lt_/p_gt__lt_p_gt_These values are expressed in radians_co_ not degrees. These are Euler angles._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The mesh orientation expression with only an axis and an angle around this axis is quite a quaternion expression._lt_/p_gt__lt_p_gt_It_t_s possible to convert from an expression to the other _dd_ _lt_a href_eq__qt_http_dd_//en.wikipedia.org/wiki/Conversion_between_quaternions_and_Euler_angles_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//en.wikipedia.org/wiki/Conversion_between_quaternions_and_Euler_angles_lt_/a_gt__lt_/p_gt__lt_p_gt_There are converting tools in BJS also._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I don_t_t know what properties are valued when you import a mesh from 3D max._lt_/p_gt__lt_p_gt_I didn_t_t understand what were the values you got and know after importation (mesh.rotation ?)._lt_/p_gt__lt_p_gt_Maybe someone working with 3D max could tell us what mesh rotation values are imported with._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dsman","Date":"2015-05-18T12:23:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Ok. So based on DBWel _t_s answer at _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/14349-meshrebase/?p_eq_82414_qt__gt_http_dd_//www.html5gamedevs.com/topic/14349-meshrebase/?p_eq_82414_lt_/a_gt_   and Radian to degree conversion ( _lt_a href_eq__qt_http_dd_//www.rapidtables.com/convert/number/radians-to-degrees.htm_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.rapidtables.com/convert/number/radians-to-degrees.htm_lt_/a_gt_ )  I have figured it out in this way _dd_  _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ currentmesh.getWorldMatrix().decompose(scale_co_ rot_co_ trans)_sm__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_preangle _eq_ Math.acos(rot.w) * 2 _sm__lt_/p_gt__lt_div_gt_ if (angle _eq__eq_ 0)_lt_/div_gt__lt_div_gt_                sin _eq_ 1_sm__lt_/div_gt__lt_div_gt_ else_lt_/div_gt__lt_div_gt_               sin _eq_ Math.sin(preangle / 2)_sm__lt_br_gt__lt_br_gt__lt_div_gt_rotx _eq_ rot.x / sin_sm_  // rotation axis x-coordinate_lt_/div_gt__lt_div_gt_roty _eq_ rot.y / sin_sm_   // rotation axis y-coordinate_lt_/div_gt__lt_div_gt_rotz _eq_ rot.z / sin_sm_   // rotation axis z-coordinate_lt_/div_gt__lt_/div_gt__lt_p_gt_angle _eq_ preangle * 180 / Math.PI _sm_   // final angle  in degree_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]