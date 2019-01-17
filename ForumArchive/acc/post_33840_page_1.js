[{"Owner":"djeustice","Date":"2017-11-06T19:16:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello.  I have this Seat.gltf model in my scene that I exported it from 3ds Max.  Anyways_co_ how do I change the diffuse texture on it?  The seat imports with a black texture (SeatBlack_baseColorTexture.png).  I_t_d like to change it to this (SeatLime_baseColorTexture.png).   My goal eventually is to let the user pick from a variety of seat colors.  Any pointers in the right direction would be appreciated.  Thanks.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t    var mySeat _eq_ BABYLON.SceneLoader.Append(_qt_./models/_qt__co_ _qt_Seat.gltf_qt__co_ scene_co_ function (scene) {_lt_br /_gt_\n\t    }_co_ null_co_ function (scene) {_lt_br /_gt_\n\t        _lt_br /_gt_\n\t        var LimeTexture _eq_ new BABYLON.PBRMaterial(_qt__qt__co_ scene)_sm__lt_br /_gt_\n\t        LimeTexture.baseColorTexture _eq_ new BABYLON.Texture(_qt_models/SeatLime_baseColorTexture.png_qt__co_ scene)_sm__lt_br /_gt_\n\t        mySeat.material _eq_ LimeTexture_sm__lt_br /_gt_\n\t    })_sm_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-11-06T19:20:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello you can have a look at the PBR documentation here_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//doc.babylonjs.com/how_to/physically_based_rendering_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/how_to/physically_based_rendering_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t3dsMax is exporting PBRMetallicRoughnessMaterial_dd_ _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/how_to/physically_based_rendering#pbrmetallicroughnessmaterial_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/how_to/physically_based_rendering#pbrmetallicroughnessmaterial_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"mr_pinc","Date":"2017-11-06T19:21:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tBased off of your small example it appears your texutre swap is happening in the incorrect place. It_t_s happening in the _t_Error_t_ callback of the load method.  It should be in the first callback that you currently have blank.  \n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"djeustice","Date":"2017-11-07T20:56:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThis seems to be working for changing just the diffuse texture.  I_t_ll take a look at exporting PBRMetallicRoughness from 3ds Max. Thank you kindly.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t    var myKayak2_sm__lt_br /_gt_\n\t    BABYLON.SceneLoader.ImportMesh(_qt__qt__co_ _qt_models/_qt__co_ _qt_Kayak.gltf_qt__co_ scene_co_ function (newMeshes)  {_lt_br /_gt_\n\t        myKayak2 _eq_ newMeshes[0]_sm__lt_br /_gt_\n\t        _lt_br /_gt_\n\t        var BWTexture _eq_ new BABYLON.StandardMaterial(_qt_BlueWave_qt__co_ scene)_sm__lt_br /_gt_\n\t        BWTexture.diffuseTexture _eq_ new BABYLON.Texture(_qt_models/BlueWave.png_qt__co_ scene)_sm__lt_br /_gt_\n\t        BWTexture.diffuseTexture.hasAlpha _eq_ false_sm__lt_br /_gt_\n\t        BWTexture.backFaceCulling _eq_ false_sm__lt_br /_gt_\n\t        myKayak2.material._subMaterials[2] _eq_ BWTexture_sm_    _lt_br /_gt_\n\t    })_sm_ \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"efxlab","Date":"2018-02-10T08:34:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\they _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/29139-djeustice/?do_eq_hovercard_qt_ data-mentionid_eq__qt_29139_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/29139-djeustice/_qt_ rel_eq__qt__qt__gt_@djeustice_lt_/a_gt__co_ what is _lt_span style_eq__qt_background-color_dd_rgb(255_co_255_co_255)_sm__qt__gt_._subMaterials[2] ? I have not success to change texture from gltf scene. From a new material I got not UVs texture placement correct and change in live from DynamicTexture I have black texture. _lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_background-color_dd_rgb(255_co_255_co_255)_sm__qt__gt_Here an exemple _dd_ _lt_img alt_eq__qt_texture_glFT_reload.jpg_qt_ class_eq__qt_ipsImage_qt_ height_eq__qt_375_qt_ src_eq__qt_http_dd_//host.electroheadfx.fr/efxbox/laurent/texture_glFT_reload.jpg_qt_ width_eq__qt_629_qt_ /_gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t\t\t\n\n_lt_span class_eq__t_ipsType_reset ipsType_medium ipsType_light_t_ data-excludequote_gt_\n\t_lt_strong_gt_Edited _lt_time datetime_eq__t_2018-02-10T10_dd_01_dd_48Z_t_ title_eq__t_02/10/2018 10_dd_01  AM_t_ data-short_eq__t_Feb 10_t__gt_February 10_lt_/time_gt_ by efxlab_lt_/strong_gt_\n\t\n\t\t_lt_br_gt_example\n\t\n\t\n_lt_/span_gt_\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-02-12T16:08:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSo _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/30053-efxlab/?do_eq_hovercard_qt_ data-mentionid_eq__qt_30053_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/30053-efxlab/_qt_ rel_eq__qt__qt__gt_@efxlab_lt_/a_gt_ found a solution_dd_ The texture has to be loaded flipped_dd_)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]