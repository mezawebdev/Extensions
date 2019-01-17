[{"Owner":"Dad72","Date":"2015-01-04T19:55:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_div_gt__lt_strong_gt_Question_dd__lt_/strong_gt__lt_/div_gt__lt_br_gt__lt_div_gt_I_t_m not sure to understand how the binary format work ?  What are their advantage_co_ their difference ... When is there .incremental.babylon ? Binary replaces incremental ?_lt_/div_gt__lt_br_gt__lt_div_gt_Thanks_lt_/div_gt__lt_br_gt__lt_div_gt_ _lt_/div_gt__lt_br_gt__lt_div_gt__lt_strong_gt_Maybe a bug_dd__lt_/strong_gt__lt_/div_gt__lt_br_gt__lt_div_gt_In the folder _t_binary_t_ that contains two files. The first .binary.babylon file is not compressed and the second file is empty (0 Ko)._lt_/div_gt__lt_br_gt__lt_div_gt_I do not know if this is normal or not?_lt_/div_gt__lt_br_gt__lt_div_gt_ _lt_/div_gt__lt_br_gt__lt_div_gt_File test (.max_co_ folder binary)_dd__lt_/div_gt__lt_br_gt__lt_div_gt_ (I use 3ds Max 2015 now.)_lt_/div_gt__lt_br_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-01-04T21:48:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_The binary format is the evolution of the .incremental format. All meshes data are not store using json but binary format hence a great size optimization and a faster loading time._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_There is no real problem using .binary instead of regular .babylon (just many files instead ofjust one .babylon)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_All big scene on www.babylonjs.com are using binary format_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-01-04T21:50:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Binary format is based on .binary.babylon file which contains plain JSON data (looks like any .babylon file except for mesh geometry data). _lt_/p_gt__lt_p_gt_All meshes data are stored into .babylombinarymeshdata files (one per mesh) loaded on demand by babylon.js_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2015-01-04T22:05:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_66416_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_11481_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt_ data-cite_eq__qt_Deltakosh_qt_ data-ipsquote-timestamp_eq__qt_1420408251_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_Binary format is based on .binary.babylon file which contains plain JSON data (looks like any .babylon file except for mesh geometry data). _lt_/p_gt__lt_p_gt_All meshes data are stored into .babylombinarymeshdata files (one per mesh) loaded on demand by babylon.js_lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_DK thank youfor precisions_co_ but it seems to me that there was a problem. .babulonbinarymeshdata the file is empty.  Is this normal?_lt_/p_gt__lt_div_gt_and .binary.babylon file is not compressed._lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_I joined you this zip_lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"davrous","Date":"2015-01-05T17:41:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ The incremental format only works well if you have several meshes in your scenes. Is it your case?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ Then_co_ here how it works_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ - there is the main .babylon file outlining the global scene with some kind of impostors inside it pointing to a geometry defined in another file_lt_/p_gt__lt_p_gt_ - this other file is named .babylonmeshdata _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ By default both files are pure JSON. When switching to binary_co_ only the .babylonmeshdata are converted from JSON to our binary format. It_t_s not compressed. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ On our websites_co_ we_t_ve put our sample scene using either a single .babylon JSON file or incremental JSON version using gzip on top of it. It_t_s described more or less in this article I_t_ve written_dd_ _lt_a href_eq__qt_http_dd_//blogs.msdn.com/b/davrous/archive/2014/05/22/why-and-how-we-migrated-babylonjs-com-to-microsoft-azure.aspx_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//blogs.msdn.com/b/davrous/archive/2014/05/22/why-and-how-we-migrated-babylonjs-com-to-microsoft-azure.aspx_lt_/a_gt_ . We_t_re also using a CDN in front of our website to serve the scene content.  _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ Some of the scenes are also using the binary version + gzip. We_t_re gaining something like 40% on the size of the .babylonmeshdata using this approach_co_ which is not that bad. Our Train sample is using incremental + binary + gzip on our www.babylonjs.com website. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Bye_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_David_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2015-01-05T17:57:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Je doit mal m’exprimer. Ma question est ce que le fichier _lt_span_gt_babylonbinarymeshdata générer _lt_/span_gt__lt_u_gt_qui est vide_lt_/u_gt__lt_span_gt_ est normal_co_ (il fait 0 Ko). Je signale ce qui me semble être un bug. Quand on exporte avec binary dans 3ds max_co_ il me génère un fichier non compresser et un fichier vide dans le dossier binary. ce fichier vide_co_ c’est normal ?_lt_/span_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_span_gt_Merci_lt_/span_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-01-05T23:10:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Oui c_t_est normal car la scene en question doit contenir un objet tout con ou rien n_t_est a mettre dans le .babylonbinarymeshdata. Le fichier babylon comme indique plus haut n_t_eset pas compresse_co_ c_t_est un .babylon normal mais ultra allege_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2015-01-05T23:49:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Ok._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]