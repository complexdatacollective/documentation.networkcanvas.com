---
layout: default
title: Assets
parent: Key Concepts
nav_exclude: true
---
## Assets

You can view and manage any protocol assets in Architect by pressing the red ‘manage assets’ button in the upper right hand corner of the protocol overview screen.

[screenshot of manage assets button]

Under the manage assets screen, you can browse, filter, and delete files for use in your protocol. Assets include image, audio, video, or external data files, such as a roster for use in the roster-based name generator. To add an asset to the asset library, simply drag and drop or browse for the file you wish to import. 

[screenshot of manage assets dashboard]

Assets can be used to concretize aspects of your survey for your participants, including instructional information for specific screens or providing a background to a certain activity. The asset library accommodates typical image, audio, and video file sizes with no explicit limits, but keep in mind that larger files may take slightly longer to appear in the asset library.

_Image_
Network Canvas supports JPEG and PNG image file formats. 

_Audio_
Network Canvas supports MP3 and WAV audio file formats. 

_Video_
Network Canvas supports MP4 and MOV video file formats. 

_Network_ (external data files)
External network data files, such as a roster, are supported as assets in either JSON or CSV format. If using a CSV, ensure that you have a heading row (which will become node attributes), and that you have an attribute in this row called "name." If using a JSON, ensure it contains a “nodes” and/or “edges” list in the root object. 

The tested upper limit for large external network data assets in Network Canvas is a 60k node dataset. However, it is important to keep in mind that the upper limit is greatly dependent on the device you are using and your usability threshold. The larger your network data asset, the more important it will be to use a powerful laptop and maintain some flexibility about an interface operating somewhat slower than usual. Smaller node datasets of 600 have been piloted successfully with no compromise to interface transitions whatsoever. 
