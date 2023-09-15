---
summary: >-
  This tutorial describes a workflow for using Network Canvas tools without relying on the Server App. [Server is deprecated](https://community.networkcanvas.com/t/changes-to-interviewer-that-make-server-obsolete/104/2) and is no longer recommended, therefore certain adjustments must be made in the application of Network Canvas tools.
prerequisites: >-
  To follow along, you should:

  - Be familiar with Network Canvas and its data collection process.

  - Have access to devices running the Interviewer app.
  
  - Have the ability to install software or configure your devices, or the support of someone who does (e.g., institutional IT department)
  
  - Create or obtain the protocol file that you want to deploy using Interviewer. (See "[building a protocol](building-a-protocol)").
completion_time: 30 minutes
nav_order: 3
title: Data Management without Server
wip: false
---

## Introduction

This guide will walk you through two alternative workflows for conducting research using the Network Canvas tools without using the Server app. These approaches cover both scenarios with and without network connectivity, as well as using tablets or pc devices.

As a reminder, when we launched the Network Canvas suite of tools we included a data warehousing/management tool called Server. Server was designed to streamline data collection processes through protocol, deployment, and centralized data management. However, its adoption has been limited due to unforeseen requirements associated with software deployment in institutional settings.

Despite potential complexities, we believe the alternative workflows discussed in this article offer a superior overall solution, while also alleviating several maintenance challenges for our small team.

The Network Canvas team is developing Network Canvas Studio, a cloud-based platform that will resolve many of the complexities associated with managing protocols and exporting data.
{:.tip-box}

## Option 1: Online Workflow

If you are working in a scenario where you have access to a network connection, you can use the following workflow to deploy protocols and export data.

### Protocol Deployment

The two most convenient ways to deploy protocols are to use a cloud file sharing service or a web hosting service. These options allow you to share the protocol file with others either by providing them with a link to the file, or by importing it via the cloud file service's app on your device.

#### Using a cloud file sharing service to deploy protocols

1. Obtain or create the protocol file that you want to deploy.
2. Place the `.netcanvas` fileon a cloud storage service (e.g., Box, DropBox, Google Drive).
3. Generate a shareable link for the protocol file in the cloud service. Use that link to download and import the ".netcanvas" file into the Network Canvas Interviewer App using by using the 'Import from URL' button on the start screen.
4. Alternatively, install the cloud service's app on your device and use it to import the ".netcanvas" file into the Network Canvas Interviewer App using the 'Import from File' button on the start screen.

#### Utilizing URL import to deploy protocols

1. Use a web hosting service that provides file hosting capabilities to host the protocol's ".netcanvas" file (e.g., GitHub Pages, SharePoint, and so on).
2. Once you have a hosting service, upload your `.netcanvas` file to the appropriate location.
3. Once the file is uploaded, you need to determine the URL for accessing the "netcanvas" file. The URL will typically follow the format: `https//<your website>.com/path/to/file.netcanvas`.
4. Ensure that the URL is publicly accessible by opening it in a web browser.
5. Once the file is hosted and the URL is accessible, you can share the web link with others. They can then use the link to access and import the protocol file into the Network Canvas Interviewer App using 'Import from URL' button on the main screen.

### Data Export

As with the protocol deployment flow described above, we reccomend using a cloud file sharing service to export data. This allows you to share the data files with others either by providing them with a link to the file, or by importing it via the cloud file service's app on your device.

1. Create a dedicated folder on your cloud storage service to store the Network Canvas Interviewer data. Choose a location that is easily accessible and organized. If you are operating within a large team, consider creating individual folders for each person conducting interviews, and consider setting permissions to "write only" (or similar) so that interviewers can only add files to their own folder.
2. Install the cloud service's app on your interview device, and ensure that you are logged in to the app and have access to the folder you created in step 1.
3. Once you have conducted some interviews, navigate to the 'Manage or Export Sessions' card on the main screen and select the files you wish to export. You will be prompted to choose a location to save the export.
    - If you are using a tablet device, you will be prompted to choose an app to handle the export. Choose the cloud service's app. The app will then open and you will be prompted to choose a location to save the export.
    - If you are using a PC or Mac, you will be prompted to choose a location on the device's filesystem to save the export. Navigate to the cloud service's folder that you created in step 1.

## Option 2: Offline workflow

If you are working in a scenario where you do not have access to a network connection, you can use the following workflow to deploy protocols and export data.

### Protocol deployment

In an offline setting, the only option for deploying protocols is to use a USB flash drive or other external storage device to transfer the protocol file from a computer to the device running the Network Canvas Interviewer App.

1. Choose a suitable location on your computer's local storage to store the protocol file.
2. Once the protocol is saved, determine its file path. It typically follows the format: `C:\Folder\Subfolder\file.netcanvas` for Windows or `/Users/Username/Folder/Subfolder/file.netcanvas` for Mac.
3. To share the protocol file with others, provide them with the file path to access and import it into the Network Canvas Interviewer App clicking the 'Import from File' card on the main screen.

### Data Export

As above, the only option for exporting data in an offline setting is to use a USB flash drive or other external storage device to transfer the data files from the device running the Network Canvas Interviewer App to a computer.

1. Create a dedicated folder on your external storage device to store the Network Canvas Interviewer data. Choose a location that is easily accessible and organized. If you are operating within a large team, consider creating individual folders for each person conducting interviews.
2. Once you have conducted some interviews, navigate to the 'Manage or Export Sessions' card on the main screen and select the files you wish to export. You will be prompted to choose a location to save the export.
    - If you are using a PC or Mac, you will be prompted to choose a location on the device's filesystem to save the export. Navigate to the external storage device's folder that you created in step 1.
    - If you are using a tablet device, you will be prompted to choose an app to handle the export. The export functionality on tablet devices works using the "share" feature built into both Android and iOS. This means that options for saving exported data are determined by which apps you have installed on your device. You therefore need to install a file management app such as "[Files by Google](https://play.google.com/store/apps/details?id=com.google.android.apps.nbu.files&hl=en_ZA&gl=US&pli=1)". Once installed, choose the file manager app from the share menu. The app will then open and you will be prompted to choose a location to save the export. Navigate to the external storage device's folder that you created in step 1.

## Data Organization and Backup Best Practices

Regardless of which workflow you choose, it is important to consider how you will organize and back up your data. The following are some best practices to consider:

1. Within the local or cloud folder, create subfolders to categorize and organize the Network Canvas Interviewer data based on project, date, or any other relevant criteria.
2. Regularly back up the data by copying or syncing the local folder to an external storage device or a different cloud storage service.
3. Consider implementing a version control system or maintaining backups at different time intervals to ensure data integrity and minimize the risk of data loss.
4. Use the access control features of your cloud storage service to ensure that only authorized individuals have access to the data, and that they only have the level of access required to perform their role.
5. Give clear instructions to your interviewers about how and when they should export data. Consider creating a checklist or other documentation to help them remember the steps. This should include information such as how many/which sessions should be exported together, and which export options should be selected. Remember that the result of the export process is a single zip file, so this information will not be visible to you once the export is complete until the data is extracted.

